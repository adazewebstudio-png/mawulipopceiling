document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking an item
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth Scroll for Navigation (Only for same-page links)
    document.querySelectorAll('a[href*="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Check if it's a same-page link
            if (href.startsWith('#') || (href.includes('index.html#') && window.location.pathname.includes('index.html')) || (href.includes('index.html#') && window.location.pathname === '/')) {
                const targetId = href.split('#')[1];
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });

                    // Update URL hash without jumping
                    history.pushState(null, null, `#${targetId}`);
                }
            }
        });
    });

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            item.classList.toggle('active');
        });
    });

    // Scroll Reveal Animation (Simple)
    const hasHash = window.location.hash;
    const revealSelector = hasHash
        ? '.service-card, .portfolio-item, .about-text'
        : '.service-card, .portfolio-item, .about-text, .hero-content';
    const revealElements = document.querySelectorAll(revealSelector);

    // Add initial state styles via JS to avoid checking for CSS loaded
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
        }
        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(styleSheet);

    revealElements.forEach(el => el.classList.add('reveal'));

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        revealElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // Portfolio Filter Logic (Enhanced for URL params and Sticky Nav)
    const filterButtons = document.querySelectorAll('.filter-btn, .category-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const categoryNav = document.querySelector('.category-nav');

    // Sticky Category Nav Class on Scroll
    const handleCategorySticky = () => {
        if (categoryNav) {
            if (window.scrollY > 300) {
                categoryNav.classList.add('scrolled');
            } else {
                categoryNav.classList.remove('scrolled');
            }
        }
    };

    window.addEventListener('scroll', handleCategorySticky);

    const applyFilter = (filter) => {
        // Update Active Button in both places (mobile button and list buttons)
        filterButtons.forEach(btn => {
            if (btn.getAttribute('data-filter') === filter) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        portfolioItems.forEach(item => {
            const category = item.getAttribute('data-category');
            if (filter === 'all' || filter === category) {
                item.style.display = 'block';
                setTimeout(() => item.style.opacity = '1', 10);
            } else {
                item.style.opacity = '0';
                setTimeout(() => item.style.display = 'none', 300);
            }
        });
    };

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // If we are NOT on the portfolio page, redirect with the filter
            if (!document.body.classList.contains('portfolio-page')) {
                const redirectUrl = filter === 'all' ? 'portfolio.html' : `portfolio.html?filter=${filter}`;
                window.location.href = redirectUrl;
                return;
            }

            applyFilter(filter);

            // Update URL without refresh if on portfolio page
            if (document.body.classList.contains('portfolio-page')) {
                const newUrl = filter === 'all' ? 'portfolio.html' : `portfolio.html?filter=${filter}`;
                history.pushState(null, null, newUrl);
            }
        });
    });

    // Handle initial filter from URL
    const urlParams = new URLSearchParams(window.location.search);
    const initialFilter = urlParams.get('filter') || 'all';

    if (document.body.classList.contains('portfolio-page')) {
        applyFilter(initialFilter);
    }

    // --- Testimonial Carousel ---
    const track = document.getElementById('testimonials-track');
    if (track) {
        const cards = Array.from(track.children);
        const dotsContainer = document.getElementById('carousel-dots');
        let currentIndex = 0;
        let slideInterval;

        // Create dots
        cards.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                goToSlide(index);
                restartInterval();
            });
            dotsContainer.appendChild(dot);
        });

        const dots = Array.from(dotsContainer.children);

        function updateCarousel() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;

            // Update active state for animation
            cards.forEach((card, index) => {
                card.classList.toggle('active', index === currentIndex);
            });

            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % cards.length;
            updateCarousel();
        }

        function startInterval() {
            slideInterval = setInterval(nextSlide, 3000); // Exactly 3s as requested
        }

        function restartInterval() {
            clearInterval(slideInterval);
            startInterval();
        }

        // Initialize first card
        if (cards.length > 0) {
            cards[0].classList.add('active');
            updateCarousel();
            startInterval();
        }

        // Pause on hover
        track.addEventListener('mouseenter', () => clearInterval(slideInterval));
        track.addEventListener('mouseleave', startInterval);
    }

    // --- Hire Mawuli Modal Logic ---
    const createHireModal = () => {
        const modalHtml = `
            <div class="modal-overlay" id="hire-modal">
                <div class="modal-container">
                    <button class="modal-close" id="modal-close">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                    <div class="modal-header">
                        <h2>Hire Mawuli</h2>
                        <p>Choose your preferred way to connect and let's discuss your project!</p>
                    </div>
                    <div class="modal-options">
                        <a href="https://wa.me/233243356416" class="modal-btn whatsapp" target="_blank">
                            <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp
                        </a>
                        <a href="tel:+233243356416" class="modal-btn call">
                            <i class="fa-solid fa-phone"></i> Call Direct
                        </a>
                    </div>
                    <div class="modal-footer">
                        <span class="phone-number">+233 24 335 6416</span>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);

        const modal = document.getElementById('hire-modal');
        const closeBtn = document.getElementById('modal-close');

        const closeModal = () => {
            modal.classList.remove('active');
            setTimeout(() => {
                document.body.style.overflow = 'auto';
            }, 400);
        };

        const openModal = (e) => {
            if (e) e.preventDefault();
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        // Add event listeners to all "Hire Mawuli" and CTA buttons
        const ctaTexts = ['hire mawuli', 'i want a ceiling like this', 'request a quote', 'get a free quote'];

        document.querySelectorAll('a, button').forEach(el => {
            const text = el.textContent.trim().toLowerCase();
            if (ctaTexts.some(cta => text.includes(cta))) {
                el.addEventListener('click', openModal);
            }
        });
    };

    createHireModal();
});
