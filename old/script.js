// ===========================================
// VAOO - Site Vitrine JavaScript
// Animations & Interactions complètes
// ===========================================

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
    
    // ========== GSAP CONFIGURATION ==========
    gsap.registerPlugin(ScrollTrigger);
    
    // ========== SCROLL PROGRESS BAR ==========
    const scrollProgress = document.querySelector('.scroll-progress');
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    });
    
    // ========== NAVIGATION ==========
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    burger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        burger.classList.toggle('active');
    });
    
    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            burger.classList.remove('active');
        });
    });
    
    // Smooth scroll for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ========== STICKY CTA ==========
    const stickyCTA = document.querySelector('.sticky-cta');
    
    ScrollTrigger.create({
        trigger: '.hero',
        start: 'bottom top',
        end: 'bottom top',
        onEnter: () => stickyCTA.classList.add('visible'),
        onLeaveBack: () => stickyCTA.classList.remove('visible')
    });
    
    // ========== COUNTER ANIMATION ==========
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target;
            }
        };
        
        // Trigger animation when hero is in view
        ScrollTrigger.create({
            trigger: '.hero-stats',
            start: 'top 80%',
            once: true,
            onEnter: updateCounter
        });
    });
    
    // ========== CARD TILT EFFECT ==========
    const tiltCards = document.querySelectorAll('.card-tilt');
    
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
    
    // ========== PARALLAX EFFECT ==========
    const parallaxImages = document.querySelectorAll('.parallax-img');
    
    parallaxImages.forEach(img => {
        gsap.to(img, {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
                trigger: img,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            }
        });
    });
    
    // ========== SCROLL REVEAL ANIMATIONS ==========
    
    // Section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        gsap.from(header, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });
    
    // Concept cards
    const conceptCards = document.querySelectorAll('.concept-card');
    conceptCards.forEach((card, index) => {
        gsap.from(card, {
            y: 80,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });
    
    // Avantages items
    const avantageItems = document.querySelectorAll('.avantage-item');
    avantageItems.forEach((item, index) => {
        gsap.from(item, {
            x: -50,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.15,
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });
    
    // Timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        gsap.from(item, {
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.2,
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });
    
    // Use case cards
    const usecaseCards = document.querySelectorAll('.usecase-card');
    usecaseCards.forEach((card, index) => {
        gsap.from(card, {
            y: 80,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });
    
    // ========== CALCULATOR ==========
    const roomPriceInput = document.getElementById('room-price');
    const subscriptionCost = document.getElementById('subscription-cost');
    const revenueExample = document.getElementById('revenue-example');
    const netProfit = document.getElementById('net-profit');
    
    function calculateValues() {
        const roomPrice = parseInt(roomPriceInput.value) || 150;
        const subscription = roomPrice;
        const discountedPrice = roomPrice * 0.7; // -30%
        const revenue = discountedPrice * 10; // 10 chambres
        const profit = revenue - subscription;
        
        // Animate the numbers
        animateValue(subscriptionCost, parseInt(subscriptionCost.textContent), subscription, 500);
        animateValue(revenueExample, parseInt(revenueExample.textContent), Math.round(revenue), 500);
        animateValue(netProfit, parseInt(netProfit.textContent), Math.round(profit), 500);
    }
    
    function animateValue(element, start, end, duration) {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                element.textContent = end;
                clearInterval(timer);
            } else {
                element.textContent = Math.round(current);
            }
        }, 16);
    }
    
    roomPriceInput.addEventListener('input', calculateValues);
    
    // ========== FAQ ACCORDION ==========
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faq => faq.classList.remove('active'));
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // ========== FORM HANDLING ==========
    const forms = document.querySelectorAll('.inscription-form');
    
    forms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = form.querySelector('.btn-submit');
            const btnText = submitBtn.querySelector('.btn-text');
            
            // Add loading state
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Remove loading state
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            
            // Show success toast
            showToast('Inscription enregistrée avec succès ! Nous vous contacterons bientôt.');
            
            // Reset form
            form.reset();
        });
    });
    
    // ========== TOAST NOTIFICATION ==========
    function showToast(message) {
        const toast = document.getElementById('toast');
        const toastMessage = toast.querySelector('.toast-message');
        
        toastMessage.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }
    
    // ========== BACK TO TOP BUTTON ==========
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ========== FORM VALIDATION ENHANCEMENTS ==========
    const formInputs = document.querySelectorAll('.form-group input');
    
    formInputs.forEach(input => {
        // Add focus animations
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('focused');
        });
        
        // Real-time validation
        input.addEventListener('input', () => {
            if (input.validity.valid) {
                input.classList.add('valid');
                input.classList.remove('invalid');
            } else if (input.value !== '') {
                input.classList.add('invalid');
                input.classList.remove('valid');
            }
        });
    });
    
    // ========== HERO ANIMATIONS ==========
    // Animate hero elements on load
    gsap.from('.hero-title', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3
    });
    
    gsap.from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.6
    });
    
    gsap.from('.hero-cta', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.9
    });
    
    gsap.from('.hero-stats', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 1.2
    });
    
    // ========== SMOOTH ANCHOR SCROLL FOR ALL LINKS ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========== CURSOR CUSTOM (OPTIONAL) ==========
    // Uncomment if you want custom cursor on hover
    /*
    const customCursor = document.createElement('div');
    customCursor.classList.add('custom-cursor');
    document.body.appendChild(customCursor);
    
    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = e.clientX + 'px';
        customCursor.style.top = e.clientY + 'px';
    });
    
    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => {
            customCursor.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
            customCursor.classList.remove('cursor-hover');
        });
    });
    */
    
    // ========== PERFORMANCE OPTIMIZATION ==========
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // ========== EASTER EGG ==========
    // Konami code for fun
    let konamiCode = [];
    const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.key);
        konamiCode.splice(-konamiPattern.length - 1, konamiCode.length - konamiPattern.length);
        
        if (konamiCode.join('') === konamiPattern.join('')) {
            showToast('🎉 Code secret activé ! Bienvenue dans l\'équipe Vaoo ! 🎉');
            // Add fun animation
            document.body.style.animation = 'rainbow 2s infinite';
        }
    });
    
    // ========== CONSOLE MESSAGE ==========
    console.log('%cVaoo 🏨', 'font-size: 50px; color: #5FD45F; font-weight: bold;');
    console.log('%cVous cherchez quelque chose ? 🔍', 'font-size: 16px; color: #F3D89D;');
    console.log('%cRejoignez-nous : contact@vaoo.fr', 'font-size: 14px; color: #666;');
    
    // ========== ANALYTICS (À REMPLACER) ==========
    // Placeholder pour Google Analytics ou autre
    function trackEvent(category, action, label) {
        // À remplacer par votre code Analytics
        console.log('Event tracked:', category, action, label);
    }
    
    // Track button clicks
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', () => {
            trackEvent('Button', 'Click', btn.textContent.trim());
        });
    });
    
    // ========== INITIALIZATION COMPLETE ==========
    console.log('✅ Vaoo website initialized successfully!');
    
});

// ========== UTILITY FUNCTIONS ==========

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Format number with spaces (French style)
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
