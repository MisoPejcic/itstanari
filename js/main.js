document.addEventListener('DOMContentLoaded', function() {
    
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const body = document.body;
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('is-active');
            body.classList.toggle('nav-open');
        });
        
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('is-active');
                body.classList.remove('nav-open');
            });
        });
    }
    
    function setActiveNavLink() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('nav a');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkPath = link.getAttribute('href');
            
            if (currentPath.endsWith(linkPath) || 
                (currentPath === '/' && linkPath === 'index.html') ||
                (currentPath.endsWith('/') && linkPath === 'index.html')) {
                link.classList.add('active');
            }
        });
    }
    
    setActiveNavLink();
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(element => {
        observer.observe(element);
    });
    
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const requiredFields = contactForm.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                field.style.borderColor = '#ddd';
                
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#ff4444';
                }
            });
            
            if (!isValid) {
                const firstInvalidField = contactForm.querySelector('[style*="border-color: rgb(255, 68, 68)"]');
                if (firstInvalidField) {
                    firstInvalidField.focus();
                }
                return;
            }
            
            alert('Hvala vam što ste nas kontaktirali! Odgovorićemo vam u najkraćem mogućem roku.');
            contactForm.reset();
        });
        
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('input', function() {
                if (this.hasAttribute('required') && this.value.trim()) {
                    this.style.borderColor = '#ddd';
                }
            });
        });
    }
});