document.addEventListener('DOMContentLoaded', function () {
    // Preloader
    const preloader = document.getElementById('preloader');
    const progressBar = document.querySelector('.progress-bar .progress');
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress > 100) {
            progress = 100;
            clearInterval(progressInterval);
            setTimeout(() => {
                preloader.classList.add('fade-out');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 300);
        }
        progressBar.style.width = `${progress}%`;
    }, 100);

    // Mobile Navigation
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Particles background
    const particlesContainer = document.getElementById('particles');
    function createParticles() {
        const particleCount = 50;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            const size = Math.random() * 4 + 1;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = Math.random() * 10 + 10;
            particle.style.cssText = `
                        position: absolute;
                        width: ${size}px;
                        height: ${size}px;
                        background: var(--primary);
                        border-radius: 50%;
                        opacity: ${Math.random() * 0.3 + 0.1};
                        left: ${posX}%;
                        top: ${posY}%;
                        animation: float ${duration}s infinite ease-in-out ${delay}s;
                    `;
            particlesContainer.appendChild(particle);
        }
    }

    // Animated counter for stats
    const statNumbers = document.querySelectorAll('.stat-number');
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current).toLocaleString();
        }, 20);
    }
    function checkScroll() {
        statNumbers.forEach(stat => {
            const position = stat.getBoundingClientRect();
            const target = parseFloat(stat.getAttribute('data-count'));
            if (position.top < window.innerHeight - 100 && !stat.classList.contains('animated')) {
                stat.classList.add('animated');
                if (stat.textContent === '0') {
                    if (Number.isInteger(target)) {
                        animateCounter(stat, target);
                    } else {
                        let current = 0;
                        const timer = setInterval(() => {
                            current += 0.1;
                            if (current >= target) {
                                current = target;
                                clearInterval(timer);
                            }
                            stat.textContent = current.toFixed(1);
                        }, 10);
                    }
                }
            }
        });
    }

    // Pricing toggle
    const pricingToggle = document.getElementById('pricingToggle');
    const priceAmounts = document.querySelectorAll('.amount');
    pricingToggle.addEventListener('change', function () {
        priceAmounts.forEach(amount => {
            const monthly = amount.getAttribute('data-monthly');
            const yearly = amount.getAttribute('data-yearly');
            if (this.checked) {
                amount.textContent = yearly;
            } else {
                amount.textContent = monthly;
            }
        });
    });

    // Testimonials slider
    const testimonialsTrack = document.getElementById('testimonialsTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const sliderDots = document.getElementById('sliderDots');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    let currentSlide = 0;
    testimonialCards.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        sliderDots.appendChild(dot);
    });
    function updateSlider() {
        const translateX = -currentSlide * 100;
        testimonialsTrack.style.transform = `translateX(${translateX}%)`;
        document.querySelectorAll('.slider-dots .dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonialCards.length;
        updateSlider();
    }
    function prevSlide() {
        currentSlide = (currentSlide - 1 + testimonialCards.length) % testimonialCards.length;
        updateSlider();
    }
    function goToSlide(index) {
        currentSlide = index;
        updateSlider();
    }
    let slideInterval = setInterval(nextSlide, 5000);
    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });

    // Contact form
    const contactForm = document.getElementById('contactForm');
    const toast = document.getElementById('toast');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let isValid = true;
        const requiredFields = this.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = 'var(--danger)';
            } else {
                field.style.borderColor = '';
            }
        });
        if (isValid) {
            setTimeout(() => {
                toast.classList.add('show');
                contactForm.reset();
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 3000);
            }, 500);
        } else {
            alert('Harap lengkapi semua field yang wajib diisi.');
        }
    });

    // Scroll to top
    const scrollTopBtn = document.getElementById('scrollTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                navLinks.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        if (email) {
            setTimeout(() => {
                alert('Terima kasih telah berlangganan newsletter kami!');
                this.reset();
            }, 300);
        }
    });

    // Initialize
    createParticles();
    window.addEventListener('scroll', checkScroll);
    checkScroll();

    // Animate elements on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }, observerOptions);
    document.querySelectorAll('.service-card, .feature-card, .tech-item, .pricing-card, .testimonial-card').forEach(element => {
        observer.observe(element);
    });
});