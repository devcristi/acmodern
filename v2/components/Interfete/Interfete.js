class Interfete
{
    constructor()
    {
        this.element = null;
    }

    render() 
    {
        return `
            <!-- Interfete Section -->
            <section id="interfete" class="interfete-section gsap-reveal">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="section-title">Interfațare și Arhitecturi de Memorie</h2>
                            <p class="section-subtitle">Comunicare cu exteriorul și organizarea memoriei</p>
                            
                            <div class="lead-text">
                                <div class="border-accent"></div>
                                <p>Comunicarea cu exteriorul se face pe magistrale (bus). De obicei, liniile de date intrare (D<sub>in</sub>) și ieșire (D<sub>out</sub>) se unifică într-o <strong>magistrală bidirecțională</strong>.</p>
                            </div>

                            <h5 class="subsection-title">Arhitecturi de Memorie</h5>

                            <div class="row g-4 mb-5">
                                <div class="col-lg-6">
                                    <div class="architecture-card von-neumann gsap-reveal">
                                        <div class="arch-icon">
                                            <i class="bi bi-diagram-2"></i>
                                        </div>
                                        <h4 class="arch-title">Arhitectura Von Neumann</h4>
                                        <p class="arch-description">Memorie <strong>unică</strong> pentru Date și Instrucțiuni.</p>
                                        
                                        <div class="characteristics">
                                            <h6>Caracteristici:</h6>
                                            <ul>
                                                <li>Magistrală comună (gât de sticlă)</li>
                                            </ul>
                                        </div>

                                        <div class="arch-diagram von-neumann-diagram">
                                            <div class="diagram-component cpu">
                                                <i class="bi bi-cpu"></i>
                                                <span>CPU</span>
                                            </div>
                                            <div class="bus-line single"></div>
                                            <div class="diagram-component memory">
                                                <i class="bi bi-hdd-stack"></i>
                                                <span>Memorie<br>Unificată</span>
                                            </div>
                                        </div>

                                        <div class="pros-cons">
                                            <div class="pro-item">
                                                <i class="bi bi-check-circle-fill"></i>
                                                <div>
                                                    <strong>Avantaj:</strong> Simplificarea UCP (automat de adresare mai simplu), flexibilitate în alocarea memoriei.
                                                </div>
                                            </div>
                                            <div class="con-item">
                                                <i class="bi bi-x-circle-fill"></i>
                                                <div>
                                                    <strong>Dezavantaj:</strong> Viteză mai mică (conflicte de acces).
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="architecture-card harvard gsap-reveal">
                                        <div class="arch-icon">
                                            <i class="bi bi-diagram-3"></i>
                                        </div>
                                        <h4 class="arch-title">Arhitectura Harvard</h4>
                                        <p class="arch-description">Memorii <strong>separate</strong>: Memorie Program (MP) și Memorie Date (MD).</p>
                                        
                                        <div class="characteristics">
                                            <h6>Caracteristici:</h6>
                                            <ul>
                                                <li>Magistrale separate pentru adrese și date</li>
                                            </ul>
                                        </div>

                                        <div class="arch-diagram harvard-diagram">
                                            <div class="diagram-row">
                                                <div class="diagram-component memory small">
                                                    <i class="bi bi-file-code"></i>
                                                    <span>MP</span>
                                                </div>
                                                <div class="bus-line dual top"></div>
                                            </div>
                                            <div class="diagram-component cpu center">
                                                <i class="bi bi-cpu"></i>
                                                <span>CPU</span>
                                            </div>
                                            <div class="diagram-row">
                                                <div class="bus-line dual bottom"></div>
                                                <div class="diagram-component memory small">
                                                    <i class="bi bi-database"></i>
                                                    <span>MD</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="pros-cons">
                                            <div class="pro-item">
                                                <i class="bi bi-check-circle-fill"></i>
                                                <div>
                                                    <strong>Avantaj:</strong> Viteză mare (acces simultan la date și instrucțiuni).
                                                </div>
                                            </div>
                                            <div class="con-item">
                                                <i class="bi bi-x-circle-fill"></i>
                                                <div>
                                                    <strong>Dezavantaj:</strong> Complexitate crescută a magistralelor.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="technical-note gsap-reveal">
                                <div class="note-header">
                                    <i class="bi bi-tools"></i>
                                    <h5>Rolul Circuitelor Tampon (Buffers) de Interfață</h5>
                                </div>
                                <p>Nu au doar rol de deconectare (HiZ - înaltă impedanță), ci asigură parametrii electrici:</p>
                                
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="param-card">
                                            <div class="param-visual-icon">
                                                <div class="signal-flow">
                                                    <div class="signal-point source"></div>
                                                    <div class="signal-lines">
                                                        <div class="signal-line"></div>
                                                        <div class="signal-line"></div>
                                                        <div class="signal-line"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6>Fan-out</h6>
                                            <p>Factor de încărcare la ieșire</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="param-card">
                                            <div class="param-visual-icon">
                                                <div class="signal-flow reverse">
                                                    <div class="signal-lines">
                                                        <div class="signal-line"></div>
                                                        <div class="signal-line"></div>
                                                        <div class="signal-line"></div>
                                                    </div>
                                                    <div class="signal-point destination"></div>
                                                </div>
                                            </div>
                                            <h6>Fan-in</h6>
                                            <p>Factor de încărcare la intrare</p>
                                        </div>
                                    </div>
                                </div>

                                <p class="note-footer">Acestea asigură nivelurile corecte de tensiune și controlează capacitatea parazită pe linii.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    initGSAP() 
    {
        if (!window.gsap || !window.ScrollTrigger) return;

        gsap.registerPlugin(ScrollTrigger);

        // Prepare visibility: keep section visible, and animate children from hidden only when triggered
        const revealEls = Array.from(this.element.querySelectorAll('.gsap-reveal')).filter(el => el !== this.element);
        gsap.set(this.element, { autoAlpha: 1 });

        // Generic fade-in for any remaining gsap-reveal children
        gsap.from(revealEls, {
            scrollTrigger: {
                trigger: this.element,
                start: "top 95%",
            },
            autoAlpha: 0,
            y: 20,
            duration: 0.8,
            stagger: 0.15,
            overwrite: true,
            immediateRender: false
        });

        // Reveal section container
        gsap.to(this.element, {
            scrollTrigger: {
                trigger: this.element,
                start: "top 85%",
            },
            opacity: 1,
            y: 0,
            duration: 1,
            onComplete: () => this.element.classList.remove('gsap-reveal')
        });

        // Animate architecture cards
        gsap.from(this.element.querySelectorAll('.architecture-card'), {
            scrollTrigger: {
                trigger: ".architecture-card",
                start: "top 90%",
            },
            x: (i) => i === 0 ? -60 : 60,
            opacity: 0,
            duration: 1.2,
            stagger: 0.3,
            ease: "power3.out",
            immediateRender: false
        });

        // Animate technical note and param cards
        gsap.to(this.element.querySelector('.technical-note'), {
            scrollTrigger: {
                trigger: ".technical-note",
                start: "top 90%",
            },
            opacity: 1,
            y: 0,
            duration: 1
        });

        gsap.from(this.element.querySelectorAll('.param-card'), {
            scrollTrigger: {
                trigger: ".technical-note",
                start: "top 85%",
            },
            scale: 0.9,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)",
            immediateRender: false
        });

        ScrollTrigger.refresh();
    }

    mount(containerId)
    {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = this.render();
        this.element = container.querySelector('.interfete-section');

        // Fallback: ensure everything is visible even if GSAP/ScrollTrigger fail to load
        if (this.element) {
            const reveals = this.element.querySelectorAll('.gsap-reveal');
            reveals.forEach(el => {
                el.style.opacity = '1';
                el.style.visibility = 'visible';
                el.style.removeProperty('transform');
                el.style.removeProperty('will-change');
            });
            this.element.style.opacity = '1';
            this.element.style.visibility = 'visible';
        }

        // Make sure the section is visible before animations
        if (window.gsap && this.element) {
            gsap.set(this.element, { autoAlpha: 1 });
        }

        // Initialize GSAP with a small delay
        setTimeout(() => this.initGSAP(), 150);
    }
}

// Create instance
const interfete = new Interfete();
