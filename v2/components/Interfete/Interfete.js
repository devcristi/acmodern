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
            <section id="interfete" class="interfete-section">
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
                                    <div class="architecture-card von-neumann">
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
                                    <div class="architecture-card harvard">
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

                            <div class="technical-note">
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

    mount(containerId)
    {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = this.render();
        this.element = container.querySelector('.interfete-section');
    }
}

// Create instance
const interfete = new Interfete();
