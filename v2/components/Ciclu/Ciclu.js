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
        this.showStep('1');
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
