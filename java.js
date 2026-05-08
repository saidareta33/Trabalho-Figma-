// Smooth scroll para navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Efeito de digitação no terminal
const terminalText = document.querySelector('.terminal-text');
if (terminalText) {
    const text = terminalText.textContent;
    terminalText.textContent = '';
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            terminalText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    setTimeout(typeWriter, 500);
}