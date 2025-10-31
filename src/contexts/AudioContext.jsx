import { createContext, useContext, useRef, useState, useEffect } from 'react';

const AudioContext = createContext();

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within AudioProvider');
  }
  return context;
};

export const AudioProvider = ({ children }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Load previous state from localStorage
    try {
      const savedState = localStorage.getItem('interstellarAudioState');
      const savedTime = parseFloat(localStorage.getItem('interstellarAudioTime') || '0');
      const lastUpdate = parseInt(localStorage.getItem('interstellarAudioLastUpdate') || '0');
      
      // If state is less than 1 hour old, restore it
      const age = Date.now() - lastUpdate;
      if (age < 3600000 && savedTime > 0) {
        audio.currentTime = savedTime;
      }
      
      if (savedState === 'playing') {
        audio.play().catch(err => {
          console.warn('Autoplay blocked:', err);
        });
      }
    } catch (e) {
      console.warn('Could not restore audio state:', e);
    }

    // Event handlers
    const handlePlay = () => {
      setIsPlaying(true);
      saveState(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
      saveState(false);
    };

    const handleTimeUpdate = () => {
      if (!audio.paused) {
        saveState(true);
      }
    };

    const saveState = (playing) => {
      try {
        localStorage.setItem('interstellarAudioState', playing ? 'playing' : 'paused');
        localStorage.setItem('interstellarAudioTime', audio.currentTime.toString());
        localStorage.setItem('interstellarAudioLastUpdate', Date.now().toString());
      } catch (e) {
        console.warn('Could not save audio state:', e);
      }
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play().catch(err => console.error('Play failed:', err));
    } else {
      audio.pause();
    }
  };

  return (
    <AudioContext.Provider value={{ audioRef, isPlaying, toggleAudio }}>
      {children}
    </AudioContext.Provider>
  );
};
