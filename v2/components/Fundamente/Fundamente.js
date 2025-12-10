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
                        <div class="col-12 fundamente-content">
                            <div class="section-header">
                                <h2 class="section-title">Fundamente & Structură</h2>
                                <p class="section-subtitle">Arhitectura de bază a unității centrale de procesare</p>
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
        }
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
            });
        });
    }
}

// Create instance
const fundamente = new Fundamente();
