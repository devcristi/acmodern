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
                                    <h5>Schema bloc care indică funcţionarea ciclică a procesorului</h5>
                                    <p>(MP = memoria principală)</p>
                                </div>

                                <svg class="flow-svg" viewBox="0 0 400 520">
                                    <!-- Start node -->
                                    <rect x="140" y="10" width="120" height="40" rx="20" class="node-start"/>
                                    <text x="200" y="36" class="node-text">Start</text>
                                    
                                    <!-- Arrow Start -> Fetch -->
                                    <line x1="200" y1="50" x2="200" y2="75" class="flow-line"/>
                                    <polygon points="200,85 195,75 205,75" class="flow-arrow"/>
                                    
                                    <!-- Fetch node -->
                                    <rect x="90" y="85" width="220" height="55" rx="8" class="node-process"/>
                                    <text x="200" y="108" class="node-text">Adresare și aducere instrucțiune</text>
                                    <text x="200" y="126" class="node-text">curentă din MP (Fetch)</text>
                                    
                                    <!-- Arrow Fetch -> Decode -->
                                    <line x1="200" y1="140" x2="200" y2="165" class="flow-line"/>
                                    <polygon points="200,175 195,165 205,165" class="flow-arrow"/>
                                    
                                    <!-- Decode node -->
                                    <rect x="100" y="175" width="200" height="45" rx="8" class="node-process"/>
                                    <text x="200" y="198" class="node-text">Decodificare</text>
                                    <text x="200" y="214" class="node-text">cod instrucțiune</text>
                                    
                                    <!-- Arrow Decode -> Execute -->
                                    <line x1="200" y1="220" x2="200" y2="245" class="flow-line"/>
                                    <polygon points="200,255 195,245 205,245" class="flow-arrow"/>
                                    
                                    <!-- Execute node -->
                                    <rect x="90" y="255" width="220" height="55" rx="8" class="node-process"/>
                                    <text x="200" y="278" class="node-text">Execuție instrucțiune</text>
                                    <text x="200" y="296" class="node-text-small">(secvență de microoperații)</text>
                                    
                                    <!-- Arrow Execute -> Decision -->
                                    <line x1="200" y1="310" x2="200" y2="335" class="flow-line"/>
                                    <polygon points="200,345 195,335 205,335" class="flow-arrow"/>
                                    
                                    <!-- Decision diamond -->
                                    <polygon points="200,345 260,385 200,425 140,385" class="node-decision"/>
                                    <text x="200" y="390" class="node-text">Stop ?</text>
                                    
                                    <!-- NU label and loop back -->
                                    <text x="115" y="380" class="label-nu">NU</text>
                                    <line x1="140" y1="385" x2="50" y2="385" class="flow-line"/>
                                    <line x1="50" y1="385" x2="50" y2="70" class="flow-line"/>
                                    <line x1="50" y1="70" x2="195" y2="70" class="flow-line"/>
                                    <polygon points="200,70 190,65 190,75" class="flow-arrow"/>
                                    
                                    <!-- DA label and arrow to Stop -->
                                    <text x="220" y="440" class="label-da">DA</text>
                                    <line x1="200" y1="425" x2="200" y2="455" class="flow-line"/>
                                    <polygon points="200,465 195,455 205,455" class="flow-arrow"/>
                                    
                                    <!-- Stop node -->
                                    <rect x="140" y="465" width="120" height="40" rx="8" class="node-stop"/>
                                    <text x="200" y="489" class="node-text">Stop</text>
                                </svg>
                            </div>

                            <!-- Blocul Procesor - Legături externe -->
                            <div class="processor-block-card">
                                <div class="flow-card-header">
                                    <h5>Blocul Procesor - Legături Externe</h5>
                                    <p>Liniile de intrare date (D<sub>in</sub>) și ieșire date (D<sub>out</sub>) se unifică într-o magistrală bidirecțională.</p>
                                </div>
                                
                                <div class="processor-diagrams">
                                    <!-- Diagram a) Separate lines -->
                                    <div class="proc-diagram">
                                        <svg class="proc-svg" viewBox="0 0 200 310">
                                            <!-- Labels top -->
                                            <text x="55" y="15" class="proc-label">C</text>
                                            <text x="145" y="15" class="proc-label">S</text>
                                            
                                            <!-- Arrows from top (C out, S in) -->
                                            <line x1="55" y1="20" x2="55" y2="50" class="proc-line"/>
                                            <polygon points="55,20 50,30 60,30" class="proc-arrow-up"/>
                                            
                                            <line x1="145" y1="20" x2="145" y2="50" class="proc-line"/>
                                            <polygon points="145,50 140,40 150,40" class="proc-arrow-down"/>
                                            
                                            <!-- UCP Box -->
                                            <rect x="30" y="50" width="140" height="100" class="proc-box"/>
                                            <text x="100" y="105" class="proc-ucp-text">UCP</text>
                                            
                                            <!-- Arrows from bottom (I, Din, Dout) -->
                                            <line x1="55" y1="150" x2="55" y2="185" class="proc-line"/>
                                            <polygon points="55,150 50,160 60,160" class="proc-arrow-up"/>
                                            
                                            <line x1="100" y1="150" x2="100" y2="185" class="proc-line"/>
                                            <polygon points="100,150 95,160 105,160" class="proc-arrow-up"/>
                                            
                                            <line x1="145" y1="150" x2="145" y2="185" class="proc-line"/>
                                            <polygon points="145,185 140,175 150,175" class="proc-arrow-down"/>
                                            
                                            <!-- Labels bottom -->
                                            <text x="55" y="200" class="proc-label">I</text>
                                            <text x="100" y="200" class="proc-label-sub">D<tspan baseline-shift="sub" font-size="9">in</tspan></text>
                                            <text x="145" y="200" class="proc-label-sub">D<tspan baseline-shift="sub" font-size="9">out</tspan></text>
                                            
                                            <!-- Label a) -->
                                            <text x="100" y="300" class="proc-diagram-label">a)</text>
                                        </svg>
                                    </div>
                                    
                                    <!-- Diagram b) Bidirectional bus -->
                                    <div class="proc-diagram">
                                        <svg class="proc-svg" viewBox="0 0 200 320">
                                            <!-- Labels top -->
                                            <text x="55" y="15" class="proc-label">C</text>
                                            <text x="145" y="15" class="proc-label">S</text>
                                            <text x="55" y="15" class="proc-label">C</text>
                                            
                                            <!-- Arrows from top (C out, S in) -->
                                            <line x1="55" y1="20" x2="55" y2="50" class="proc-line"/>
                                            <polygon points="55,20 50,30 60,30" class="proc-arrow-up"/>
                                            
                                            <line x1="145" y1="20" x2="145" y2="50" class="proc-line"/>
                                            <polygon points="145,50 140,40 150,40" class="proc-arrow-down"/>
                                            
                                            <!-- UCP Box -->
                                            <rect x="30" y="50" width="140" height="100" class="proc-box"/>
                                            <text x="100" y="95" class="proc-ucp-text">UCP</text>
                                            
                                            <!-- Internal labels I, Din, Dout -->
                                            <text x="55" y="135" class="proc-label-small">I</text>
                                            <text x="100" y="135" class="proc-label-small-sub">D<tspan baseline-shift="sub" font-size="8">in</tspan></text>
                                            <text x="145" y="135" class="proc-label-small-sub">D<tspan baseline-shift="sub" font-size="8">out</tspan></text>
                                            
                                            <!-- Line I down from UCP (with arrow up into UCP) -->
                                            <line x1="55" y1="150" x2="55" y2="165" class="proc-line"/>
                                            <polygon points="55,150 50,160 60,160" class="proc-arrow-up"/>

                                            <!-- Line from I to Din -->
                                            <line x1="55" y1="165" x2="100" y2="165" class="proc-line"/>
                                            <polygon points="100,150 95,160 105,160" class="proc-arrow-up"/>
                                            
                                            <!-- Line Din down to buffer -->
                                            <line x1="100" y1="150" x2="100" y2="170" class="proc-line"/>
                                            
                                            <!-- Line Dout down to buffer -->
                                            <line x1="145" y1="150" x2="145" y2="170" class="proc-line"/>
                                            
                                            <!-- Buffer triangle Din (pointing down - input) -->
                                            <polygon points="100,170 90,190 110,190" class="proc-buffer"/>
                                            
                                            <!-- Stroked line connectting Din to UCP -->
                                            
                                            <!-- Buffer triangle Dout (pointing up - output) -->
                                            <polygon points="145,190 135,170 155,170" class="proc-buffer"/>
                                            
                                            <!-- Dotted line from Dout buffer to UCP -->
                                            <line x1="100" y1="170" x2="110" y2="170" class="proc-line-dotted"/>
                                            <line x1="110" y1="150" x2="110" y2="170" class="proc-line-dotted"/>

                                            <!-- Dotted line from Din buffer to UCP -->
                                            <line x1="130" y1="170" x2="140" y2="170" class="proc-line-dotted"/>
                                            <line x1="130" y1="150" x2="130" y2="170" class="proc-line-dotted"/>


                                            <polygon points="170,105 165,115 175,115" class="proc-arrow-up"/>
                                            <text x="180" y="145" class="proc-label-small">UCP</text>
                                            
                                            <!-- Lines from buffers down -->
                                            <line x1="100" y1="190" x2="100" y2="210" class="proc-line"/>
                                            <line x1="145" y1="190" x2="145" y2="210" class="proc-line"/>
                                            
                                            <!-- Horizontal merge line (bus) -->
                                            <line x1="100" y1="210" x2="145" y2="210" class="proc-line"/>
                                            <line x1="50" y1="200" x2="50" y2="210" class="proc-line"/>
                                        
                                            
                                            <!-- Bus label -->
                                            <text x="100" y="260" class="proc-label-bus">Magistrală bidirecțională de</text>
                                            <text x="100" y="275" class="proc-label-bus">date și instrucțiuni</text>
                                            
                                            <!-- Label b) -->
                                            <text x="100" y="305" class="proc-diagram-label">b)</text>
                                        </svg>
                                    </div>
                                </div>
                                
                                <div class="proc-legend">
                                    <p><strong>D<sub>in</sub></strong> - date de intrare &nbsp;|&nbsp; <strong>D<sub>out</sub></strong> - date de ieșire &nbsp;|&nbsp; <strong>C</strong> - comenzi externe (inclusiv adrese MP)</p>
                                    <p><strong>I</strong> - instrucțiuni &nbsp;|&nbsp; <strong>S</strong> - semnale de stare din exterior</p>
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

        // Animated flowchart sequence for SVG
        this.animateFlowchart();
        
        // Animate processor block diagram
        this.animateProcessorBlock();
    }

    animateFlowchart()
    {
        const svg = this.element?.querySelector('.flow-svg');
        if (!svg || !window.gsap || !window.ScrollTrigger) return;

        // Get all lines and calculate their actual lengths
        const lines = svg.querySelectorAll('.flow-line');
        lines.forEach(line => {
            const length = Math.sqrt(
                Math.pow(line.x2.baseVal.value - line.x1.baseVal.value, 2) +
                Math.pow(line.y2.baseVal.value - line.y1.baseVal.value, 2)
            );
            line.style.strokeDasharray = length;
            line.style.strokeDashoffset = length;
        });

        // Get elements
        const nodes = svg.querySelectorAll('.node-start, .node-process, .node-decision, .node-stop');
        const texts = svg.querySelectorAll('.node-text, .node-text-small');
        const arrows = svg.querySelectorAll('.flow-arrow');
        const labels = svg.querySelectorAll('.label-nu, .label-da');

        // Set initial state - grayscale/inactive
        gsap.set(nodes, { filter: 'grayscale(100%) brightness(1.2)', opacity: 0.4 });
        gsap.set(texts, { opacity: 0.3 });
        gsap.set(arrows, { opacity: 0, scale: 0, transformOrigin: 'center' });
        gsap.set(labels, { opacity: 0, y: -5 });

        // Create timeline - plays once, resets when leaving viewport
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: svg,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reset"
            },
            defaults: { ease: "power2.out" }
        });

        // Helper to highlight a node with glow
        const highlightNode = (node, textEls, duration = 0.5) => {
            tl.to(node, { 
                filter: 'grayscale(0%) brightness(1) drop-shadow(0 0 4px rgba(155, 64, 234, 0.4))', 
                opacity: 1, 
                duration 
            });
            if (textEls) {
                tl.to(textEls, { opacity: 1, duration: 0.3 }, "<0.1");
            }
        };

        // Helper to draw a line with arrow
        const drawLine = (lineIndex, arrowIndex, duration = 0.4) => {
            tl.to(lines[lineIndex], { 
                strokeDashoffset: 0, 
                stroke: '#9B40EA',
                duration,
                ease: "power1.inOut"
            });
            if (arrowIndex !== null) {
                tl.to(arrows[arrowIndex], { 
                    opacity: 1, 
                    scale: 1, 
                    duration: 0.25,
                    ease: "back.out(2)"
                }, "-=0.1");
            }
        };

        // Animation sequence
        // 1. Start node
        highlightNode(svg.querySelector('.node-start'), [svg.querySelectorAll('text')[0]]);

        // 2. Arrow to Fetch
        drawLine(0, 0);

        // 3. Fetch node
        highlightNode(
            svg.querySelectorAll('.node-process')[0], 
            [svg.querySelectorAll('text')[1], svg.querySelectorAll('text')[2]]
        );

        // 4. Arrow to Decode
        drawLine(1, 1);

        // 5. Decode node
        highlightNode(
            svg.querySelectorAll('.node-process')[1], 
            [svg.querySelectorAll('text')[3], svg.querySelectorAll('text')[4]]
        );

        // 6. Arrow to Execute
        drawLine(2, 2);

        // 7. Execute node
        highlightNode(
            svg.querySelectorAll('.node-process')[2], 
            [svg.querySelectorAll('text')[5], svg.querySelector('.node-text-small')]
        );

        // 8. Arrow to Decision
        drawLine(3, 3);

        // 9. Decision diamond
        highlightNode(svg.querySelector('.node-decision'), [svg.querySelectorAll('text')[7]]);

        // 10. NU path - loop back (all 3 lines of the L-shape)
        tl.to(svg.querySelector('.label-nu'), { opacity: 1, y: 0, duration: 0.3, ease: "back.out(2)" });
        // Horizontal line left from diamond
        tl.to(lines[4], { strokeDashoffset: 0, stroke: '#dc3545', duration: 0.3 });
        // Vertical line up
        tl.to(lines[5], { strokeDashoffset: 0, stroke: '#dc3545', duration: 0.5 }, "-=0.1");
        // Horizontal line right to Fetch
        tl.to(lines[6], { strokeDashoffset: 0, stroke: '#dc3545', duration: 0.3 }, "-=0.1");
        tl.to(arrows[4], { opacity: 1, scale: 1, duration: 0.25, ease: "back.out(2)" }, "-=0.1");

        // Brief pause at loop
        tl.to({}, { duration: 0.5 });

        // 11. DA path to Stop
        tl.to(svg.querySelector('.label-da'), { opacity: 1, y: 0, duration: 0.3, ease: "back.out(2)" });
        drawLine(7, 5);

        // 12. Stop node
        tl.to(svg.querySelector('.node-stop'), { 
            filter: 'grayscale(0%) brightness(1) drop-shadow(0 0 4px rgba(220, 53, 69, 0.4))', 
            opacity: 1, 
            duration: 0.5 
        });
        tl.to(svg.querySelectorAll('text')[10], { opacity: 1, duration: 0.3 }, "<0.1");
    }

    animateProcessorBlock()
    {
        const card = this.element?.querySelector('.processor-block-card');
        if (!card || !window.gsap || !window.ScrollTrigger) return;

        const svgs = card.querySelectorAll('.proc-svg');
        if (svgs.length < 2) return;

        // Get elements from both diagrams
        const svg1 = svgs[0];
        const svg2 = svgs[1];

        // All lines and arrows
        const allLines = card.querySelectorAll('.proc-line');
        const allArrows = card.querySelectorAll('.proc-arrow-up, .proc-arrow-down');
        const boxes = card.querySelectorAll('.proc-box');
        const ucpTexts = card.querySelectorAll('.proc-ucp-text');
        const labels = card.querySelectorAll('.proc-label, .proc-label-sub, .proc-label-small, .proc-label-small-sub');
        const buffers = card.querySelectorAll('.proc-buffer');
        const busLabels = card.querySelectorAll('.proc-label-bus');

        // Calculate line lengths and set up dash arrays
        allLines.forEach(line => {
            const length = Math.sqrt(
                Math.pow(line.x2.baseVal.value - line.x1.baseVal.value, 2) +
                Math.pow(line.y2.baseVal.value - line.y1.baseVal.value, 2)
            );
            line.style.strokeDasharray = length;
            line.style.strokeDashoffset = length;
        });

        // Initial state
        gsap.set(boxes, { opacity: 0.3, scale: 0.95, transformOrigin: 'center' });
        gsap.set(ucpTexts, { opacity: 0 });
        gsap.set(allArrows, { opacity: 0, scale: 0, transformOrigin: 'center' });
        gsap.set(labels, { opacity: 0 });
        gsap.set(buffers, { opacity: 0, scale: 0, transformOrigin: 'center' });
        gsap.set(busLabels, { opacity: 0, y: 10 });

        // Create timeline - plays once, resets when leaving viewport
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: "top 75%",
                end: "bottom 20%",
                toggleActions: "play none none reset"
            },
            defaults: { ease: "power2.out" }
        });

        // Animation sequence
        // 1. Show both UCP boxes
        tl.to(boxes, { opacity: 1, scale: 1, duration: 0.5, stagger: 0.2 })
          .to(ucpTexts, { opacity: 1, duration: 0.3 }, "-=0.3");

        // 2. Draw top lines (C and S) with arrows
        const topLines = [allLines[0], allLines[1], allLines[5], allLines[6]];
        const topArrows = [allArrows[0], allArrows[1], allArrows[4], allArrows[5]];
        tl.to(topLines, { strokeDashoffset: 0, duration: 0.4, stagger: 0.1 })
          .to(topArrows, { opacity: 1, scale: 1, duration: 0.25, stagger: 0.1, ease: "back.out(2)" }, "-=0.3");

        // 3. Show C and S labels
        const csLabels = [labels[0], labels[1], labels[6], labels[7]];
        tl.to(csLabels, { opacity: 1, duration: 0.3 }, "-=0.2");

        // 4. Draw bottom lines for diagram a (I, Din, Dout)
        const bottomLinesA = [allLines[2], allLines[3], allLines[4]];
        const bottomArrowsA = [allArrows[2], allArrows[3], allArrows[6]];
        tl.to(bottomLinesA, { strokeDashoffset: 0, duration: 0.4, stagger: 0.1 })
          .to(bottomArrowsA, { opacity: 1, scale: 1, duration: 0.25, stagger: 0.1, ease: "back.out(2)" }, "-=0.3");

        // 5. Show I, Din, Dout labels for diagram a
        const bottomLabelsA = [labels[2], labels[3], labels[4]];
        tl.to(bottomLabelsA, { opacity: 1, duration: 0.3 }, "-=0.2");

        // 6. Show internal labels in diagram b
        const internalLabels = [labels[8], labels[9], labels[10]];
        tl.to(internalLabels, { opacity: 1, duration: 0.3 });

        // 7. Draw lines from UCP to buffers in diagram b
        const toBufferLines = [allLines[7], allLines[8], allLines[9]];
        tl.to(toBufferLines, { strokeDashoffset: 0, duration: 0.4, stagger: 0.08 })
          .to(allArrows[7], { opacity: 1, scale: 1, duration: 0.25, ease: "back.out(2)" }, "-=0.2");

        // 8. Show buffer triangles
        tl.to(buffers, { opacity: 1, scale: 1, duration: 0.4, stagger: 0.15, ease: "back.out(1.5)" });

        // 9. Draw lines from buffers to merge point
        const mergeLines = [allLines[10], allLines[11], allLines[12], allLines[13]];
        tl.to(mergeLines, { strokeDashoffset: 0, duration: 0.35, stagger: 0.1 })
          .to(allArrows[8], { opacity: 1, scale: 1, duration: 0.25, ease: "back.out(2)" }, "-=0.1");

        // 10. Show bus labels
        tl.to(busLabels, { opacity: 1, y: 0, duration: 0.4, stagger: 0.1 });
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
