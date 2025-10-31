import { useAudio } from '../contexts/AudioContext';

const AudioPlayer = () => {
  const { audioRef, isPlaying, toggleAudio } = useAudio();

  return (
    <>
      <button 
        id="audio-toggle" 
        aria-label="Toggle music" 
        title="Toggle music"
        onClick={toggleAudio}
      >
        <svg 
          id="audio-icon" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          className="w-6 h-6"
        >
          {isPlaying ? (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M5 3v18h4V3z M15 3v18h4V3z" 
            />
          ) : (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M9 5v14l11-7-11-7z" 
            />
          )}
        </svg>
      </button>
      <audio ref={audioRef} id="myAudio" preload="auto" loop>
        <source src="/artefacts/interstellar.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
};

export default AudioPlayer;
