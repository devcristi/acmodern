class Ciclu
{
    constructor()
    {
        this.element = null;
        this.currentStep = 1;
    }

    render() 
    {
        return `
            <!-- Ciclu Section -->
            <section id="ciclu" class="ciclu-section">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 ciclu-content">
                            <div class="section-header">
                                <h2 class="section-title">Ciclul Instrucțiune & Sincronizarea</h2>
                                <p class="section-subtitle">Desfășurarea operațiilor în cadrul procesorului</p>
                            </div>
                            
                            <!-- Niveluri Sincronizare -->
                            <div class="info-card-ciclu">
                                <h6 class="info-card-title">
                                    <i class="fas fa-clock"></i> Niveluri de Sincronizare
                                </h6>
                                <ol class="sync-list">
                                    <li>Nivel elementar: <strong>Semnalul de ceas</strong>.</li>
                                    <li>Nivel transfer date: Sincronizare cu MP și I/O.</li>
                                    <li>Nivel evenimente externe: <strong>Întreruperi</strong> (Sincronizarea cu evenimente externe asincrone).</li>
                                </ol>
                            </div>

                            <!-- Cycle Viewer -->
                            <h5 class="cycle-main-title">Desfășurarea Ciclului Instrucțiune (CI)</h5>
                            
                            <div class="cycle-viewer">
                                <div class="cycle-controls">
                                    <button class="cycle-btn" data-step="1">
                                        <span class="step-number">1</span>
                                        <span class="step-name">Fetch</span>
                                    </button>
                                    <button class="cycle-btn" data-step="2">
                                        <span class="step-number">2</span>
                                        <span class="step-name">Decode</span>
                                    </button>
                                    <button class="cycle-btn" data-step="3">
                                        <span class="step-number">3</span>
                                        <span class="step-name">Execute</span>
                                    </button>
                                    <button class="cycle-btn danger" data-step="4">
                                        <span class="step-number">4</span>
                                        <span class="step-name">Interrupts</span>
                                    </button>
                                </div>

                                <div class="cycle-content-wrapper">
                                    <div class="cycle-step active" data-content="1">
                                        <div class="step-icon">
                                            <i class="fas fa-download"></i>
                                        </div>
                                        <h5>Faza 1: Adresare și Aducere (Fetch)</h5>
                                        <p>Este primul <em>Ciclu Mașină (CM)</em>. UC adresează și controlează aducerea instrucțiunii curente din Memoria Principală.</p>
                                    </div>
                                    
                                    <div class="cycle-step" data-content="2">
                                        <div class="step-icon">
                                            <i class="fas fa-code"></i>
                                        </div>
                                        <h5>Faza 2: Decodificare</h5>
                                        <p>UC decodifică codul instrucțiunii și generează secvența de comenzi specifice către ALU și exterior (ex: citirea operanzilor).</p>
                                    </div>
                                    
                                    <div class="cycle-step" data-content="3">
                                        <div class="step-icon">
                                            <i class="fas fa-cogs"></i>
                                        </div>
                                        <h5>Faza 3: Execuție</h5>
                                        <p>ALU execută micro-operațiile (aritmetice/logice) și setează indicatorii. Rezultatul este stocat în registre interne sau externe (MP, I/O).</p>
                                    </div>
                                    
                                    <div class="cycle-step" data-content="4">
                                        <div class="step-icon danger">
                                            <i class="fas fa-exclamation-triangle"></i>
                                        </div>
                                        <h5>Faza 4: Test Întreruperi</h5>
                                        <p>Se face la <em>sfârșitul</em> fiecărui ciclu instrucțiune. Dacă există o cerere, UCP suspendă programul curent pentru a trata întreruperea.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Animated Flowchart -->
                            <div class="flow-diagram-card">
                                <div class="flow-card-header">
                                    <h5>Flux Animat al Ciclului Instrucțiune</h5>
                                    <p>Start → Fetch → Decode → Execute → Test Stop → buclă sau terminare.</p>
                                </div>

                                <div class="flow-diagram">
                                    <div class="flow-node start" data-flow-step="1">Start</div>
                                    <div class="flow-connector" data-flow-step="c1"></div>

                                    <div class="flow-node" data-flow-step="2">
                                        Adresare și aducere instrucțiune curentă din MP (Fetch)
                                    </div>
                                    <div class="flow-connector" data-flow-step="c2"></div>

                                    <div class="flow-node" data-flow-step="3">Decodificare cod instrucțiune</div>
                                    <div class="flow-connector" data-flow-step="c3"></div>

                                    <div class="flow-node" data-flow-step="4">Execuție instrucțiune<br><small>(secvență de microoperații)</small></div>
                                    <div class="flow-connector" data-flow-step="c4"></div>

                                    <div class="flow-node decision" data-flow-step="5">
                                        <div class="decision-label">Stop ?</div>
                                        <div class="decision-answers">
                                            <span class="answer-no">NU</span>
                                            <span class="answer-yes">DA</span>
                                        </div>
                                    </div>
                                    <div class="flow-connector" data-flow-step="c5"></div>

                                    <div class="flow-node stop" data-flow-step="6">Stop</div>

                                    <div class="flow-loop" aria-hidden="true">
                                        <div class="loop-line"></div>
                                        <div class="loop-arrow"></div>
                                        <div class="loop-label">NU</div>
                                    </div>
                                </div>
                            </div>

                            <!-- Definitii Timp -->
                            <div class="time-definitions">
                                <h6 class="definitions-title">
                                    <i class="fas fa-info-circle"></i> Definiții Timp
                                </h6>
                                <ul class="definitions-list">
                                    <li>
                                        <strong>Ciclu Mașină (CM):</strong> 
                                        Suma activităților pentru o operație intermediară (ex: citire memorie). Un CI are mai multe CM.
                                    </li>
                                    <li>
                                        <strong>Timp de Ciclu UCP (Stare):</strong> 
                                        Timpul pentru cea mai scurtă micro-operație UCP. Inversul său este frecvența de ceas.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    mount(containerId)
    {
        const container = document.getElementById(containerId);
        if (!container) {
            return;
        }

        container.innerHTML = this.render();
        this.element = container.querySelector('.ciclu-section');

        this.initCycleViewer();
        this.showStep('1');        this.initGSAP();
    }

    initGSAP()
    {
        if (typeof gsap === 'undefined') return;

        // Slide in from right for Section 2
        gsap.from(".ciclu-content", {
            scrollTrigger: {
                trigger: ".ciclu-section",
                start: "top 95%",
                end: "top 40%",
                scrub: 1
            },
            x: 100,
            opacity: 0,
            scale: 0.9,
            ease: "power2.out"
        });

        // Parallax for Ciclu titles
        gsap.to(".ciclu-section .section-title", {
            scrollTrigger: {
                trigger: ".ciclu-section",
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5
            },
            y: -80,
            ease: "none"
        });

        // Animated flowchart sequence
        const flowContainer = this.element?.querySelector('.flow-diagram-card');
        const flowNodes = this.element?.querySelectorAll('.flow-node') || [];
        const flowConnectors = this.element?.querySelectorAll('.flow-connector') || [];
        const loopLine = this.element?.querySelector('.flow-loop .loop-line');
        const loopArrow = this.element?.querySelector('.flow-loop .loop-arrow');
        const loopLabel = this.element?.querySelector('.flow-loop .loop-label');

        if (flowContainer && flowNodes.length && flowConnectors.length) {
            gsap.set(flowNodes, { opacity: 0.35, scale: 0.97 });
            gsap.set(flowConnectors, { opacity: 0.25, background: "linear-gradient(180deg, #d2c8ef 0%, #c2b6f4 100%)" });
            gsap.set([loopLine, loopArrow, loopLabel], { opacity: 0.2 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: flowContainer,
                    start: "top 80%",
                    end: "bottom 30%",
                    toggleActions: "play pause resume reset"
                },
                repeat: -1,
                repeatDelay: 0.8,
                defaults: { ease: "power1.out" }
            });

            flowNodes.forEach((node, idx) => {
                tl.to(node, {
                    opacity: 1,
                    scale: 1,
                    boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
                    duration: 0.35
                }, "+=0.1");

                if (flowConnectors[idx]) {
                    tl.to(flowConnectors[idx], {
                        opacity: 1,
                        background: "linear-gradient(180deg, #9B40EA 0%, #7A2DC2 100%)",
                        duration: 0.25
                    }, "<0.05");
                }
            });

            // Highlight the loop back (NU)
            tl.to([loopLine, loopArrow, loopLabel], {
                opacity: 1,
                duration: 0.3
            }, "+=0.2");

            // Fade everything down before repeating
            tl.to(flowNodes, {
                opacity: 0.35,
                scale: 0.97,
                boxShadow: "none",
                duration: 0.25
            }, "+=0.4");

            tl.to(flowConnectors, {
                opacity: 0.25,
                background: "linear-gradient(180deg, #d2c8ef 0%, #c2b6f4 100%)",
                duration: 0.25
            }, "<");

            tl.to([loopLine, loopArrow, loopLabel], {
                opacity: 0.2,
                duration: 0.2
            }, "<");
        }
    }

    initCycleViewer()
    {
        if (!this.element) {
            return;
        }

        const buttons = this.element.querySelectorAll('.cycle-btn');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const step = button.getAttribute('data-step');
                this.showStep(step);
            });
        });
    }

    showStep(step)
    {
        if (!this.element) {
            return;
        }

        this.element.querySelectorAll('.cycle-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        this.element.querySelectorAll('.cycle-step').forEach(content => {
            content.classList.remove('active');
        });

        const selectedBtn = this.element.querySelector(`[data-step="${step}"]`);
        const selectedStep = this.element.querySelector(`[data-content="${step}"]`);

        if (selectedBtn) {
            selectedBtn.classList.add('active');
        }
        if (selectedStep) {
            selectedStep.classList.add('active');
        }
    }
}

// Create instance
const ciclu = new Ciclu();
