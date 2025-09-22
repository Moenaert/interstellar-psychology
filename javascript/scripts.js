// Apply floating animation to header like video cards
document.querySelectorAll('.float-card').forEach(el => {
  el.style.animationDuration = (Math.random() * 2 + 3).toFixed(1) + 's';
  el.style.animationDelay = (Math.random() * 2).toFixed(1) + 's';
});

// Create floating particles
function createParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 3 + 's';
    particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
    container.appendChild(particle);
  }
}
createParticles();

// Wrap .video-card children into .card-inner for float + tilt separation
(function() {
  document.querySelectorAll('.video-card').forEach(card => {
    if (card.querySelector(':scope > .card-inner')) return;
    const inner = document.createElement('div');
    inner.className = 'card-inner';
    while (card.firstChild) inner.appendChild(card.firstChild);
    card.appendChild(inner);
  });
})();
