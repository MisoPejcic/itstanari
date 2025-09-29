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
    animations: {
      welcome: './HTMLAnimacije/Pozdrav/pozdrav.html',
      idle: './HTMLAnimacije/IDLE/IDLE.html',
      thinking: './HTMLAnimacije/Razmisljanje/razmisljanjeHTML.html',
      fallingAsleep: './HTMLAnimacije/Zaspao/zaspao_HTML5 Canvas.html',
      sleeping: './HTMLAnimacije/Spava/spava.html',
      wakingUp: './HTMLAnimacije/Budjenje/Budjenje.html'
    },
    animationScale: 0.60,
    animationOffsetY: '-10%',
    inactivityTimeout: 15000,
    fallingAsleepDuration: 3000,
    wakingUpDuration: 3000,
    fadeTransition: true,
    chatislavToken: 'ca3c5833-4924-4d2e-9bf4-fe62dc4210e5',
    wsUrl: 'wss://chatislav.ai/api/work',
    zIndex: 999999
  };

  if (window.chatislavCanvasConfig) {
    Object.assign(CONFIG, window.chatislavCanvasConfig);
  }

  const state = {
    currentAnimation: null,
    isOpen: false,
    messages: [],
    wsConnection: null,
    conversationId: null,
    isWaitingResponse: false,
    isSleeping: false,
    inactivityTimer: null,
    avatarContainer: null,
    headerContainer: null,
    mainAnimationContainer: null,
    preloadedAnimations: {},
    animationQueue: [],
    loadedIframes: {},
    responseTimeout: null
  };


  function generateConversationId() {
    return 'conv_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  function createCustomChatUI() {
    const container = document.createElement('div');
    container.id = 'it-stanari-chat-container';
    container.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: ${CONFIG.zIndex};
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    `;

    const chatButton = document.createElement('div');
    chatButton.id = 'it-chat-button';
    chatButton.style.cssText = `
      width: 60px;
      height: 60px;
      cursor: pointer;
      border-radius: 50%;
      background: #007bff;
      border: 3px solid #fff;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      transition: transform 0.3s, box-shadow 0.3s;
      position: relative;
      overflow: hidden;
    `;

    const avatarContainer = document.createElement('div');
    avatarContainer.id = 'avatar-animation-container';
    avatarContainer.style.cssText = `
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 50%;
      overflow: hidden;
      background: #007bff;
      display: flex;
      align-items: center;
      justify-content: center;
    `;

    const fallbackText = document.createElement('div');
    fallbackText.style.cssText = `
      color: white;
      font-size: 24px;
      font-weight: bold;
      z-index: 1;
    `;
    fallbackText.innerHTML = '';
    avatarContainer.appendChild(fallbackText);

    chatButton.appendChild(avatarContainer);
    state.avatarContainer = avatarContainer;

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

    const animationContainer = document.createElement('div');
    animationContainer.id = 'animation-container';
    animationContainer.style.cssText = `
      width: 300px;
      height: 300px;
      background: white;
      border-radius: 20px;
      overflow: hidden;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
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

    leftSection.appendChild(animationContainer);
    leftSection.appendChild(gifTitle);

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

    const headerLeft = document.createElement('div');
    headerLeft.style.cssText = 'display: flex; align-items: center;';

    const headerAnimContainer = document.createElement('div');
    headerAnimContainer.id = 'header-animation-container';
    headerAnimContainer.style.cssText = `
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 12px;
      color: white;
      font-weight: bold;
      position: relative;
      overflow: hidden;
    `;
    headerAnimContainer.innerHTML = '';
    state.headerContainer = headerAnimContainer;

    const headerTitle = document.createElement('span');
    headerTitle.style.cssText = 'font-weight: bold; font-size: 18px; color: #333;';
    headerTitle.textContent = 'Chat sa nama';

    const closeButton = document.createElement('button');
    closeButton.id = 'close-modal';
    closeButton.style.cssText = 'background: none; border: none; color: #999; font-size: 28px; cursor: pointer; padding: 0; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center;';
    closeButton.innerHTML = '×';

    headerLeft.appendChild(headerAnimContainer);
    headerLeft.appendChild(headerTitle);
    header.appendChild(headerLeft);
    header.appendChild(closeButton);

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

    state.container = container;
    state.modalElement = modalDialog;
    state.inputElement = input;
    state.messagesContainer = messagesContainer;
    state.animationContainer = animationContainer;

    chatButton.onclick = () => openModal();
    modalOverlay.onclick = () => closeModal();
    document.getElementById('close-modal').onclick = () => closeModal();
    sendButton.onclick = () => sendMessage();
    input.onkeypress = (e) => {
      if (e.key === 'Enter') sendMessage();
    };

    input.onfocus = () => {
      input.style.borderColor = '#667eea';
      resetInactivityTimer();
    };
    input.onblur = () => {
      input.style.borderColor = '#e0e0e0';
    };

    modalDialog.addEventListener('click', () => {
      resetInactivityTimer();
    });

    modalDialog.addEventListener('mousemove', () => {
      resetInactivityTimer();
    });
  }


  function showAnimation(type, locations = ['main']) {
    if (!CONFIG.animations[type]) {
      return;
    }

    if (type !== 'sleeping' && type !== 'fallingAsleep' && type !== 'wakingUp') {
      resetInactivityTimer();
    }

    locations.forEach(location => {
      showAnimationInLocation(type, location);
    });

    state.currentAnimation = type;
  }

  function showAnimationInLocation(type, location) {
    let container;
    let scale;

    switch(location) {
      case 'main':
        container = state.animationContainer;
        scale = CONFIG.animationScale;
        break;
      case 'avatar':
        container = state.avatarContainer;
        scale = 0.08;
        break;
      case 'header':
        container = state.headerContainer;
        scale = 0.05;
        break;
      default:
        return;
    }

    if (!container) {
      return;
    }

    const existingIframe = container.querySelector('iframe');
    if (existingIframe && existingIframe.src.includes(CONFIG.animations[type])) {
      return;
    }

    const oldWrapper = container.querySelector('[data-animation-wrapper]');

    const newWrapper = createAnimationWrapper(type, scale, location);
    newWrapper.setAttribute('data-animation-wrapper', 'true');
    newWrapper.style.opacity = '0';
    newWrapper.style.transition = 'opacity 0.2s ease-in-out';

    container.appendChild(newWrapper);

    const iframe = newWrapper.querySelector('iframe');
    iframe.onload = function() {
      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        iframeDoc.body.style.overflow = 'hidden';
        iframeDoc.body.style.margin = '0';
        iframeDoc.body.style.padding = '0';
        iframeDoc.body.style.background = 'transparent';

        const animContainer = iframeDoc.getElementById('animation_container');
        if (animContainer) {
          animContainer.style.margin = '0';
          animContainer.style.position = 'absolute';
          animContainer.style.top = '50%';
          animContainer.style.left = '50%';
          animContainer.style.transform = 'translate(-50%, -50%)';
        }
      } catch (e) {
        // Cross-origin, ignore
      }

      requestAnimationFrame(() => {
        if (oldWrapper) {
          oldWrapper.style.opacity = '0';
        }
        newWrapper.style.opacity = '1';

        setTimeout(() => {
          if (oldWrapper && oldWrapper.parentNode) {
            oldWrapper.remove();
          }
        }, 200);
      });
    };
  }

  function createAnimationWrapper(type, scale, location) {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    `;

    const iframe = document.createElement('iframe');
    iframe.src = CONFIG.animations[type] + '?t=' + Date.now();
    iframe.style.cssText = `
      width: 1280px;
      height: 720px;
      border: none;
      position: absolute;
      transform: scale(${scale}) translateY(${location === 'main' ? CONFIG.animationOffsetY : '0'});
      transform-origin: center center;
      pointer-events: none;
      background: transparent;
    `;

    wrapper.appendChild(iframe);
    return wrapper;
  }


  function resetInactivityTimer() {
    if (state.inactivityTimer) {
      clearTimeout(state.inactivityTimer);
    }

    if (state.isSleeping) {
      wakeUp();
      return;
    }

    state.inactivityTimer = setTimeout(() => {
      if (state.isOpen && !state.isWaitingResponse && !state.isSleeping) {
        startFallingAsleep();
      }
    }, CONFIG.inactivityTimeout);
  }

  function startFallingAsleep() {
    if (state.isSleeping || !state.isOpen) return;

    state.isSleeping = true;
    state.currentAnimation = 'fallingAsleep';
    showAnimation('fallingAsleep', ['main', 'avatar', 'header']);

    setTimeout(() => {
      if (state.isOpen && state.isSleeping && state.currentAnimation === 'fallingAsleep') {
        state.currentAnimation = 'sleeping';
        showAnimation('sleeping', ['main', 'avatar', 'header']);
      }
    }, CONFIG.fallingAsleepDuration);
  }

  function wakeUp() {
    if (!state.isSleeping || !state.isOpen) return;

    state.isSleeping = false;
    state.currentAnimation = 'wakingUp';
    showAnimation('wakingUp', ['main', 'avatar', 'header']);

    setTimeout(() => {
      if (state.isOpen && !state.isSleeping && state.currentAnimation === 'wakingUp') {
        state.currentAnimation = 'idle';
        showAnimation('idle', ['main', 'avatar', 'header']);
      }
    }, CONFIG.wakingUpDuration);
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

    showAnimation('welcome', ['main', 'avatar', 'header']);

    setTimeout(() => {
      if (state.isOpen && state.currentAnimation === 'welcome') {
        showAnimation('idle', ['main', 'avatar', 'header']);
      }
    }, 7000);

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
  }

  function formatMessage(text) {
    return text
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
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
      line-height: 1.6;
      white-space: pre-wrap;
      word-wrap: break-word;
    `;
    bubble.innerHTML = formatMessage(text);

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
      };

      state.wsConnection.onclose = () => {
        state.wsConnection = null;
      };
    } catch (error) {
    }
  }

  function finishResponse() {
    const streamingBubbles = state.messagesContainer.querySelectorAll('[data-streaming="true"]');
    streamingBubbles.forEach(bubble => {
      bubble.removeAttribute('data-streaming');
    });
    state.isWaitingResponse = false;
    if (state.currentAnimation === 'thinking') {
      showAnimation('idle', ['main', 'avatar', 'header']);
    }
    if (state.responseTimeout) {
      clearTimeout(state.responseTimeout);
      state.responseTimeout = null;
    }
  }

  function handleWebSocketMessage(data) {
    try {
      const message = JSON.parse(data);

      if (message.response_type === 'token' && message.token) {
        updateLastAIMessage(message.token);

        if (state.responseTimeout) {
          clearTimeout(state.responseTimeout);
        }
        state.responseTimeout = setTimeout(() => {
          finishResponse();
        }, 2000);
      }
      else if (message.response_type === 'text' && message.text) {
        addMessage(message.text, false);
        finishResponse();
      }
      else if (message.response_type === 'end') {
        finishResponse();
      }
      else if (message.response_type === 'error') {
        finishResponse();
      }
    } catch (error) {
    }
  }

  function updateLastAIMessage(text) {
    const streamingBubbles = state.messagesContainer.querySelectorAll('[data-streaming="true"]');
    let lastAIBubble = streamingBubbles.length > 0 ? streamingBubbles[streamingBubbles.length - 1] : null;

    if (lastAIBubble) {
      const currentText = lastAIBubble.getAttribute('data-raw-text') || '';
      const newText = currentText + text;
      lastAIBubble.setAttribute('data-raw-text', newText);
      lastAIBubble.innerHTML = formatMessage(newText);
    } else {
      const messageContainer = document.createElement('div');
      messageContainer.style.cssText = `
        display: flex;
        justify-content: flex-start;
        margin-bottom: 15px;
        animation: fadeIn 0.3s ease;
      `;

      const messageBubble = document.createElement('div');
      messageBubble.setAttribute('data-streaming', 'true');
      messageBubble.setAttribute('data-raw-text', text);
      messageBubble.style.cssText = `
        max-width: 70%;
        padding: 12px 16px;
        border-radius: 18px;
        background: white;
        color: #333;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        font-size: 14px;
        line-height: 1.6;
        white-space: pre-wrap;
        word-wrap: break-word;
      `;
      messageBubble.innerHTML = formatMessage(text);

      messageContainer.appendChild(messageBubble);
      state.messagesContainer.appendChild(messageContainer);
    }

    state.messagesContainer.scrollTop = state.messagesContainer.scrollHeight;
  }

  function sendMessage() {
    const text = state.inputElement.value.trim();
    if (!text) return;

    resetInactivityTimer();

    const oldStreamingBubbles = state.messagesContainer.querySelectorAll('[data-streaming="true"]');
    oldStreamingBubbles.forEach(bubble => {
      bubble.removeAttribute('data-streaming');
    });

    addMessage(text, true);
    state.inputElement.value = '';

    state.isWaitingResponse = true;
    showAnimation('thinking', ['main', 'avatar', 'header']);

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
    } else {
      setTimeout(() => {
        addMessage('Izvinjavamo se, trenutno imamo tehničke poteškoće.', false);
        state.isWaitingResponse = false;
        showAnimation('idle', ['main', 'avatar', 'header']);
      }, 2000);
    }
  }

  function addAnimationStyles() {
    const style = document.createElement('style');
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

  function init() {
    addAnimationStyles();
    createCustomChatUI();
    connectWebSocket();

    setTimeout(() => {
      showAnimation('idle', ['avatar']);
    }, 500);
  }

  window.chatislavSimple = {
    init,
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