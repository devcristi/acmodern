// Main Application Script

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Mount Hero component (includes Navbar)
    hero.mount('hero');
    
    // Mount Fundamente component
    fundamente.mount('fundamente');
    
    // Mount Ciclu component
    ciclu.mount('ciclu');
    
    // Mount Interfete component
    interfete.mount('interfete');
    
    console.log('✅ Components loaded!');
});
