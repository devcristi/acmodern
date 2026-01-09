function startLearning() {
    // 1. Micșorăm Hero Section
    const hero = document.getElementById('hero');
    hero.classList.add('shrunk');

    // 2. Ascundem butonul
    const btn = document.querySelector('.btn-explore');
    if(btn) btn.style.display = 'none';

    // 3. Afișăm conținutul
    const content = document.getElementById('main-content');
    content.classList.remove('hidden');
    document.getElementById('footer-nav').classList.remove('hidden');

    // 4. Animație carduri
    const cards = document.querySelectorAll('.topic-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 200);
    });

    // 5. Scroll automat
    setTimeout(() => {
        content.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 500);
}

// Navbar scroll logic
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow');
    } else {
        navbar.classList.remove('shadow');
    }
});

// Funcție pentru Stepper-ul Ciclului Instrucțiune
function showStep(stepNumber) {
    // 1. Ascunde toți pașii
    const allSteps = document.querySelectorAll('.cycle-step-content');
    allSteps.forEach(step => {
        step.classList.add('hidden');
        step.classList.remove('active');
    });

    // 2. Afișează pasul selectat
    const selectedStep = document.getElementById(`step-${stepNumber}`);
    if (selectedStep) {
        selectedStep.classList.remove('hidden');
        selectedStep.classList.add('active');
    }
}