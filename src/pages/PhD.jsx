import { useEffect } from 'react';

const PhD = () => {
  useEffect(() => {
    // Particle animation
    const createParticles = () => {
      const container = document.getElementById('particles');
      if (!container) return;
      
      container.innerHTML = '';
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 3 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        container.appendChild(particle);
      }
    };
    createParticles();
  }, []);

  return (
    <>
      <div className="particles" id="particles"></div>
      
      <div style={{
        margin: 0,
        padding: 0,
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}>
        <img 
          src="/artefacts/albertus-magnus.jpg" 
          alt="Albertus Magnus" 
          style={{
            flex: '0 0 auto',
            maxHeight: '100%',
            objectFit: 'contain',
            '--delay': '0.3s'
          }}
          className="main-img"
        />
        <img 
          src="/artefacts/phd.jpeg" 
          alt="PhD" 
          style={{
            flex: '0 0 auto',
            maxHeight: '100%',
            marginLeft: '333px',
            objectFit: 'contain',
            '--delay': '1.0s'
          }}
          className="second-img glowing-image breathing-element"
        />
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="display: flex"] {
            flex-direction: column !important;
            justify-content: center !important;
            align-items: center !important;
            overflow-x: hidden;
          }
          
          .main-img, .second-img {
            max-width: 90% !important;
            max-height: 45vh !important;
            margin: 10px 0 !important;
          }
          
          .second-img {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </>
  );
};

export default PhD;
