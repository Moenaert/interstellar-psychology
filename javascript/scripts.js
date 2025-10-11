//Doctor of Philosophy - Gilles Moenaert
// Apply floating animation to header like video cards
document.querySelectorAll('.video-card, .float-card').forEach(el => {
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

async function updateCryptoPrices() {
  const dollarAmount = 420.69;
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=dogecoin,pepe&vs_currencies=usd');
    const data = await response.json();
    const dogeRate = data.dogecoin.usd;
    const pepeRate = data.pepe.usd;
    document.getElementById('dogePrice').textContent = (dollarAmount / dogeRate).toFixed(2);
    document.getElementById('pepePrice').textContent = (dollarAmount / pepeRate).toFixed(0);
  } catch (error) {
    console.error("Error fetching crypto prices:", error);
  }
}

function setupCopyButton(buttonId, addressId, tooltipId) {
  const button = document.getElementById(buttonId);
  const address = document.getElementById(addressId);
  const tooltip = document.getElementById(tooltipId);

  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(address.textContent);
      tooltip.classList.add('show');
      setTimeout(() => tooltip.classList.remove('show'), 1500);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  });
}

function setupMailForm() {
  const form = document.getElementById('paymentForm');
  const textarea = form.querySelector('textarea');
  const buttons = form.querySelectorAll('button[data-subject]');

  buttons.forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      const subject = button.getAttribute('data-subject');
      const message = textarea.value.trim();
      const mailtoLink = `mailto:neo@interstellar-psychology.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      window.location.href = mailtoLink;
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateCryptoPrices();
  setupCopyButton('copyDogeBtn', 'dogeAddress', 'copyTooltip');
  setupCopyButton('copyPepeBtn', 'pepeAddress', 'copyPepeTooltip');
  setupMailForm();
});


// === Fade-in Buttons ===
window.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.trippy-button');
  buttons.forEach(btn => {
    void btn.offsetWidth;
    btn.classList.add('fade-in');
  });
});

const menuButton = document.querySelector('.menu-toggle');

  // Create overlay and sidebar dynamically
  let overlay = document.querySelector('.sidebar-overlay');
  let sidebar = document.querySelector('.sidebar-nav');

  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);
  }

  if (!sidebar) {
    sidebar = document.createElement('nav');
    sidebar.className = 'sidebar-nav';
    const sourceNav = document.querySelector('.nav-bar:nth-of-type(2)');
    if (sourceNav) sidebar.innerHTML = sourceNav.innerHTML;
    document.body.appendChild(sidebar);
  }

  // Toggle sidebar fade in/out
  function toggleSidebar() {
    const isOpen = sidebar.classList.contains('open');
    sidebar.classList.toggle('open', !isOpen);
    overlay.classList.toggle('show', !isOpen);
  }

  // ☰ button toggles sidebar both ways
  menuButton.addEventListener('click', toggleSidebar);

  // Clicking overlay closes sidebar
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
  });

  // Close sidebar when a link is clicked (optional fade-out before navigation)
  sidebar.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link && link.href) {
      sidebar.classList.remove('open');
      overlay.classList.remove('show');
      e.preventDefault();
      setTimeout(() => { window.location.href = link.href; }, 300);
    }
  });
