import { useEffect } from 'react';

const NonHumanIntelligence = () => {
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
          <div className="card-inner">Non Human Intelligence</div>
        </h1>
      </header>

      <section className="intro">
        <p>We have over 100 years worth of anecdotal evidence from thousands of experiencers with some photographic evidence, but not good enough</p>
        <p>We have lots of pilots reports (credible observers), again not good enough</p>
        <p>Military personnel reports with corroborative radar data and other sensors data, still not good enough</p>
        <p>Testimonies from credible individuals of classified data suggesting the existence of NHI.</p>
        <p>All this amounts to a tremendous amount of "preliminary data", data on which we cannot draw scientific conclusions. Under normal circumstances this should immediately lead to rigorous scientific research. Where is this research? where is the mainstream scientific establishment in all of this? Nowhere... Shouldn't we endorse research on this topic instead of ridiculing it?</p>
      </section>

      <section className="explore-intro">
        <p>Open your mind and explore the trippy realm of Non Human Intelligence through these mind-bending videos.</p>
        <p>Dive deep into the cosmic rabbit hole and awaken your third eye!</p>
      </section>

      <section className="video-grid">
        <div className="video-card">
          <div className="card-inner">
            <a href="https://www.youtube.com/watch?v=Kx6iN6hdtLA" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/en/6/60/The_Phenomenon_2020.jpg" alt="The Phenomenon poster" />
            </a>
            <h3>The Phenomenon</h3>
            <p>Investigation into the UFO phenomenon</p>
            <a href="https://www.youtube.com/watch?v=Kx6iN6hdtLA" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
          </div>
        </div>

        <div className="video-card">
          <div className="card-inner">
            <a href="https://tv.apple.com/us/movie/moment-of-contact/umc.cmc.eq4hi5uneea0v3a7e1sqrq9f" target="_blank" rel="noopener noreferrer">
              <img src="https://m.media-amazon.com/images/M/MV5BMGI2MTVlNTUtOWY1OC00YjQ3LThlMGQtOTRlMDIyNDMwZWNmXkEyXkFqcGc@._V1_.jpg" alt="Moment of Contact poster" />
            </a>
            <h3>Moment of Contact</h3>
            <p>Investigation into the Varghina UFO case</p>
            <a href="https://tv.apple.com/us/movie/moment-of-contact/umc.cmc.eq4hi5uneea0v3a7e1sqrq9f" target="_blank" rel="noopener noreferrer">Watch on Apple TV</a>
          </div>
        </div>

        <div className="video-card">
          <div className="card-inner">
            <a href="https://tv.apple.com/be/movie/the-program/umc.cmc.o1nsjudjqe5lwmr48wdrloo6" target="_blank" rel="noopener noreferrer">
              <img src="https://m.media-amazon.com/images/M/MV5BYTlkMWI0OWUtNmQ5Ni00OWY2LWI4NjItMTcyMGZkMzc0MzA0XkEyXkFqcGc@._V1_.jpg" alt="The Program poster" />
            </a>
            <h3>The Program</h3>
            <p>Investigation into the UFO crash retrieval program</p>
            <a href="https://tv.apple.com/be/movie/the-program/umc.cmc.o1nsjudjqe5lwmr48wdrloo6" target="_blank" rel="noopener noreferrer">Watch on Apple TV</a>
          </div>
        </div>
      </section>

      <section className="video-grid">
        <div className="video-card">
          <div className="card-inner">
            <a href="https://www.youtube.com/watch?v=Yoy_7ZVlmoM" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Avi_Loeb_in_2023_02.jpg" alt="Avi Loeb lecture" />
            </a>
            <h3>Avi Loeb</h3>
            <p>Are We Alone in the Universe?</p>
            <a href="https://www.youtube.com/watch?v=Yoy_7ZVlmoM" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
          </div>
        </div>

        <div className="video-card">
          <div className="card-inner">
            <a href="https://www.youtube.com/watch?v=e2DqdOw6Uy4" target="_blank" rel="noopener noreferrer">
              <img src="https://martaricci.de/wp-content/uploads/2023/10/SOL_Foundation_Logo_MartaRicciDesign.jpg" alt="Garry Nolan" />
            </a>
            <h3>Garry Nolan</h3>
            <p>Aliens Have Already Arrived</p>
            <a href="https://www.youtube.com/watch?v=e2DqdOw6Uy4" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
          </div>
        </div>

        <div className="video-card">
          <div className="card-inner">
            <a href="https://www.youtube.com/watch?v=Rpl0FrdJWfs" target="_blank" rel="noopener noreferrer">
              <img src="https://thedebrief.b-cdn.net/wp-content/uploads/2023/06/Nell.jpeg" alt="Karl Nell interview" />
            </a>
            <h3>Karl Nell</h3>
            <p>Disclosing non human intelligence</p>
            <a href="https://www.youtube.com/watch?v=Rpl0FrdJWfs" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
          </div>
        </div>
      </section>

      <section className="video-grid">
        <div className="video-card">
          <div className="card-inner">
            <a href="https://www.youtube.com/watch?v=ow7FqiegixQ" target="_blank" rel="noopener noreferrer">
              <img src="https://i.scdn.co/image/ab67656300005f1fcaee605431f1b510b54b3d24" alt="James Lacatski interview" />
            </a>
            <h3>James Lacatski</h3>
            <p>Inside the DIA's Secretive UFO Investigations</p>
            <a href="https://www.youtube.com/watch?v=ow7FqiegixQ" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
          </div>
        </div>

        <div className="video-card">
          <div className="card-inner">
            <a href="https://www.youtube.com/watch?v=R8TqBrrqL4U" target="_blank" rel="noopener noreferrer">
              <img src="https://m.media-amazon.com/images/M/MV5BN2QyMjUwZTctNTU2OS00MjhkLWJkOTAtZTVhZDA2ZDZhMGU5XkEyXkFqcGc@._V1_.jpg" alt="David Grusch on Joe Rogan" />
            </a>
            <h3>David Grusch</h3>
            <p>Disclosing non human intelligence</p>
            <a href="https://www.youtube.com/watch?v=R8TqBrrqL4U" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
          </div>
        </div>

        <div className="video-card">
          <div className="card-inner">
            <a href="https://www.youtube.com/watch?v=DkU7ZqbADRs" target="_blank" rel="noopener noreferrer">
              <img src="https://i.ytimg.com/vi/DkU7ZqbADRs/maxresdefault.jpg" alt="Age of Disclosure documentary" />
            </a>
            <h3>Age of Disclosure</h3>
            <p>Disclosing non human intelligence</p>
            <a href="https://www.youtube.com/watch?v=DkU7ZqbADRs" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
          </div>
        </div>
      </section>

      <section className="video-grid">
        <div className="video-card">
          <div className="card-inner">
            <a href="https://www.youtube.com/watch?v=KQ7Dw-739VY" target="_blank" rel="noopener noreferrer">
              <img src="https://www.gop.gov/images/facebook-meta-25.jpg" alt="UAP hearing congress 1" />
            </a>
            <h3>UAP hearing congress 1</h3>
            <a href="https://www.youtube.com/watch?v=KQ7Dw-739VY" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
          </div>
        </div>

        <div className="video-card">
          <div className="card-inner">
            <a href="https://www.youtube.com/watch?v=kT2iWKZr0qA" target="_blank" rel="noopener noreferrer">
              <img src="https://www.gop.gov/images/facebook-meta-25.jpg" alt="UAP hearing congress 2" />
            </a>
            <h3>UAP hearing congress 2</h3>
            <a href="https://www.youtube.com/watch?v=kT2iWKZr0qA" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
          </div>
        </div>

        <div className="video-card">
          <div className="card-inner">
            <a href="https://www.youtube.com/watch?v=LBKRr5OvF6E&t=6195s" target="_blank" rel="noopener noreferrer">
              <img src="https://www.gop.gov/images/facebook-meta-25.jpg" alt="UAP hearing congress 3" />
            </a>
            <h3>UAP hearing congress 3</h3>
            <a href="https://www.youtube.com/watch?v=LBKRr5OvF6E&t=6195s" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
          </div>
        </div>
      </section>

      <div className="footer">
        <p>
          Follow me{' '}
          <a href="https://x.com/uapjunky" target="_blank" rel="noopener noreferrer"
             style={{color:'#00FF00', fontFamily:"'Papyrus', fantasy", textShadow:'2px 2px 5px #00FF00', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:'6px'}}>
            @UapJunky
          </a>
          {' '}on{' '}
          <img
            alt="X (Twitter)"
            width="18" height="18"
            src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg"
            style={{verticalAlign:'middle', display:'inline-block', filter:'none', mixBlendMode:'normal'}} />
        </p>
      </div>
    </>
  );
};

export default NonHumanIntelligence;
