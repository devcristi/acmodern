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
            <nav class="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top">
                <div class="container-fluid">
                    <!-- Logo -->
                    <a class="navbar-brand d-flex align-items-center" href="#hero">
                        <i class="fas fa-microchip me-2"></i>
                        <span class="fw-bold">AC Course</span>
                    </a>

                    <!-- Hamburger Toggle -->
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#heroNavbar" aria-controls="heroNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <!-- Navbar links -->
                    <div class="collapse navbar-collapse" id="heroNavbar">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a href="#fundamente" class="nav-link">
                                    Structură
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#ciclu" class="nav-link">
                                    Ciclu
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#interfete" class="nav-link">
                                    Memorie
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <!-- Hero Section -->
            <div class="hero-section">
                <div class="container-fluid">
                    <div class="row align-items-center min-vh-100">
                        <!-- Left Side - Text (70%) -->
                        <div class="col-lg-7 col-md-6 col-12 hero-text-side">
                            <div class="hero-content ps-lg-5">
                                <h1 class="display-1 fw-bold mb-4">
                                    AC Modern
                                    <br>
                                    Curs 4
                                </h1>
                                <p class="lead mb-4 fw-regular">
                                    Fundamente privind arhitectura UCP. </br>
                                    Structură, Funcționare Ciclică, Interfațare și Organizare.
                                </p>
                                <button class="btn btn-lg btn-light">
                                    Începe studiul
                                </button>
                            </div>
                        </div>

                        <!-- Right Side - Image (30%) -->
                        <div class="col-lg-5 col-md-6 col-12 hero-image-side">
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
        this.bindNavbarCollapse();
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