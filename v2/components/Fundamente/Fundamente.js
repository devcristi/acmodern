class Fundamente
{
    constructor()
    {
        this.element = null;
    }

    render() 
    {
        return `
            <!-- Fundamente Section -->
            <section id="fundamente" class="fundamente-section">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 fundamente-content gsap-reveal">
                            <div class="section-header">
                                <h2 class="section-title parallax-slow">Fundamente & Structură</h2>
                                <p class="section-subtitle parallax-fast">Arhitectura de bază a unității centrale de procesare</p>
                            </div>
                            
                            <!-- Lead Paragraph -->
                            <div class="lead-text">
                                <p>Unitatea Centrală de Prelucrare (UCP) este un procesor de <strong>uz general</strong> cu set de instrucțiuni, responsabil de interpretarea și execuția programelor.</p>
                            </div>

                            <!-- Accordion Section -->
                            <div class="accordion-section">
                                <div class="accordion-item-custom">
                                    <div class="accordion-header-custom" data-accordion="1">
                                        <i class="fas fa-sitemap"></i>
                                        <span>Clasificare și Rol</span>
                                        <i class="fas fa-chevron-down accordion-icon"></i>
                                    </div>
                                    <div class="accordion-content" data-content="1">
                                        <ul class="custom-list">
                                            <li><strong>Procesor de uz general:</strong> Spre deosebire de procesoarele de I/O sau aritmetice care au funcții limitate, UCP execută un set specific de instrucțiuni binare furnizate din exterior.</li>
                                            <li><strong>Uniprocesor vs Multiprocesor:</strong> În accepțiunea clasică (von Neumann), mașina conține o singură UCP (uniprocesor). Sistemele cu două sau mai multe UCP se numesc multiprocesor.</li>
                                            <li><strong>Considerații arhitecturale:</strong>
                                                <ul class="nested-list">
                                                    <li>Setul de instrucțiuni;</li>
                                                    <li>Organizarea registrelor ALU și UC;</li>
                                                    <li>Modul de comunicare cu dispozitivele externe.</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="accordion-item-custom">
                                    <div class="accordion-header-custom" data-accordion="2">
                                        <i class="fas fa-cogs"></i>
                                        <span>UCP ca Automat de Ordinul 3</span>
                                        <i class="fas fa-chevron-down accordion-icon"></i>
                                    </div>
                                    <div class="accordion-content" data-content="2">
                                        <div class="info-box">
                                            <strong>Definiție:</strong> Structura procesorului presupune o buclă de reacție între două automate componente.
                                        </div>
                                        <p>Procesorul este compus din:</p>
                                        <ol class="custom-list">
                                            <li><strong>Unitatea de Prelucrare a Datelor (ALU + Registre):</strong> Automat de ordinul ≥ 2.</li>
                                            <li><strong>Unitatea de Control (UC):</strong> Automat de ordinul ≥ 2.</li>
                                        </ol>
                                        <p>Deoarece UC își modifică secvența de comenzi pe baza <strong>indicatorilor de condiții (Flags)</strong> primiți de la ALU (feedback), întregul procesor devine un <strong>Automat de Ordinul 3</strong>.</p>
                                        
                                        <!-- Animated Diagram -->
                                        <div class="ucp-diagram-container">
                                            <svg viewBox="0 0 800 400" class="ucp-svg">
                                                <!-- Boxes -->
                                                <g class="diagram-box-group alu-group">
                                                    <rect x="50" y="100" width="250" height="150" rx="10" class="diagram-box" />
                                                    <text x="175" y="165" class="diagram-text">UNITATE DE</text>
                                                    <text x="175" y="190" class="diagram-text">PRELUCRARE</text>
                                                    <text x="175" y="215" class="diagram-text-small">(ALU și registre)</text>
                                                </g>

                                                <g class="diagram-box-group uc-group">
                                                    <rect x="500" y="100" width="250" height="150" rx="10" class="diagram-box" />
                                                    <text x="625" y="165" class="diagram-text">UNITATE</text>
                                                    <text x="625" y="190" class="diagram-text">DE</text>
                                                    <text x="625" y="215" class="diagram-text">CONTROL</text>
                                                </g>

                                                <!-- Arrows / Paths -->
                                                <!-- ALU to UC (Flags) -->
                                                <path d="M 305 130 L 495 130" class="flow-path" id="path-flags" />
                                                <text x="400" y="115" class="label-text">Indicatori de condiții</text>

                                                <!-- UC to ALU (Commands) -->
                                                <path d="M 495 220 L 305 220" class="flow-path" id="path-commands" />
                                                <text x="400" y="245" class="label-text">Comenzi interne</text>

                                                <!-- External ALU -->
                                                <path d="M 175 100 L 175 10" class="flow-path" />
                                                <text x="175" y="25" class="label-text">Ieșire date</text>

                                                <path d="M 175 340 L 175 250" class="flow-path" />
                                                <text x="175" y="365" class="label-text">Intrare date</text>

                                                <!-- External UC -->
                                                <path d="M 625 100 L 625 10" class="flow-path" />
                                                <text x="625" y="25" class="label-text">Comenzi externe</text>

                                                <path d="M 625 340 L 625 250" class="flow-path" />
                                                <text x="625" y="365" class="label-text-small">Instrucțiuni & Stare</text>

                                                <!-- Arrowheads (Markers) -->
                                                <defs>
                                                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                                                        <polygon points="0 0, 10 3.5, 0 7" fill="#9B40EA" />
                                                    </marker>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Tabs Section -->
                            <div class="tabs-section">
                                <h5 class="section-subtitle-small"><i class="fas fa-layer-group"></i> Componente Interne Detaliate</h5>
                                
                                <div class="tabs-container">
                                    <div class="tabs-nav">
                                        <button class="tab-button active" data-tab="alu">
                                            <i class="fas fa-calculator"></i>
                                            Unitatea de Prelucrare (ALU)
                                        </button>
                                        <button class="tab-button" data-tab="uc">
                                            <i class="fas fa-microchip"></i>
                                            Unitatea de Control (UC)
                                        </button>
                                    </div>

                                    <div class="tabs-content">
                                        <div class="tab-pane active" data-pane="alu">
                                            <p>Efectuează operații cu operanzi de intrare codificați pe <strong>n biți</strong> (de obicei egal cu lățimea magistralei interne).</p>
                                            <ul class="custom-list">
                                                <li><strong>Funcții:</strong> Operații aritmetice, logice, decodificare, multiplexare.</li>
                                                <li><strong>Registre locale:</strong> Memorie de mare viteză pentru stocarea temporară a operanzilor.</li>
                                                <li><strong>Ieșiri cheie:</strong> Furnizează rezultatul datelor și <strong>Indicatori de condiții (Flags)</strong> (transport, împrumut, zero, semn, paritate etc.) stocați în registre de stare.</li>
                                            </ul>
                                        </div>

                                        <div class="tab-pane" data-pane="uc">
                                            <p>Generează succesiunea de comenzi (algoritmul de stare). Poate fi implementată în două moduri:</p>
                                            <div class="cards-row">
                                                <div class="info-card primary">
                                                    <strong>1. UC Cablată</strong>
                                                    <p>Algoritm implementat în structura fizică (hardware). Mai rapidă.</p>
                                                </div>
                                                <div class="info-card success">
                                                    <strong>2. UC Microprogramată</strong>
                                                    <p>Comenzile sunt stocate într-o memorie de control de mare viteză. Mai flexibilă.</p>
                                                </div>
                                            </div>
                                            <p><strong>Sub-unități funcționale:</strong> Control la nivel de micro-operații și Control la nivel de secvențiere (automat de adresare).</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    mount(elementId)
    {
        this.element = document.getElementById(elementId);
        if (this.element) {
            this.element.innerHTML = this.render();
            this.initAccordion();
            this.initTabs();
            this.initGSAP();
        }
    }

    initGSAP()
    {
        if (typeof gsap === 'undefined') return;

        // Force EVERYTHING in this section to be visible
        gsap.set(".fundamente-section, .fundamente-content, .accordion-item-custom", { 
            visibility: "visible", 
            opacity: 1 
        });

        // Parallax for titles - REVERSED (moves opposite to scroll)
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);

            gsap.to(".fundamente-section .parallax-slow", {
                scrollTrigger: {
                    trigger: ".fundamente-section",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5
                },
                y: -100, 
                ease: "none"
            });

            gsap.to(".fundamente-section .parallax-fast", {
                scrollTrigger: {
                    trigger: ".fundamente-section",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                },
                y: -180, 
                ease: "none"
            });

            // Slide content in/out effect (very cool)
            gsap.from(".fundamente-content", {
                scrollTrigger: {
                    trigger: ".fundamente-section",
                    start: "top 95%",
                    end: "top 30%",
                    scrub: 1
                },
                scale: 0.95,
                opacity: 0.5,
                x: -30,
                ease: "power1.inOut"
            });
        }

        // Header and Card reveal
        gsap.from(".fundamente-section .section-header, .fundamente-section .accordion-item-custom", {
            scrollTrigger: {
                trigger: ".fundamente-section",
                start: "top 90%",
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            clearProps: "all"
        });

        // Initial diagram setup (hidden initially for entry animation)
        gsap.set(".diagram-box-group", { opacity: 0, scale: 0.8 });
    }

    animateDiagram()
    {
        if (typeof gsap === 'undefined') return;

        // Reveal boxes sequentially
        gsap.to(".diagram-box-group", {
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.3,
            ease: "back.out(1.7)",
            clearProps: "all"
        });

        // Pulse boxes loop
        gsap.to(".diagram-box", {
            strokeWidth: 4,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Animate flow paths (energy pulse)
        const paths = document.querySelectorAll('.flow-path');
        paths.forEach(path => {
            // Create a flowing dash effect
            path.style.strokeDasharray = "15, 25";
            
            gsap.to(path, {
                strokeDashoffset: -200,
                duration: 4,
                repeat: -1,
                ease: "none"
            });

            // Add a slight color pulse to the arrows
            gsap.to(path, {
                stroke: "#7A2DC2",
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        });
    }

    initAccordion()
    {
        const accordionHeaders = this.element.querySelectorAll('.accordion-header-custom');
        
        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const accordionId = header.getAttribute('data-accordion');
                const content = this.element.querySelector(`[data-content="${accordionId}"]`);
                const icon = header.querySelector('.accordion-icon');
                const isOpen = content.classList.contains('active');
                
                // Close all accordions
                this.element.querySelectorAll('.accordion-content').forEach(c => {
                    c.classList.remove('active');
                });
                this.element.querySelectorAll('.accordion-icon').forEach(i => {
                    i.style.transform = 'rotate(0deg)';
                });
                
                // Open clicked accordion if it was closed
                if (!isOpen) {
                    content.classList.add('active');
                    icon.style.transform = 'rotate(180deg)';

                    // If it's the diagram accordion, trigger animation
                    if (accordionId === "2") {
                        this.animateDiagram();
                    }
                }

                // Refresh ScrollTrigger as the page height has changed
                if (window.ScrollTrigger) {
                    setTimeout(() => {
                        ScrollTrigger.refresh();
                    }, 400); // Wait for CSS transition to finish (0.4s)
                }
            });
        });
    }

    initTabs()
    {
        const tabButtons = this.element.querySelectorAll('.tab-button');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabId = button.getAttribute('data-tab');
                
                // Remove active class from all buttons and panes
                this.element.querySelectorAll('.tab-button').forEach(b => {
                    b.classList.remove('active');
                });
                this.element.querySelectorAll('.tab-pane').forEach(p => {
                    p.classList.remove('active');
                });
                
                // Add active class to clicked button and corresponding pane
                button.classList.add('active');
                this.element.querySelector(`[data-pane="${tabId}"]`).classList.add('active');

                // Refresh ScrollTrigger
                if (window.ScrollTrigger) {
                    ScrollTrigger.refresh();
                }
            });
        });
    }
}

// Create instance
const fundamente = new Fundamente();
