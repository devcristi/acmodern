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

                            <!-- Diagrama Arhitecturi Von Neumann vs Harvard -->
                            <div class="architecture-diagram-card gsap-reveal">
                                <div class="flow-card-header">
                                    <h5>Diagrame bloc: Von Neumann vs Harvard</h5>
                                    <p>Exemplificarea deosebirilor dintre cele două arhitecturi</p>
                                </div>
                                
                                <svg class="arch-comparison-svg" viewBox="0 0 580 400">
                                    <!-- ===== (a) VON NEUMANN ===== -->
                                    <!-- Memory box -->
                                    <rect x="20" y="25" width="115" height="100" class="arch-box"/>
                                    <text x="77" y="52" class="arch-title">Memorie</text>
                                    <text x="77" y="85" class="arch-small">date și</text>
                                    <text x="77" y="102" class="arch-small">instrucțiuni</text>
                                    
                                    <!-- Adrese arrow -->
                                    <path d="M135,50 L190,50 L190,42 L205,55 L190,68 L190,60 L135,60 Z" class="arrow-block"/>
                                    <text x="170" y="42" class="arch-label">adrese</text>
                                    <text x="170" y="42" class="arch-label">sdfsdf</text>
                                    
                                    <!-- Date arrow (bidirectional) -->
                                    <path d="M135,95 L147,87 L147,91 L193,91 L193,87 L205,95 L193,103 L193,99 L147,99 L147,103 Z" class="arrow-block"/>
                                    <text x="170" y="118" class="arch-label">date</text>
                                    
                                    <!-- CPU box -->
                                    <rect x="210" y="40" width="90" height="70" class="arch-box filled"/>
                                    <text x="255" y="82" class="arch-title">CPU</text>
                                    
                                    <!-- (a) Label -->
                                    <text x="480" y="42" class="label-title">(a) Arhitectură</text>
                                    <text x="500" y="62" class="label-sub">von Neumann</text>
                                    <text x="500" y="80" class="label-detail">(memorie unică)</text>
                                    
                                    <!-- ===== SEPARATOR ===== -->
                                    <path d="M300,130 Q420,115 540,130" class="separator-line" fill="none"/>
                                    
                                    <!-- ===== (b) HARVARD ===== -->
                                    <!-- (b) Label -->
                                    <text x="480" y="158" class="label-title">(b) Arhitectură</text>
                                    <text x="500" y="178" class="label-sub">Harvard</text>
                                    <text x="480" y="196" class="label-detail">(memorii separate)</text>
                                    
                                    <!-- MP box -->
                                    <rect x="20" y="175" width="115" height="125" class="arch-box"/>
                                    <text x="77" y="202" class="arch-title">Memorie</text>
                                    <text x="77" y="222" class="arch-title">de Program</text>
                                    <text x="77" y="245" class="arch-sub">(MP)</text>
                                    <text x="77" y="275" class="arch-small">doar</text>
                                    <text x="77" y="292" class="arch-small">instrucțiuni</text>
                                    
                                    <!-- Adrese MP arrow -->
                                    <path d="M135,205 L175,205 L175,197 L190,210 L175,223 L175,215 L135,215 Z" class="arrow-block"/>
                                    <text x="162" y="197" class="arch-label-sm">adrese MP</text>
                                    
                                    <!-- Date MP arrow -->
                                    <path d="M135,260 L147,252 L147,256 L178,256 L178,252 L190,260 L178,268 L178,264 L147,264 L147,268 Z" class="arrow-block"/>
                                    <text x="162" y="283" class="arch-label-sm">date MP</text>
                                    
                                    <!-- CPU box -->
                                    <rect x="195" y="210" width="90" height="80" class="arch-box filled"/>
                                    <text x="240" y="258" class="arch-title">CPU</text>
                                    
                                    <!-- Adrese MD arrow -->
                                    <path d="M345,205 L305,205 L305,197 L290,210 L305,223 L305,215 L345,215 Z" class="arrow-block"/>
                                    <text x="318" y="197" class="arch-label-sm">adrese MD</text>
                                    
                                    <!-- Date MD arrow -->
                                    <path d="M290,260 L302,252 L302,256 L333,256 L333,252 L345,260 L333,268 L333,264 L302,264 L302,268 Z" class="arrow-block"/>
                                    <text x="318" y="283" class="arch-label-sm">date MD</text>
                                    
                                    <!-- MD box -->
                                    <rect x="350" y="175" width="115" height="125" class="arch-box"/>
                                    <text x="407" y="202" class="arch-title">Memorie</text>
                                    <text x="407" y="222" class="arch-title">de Date</text>
                                    <text x="407" y="245" class="arch-sub">(MD)</text>
                                    <text x="407" y="280" class="arch-small">doar date</text>
                                    
                                    <!-- Caption -->
                                    <text x="242" y="345" class="caption">Figura 3.4. Diagrame bloc pentru exemplificarea deosebirilor</text>
                                    <text x="242" y="365" class="caption">dintre arhitecturile: (a) von Neumann și (b) Harvard</text>
                                </svg>
                            </div>

                            <!-- Circuite Tampon Section -->
                            <h5 class="buffer-main-title">Circuitele Tampon (Buffers) de Interfață</h5>

                            <div class="info-card-buffer">
                                <h6 class="info-card-title">
                                    <i class="bi bi-diagram-3"></i> Rol și Funcții
                                </h6>
                                <ul class="buffer-list">
                                    <li>Permit <strong>"deconectarea"</strong> procesorului de la magistralele externe (date, adrese, control).</li>
                                    <li>Alte dispozitive active (procesoare) pot prelua temporar <strong>controlul magistralelor</strong>.</li>
                                    <li>Unele au capacitate de <strong>HiZ</strong> (înaltă impedanță) și <strong>memorare (latch)</strong>.</li>
                                </ul>
                            </div>

                            <div class="info-card-buffer highlight">
                                <h6 class="info-card-title">
                                    <i class="bi bi-exclamation-triangle"></i> Rolul Principal
                                </h6>
                                <p class="buffer-note">Rolul principal <strong>nu constă</strong> în posibilitatea de HiZ, ci în:</p>
                                <ul class="buffer-list">
                                    <li><strong>Fan-out:</strong> Factorul de încărcare la ieșire</li>
                                    <li><strong>Fan-in:</strong> Factorul de încărcare la intrare</li>
                                    <li><strong>Izolare:</strong> Între circuitele interne și externe procesorului</li>
                                    <li><strong>Capacitate parazită:</strong> Control valori limită pe fiecare linie</li>
                                </ul>
                            </div>

                            <!-- Diagrama Circuite Tampon -->
                            <div class="buffer-diagram-card gsap-reveal">
                                <div class="flow-card-header">
                                    <h5>Rolul Circuitelor Tampon (Buffers) de Interfață</h5>
                                    <p>Conectarea UCP la magistralele sistemului prin buffere</p>
                                </div>
                                
                                <svg class="buffer-svg" viewBox="0 0 620 380">
                                    <!-- UCP Box -->
                                    <rect x="30" y="60" width="180" height="250" class="main-box ucp-box"/>
                                    <text x="120" y="180" class="box-title">UCP</text>
                                    
                                    <!-- Tampon bidirecțional inside UCP -->
                                    <rect x="50" y="80" width="140" height="45" class="buffer-box"/>
                                    <text x="120" y="100" class="buffer-text">Tampon</text>
                                    <text x="120" y="116" class="buffer-text">bidirecțional</text>
                                    
                                    <!-- Tampon inside UCP (left) -->
                                    <rect x="50" y="230" width="65" height="55" class="buffer-box"/>
                                    <text x="82" y="262" class="buffer-text-sm">Tampon</text>
                                    
                                    <!-- Tampon unidirecțional inside UCP (right) -->
                                    <rect x="125" y="230" width="65" height="55" class="buffer-box"/>
                                    <text x="157" y="252" class="buffer-text-sm">Tampon</text>
                                    <text x="157" y="268" class="buffer-text-sm">unidirecional</text>
                                    
                                    <!-- Memoria Principală Box -->
                                    <rect x="320" y="90" width="140" height="180" class="main-box mem-box"/>
                                    
                                    <!-- Date section in memory -->
                                    <rect x="340" y="100" width="100" height="35" class="mem-section"/>
                                    <text x="390" y="123" class="mem-text">Date</text>
                                    
                                    <!-- Memoria Principală title (after Date section so it appears on top) -->
                                    <text x="390" y="165" class="box-title-italic">Memoria</text>
                                    <text x="390" y="188" class="box-title-italic">Principală</text>
                                    
                                    <!-- Control & Stări label -->
                                    <text x="355" y="238" class="mem-text-sm">Control</text>
                                    <text x="355" y="253" class="mem-text-sm">&amp;Stări</text>
                                    
                                    <!-- Adrese label -->
                                    <text x="420" y="246" class="mem-text-sm">Adrese</text>
                                    
                                    <!-- ===== ARROWS AND BUSES ===== -->
                                    
                                    <!-- Bidirectional data bus (top) - UCP to Memory and out -->
                                    <line x1="120" y1="80" x2="120" y2="45" class="bus-line-svg"/>
                                    <line x1="120" y1="45" x2="550" y2="45" class="bus-line-svg"/>
                                    <polygon points="550,45 540,40 540,50" class="bus-arrow"/>
                                    <polygon points="120,45 130,40 130,50" class="bus-arrow"/>
                                    
                                    <!-- Memory to data bus -->
                                    <line x1="390" y1="100" x2="390" y2="45" class="bus-line-svg"/>
                                    <polygon points="390,100 385,90 395,90" class="bus-arrow"/>
                                    <polygon points="390,55 385,65 395,65" class="bus-arrow"/>
                                    
                                    <!-- Magistrală bidirecțională label -->
                                    <text x="560" y="40" class="bus-label">Magistrală</text>
                                    <text x="560" y="55" class="bus-label">bidirecțională de</text>
                                    <text x="560" y="40" class="bus-label">date și</text>
                                    <text x="560" y="50" class="bus-label">instrucțiuni</text>
                                    
                                    <!-- === PARALLEL LINES from Tampon boxes === -->
                                    <!-- Line from Tampon (left) going down -->
                                    <line x1="82" y1="285" x2="82" y2="350" class="bus-line-svg"/>
                                    
                                    <!-- Line from Tampon unidirecțional (right) going down - parallel -->
                                    <line x1="157" y1="285" x2="157" y2="320" class="bus-line-svg"/>
                                    
                                    <!-- === PARALLEL LINES from Memory (Control&Stări, Adrese) === -->
                                    <!-- Line from Control&Stări going down -->
                                    <line x1="355" y1="270" x2="355" y2="350" class="bus-line-svg"/>
                                    
                                    <!-- Line from Adrese going down - parallel -->
                                    <line x1="420" y1="270" x2="420" y2="320" class="bus-line-svg"/>
                                    
                                    <!-- === HORIZONTAL BUSES === -->
                                    <!-- Address bus (middle) - connects Tampon unidirecțional to Adrese -->
                                    <line x1="157" y1="320" x2="420" y2="320" class="bus-line-svg"/>
                                    <line x1="420" y1="320" x2="550" y2="320" class="bus-line-svg"/>
                                    <polygon points="550,320 540,315 540,325" class="bus-arrow"/>
                                    <!-- Arrows to memory -->
                                    <polygon points="420,280 415,290 425,290" class="bus-arrow"/>
                                    <polygon points="157,295 152,305 162,305" class="bus-arrow"/>
                                    
                                    <!-- Magistrală de adrese label -->
                                    <text x="545" y="315" class="bus-label">Magistrală de</text>
                                    <text x="560" y="330" class="bus-label">adrese</text>
                                    
                                    <!-- Control bus (bottom) - connects Tampon to Control&Stări -->
                                    <line x1="82" y1="350" x2="355" y2="350" class="bus-line-svg"/>
                                    <line x1="355" y1="350" x2="550" y2="350" class="bus-line-svg"/>
                                    <polygon points="550,350 540,345 540,355" class="bus-arrow"/>
                                    <!-- Arrows to memory -->
                                    <polygon points="355,280 350,290 360,290" class="bus-arrow"/>
                                    <polygon points="82,295 77,305 87,305" class="bus-arrow"/>
                                    
                                    <!-- Magistrală de control label -->
                                    <text x="545" y="345" class="bus-label">Magistrală de</text>
                                    <text x="560" y="360" class="bus-label">control</text>
                                </svg>
                            </div>

                            <div class="buffer-info-note">
                                <p><i class="bi bi-info-circle"></i> Circuitele tampon nu au doar rol de deconectare (HiZ - înaltă impedanță), ci asigură și parametrii electrici: <strong>Fan-out</strong> (factor de încărcare la ieșire) și <strong>Fan-in</strong> (factor de încărcare la intrare), controlând capacitatea parazită pe linii.</p>
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

        // Slide in from left (opposite of Ciclu)
        gsap.from(".interfete-section .container-fluid", {
            scrollTrigger: {
                trigger: ".interfete-section",
                start: "top 95%",
                end: "top 40%",
                scrub: 1
            },
            x: -100,
            opacity: 0,
            scale: 0.9,
            ease: "power2.out"
        });

        // Parallax for Interfete titles
        gsap.to(".interfete-section .section-title", {
            scrollTrigger: {
                trigger: ".interfete-section",
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5
            },
            y: -80,
            ease: "none"
        });

        // Animate architecture comparison diagram
        this.animateArchDiagram();
        
        // Animate buffer diagram
        this.animateBufferDiagram();

        ScrollTrigger.refresh();
    }

    animateBufferDiagram()
    {
        const svg = this.element?.querySelector('.buffer-svg');
        if (!svg || !window.gsap || !window.ScrollTrigger) return;

        const mainBoxes = svg.querySelectorAll('.main-box');
        const bufferBoxes = svg.querySelectorAll('.buffer-box');
        const memSection = svg.querySelector('.mem-section');
        const lines = svg.querySelectorAll('.bus-line-svg');
        const arrows = svg.querySelectorAll('.bus-arrow');
        const texts = svg.querySelectorAll('text');

        // Calculate line lengths
        lines.forEach(line => {
            const length = Math.sqrt(
                Math.pow(line.x2.baseVal.value - line.x1.baseVal.value, 2) +
                Math.pow(line.y2.baseVal.value - line.y1.baseVal.value, 2)
            );
            line.style.strokeDasharray = length;
            line.style.strokeDashoffset = length;
        });

        // Initial state
        gsap.set(mainBoxes, { opacity: 0.2 });
        gsap.set(bufferBoxes, { opacity: 0, scale: 0.9, transformOrigin: 'center' });
        gsap.set(memSection, { opacity: 0 });
        gsap.set(arrows, { opacity: 0, scale: 0, transformOrigin: 'center' });
        gsap.set(texts, { opacity: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: svg,
                start: "top 75%",
                end: "bottom 20%",
                toggleActions: "play none none reset"
            },
            defaults: { ease: "power2.out" }
        });

        // 1. Show main boxes (UCP and Memory)
        tl.to(mainBoxes, { opacity: 1, duration: 0.5, stagger: 0.2 });
        tl.to([texts[0], texts[7], texts[8]], { opacity: 1, duration: 0.3 }, "-=0.2"); // UCP and Memoria Principală titles

        // 2. Show buffer boxes inside UCP
        tl.to(bufferBoxes, { opacity: 1, scale: 1, duration: 0.4, stagger: 0.15 });
        tl.to([texts[1], texts[2], texts[3], texts[4], texts[5]], { opacity: 1, duration: 0.3 }, "-=0.2"); // Buffer texts

        // 3. Show memory sections
        tl.to(memSection, { opacity: 1, duration: 0.3 });
        tl.to([texts[6], texts[9], texts[10], texts[11]], { opacity: 1, duration: 0.3 }, "-=0.1"); // Memory section texts

        // 4. Draw data bus (top)
        tl.to([lines[0], lines[1]], { strokeDashoffset: 0, duration: 0.4, stagger: 0.1 });
        tl.to([arrows[0], arrows[1]], { opacity: 1, scale: 1, duration: 0.2, ease: "back.out(2)" }, "-=0.1");
        tl.to(lines[2], { strokeDashoffset: 0, duration: 0.3 });
        tl.to([arrows[2], arrows[3]], { opacity: 1, scale: 1, duration: 0.2, stagger: 0.1, ease: "back.out(2)" }, "-=0.1");
        tl.to([texts[14], texts[15], texts[16]], { opacity: 1, duration: 0.3 }); // Data bus label

        // 5. Draw parallel vertical lines from UCP buffers (Tampon and Tampon unidirecțional)
        tl.to([lines[3], lines[4]], { strokeDashoffset: 0, duration: 0.3, stagger: 0.1 });
        
        // 6. Draw parallel vertical lines from Memory (Control&Stări and Adrese)
        tl.to([lines[5], lines[6]], { strokeDashoffset: 0, duration: 0.3, stagger: 0.1 });

        // 7. Draw address bus (middle horizontal) and arrows
        tl.to([lines[7], lines[8]], { strokeDashoffset: 0, duration: 0.4, stagger: 0.1 });
        tl.to([arrows[4], arrows[5], arrows[6]], { opacity: 1, scale: 1, duration: 0.2, stagger: 0.08, ease: "back.out(2)" }, "-=0.1");
        tl.to([texts[17], texts[18]], { opacity: 1, duration: 0.3 }); // Address bus label

        // 8. Draw control bus (bottom horizontal) and arrows
        tl.to([lines[9], lines[10]], { strokeDashoffset: 0, duration: 0.4, stagger: 0.1 });
        tl.to([arrows[7], arrows[8], arrows[9]], { opacity: 1, scale: 1, duration: 0.2, stagger: 0.08, ease: "back.out(2)" }, "-=0.1");
        tl.to([texts[19], texts[20]], { opacity: 1, duration: 0.3 }); // Control bus label
    }

    animateArchDiagram()
    {
        const svg = this.element?.querySelector('.arch-comparison-svg');
        if (!svg || !window.gsap || !window.ScrollTrigger) return;

        const boxes = svg.querySelectorAll('.arch-box');
        const arrows = svg.querySelectorAll('.arrow-block');
        const texts = svg.querySelectorAll('text');
        const separator = svg.querySelector('.separator-line');

        // Calculate path lengths for arrows and set up stroke drawing
        arrows.forEach(arrow => {
            const length = arrow.getTotalLength();
            arrow.style.strokeDasharray = length;
            arrow.style.strokeDashoffset = length;
            arrow.style.fillOpacity = 0;
        });

        // Set initial state
        gsap.set(boxes, { filter: 'grayscale(100%) brightness(1.2)', opacity: 0.2 });
        gsap.set(texts, { opacity: 0 });
        gsap.set(separator, { opacity: 0, strokeDasharray: '300', strokeDashoffset: '300' });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: svg,
                start: "top 75%",
                end: "bottom 20%",
                toggleActions: "play none none reset"
            },
            defaults: { ease: "power2.out" }
        });

        // Helper to highlight a box
        const showBox = (box, duration = 0.5) => {
            tl.to(box, { 
                filter: 'grayscale(0%) brightness(1) drop-shadow(0 0 4px rgba(155, 64, 234, 0.3))', 
                opacity: 1, 
                duration 
            });
        };

        // Helper to draw arrow (stroke first, then fill)
        const drawArrow = (arrow, duration = 0.5) => {
            tl.to(arrow, { 
                strokeDashoffset: 0,
                duration,
                ease: "power1.inOut"
            });
            tl.to(arrow, { 
                fillOpacity: 1,
                duration: 0.2
            }, "-=0.1");
        };

        // Helper to show text
        const showText = (textEls, duration = 0.3) => {
            tl.to(textEls, { opacity: 1, duration }, "<0.1");
        };

        // ===== (a) VON NEUMANN =====
        // 1. Show label (a)
        tl.to([texts[7], texts[8], texts[9]], { opacity: 1, duration: 0.4 });
        
        // 2. Show Memory box + text
        showBox(boxes[0]);
        showText([texts[0], texts[1], texts[2]]);
        
        // 3. Draw adrese arrow + label
        drawArrow(arrows[0]);
        showText(texts[3]);
        
        // 4. Draw date arrow + label
        drawArrow(arrows[1]);
        showText(texts[5]);
        
        // 5. Show CPU box + text
        showBox(boxes[1]);
        showText(texts[6]);

        // Pause
        tl.to({}, { duration: 0.5 });

        // ===== SEPARATOR =====
        tl.to(separator, { opacity: 1, strokeDashoffset: 0, duration: 0.6, ease: "power1.inOut" });

        // ===== (b) HARVARD =====
        // 6. Show label (b)
        tl.to([texts[10], texts[11], texts[12]], { opacity: 1, duration: 0.4 });
        
        // 7. Show MP box + text
        showBox(boxes[2]);
        showText([texts[13], texts[14], texts[15], texts[16], texts[17]]);
        
        // 8. Draw adrese MP arrow + label
        drawArrow(arrows[2]);
        showText(texts[18]);
        
        // 9. Draw date MP arrow + label
        drawArrow(arrows[3]);
        showText(texts[19]);
        
        // 10. Show CPU box + text
        showBox(boxes[3]);
        showText(texts[20]);
        
        // 11. Draw adrese MD arrow + label
        drawArrow(arrows[4]);
        showText(texts[21]);
        
        // 12. Draw date MD arrow + label
        drawArrow(arrows[5]);
        showText(texts[22]);
        
        // 13. Show MD box + text
        showBox(boxes[4]);
        showText([texts[23], texts[24], texts[25], texts[26]]);

        // 14. Show captions
        tl.to([texts[27], texts[28]], { opacity: 1, duration: 0.4 });
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
