import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Multiverse = () => {
  useEffect(() => {
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

      <header className="header">
        <h1 className="float-card">
          <div className="card-inner">Multiverse</div>
        </h1>
      </header>

      <section className="intro">
        <p>Consciousness, the essence of our awareness, often seems intertwined with coincidences and synchronicities—those striking moments when events align in ways that defy simple explanation. A coincidence might be meeting someone you were just thinking about, while a synchronicity, a term coined by Carl Jung, feels like a meaningful convergence, as if the universe is sending a message.</p>
      </section>

      <section className="centered pad-36">
        <img src="/artefacts/thirdeye.jpg" alt="Third eye" className="glowing-image w-79" />
      </section>

      <section className="video-grid">
        <div className="video-card">
          <div className="card-inner">
            <a href="https://www.youtube.com/watch?v=4FF2XkzGMCg&list=PLk4Cf9CNJx1g-hEODcwrVRYP_Rryy3-XC" target="_blank" rel="noopener noreferrer">
              <img src="https://images.squarespace-cdn.com/content/v1/5e56dde39e190014f11146cd/1582759026358-ZWUDZCWG5V5KOFY1CSS4/iu.jpeg" alt="Modern Intuitionist" />
            </a>
            <h3>Modern Intuitionist</h3>
            <p>Synchronicities</p>
            <a href="https://www.youtube.com/watch?v=4FF2XkzGMCg&list=PLk4Cf9CNJx1g-hEODcwrVRYP_Rryy3-XC" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
          </div>
        </div>

        <div className="video-card">
          <div className="card-inner">
            <a href="https://www.youtube.com/watch?v=c-oaLJVjVnM" target="_blank" rel="noopener noreferrer">
              <img src="https://ufo-network.com/wp-content/uploads/2022/08/Awakenings-Release-Feature-2-scaled.jpg.webp" alt="Awakenings" />
            </a>
            <h3>Awakenings ❤️</h3>
            <p>Spiritual awakening at Awakenings 😂</p>
            <p>Best time of my life!</p>
            <a href="https://www.youtube.com/watch?v=c-oaLJVjVnM" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
          </div>
        </div>

        <div className="video-card">
          <div className="card-inner">
            <img src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd949630c-df64-4d1a-9b31-d2731277a2e4_700x392.jpeg" alt="Shutter Island poster" />
            <h3>Shutter Island</h3>
            <p>"This place makes me wonder… which would be worse: to live as a monster, or to die as a good man?"</p>
          </div>
        </div>
      </section>

      <section className="video-grid">
        <div className="video-card">
          <div className="card-inner">
            <a href="https://soundcloud.com/gilles-moenaert-336318042/multiversum-ombudsman-m4a?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://www.netwerksara.be/wp-content/uploads/nieuwesite-multiversum-new-q-72-e1594043583327.jpg" 
                alt="Multiverse Ombudsman"
              />
            </a>
            <h3>Multiverse Ombudsman</h3>
            <p>My experience in the Multiverse</p>
            <a href="https://soundcloud.com/gilles-moenaert-336318042/multiversum-ombudsman-m4a?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" target="_blank" rel="noopener noreferrer">Listen on SoundCloud</a>
          </div>
        </div>

        <div className="video-card">
          <div className="card-inner">
            <a href="https://www.youtube.com/watch?v=wCGF5f2s9W8" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://cdn.sanity.io/images/bl383u0v/production/6103951c2fc92deb80ae32377f365ae33a91e454-6016x4016.jpg?rect=11,0,5995,4016&w=412&h=276&q=80&fit=max&auto=format&dpr=2.625" 
                alt="Big Pharma Wake Up Experiment"
                style={{maxWidth: '100%', height: 'auto', display: 'block', margin: 'auto'}}
              />
            </a>
            <h3>Big Pharma Wake Up Experiment</h3>
            <p>Do you agree? Made in the Multiverse lol</p>
            <a href="https://www.youtube.com/watch?v=wCGF5f2s9W8" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
          </div>
        </div>

        <div className="video-card">
          <div className="card-inner">
            <a href="https://www.youtubetrimmer.com/view/?v=maOwdSb8j2Q&start=258&end=647&loop=0" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://images.genius.com/4a40be48edc4122b534df6d5ab27c5b7.1000x1000x1.jpg" 
                alt="Maybe the crazy ones aren't crazy"
                style={{width: '300px', height: 'auto'}}
              />      
            </a>
            <h3>Maybe the crazy ones aren't crazy</h3>
            <p>Curt Jaimungal 🥚</p>
            <a href="https://www.youtubetrimmer.com/view/?v=maOwdSb8j2Q&start=258&end=647&loop=0" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
          </div>
        </div>
      </section>

      <section className="centered pad-27 responsive-image-row">
        <img src="/artefacts/einstein.jpg" alt="Einstein" className="glowing-image responsive-img" />
        <img src="/artefacts/thirdeyethailand.jpg" alt="Third eye Thailand" className="glowing-image responsive-img" />
      </section>

      <div className="footer">
        <p>
          <Link to="/phd/multiverse/purchase">A Multiverse of Love</Link>{' '}
          <span className="heart">❤️</span>
        </p>
      </div>
    </>
  );
};

export default Multiverse;
