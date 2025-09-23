

(function() {
  'use strict';


  const hideStyle = document.createElement('style');
  hideStyle.textContent = `
    #ctslv_bbl,
    #ctslv_bbl iframe,
    .chatislav-widget,
    .chatislav-container,
    [id*="chatislav"],
    [class*="chatislav"] {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      pointer-events: none !important;
    }
  `;
  document.head.appendChild(hideStyle);


  const CONFIG = {
    gifs: {
      welcome: './gifs/mahanje.gif',
      idle: './gifs/cekanje.gif',
      thinking: './gifs/razmisljanje.gif',
      fallingAsleep: './gifs/zaspao.gif',
      sleeping: './gifs/spava.gif',
      wakingUp: './gifs/budjenje.gif'
    },
    gifZoom: 1.3,
    gifOffsetX: -310,
    gifOffsetY: -180,
    chatislavToken: 'ca3c5833-4924-4d2e-9bf4-fe62dc4210e5',
    wsUrl: 'wss://chatislav.ai/api/work',
    streamEndTimeout: 500,
    zIndex: 999999,
    debug: true
  };
  if (window.chatislavGifConfig) {
    Object.assign(CONFIG.gifs, window.chatislavGifConfig.gifs || {});
    Object.assign(CONFIG, window.chatislavGifConfig);
  }

  const state = {
    initialized: false,
    chatContainer: null,
    modalElement: null,
    inputElement: null,
    messagesContainer: null,
    gifContainer: null,
    gifImage: null,
    currentAnimation: null,
    streamTimer: null,
    isOpen: false,
    messages: [],
    wsConnection: null,
    conversationId: null,
    isTyping: false,
    isWaitingResponse: false,
    inactivityTimer: null,
    isSleeping: false,
    lastActivityTime: Date.now()
  };

  function log(...args) {
    if (CONFIG.debug) {
      console.log('[Chatislav GIF]', ...args);
    }
  }

  function generateConversationId() {
    return 'conv_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  function hideOriginalChatislav() {
    const selectorsToHide = [
      '#ctslv_bbl',
      '#ctslv_bbl iframe',
      '.chatislav-widget',
      '.chatislav-container'
    ];

    selectorsToHide.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        if (element && !element.hasAttribute('data-gif-hidden')) {
          element.style.display = 'none';
          element.style.visibility = 'hidden';
          element.setAttribute('data-gif-hidden', 'true');
        }
      });
    });

    if (!document.getElementById('chatislav-hide-style')) {
      const style = document.createElement('style');
      style.id = 'chatislav-hide-style';
      style.innerHTML = `
        #ctslv_bbl,
        #ctslv_bbl iframe,
        .chatislav-widget,
        .chatislav-container {
          display: none !important;
          visibility: hidden !important;
        }
      `;
      document.head.appendChild(style);
    }
  }

  function createCustomChatUI() {
    if (state.chatContainer) {
      return;
    }

    const container = document.createElement('div');
    container.id = 'it-stanari-chat-container';
    container.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: ${CONFIG.zIndex};
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    `;

    const chatButton = document.createElement('button');
    chatButton.id = 'it-chat-button';
    chatButton.style.cssText = `
      width: 60px;
      height: 60px;
      cursor: pointer;
      border-radius: 50%;
      background: #007bff;
      color: white;
      border: none;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      transition: transform 0.3s, box-shadow 0.3s;
      font-size: 20px;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
    chatButton.textContent = 'ITS';
    chatButton.onmouseover = () => {
      chatButton.style.transform = 'scale(1.1)';
      chatButton.style.boxShadow = '0 6px 16px rgba(0,0,0,0.3)';
    };
    chatButton.onmouseout = () => {
      chatButton.style.transform = 'scale(1)';
      chatButton.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
    };

    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'chat-modal-overlay';
    modalOverlay.style.cssText = `
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: ${CONFIG.zIndex - 1};
      opacity: 0;
      transition: opacity 0.3s ease;
    `;

    const modalDialog = document.createElement('div');
    modalDialog.id = 'chat-modal-dialog';
    const isMobile = window.innerWidth <= 768;
    modalDialog.style.cssText = `
      display: none;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.9);
      width: ${isMobile ? '95%' : '850px'};
      height: ${isMobile ? '95vh' : '600px'};
      max-height: ${isMobile ? '95vh' : '90vh'};
      background: white;
      border-radius: ${isMobile ? '10px' : '15px'};
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      z-index: ${CONFIG.zIndex};
      transition: transform 0.3s ease, opacity 0.3s ease;
      opacity: 0;
      display: flex;
      overflow: hidden;
    `;

    const leftSection = document.createElement('div');
    leftSection.style.cssText = `
      width: ${isMobile ? '0' : '350px'};
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: ${isMobile ? 'none' : 'flex'};
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 30px;
      position: relative;
      overflow: hidden;
    `;

    const bgPattern = document.createElement('div');
    bgPattern.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0.1;
      background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    `;

    const gifContainer = document.createElement('div');
    gifContainer.style.cssText = `
      width: 320px;
      height: 400px;
      background: transparent;
      border-radius: 20px;
      padding: 20px 0 0 0;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      overflow: hidden;
      position: relative;
      z-index: 1;
      box-sizing: border-box;
    `;
    const gifImage = document.createElement('img');
    gifImage.id = 'chat-gif-image';
    gifImage.style.cssText = `
      position: absolute;
      width: auto;
      height: 400px;
      transform: scale(${CONFIG.gifZoom || 1.3});
      transform-origin: center center;
      display: block;
      top: 50%;
      left: 50%;
      margin-top: ${CONFIG.gifOffsetY || -180}px;
      margin-left: ${CONFIG.gifOffsetX || -310}px;
    `;

    const gifTitle = document.createElement('div');
    gifTitle.style.cssText = `
      color: white;
      font-size: 18px;
      font-weight: bold;
      margin-top: 20px;
      text-align: center;
      z-index: 1;
    `;
    gifTitle.textContent = 'IT Stanari ChatBOT';

    const rightSection = document.createElement('div');
    rightSection.style.cssText = `
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    `;

    const header = document.createElement('div');
    header.style.cssText = `
      padding: 20px;
      background: white;
      border-bottom: 1px solid #e0e0e0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `;
    header.innerHTML = `
      <div style="display: flex; align-items: center;">
        <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; color: white; font-weight: bold; ${isMobile ? '' : 'display: none;'}">IT</div>
        <span style="font-weight: bold; font-size: 18px; color: #333;">Chat sa nama</span>
      </div>
      <button id="close-modal" style="background: none; border: none; color: #999; font-size: 28px; cursor: pointer; padding: 0; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center;">×</button>
    `;

    const messagesContainer = document.createElement('div');
    messagesContainer.id = 'chat-messages-container';
    messagesContainer.style.cssText = `
      flex: 1;
      overflow-y: auto;
      padding: 20px;
      background: #f8f9fa;
    `;

    const inputContainer = document.createElement('div');
    inputContainer.style.cssText = `
      padding: 20px;
      background: white;
      border-top: 1px solid #e0e0e0;
      display: flex;
      gap: 10px;
    `;

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Napišite poruku...';
    input.style.cssText = `
      flex: 1;
      padding: 12px 16px;
      border: 2px solid #e0e0e0;
      border-radius: 25px;
      outline: none;
      font-size: 14px;
      transition: border-color 0.3s;
    `;
    input.onfocus = () => {
      input.style.borderColor = '#667eea';

    };
    input.onblur = () => input.style.borderColor = '#e0e0e0';
    input.oninput = () => {
      state.isTyping = true;
    };

    const sendButton = document.createElement('button');
    sendButton.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="22" y1="2" x2="11" y2="13"></line>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
      </svg>
    `;
    sendButton.style.cssText = `
      padding: 10px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      width: 45px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s;
    `;
    sendButton.onmouseover = () => sendButton.style.transform = 'scale(1.1)';
    sendButton.onmouseout = () => sendButton.style.transform = 'scale(1)';

    gifContainer.appendChild(gifImage);
    leftSection.appendChild(bgPattern);
    leftSection.appendChild(gifContainer);
    leftSection.appendChild(gifTitle);

    inputContainer.appendChild(input);
    inputContainer.appendChild(sendButton);

    rightSection.appendChild(header);
    rightSection.appendChild(messagesContainer);
    rightSection.appendChild(inputContainer);

    modalDialog.appendChild(leftSection);
    modalDialog.appendChild(rightSection);

    container.appendChild(chatButton);
    container.appendChild(modalOverlay);
    container.appendChild(modalDialog);
    document.body.appendChild(container);

    state.chatContainer = container;
    state.modalElement = modalDialog;
    state.inputElement = input;
    state.messagesContainer = messagesContainer;
    state.gifContainer = gifContainer;
    state.gifImage = gifImage;

    chatButton.onclick = () => openModal();
    modalOverlay.onclick = () => closeModal();
    document.getElementById('close-modal').onclick = () => closeModal();
    sendButton.onclick = () => sendMessage();
    input.onkeypress = (e) => {
      if (e.key === 'Enter') sendMessage();
    };

  }


  function openModal() {
    const overlay = document.getElementById('chat-modal-overlay');
    const dialog = document.getElementById('chat-modal-dialog');

    overlay.style.display = 'block';
    dialog.style.display = 'flex';

    setTimeout(() => {
      overlay.style.opacity = '1';
      dialog.style.opacity = '1';
      dialog.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 10);

    state.isOpen = true;
    state.isSleeping = false; 

    showAnimation('welcome');

    state.welcomeTimer = setTimeout(() => {
      if (state.isOpen && state.currentAnimation === 'welcome') {
        showAnimation('idle');

        resetInactivityTimer();
      }
    }, 7000);

    setupActivityDetection();

    setTimeout(() => {
      if (state.inputElement) {
        state.inputElement.focus();
      }
    }, 1000);

    if (CONFIG.debug) {
      let checkCount = 0;
      const checkInterval = setInterval(() => {
        checkCount++;
        if (state.gifImage) {
          log(`Provjers ${checkCount}: GIF src = ${state.gifImage.src}, display = ${state.gifImage.style.display}, opacity = ${state.gifImage.style.opacity}, current = ${state.currentAnimation}`);
        }
        if (checkCount >= 10 || !state.isOpen) {
          clearInterval(checkInterval);
        }
      }, 1000);
    }

    if (state.messages.length === 0) {
      setTimeout(() => {
        addMessage('Pozdrav! Dobrodošli na IT Stanari. Kako vam mogu pomoći danas?', false);
      }, 1000);
    }
  }

  function closeModal() {
    const overlay = document.getElementById('chat-modal-overlay');
    const dialog = document.getElementById('chat-modal-dialog');

    overlay.style.opacity = '0';
    dialog.style.opacity = '0';
    dialog.style.transform = 'translate(-50%, -50%) scale(0.9)';

    setTimeout(() => {
      overlay.style.display = 'none';
      dialog.style.display = 'none';
    }, 300);

    state.isOpen = false;
    state.isWaitingResponse = false;
    state.isTyping = false;
    state.isSleeping = false;


    if (state.inactivityTimer) {
      clearTimeout(state.inactivityTimer);
      state.inactivityTimer = null;
    }
  }

  function showAnimation(type) {
    if (!state.gifImage) {
      return;
    }

    const newImg = new Image();
    newImg.onload = function() {
      state.gifImage.src = CONFIG.gifs[type];
      state.currentAnimation = type;

      state.gifImage.style.opacity = '1';
      state.gifImage.style.display = 'block';
      state.gifImage.style.visibility = 'visible';

      state.gifImage.className = `gif-${type}`;


    };

    newImg.onerror = function() {
      if (type === 'welcome') {
        state.gifImage.src = './gifs/mahanje.gif';
      }
    };

    newImg.src = CONFIG.gifs[type];
  }

  function resetInactivityTimer() {
    if (state.inactivityTimer) {
      clearTimeout(state.inactivityTimer);
    }

    state.lastActivityTime = Date.now();

    if (state.isSleeping && !state.isWaitingResponse) {
      wakeUp();
    }

    if (state.isOpen && !state.isWaitingResponse) {
      state.inactivityTimer = setTimeout(() => {
        if (!state.isWaitingResponse && state.currentAnimation === 'idle') {
          fallAsleep();
        }
      }, 10000);
    }
  }

  function fallAsleep() {
    if (state.isSleeping || state.isWaitingResponse || !state.isOpen) return;

    state.isSleeping = true;

    showAnimation('fallingAsleep');

    const fallingAsleepDuration = 3000;
    setTimeout(() => {
      if (state.isSleeping && state.isOpen) {
        showAnimation('sleeping');
      }
    }, fallingAsleepDuration);
  }

  function wakeUp() {
    if (!state.isSleeping) return;

    state.isSleeping = false;

    showAnimation('wakingUp');

    const wakingUpDuration = 3000; 
    setTimeout(() => {
      if (!state.isWaitingResponse && state.isOpen) {
        showAnimation('idle');
        resetInactivityTimer(); 
      }
    }, wakingUpDuration);
  }


  function setupActivityDetection() {
    const activityEvents = ['mousemove', 'mousedown', 'keypress', 'scroll', 'touchstart'];

    activityEvents.forEach(eventType => {
      if (state.modalElement) {
        state.modalElement.addEventListener(eventType, () => {
          if (state.isOpen) {
            resetInactivityTimer();
          }
        });
      }
    });
  }

  function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
      margin: 15px 0;
      display: flex;
      justify-content: ${isUser ? 'flex-end' : 'flex-start'};
      animation: fadeIn 0.3s ease;
    `;

    const bubble = document.createElement('div');
    bubble.style.cssText = `
      max-width: 70%;
      padding: 12px 16px;
      border-radius: 18px;
      background: ${isUser ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white'};
      color: ${isUser ? 'white' : '#333'};
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      font-size: 14px;
      line-height: 1.4;
    `;
    bubble.textContent = text;

    messageDiv.appendChild(bubble);
    state.messagesContainer.appendChild(messageDiv);
    state.messagesContainer.scrollTop = state.messagesContainer.scrollHeight;

    state.messages.push({ text, isUser });
  }


  function connectWebSocket() {
    if (state.wsConnection && state.wsConnection.readyState === WebSocket.OPEN) {
      return;
    }

    const wsUrl = `${CONFIG.wsUrl}?token=${CONFIG.chatislavToken}`;

    try {
      state.wsConnection = new WebSocket(wsUrl);

      state.wsConnection.onopen = () => {
        state.conversationId = generateConversationId();
      };

      state.wsConnection.onmessage = (event) => {
        handleWebSocketMessage(event.data);
      };

      state.wsConnection.onerror = (error) => {
        log('WebSocket greška:', error);
      };

      state.wsConnection.onclose = () => {
        log('WebSocket konekcija zatvorena');
        state.wsConnection = null;
      };
    } catch (error) {
      log('Greška pri kreiranju WebSocket konekcije:', error);
    }
  }


  function handleWebSocketMessage(data) {
    try {
      const message = JSON.parse(data);
      log('WebSocket poruka primljena:', message);

      if (message.response_type === 'token' && message.token) {
        updateLastAIMessage(message.token);

        if (state.streamTimer) {
          clearTimeout(state.streamTimer);
        }
        state.streamTimer = setTimeout(() => {
          state.isWaitingResponse = false;
          showAnimation('idle');
          resetInactivityTimer();
        }, CONFIG.streamEndTimeout);
      }
      else if (message.response_type === 'text' && message.text) {
        const lastMessage = state.messages[state.messages.length - 1];
        if (!lastMessage || lastMessage.isUser || lastMessage.text !== message.text) {
          addMessage(message.text, false);
        }

        setTimeout(() => {
          state.isWaitingResponse = false;
          showAnimation('idle');
          resetInactivityTimer();
        }, 500);
      }
      else if (message.response_type === 'error') {
        state.isWaitingResponse = false;
        showAnimation('idle');
        resetInactivityTimer();

        if (message.error) {
          console.error('Chatislav error:', message.error);
          if (message.error.includes('token')) {
            addMessage('Molimo pokušajte ponovo za nekoliko trenutaka.', false);
          } else {
            addMessage('Greška: ' + message.error, false);
          }
        }
      }
      else if (message.response_type === 'end') {
        const messageContainers = state.messagesContainer.children;
        for (let i = messageContainers.length - 1; i >= 0; i--) {
          const container = messageContainers[i];
          if (container.style.justifyContent === 'flex-start') {
            const bubble = container.querySelector('div[data-streaming]');
            if (bubble) {
              bubble.removeAttribute('data-streaming');
            }
            break;
          }
        }
        state.isWaitingResponse = false;
        showAnimation('idle');
        resetInactivityTimer();
      }
    } catch (error) {
      log('Greška pri parsiranju WebSocket poruke:', error);
    }
  }

  function updateLastAIMessage(text) {
    const messageContainers = state.messagesContainer.children;
    let lastAIBubble = null;
    let isFirstToken = true;

    const streamingBubbles = state.messagesContainer.querySelectorAll('[data-streaming="true"]');
    if (streamingBubbles.length > 0) {
      lastAIBubble = streamingBubbles[streamingBubbles.length - 1];
      isFirstToken = lastAIBubble.textContent === '' || lastAIBubble.textContent === '...';
    }

    if (lastAIBubble) {
      if (isFirstToken) {
        lastAIBubble.textContent = text;
      } else {
        lastAIBubble.textContent += text;
      }
      state.messagesContainer.scrollTop = state.messagesContainer.scrollHeight;
    } else {

      const messageContainer = document.createElement('div');
      messageContainer.style.cssText = `
        display: flex;
        justify-content: flex-start;
        margin-bottom: 12px;
      `;

      const messageBubble = document.createElement('div');
      messageBubble.setAttribute('data-streaming', 'true');
      messageBubble.style.cssText = `
        max-width: 70%;
        padding: 12px 16px;
        border-radius: 18px;
        background: #667eea;
        color: white;
        word-wrap: break-word;
      `;
      messageBubble.textContent = text;

      messageContainer.appendChild(messageBubble);
      state.messagesContainer.appendChild(messageContainer);
      state.messagesContainer.scrollTop = state.messagesContainer.scrollHeight;
    }
  }


  function sendMessage() {
    const text = state.inputElement.value.trim();
    if (!text) return;

    resetInactivityTimer();

    addMessage(text, true);
    state.inputElement.value = '';
    state.isTyping = false;

    state.isWaitingResponse = true;
    showAnimation('thinking');

 
    if (!state.wsConnection || state.wsConnection.readyState !== WebSocket.OPEN) {
      connectWebSocket();

      setTimeout(() => {
        sendToWebSocket(text);
      }, 1000);
    } else {
      sendToWebSocket(text);
    }
  }


  function sendToWebSocket(text) {
    const allStreamingBubbles = state.messagesContainer.querySelectorAll('[data-streaming]');
    allStreamingBubbles.forEach(bubble => {
      bubble.removeAttribute('data-streaming');
    });

    if (state.wsConnection && state.wsConnection.readyState === WebSocket.OPEN) {
      const message = {
        request_type: 'interaction',
        token: CONFIG.chatislavToken,
        conversation_id: state.conversationId,
        messages: [
          {
            role: 'prompter',
            content: text
          }
        ]
      };

      state.wsConnection.send(JSON.stringify(message));
      log('Poruka poslata preko WebSocket-a:', message);
    } else {
      setTimeout(() => {
        const response = 'Izvinjavamo se, trenutno imamo tehničke poteškoće. Molimo pokušajte ponovo.';
        addMessage(response, false);
        state.isWaitingResponse = false;
        showAnimation('idle');
      }, 2000);
    }
  }

  function addAnimationStyles() {
    if (!document.getElementById('chat-animation-styles')) {
      const style = document.createElement('style');
      style.id = 'chat-animation-styles';
      style.innerHTML = `
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        #chat-gif-image {
          transition: opacity 0.3s ease;
        }

        #chat-messages-container::-webkit-scrollbar {
          width: 8px;
        }
        #chat-messages-container::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        #chat-messages-container::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 4px;
        }
        #chat-messages-container::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `;
      document.head.appendChild(style);
    }
  }


  function init() {
    if (state.initialized) return;

      const aggressiveObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { 
            if (node.id && (node.id.includes('ctslv') || node.id.includes('chatislav'))) {
              node.style.display = 'none';
              node.style.visibility = 'hidden';
              node.style.opacity = '0';
            }
            if (node.querySelectorAll) {
              const chatislavElements = node.querySelectorAll('[id*="ctslv"], [id*="chatislav"], [class*="chatislav"]');
              chatislavElements.forEach(el => {
                el.style.display = 'none';
                el.style.visibility = 'hidden';
                el.style.opacity = '0';
              });
            }
          }
        });
      });
    });


    aggressiveObserver.observe(document.documentElement, {
      childList: true,
      subtree: true
    });


    addAnimationStyles();

    hideOriginalChatislav();

    createCustomChatUI();

    connectWebSocket();

    setInterval(() => {
      const originalChatislav = document.querySelector('#ctslv_bbl');
      if (originalChatislav && originalChatislav.style.display !== 'none') {
        hideOriginalChatislav();
      }
    }, 1000);

    state.initialized = true;
  }


  function cleanup() {


    if (state.wsConnection) {
      state.wsConnection.close();
      state.wsConnection = null;
    }

    if (state.chatContainer) {
      state.chatContainer.remove();
      state.chatContainer = null;
    }

    const hideStyle = document.getElementById('chatislav-hide-style');
    if (hideStyle) hideStyle.remove();

    const animationStyle = document.getElementById('chat-animation-styles');
    if (animationStyle) animationStyle.remove();

    state.initialized = false;
  }

  window.chatislavGifIntegration = {
    init,
    cleanup,
    openModal,
    closeModal,
    showAnimation,
    sendMessage,
    getState: () => ({ ...state })
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }


})();