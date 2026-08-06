// components.js - Self-contained header and footer components with styles

(function() {
    'use strict';

    // Inject styles for nav links and mobile menu
    function injectNavStyles() {
        const styleId = 'nav-component-styles';
        if (document.getElementById(styleId)) return;

        const styles = `
            /* Nav link styles with smooth transitions */
            .nav-link {
                position: relative;
                padding: 0.5rem 1rem;
                border-radius: 8px;
                transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
                text-decoration: none;
                font-weight: 500;
            }

            .nav-link::after {
                content: '';
                position: absolute;
                left: 50%;
                bottom: 2px;
                width: 0;
                height: 2px;
                background: #895725;
                transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
                transform: translateX(-50%);
            }

            .nav-link:hover::after {
                width: 60%;
            }

            .nav-link.active::after {
                width: 60%;
                background: #895725;
            }

            .nav-link.active {
                color: #E9E9E1 !important;
                background: rgba(233, 233, 225, 0.15);
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }

            /* Scrolled state */
            #site-header.scrolled .nav-link {
                padding: 0.4rem 0.9rem;
            }

            #site-header.scrolled .nav-link.active {
                background: rgba(137, 87, 37, 0.12) !important;
                color: #2E2717 !important;
                box-shadow: 0 2px 12px rgba(137, 87, 37, 0.15);
            }

            #site-header.scrolled .nav-link.active::after {
                background: #2E2717;
            }

            #site-header.scrolled .nav-link:not(.active):hover {
                background: rgba(46, 39, 23, 0.06);
            }

            /* Mobile nav link active states */
            .mobile-nav-link.active {
                color: #895725 !important;
                background: rgba(137, 87, 37, 0.08);
                padding-left: 12px;
                border-radius: 8px;
            }

            .mobile-nav-link {
                transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
                padding: 12px 0;
                border-radius: 8px;
            }

            .mobile-nav-link:hover {
                background: rgba(137, 87, 37, 0.05);
                padding-left: 12px;
            }

            /* Header scrolled state */
            #site-header.scrolled {
                background: #E9E9E1 !important;
                backdrop-filter: blur(8px);
                box-shadow: 0 4px 20px rgba(46, 39, 23, 0.15);
            }

            #site-header.scrolled .nav-link {
                color: rgba(46, 39, 23, 0.8) !important;
            }

            #site-header.scrolled .nav-link.active {
                color: #2E2717 !important;
            }

            #site-header.scrolled #logo {
                color: #2E2717 !important;
            }

            /* ============ MOBILE MENU - SLIDE FROM RIGHT ============ */
            #menu-btn {
                z-index: 60;
                cursor: pointer;
            }

            .menu-bar {
                transform-origin: center;
                transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
            }

            /* Mobile menu overlay */
            #mobile-menu {
                position: fixed;
                inset: 0;
                z-index: 100;
                visibility: hidden;
                pointer-events: none;
                transition: visibility 0.4s ease;
            }

            #mobile-menu.active {
                visibility: visible;
                pointer-events: auto;
            }

            /* Overlay background */
            #mobile-menu-overlay {
                position: absolute;
                inset: 0;
                opacity: 0;
                background: rgba(46, 39, 23, 0.6);
                backdrop-filter: blur(4px);
                -webkit-backdrop-filter: blur(4px);
                transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1);
            }

            #mobile-menu.active #mobile-menu-overlay {
                opacity: 1;
            }

            /* Panel sliding from right */
            #mobile-menu-panel {
                position: absolute;
                top: 0;
                right: 0;
                width: 85%;
                max-width: 400px;
                height: 100%;
                background: #E9E9E1;
                transform: translateX(100%);
                transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 2rem 1.5rem;
                overflow-y: auto;
                box-shadow: -20px 0 60px rgba(0, 0, 0, 0.3);
            }

            #mobile-menu.active #mobile-menu-panel {
                transform: translateX(0);
            }

            /* Mobile nav links */
            .mobile-nav-link {
                font-family: 'Space Grotesk', sans-serif;
                font-size: 1.75rem;
                padding: 0.75rem 0;
                color: #2E2717;
                border-bottom: 1px solid rgba(46, 39, 23, 0.08);
                transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
                width: 100%;
                text-align: center;
                max-width: 300px;
                opacity: 0;
                transform: translateX(30px);
                transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
            }

            #mobile-menu.active .mobile-nav-link {
                opacity: 1;
                transform: translateX(0);
            }

            /* Stagger animation for mobile links */
            #mobile-menu.active .mobile-nav-link:nth-child(1) { transition-delay: 0.05s; }
            #mobile-menu.active .mobile-nav-link:nth-child(2) { transition-delay: 0.10s; }
            #mobile-menu.active .mobile-nav-link:nth-child(3) { transition-delay: 0.15s; }
            #mobile-menu.active .mobile-nav-link:nth-child(4) { transition-delay: 0.20s; }
            #mobile-menu.active .mobile-nav-link:nth-child(5) { transition-delay: 0.25s; }
            #mobile-menu.active .mobile-nav-link:nth-child(6) { transition-delay: 0.30s; }

            .mobile-nav-link:hover {
                color: #895725;
                padding-left: 12px;
                background: rgba(137, 87, 37, 0.05);
                border-radius: 8px;
            }

            .mobile-nav-link:first-child {
                color: #895725;
            }

            .mobile-nav-link:last-of-type {
                border-bottom: none;
            }

            /* Close button */
            #mobile-close-btn {
                position: absolute;
                top: 1.5rem;
                right: 1.5rem;
                width: 44px;
                height: 44px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.75rem;
                color: #2E2717;
                background: rgba(46, 39, 23, 0.06);
                border: none;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
                z-index: 10;
                opacity: 0;
                transform: rotate(-90deg) scale(0.8);
            }

            #mobile-menu.active #mobile-close-btn {
                opacity: 1;
                transform: rotate(0deg) scale(1);
                transition-delay: 0.3s;
            }

            #mobile-close-btn:hover {
                transform: rotate(90deg);
                background: rgba(137, 87, 37, 0.12);
            }

            /* Get in touch button in mobile menu */
            .mobile-cta-btn {
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
            }

            #mobile-menu.active .mobile-cta-btn {
                opacity: 1;
                transform: translateY(0);
                transition-delay: 0.35s;
            }

            /* Responsive mobile menu */
            @media (max-width: 480px) {
                #mobile-menu-panel {
                    width: 100%;
                    max-width: 100%;
                    padding: 2rem 1rem;
                }
                .mobile-nav-link {
                    font-size: 1.25rem;
                    padding: 12px 0;
                }
            }

            /* iOS Safari fix */
            @supports (-webkit-touch-callout: none) {
                #mobile-menu-panel {
                    padding: 3rem 1.5rem 2rem;
                }
                #mobile-close-btn {
                    top: 3rem;
                }
            }
        `;

        const styleElement = document.createElement('style');
        styleElement.id = styleId;
        styleElement.textContent = styles;
        document.head.appendChild(styleElement);
    }

    // Header HTML template
    function getHeaderHTML() {
        return `
            <!-- ============ HEADER (FIXED) ============ -->
            <header id="site-header" class="fixed top-0 left-0 w-full z-50 transition-all duration-500" style="background: transparent;">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between py-4 md:py-5">
                    <a href="index.html" class="font-display text-2xl tracking-wide flex items-center gap-2" id="logo" style="color: #E9E9E1;">
                        <img src="./assets/interior_logo.jpeg" alt="Interior Logo" class="h-12 md:h-16 w-auto object-contain" />
                    </a>
                    <nav class="hidden lg:flex items-center gap-2 xl:gap-3 text-sm tracking-wide" style="color: rgba(233, 233, 225, 0.85);">
                        <a href="index.html" class="nav-link" style="color: rgba(233, 233, 225, 0.7); font-weight: 500;">Home</a>
                        <a href="about.html" class="nav-link" style="color: rgba(233, 233, 225, 0.7);">About</a>
                        <a href="services.html" class="nav-link" style="color: rgba(233, 233, 225, 0.7);">Services</a>
                        <a href="projects.html" class="nav-link" style="color: rgba(233, 233, 225, 0.7);">Projects</a>
                        <a href="contact.html" class="nav-link" style="color: rgba(233, 233, 225, 0.7);">Contact</a>
                    </nav>
                    <div class="flex items-center gap-3 md:gap-4">
                        <a href="contact.html" class="hidden md:inline-flex items-center gap-2 text-sm font-medium px-5 md:px-6 py-2.5 md:py-3 rounded-full transition-colors duration-300" style="background: #E9E9E1; color: #2E2717;">Get In Touch</a>
                        <button id="menu-btn" class="lg:hidden w-9 h-9 md:w-10 md:h-10 flex flex-col items-center justify-center gap-1.5 relative z-[60]" aria-label="Toggle menu">
                            <span class="menu-bar block w-5 md:w-6 h-0.5 rounded-full transition-all duration-300" style="background:#E9E9E1;"></span>
                            <span class="menu-bar block w-5 md:w-6 h-0.5 rounded-full transition-all duration-300" style="background:#E9E9E1;"></span>
                            <span class="menu-bar block w-5 md:w-6 h-0.5 rounded-full transition-all duration-300" style="background:#E9E9E1;"></span>
                        </button>
                    </div>
                </div>
            </header>

            <!-- ============ MOBILE MENU - SLIDE FROM RIGHT ============ -->
            <div id="mobile-menu">
                <div id="mobile-menu-overlay"></div>
                <div id="mobile-menu-panel">
                    <button id="mobile-close-btn" aria-label="Close menu">✕</button>
                    <a href="index.html" class="mobile-nav-link" style="color:#895725;">Home</a>
                    <a href="about.html" class="mobile-nav-link">About</a>
                    <a href="services.html" class="mobile-nav-link">Services</a>
                    <a href="projects.html" class="mobile-nav-link">Projects</a>
                    
                    <a href="contact.html" class="mobile-cta-btn inline-flex items-center justify-center gap-2 bg-umber text-cream text-sm font-medium px-8 py-3.5 rounded-full w-auto min-w-[180px] transition-colors hover:bg-opacity-80 mt-2">Get In Touch</a>
                </div>
            </div>
        `;
    }

    // Footer HTML template
    function getFooterHTML() {
        return `
            <!-- ============ FOOTER ============ -->
            <footer class="bg-espresso text-cream/70 pt-14 pb-6 px-6 md:px-10">
                <div class="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-10">
                    <div>
                        <a href="index.html" class="font-display text-2xl text-cream flex items-center gap-2 mb-4">
                            <img src="/assets/interior_logo.jpeg" alt="logo" class="w-20 h-16">
                        </a>
                        <p class="text-sm max-w-xs">A boutique interior design studio composing rooms around light, material and how people actually live.</p>
                    </div>
                    <div>
                        <h4 class="text-cream font-display text-lg mb-4">Navigate</h4>
                        <ul class="space-y-3 text-sm">
                            <li><a href="index.html" class="hover:text-umber transition-colors">Home</a></li>
                            <li><a href="about.html" class="hover:text-umber transition-colors">About</a></li>
                            <li><a href="services.html" class="hover:text-umber transition-colors">Services</a></li>
                            <li><a href="projects.html" class="hover:text-umber transition-colors">Projects</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-cream font-display text-lg mb-4">Studio</h4>
                        <ul class="space-y-3 text-sm">
                            <li>Motzstraße 12, Berlin</li>
                            <li>hello@terraochre.studio</li>
                            <li>+49 30 1234 5678</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-cream font-display text-lg mb-4">Newsletter</h4>
                        <p class="text-sm mb-4">Considered interiors, once a month.</p>
                        <form class="flex" onsubmit="return false;">
                            <input type="email" placeholder="Your email" class="bg-cream/10 border border-cream/20 rounded-l-full px-4 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-umber w-full">
                            <button class="bg-umber text-cream px-5 rounded-r-full text-sm font-medium hover:bg-cream hover:text-espresso transition-colors">Join</button>
                        </form>
                    </div>
                </div>
                <div class="max-w-7xl mx-auto border-t border-cream/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/40">
                    <p>© 2026 Terra & Ochre Interior Design Studio. All rights reserved.</p>
                    <p>Crafted with care in Berlin.</p>
                </div>
            </footer>
        `;
    }

    // Initialize header functionality
    function initHeaderScripts() {
        const header = document.getElementById('site-header');
        if (!header) return;

        const logo = document.getElementById('logo');
        const navLinks = document.querySelectorAll('.nav-link');
        const menuBtn = document.getElementById('menu-btn');
        const bars = menuBtn ? menuBtn.querySelectorAll('.menu-bar') : [];
        const mobileMenu = document.getElementById('mobile-menu');
        const overlay = document.getElementById('mobile-menu-overlay');
        const panel = document.getElementById('mobile-menu-panel');
        const closeBtn = document.getElementById('mobile-close-btn');
        let menuOpen = false;

        // Set active nav link based on current page
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.remove('active');
            
            if (href === currentPage) {
                link.classList.add('active');
                link.style.color = '#E9E9E1';
            } else {
                link.classList.remove('active');
                link.style.color = 'rgba(233, 233, 225, 0.7)';
            }
        });

        // Header scroll effect
        function onScroll() {
            if (!header) return;
            
            const isScrolled = window.scrollY > 60;
            
            if (isScrolled) {
                header.classList.add('scrolled');
                if (logo) logo.style.color = '#2E2717';
                
                navLinks.forEach(link => {
                    if (link.classList.contains('active')) {
                        link.style.color = '#2E2717';
                    } else {
                        link.style.color = 'rgba(46, 39, 23, 0.7)';
                    }
                });
                
                if (!menuOpen && bars.length) {
                    bars.forEach(b => b.style.background = '#2E2717');
                }
            } else {
                header.classList.remove('scrolled');
                if (logo) logo.style.color = '#E9E9E1';
                
                navLinks.forEach(link => {
                    if (link.classList.contains('active')) {
                        link.style.color = '#E9E9E1';
                    } else {
                        link.style.color = 'rgba(233, 233, 225, 0.7)';
                    }
                });
                
                if (!menuOpen && bars.length) {
                    bars.forEach(b => b.style.background = '#E9E9E1');
                }
            }
        }

        document.addEventListener('scroll', onScroll);
        onScroll();

        // Mobile menu functions - Slide from right
        function openMenu() {
            if (!mobileMenu || !panel || !overlay) return;
            menuOpen = true;
            mobileMenu.classList.add('active');
            
            // Animate hamburger to X
            if (bars.length) {
                bars[0].style.transform = 'translateY(7px) rotate(45deg)';
                bars[0].style.background = '#2E2717';
                bars[1].style.opacity = '0';
                bars[1].style.transform = 'scale(0)';
                bars[2].style.transform = 'translateY(-7px) rotate(-45deg)';
                bars[2].style.background = '#2E2717';
            }
            
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            if (!mobileMenu || !panel || !overlay) return;
            menuOpen = false;
            mobileMenu.classList.remove('active');
            
            // Reset hamburger
            if (bars.length) {
                bars.forEach(b => {
                    b.style.transform = '';
                    b.style.opacity = '1';
                    b.style.background = header && header.classList.contains('scrolled') ? '#2E2717' : '#E9E9E1';
                });
            }
            
            document.body.style.overflow = '';
        }

        if (menuBtn) {
            menuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                menuOpen ? closeMenu() : openMenu();
            });
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', closeMenu);
        }

        if (overlay) {
            overlay.addEventListener('click', closeMenu);
        }

        document.querySelectorAll('.mobile-nav-link').forEach(l => l.addEventListener('click', closeMenu));

        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1024 && menuOpen) closeMenu();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && menuOpen) closeMenu();
        });
    }

    // Load components
    function loadComponents() {
        // Inject styles first
        injectNavStyles();

        const headerPlaceholder = document.getElementById('header-placeholder');
        const footerPlaceholder = document.getElementById('footer-placeholder');

        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = getHeaderHTML();
        }

        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = getFooterHTML();
        }

        // Initialize header scripts after DOM update
        setTimeout(initHeaderScripts, 50);
    }

    // Load when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadComponents);
    } else {
        loadComponents();
    }
})();