document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('tiltCard');
    if (!card) return;
    let bounds;
    function updateBounds() {
        bounds = card.getBoundingClientRect();
    }
    card.addEventListener('mouseenter', () => {
        updateBounds();
        card.style.transition = 'transform 0.1s ease-out, filter 0.3s ease';
    });
    card.addEventListener('mousemove', (e) => {
        if (!bounds) updateBounds();

        // Calculate cursor position relative to card center (-1 to 1)
        const mouseX = e.clientX - bounds.left;
        const mouseY = e.clientY - bounds.top;

        const xPct = (mouseX / bounds.width) - 0.5;
        const yPct = (mouseY / bounds.height) - 0.5;
        // Smooth tilt rotation angles (max ~12 degrees)
        const rotateX = (-yPct * 16).toFixed(2);
        const rotateY = (xPct * 16).toFixed(2);
        const translateY = -8;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(${translateY}px) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
        // Smooth reset on exit
        card.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), filter 0.3s ease';
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
    });
    window.addEventListener('resize', updateBounds);
});
