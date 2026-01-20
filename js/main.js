/**
 * Cybersphere - AI Automation Agency
 * Conversion-Focused Landing Page Scripts
 */

document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initSmoothScroll();
    initHeaderScroll();
    initScrollAnimations();
    initFormHandling();
});

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');

    if (!toggle) return;

    toggle.addEventListener('click', function() {
        toggle.classList.toggle('active');

        let mobileMenu = document.querySelector('.mobile-menu');

        if (!mobileMenu) {
            mobileMenu = document.createElement('div');
            mobileMenu.className = 'mobile-menu';
            mobileMenu.innerHTML = `
                <nav class="mobile-nav">
                    ${navLinks.innerHTML}
                </nav>
                <div class="mobile-actions">
                    ${navActions.innerHTML}
                </div>
            `;
            document.querySelector('.header').appendChild(mobileMenu);

            const styles = document.createElement('style');
            styles.textContent = `
                .mobile-menu {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: rgba(0, 10, 13, 0.98);
                    backdrop-filter: blur(20px);
                    padding: 24px;
                    border-bottom: 1px solid rgba(0, 245, 255, 0.15);
                    display: none;
                }
                .mobile-menu.active {
                    display: block;
                }
                .mobile-nav {
                    list-style: none;
                    margin-bottom: 24px;
                }
                .mobile-nav li {
                    list-style: none;
                }
                .mobile-nav a {
                    display: block;
                    padding: 14px 0;
                    font-size: 1.1rem;
                    color: #94a3b8;
                    border-bottom: 1px solid rgba(0, 245, 255, 0.1);
                }
                .mobile-nav a:hover {
                    color: #00F5FF;
                }
                .mobile-actions {
                    padding-top: 16px;
                }
                .mobile-actions .btn {
                    width: 100%;
                    text-align: center;
                    justify-content: center;
                }
                .mobile-menu-toggle.active span:nth-child(1) {
                    transform: rotate(45deg) translate(5px, 5px);
                }
                .mobile-menu-toggle.active span:nth-child(2) {
                    opacity: 0;
                }
                .mobile-menu-toggle.active span:nth-child(3) {
                    transform: rotate(-45deg) translate(7px, -6px);
                }
            `;
            document.head.appendChild(styles);
        }

        mobileMenu.classList.toggle('active');
    });

    // Close menu on link click
    document.addEventListener('click', function(e) {
        if (e.target.closest('.mobile-nav a') || e.target.closest('.mobile-actions a')) {
            const mobileMenu = document.querySelector('.mobile-menu');
            const toggle = document.querySelector('.mobile-menu-toggle');
            if (mobileMenu) mobileMenu.classList.remove('active');
            if (toggle) toggle.classList.remove('active');
        }
    });
}

/**
 * Smooth Scrolling
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const bannerHeight = document.body.classList.contains('scrolled') ? 0 : 44;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - bannerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Header Scroll Behavior
 */
function initHeaderScroll() {
    const header = document.querySelector('.header');
    const banner = document.querySelector('.announcement-banner');
    let bannerHeight = banner ? banner.offsetHeight : 0;

    function handleScroll() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > bannerHeight) {
            document.body.classList.add('scrolled');
            header.style.top = '0';
        } else {
            document.body.classList.remove('scrolled');
            header.style.top = bannerHeight + 'px';
        }
    }

    // Initial check
    handleScroll();

    // Throttled scroll handler
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Update banner height on resize
    window.addEventListener('resize', function() {
        bannerHeight = banner ? banner.offsetHeight : 0;
    });
}

/**
 * Scroll Animations
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.problem-card, .solution-card, .result-card, .who-card, .step, .section-header'
    );

    if ('IntersectionObserver' in window) {
        // Reset initial state
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Stagger animation based on element position
                    const delay = Array.from(entry.target.parentElement.children).indexOf(entry.target) * 100;

                    setTimeout(() => {
                        entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, delay);

                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(el => observer.observe(el));
    }
}

/**
 * Form Handling (for future Calendly integration)
 */
function initFormHandling() {
    // Track CTA clicks for analytics
    const ctaButtons = document.querySelectorAll('a[href="#book"], a[href*="calendly"]');

    ctaButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Analytics tracking placeholder
            if (typeof gtag !== 'undefined') {
                gtag('event', 'cta_click', {
                    'event_category': 'engagement',
                    'event_label': this.textContent.trim()
                });
            }

            // Add visual feedback
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

/**
 * Utility: Debounce
 */
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

/**
 * Add typing effect to hero (optional enhancement)
 */
function initTypingEffect() {
    const heroText = document.querySelector('.hero h1');
    if (!heroText) return;

    // Could add typewriter effect here if desired
}
