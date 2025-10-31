import { useEffect } from 'react';

const Psychedelics = () => {
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

      <header className="header breathing-element" style={{"--delay": "0s"}}>
        <h1>
          <div className="card-inner">Psychedelics</div>
        </h1>
      </header>

      <section className="intro breathing-element" style={{"--delay": "0.5s"}}>
        <p>
          Psychedelics are illegal not because a loving government is concerned
          that you may jump out of a third story window. Psychedelics are illegal
          because they dissolve opinion structures and culturally laid down models
          of behaviour and information processing. They open you up to the
          possibility that everything you know is wrong.
        </p>
        <p>~ Terence McKenna</p>
      </section>

      <section className="centered pad-36">
        <img src="/artefacts/psychedelic-art.PNG" alt="Psychedelics artwork" className="glowing-image w-79 breathing-element" style={{'--delay': '0.3s'}} />
      </section>

      <section className="explore-intro breathing-element" style={{"--delay": "1s"}}>
        <p>Open your mind and explore the trippy realm of Psychedelics through these mind-bending videos.</p>
        <p>Dive deep into the cosmic rabbit hole and awaken your third eye!</p>
      </section>

      <section className="video-grid">
        <div className="video-card breathing-element" style={{'--delay': '1.5s'}}>
          <div className="card-inner">
            <a href="https://www.netflix.com/be-en/title/81183477" target="_blank" rel="noopener noreferrer">
              <img src="https://i.ytimg.com/vi/bxABOiay6oA/hq720.jpg" alt="Fantastic Fungi" />
            </a>
            <h3>Fantastic Fungi</h3>
            <p>Explore the hidden mushroom realm</p>
            <a href="https://www.netflix.com/be-en/title/81183477" target="_blank" rel="noopener noreferrer">Watch on Netflix</a>
          </div>
        </div>

        <div className="video-card breathing-element" style={{'--delay': '2.0s'}}>
          <div className="card-inner">
            <a href="https://www.netflix.com/be-en/title/80229847" target="_blank" rel="noopener noreferrer">
              <img src="https://www.sunstonetherapies.com/wp-content/uploads/2024/02/image.png" alt="How to Change Your Mind" />
            </a>
            <h3>How to Change Your Mind</h3>
            <p>Explore the realm of psychedelics</p>
            <a href="https://www.netflix.com/be-en/title/80229847" target="_blank" rel="noopener noreferrer">Watch on Netflix</a>
          </div>
        </div>

        <div className="video-card breathing-element" style={{'--delay': '2.5s'}}>
          <div className="card-inner">
            <a href="https://www.netflix.com/be-en/title/81409016" target="_blank" rel="noopener noreferrer">
              <img src="https://m.media-amazon.com/images/S/pv-target-images/394b4c2338e183a0d14c6d93ad7e297e37197db8c95b9ba9bf49ceb077771d95.jpg" alt="Magic Medicine" />
            </a>
            <h3>Magic Medicine</h3>
            <p>Psychedelics a cure for depression?</p>
            <a href="https://www.netflix.com/be-en/title/81409016" target="_blank" rel="noopener noreferrer">Watch on Netflix</a>
          </div>
        </div>
      </section>

      <section className="video-grid">
        <div className="video-card breathing-element" style={{'--delay': '3.0s'}}>
          <div className="card-inner">
            <a href="https://www.netflix.com/be-en/title/80229847" target="_blank" rel="noopener noreferrer">
              <img src="https://i.ytimg.com/vi/fwZqVqbkyLM/mqdefault.jpg" alt="DMT: The Spirit Molecule" />
            </a>
            <h3>DMT: The Spirit Molecule</h3>
            <p>Explore the realm of DMT</p>
            <a href="https://www.netflix.com/be-en/title/80229847" target="_blank" rel="noopener noreferrer">Watch on Netflix</a>
          </div>
        </div>

        <div className="video-card breathing-element" style={{'--delay': '3.5s'}}>
          <div className="card-inner">
            <a href="https://www.youtube.com/watch?v=kxFTWk9lLDU" target="_blank" rel="noopener noreferrer">
              <img src="https://i.ytimg.com/vi/AQY43_3tvCA/maxresdefault.jpg" alt="Psychedelics Talk" />
            </a>
            <h3>Psychedelics World Science Festival</h3>
            <p>Let's talk psychedelics</p>
            <a href="https://www.youtube.com/watch?v=kxFTWk9lLDU" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
          </div>
        </div>

        <div className="video-card breathing-element" style={{'--delay': '4.0s'}}>
          <div className="card-inner">
            <a href="https://www.youtube.com/watch?v=uvntuZzXcAM" target="_blank" rel="noopener noreferrer">
              <img src="https://i.ytimg.com/vi/uvntuZzXcAM/maxresdefault.jpg" alt="Psychedelic Ascension" />
            </a>
            <h3>Psychedelic Ascension</h3>
            <p>Mr Traumatik ॐ</p>
            <a href="https://www.youtube.com/watch?v=uvntuZzXcAM" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
          </div>
        </div>
      </section>

      <section className="centered pad-27">
        <img src="/artefacts/chart.webp" alt="Psychedelics chart" className="glowing-image w-79 breathing-element" style={{'--delay': '2.5s'}} />
      </section>

      <footer className="footer">
        <p>Interstellar Psychology <span className="heart">❤️</span></p>
      </footer>
    </>
  );
};

export default Psychedelics;
