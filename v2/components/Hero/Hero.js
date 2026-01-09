class Hero
{
    constructor()
    {
        this.element = null;
    }

    render() 
    {
        return `
            <!-- Navbar -->
            <nav class="navbar navbar-expand navbar-dark custom-navbar fixed-top gsap-reveal">
                <div class="container px-4">
                    <!-- Logo -->
                    <a class="navbar-brand d-flex align-items-center me-4" href="#hero">
                        <i class="fas fa-microchip me-2"></i>
                        <span class="fw-bold">AC Course</span>
                    </a>

                    <!-- Navbar links (Always visible on same row) -->
                    <div class="navbar-nav d-flex flex-row gap-4">
                        <a href="#fundamente" class="nav-link">Structură</a>
                        <a href="#ciclu" class="nav-link">Ciclu</a>
                        <a href="#interfete" class="nav-link">Memorie</a>
                    </div>
                </div>
            </nav>

            <!-- Hero Section -->
            <div class="hero-section">
                <div class="container-fluid">
                    <div class="row align-items-center min-vh-100">
                        <!-- Left Side - Text (70%) -->
                        <div class="col-lg-7 col-md-6 col-12 hero-text-side gsap-reveal">
                            <div class="hero-content ps-lg-5">
                                <h1 class="display-1 fw-bold mb-4">
                                    <span class="parallax-fast d-inline-block">AC Modern</span>
                                    <br>
                                    <span class="parallax-slow d-inline-block">Curs 4</span>
                                </h1>
                                <p class="lead mb-4 fw-regular">
                                    Fundamente privind arhitectura UCP. </br>
                                    Structură, Funcționare Ciclică, Interfațare și Organizare.
                                </p>
                                <a href="#fundamente" class="btn btn-lg btn-light" style="font-weight: 600; position: relative; z-index: 10;">
                                    Începe studiul
                                </a>
                            </div>
                        </div>

                        <!-- Right Side - Image (30%) -->
                        <div class="col-lg-5 col-md-6 col-12 hero-image-side gsap-reveal">
                            <div class="hero-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=1000&fit=crop" 
                                     alt="Computer Architecture" 
                                     class="hero-image">
                                <div class="image-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    mount(elementId)
    {
        this.element = document.getElementById(elementId);
        if (this.element) {
            this.element.innerHTML = this.render();
            this.attachEvents();
        }
    }

    attachEvents()
    {
        this.bindAnchorScroll();
        this.bindScrollState();
        this.initGSAP();
    }

    initGSAP()
    {
        if (typeof gsap === 'undefined') return;

        // Force elements to be visible before animating but keep opacity 0 via class
        gsap.set(".gsap-reveal", { visibility: "visible" });

        const tl = gsap.timeline({ 
            defaults: { ease: "power3.out", duration: 1 } 
        });

        // Navbar animation
        tl.to(".custom-navbar", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            startAt: { y: -100, opacity: 0 },
            onComplete: () => document.querySelector('.custom-navbar').classList.remove('gsap-reveal')
        });

        // Hero text animations (staggered children)
        tl.to(".hero-text-side", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            startAt: { y: 30, opacity: 0 },
            onComplete: () => document.querySelector('.hero-text-side').classList.remove('gsap-reveal')
        }, "-=0.4");

        tl.from(".hero-text-side > .hero-content > *", {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            clearProps: "all"
        }, "-=0.4");

        // Hero image animation
        tl.to(".hero-image-side", {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            startAt: { scale: 1.1, opacity: 0 },
            onComplete: () => {
                const imgSide = document.querySelector('.hero-image-side');
                if (imgSide) imgSide.classList.remove('gsap-reveal');
            }
        }, "-=1");

        // Smoother parallax on scroll for image and text
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
            
            // Image Parallax (Moves slightly down)
            gsap.to(".hero-image", {
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1.5
                },
                y: 150,
                scale: 1.15,
                ease: "none"
            });

            // Differential Parallax for Text
            // "AC Modern" moves FAST up
            gsap.to(".parallax-fast", {
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1
                },
                y: -120,
                ease: "none"
            });

            // "Curs 4" moves SLOWER up
            gsap.to(".parallax-slow", {
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1.2
                },
                y: -40,
                ease: "none"
            });

            // Description moves slightly up
            gsap.to(".hero-text-side .lead", {
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1.4
                },
                y: -20,
                ease: "none"
            });
        }
    }

    bindAnchorScroll()
    {
        const links = this.element.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'auto', block: 'start' });
                }
            });
        });
    }

    bindScrollState()
    {
        const navbar = this.element.querySelector('.custom-navbar');
        if (!navbar) {
            return;
        }

        const toggleScrolled = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        toggleScrolled();
        window.addEventListener('scroll', toggleScrolled);
    }

    bindNavbarCollapse()
    {
        const collapseElement = this.element.querySelector('#heroNavbar');
        if (!collapseElement) {
            return;
        }

        const navLinks = collapseElement.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth >= 992) {
                    return;
                }

                if (typeof bootstrap === 'undefined' || !bootstrap.Collapse) {
                    collapseElement.classList.remove('show');
                    return;
                }

                const collapseInstance = bootstrap.Collapse.getOrCreateInstance(collapseElement);
                collapseInstance.hide();
            });
        });
    }

}

// Create instance
const hero = new Hero();