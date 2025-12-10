class Navbar
{
    constructor()
    {
        this.element = null;
    }

    render()
    {
        return `
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
                <div class="container-fluid px-4">
                    <!-- Logo -->
                    <a class="navbar-brand d-flex align-items-center" href="#hero">
                        <i class="fas fa-microchip me-2"></i>
                        <span class="fw-bold">AC Course</span>
                    </a>

                    <!-- Toggle button for mobile -->
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <!-- Navbar links -->
                    <div class="collapse navbar-collapse" id="navbarContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#hero">
                                    <i class="fas fa-home me-1"></i> Acasă
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#fundamente">
                                    <i class="fas fa-cogs me-1"></i> Structură
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#ciclu">
                                    <i class="fas fa-sync-alt me-1"></i> Ciclu
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#interfete">
                                    <i class="fas fa-memory me-1"></i> Memorie
                                </a>
                            </li>
                            <li class="nav-item ms-lg-3">
                                <button class="btn btn-outline-light btn-sm">
                                    <i class="fas fa-book me-1"></i> Test
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
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
        // Smooth scroll pentru link-uri
        const links = this.element.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'auto', block: 'start' });
                }
            });
        });

        // Schimbă background-ul navbar la scroll
        window.addEventListener('scroll', () => {
            const navbar = this.element.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}

// Create instance
const navbar = new Navbar();
