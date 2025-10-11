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

// === Audio toggle logic ===
document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('myAudio');
  const toggleButton = document.getElementById('audio-toggle');
  if (!audio || !toggleButton) return;
  let isPlaying = false;
  audio.addEventListener('error', () => alert('Could not load audio file. Check the file path.'));
  audio.addEventListener('play', () => { isPlaying = true; toggleButton.textContent = 'Pause'; });
  audio.addEventListener('pause', () => { isPlaying = false; toggleButton.textContent = 'Play'; });
  toggleButton.addEventListener('click', () => {
    isPlaying ? audio.pause() : audio.play().catch(()=>alert('Tap the page once then try again.'));
  });
});

// === YouTube Background ===
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: '6ouG6L-2L3Q',
    playerVars: {
      autoplay: 1, controls: 0, mute: 1, loop: 1,
      playlist: '6ouG6L-2L3Q', showinfo: 0,
      modestbranding: 1, playsinline: 1
    },
    events: { 'onReady': onPlayerReady }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
  const videoBackground = document.getElementById('video-background');
  videoBackground.classList.add('fade-in');
  function resizeVideo() {
    const video = document.getElementById('player');
    const aspectRatio = 16 / 9;
    const windowRatio = window.innerWidth / window.innerHeight;
    if (windowRatio > aspectRatio) {
      video.style.width = '120vw';
      video.style.height = `${120 * windowRatio / aspectRatio}vw`;
    } else {
      video.style.width = `${120 * aspectRatio / windowRatio}vh`;
      video.style.height = '120vh';
    }
  }
  resizeVideo();
  window.addEventListener('resize', resizeVideo);
}

// === Matrix Text Animation ===
const matrixText = document.getElementById('matrix-text');
function animateText() {
  const sequence = [
    { text: 'Wake up, Neo...', typeClass: 'typing-neo', deleteClass: 'deleting-neo', typeDuration: 3000, deleteDuration: 3690 }
  ];
  function displayWord(index) {
    if (index >= sequence.length) { setTimeout(animateText, 600); return; }
    const { text, typeClass, deleteClass, typeDuration, deleteDuration } = sequence[index];
    matrixText.textContent = text;
    matrixText.className = `matrix-text ${typeClass}`;
    setTimeout(() => {
      matrixText.className = `matrix-text ${deleteClass}`;
      setTimeout(() => displayWord(index + 1), deleteDuration);
    }, typeDuration);
  }
  displayWord(0);
}
setTimeout(animateText, 4200);

// === Fade-in Buttons ===
window.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.trippy-button');
  buttons.forEach(btn => {
    void btn.offsetWidth;
    btn.classList.add('fade-in');
  });
});

