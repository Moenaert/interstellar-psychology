// Persistent Audio Player across pages
// Doctor of Philosophy - Gilles Moenaert

(function() {
  'use strict';

  const AUDIO_STATE_KEY = 'interstellarAudioState';
  const AUDIO_TIME_KEY = 'interstellarAudioTime';
  const AUDIO_LAST_UPDATE = 'interstellarAudioLastUpdate';

  // Save audio state to localStorage
  function saveAudioState(isPlaying, currentTime) {
    try {
      localStorage.setItem(AUDIO_STATE_KEY, isPlaying ? 'playing' : 'paused');
      localStorage.setItem(AUDIO_TIME_KEY, currentTime.toString());
      localStorage.setItem(AUDIO_LAST_UPDATE, Date.now().toString());
      console.log(`[Audio] Saved - Playing: ${isPlaying}, Time: ${currentTime.toFixed(2)}s`);
    } catch (e) {
      console.warn('Could not save audio state:', e);
    }
  }

  // Load audio state from localStorage
  function loadAudioState() {
    try {
      const isPlaying = localStorage.getItem(AUDIO_STATE_KEY) === 'playing';
      const currentTime = parseFloat(localStorage.getItem(AUDIO_TIME_KEY) || '0');
      const lastUpdate = parseInt(localStorage.getItem(AUDIO_LAST_UPDATE) || '0');
      
      // If state is old (more than 1 hour), reset
      const age = Date.now() - lastUpdate;
      if (age > 3600000) {
        console.log('[Audio] State expired, resetting');
        return { isPlaying: false, currentTime: 0 };
      }
      
      return { isPlaying, currentTime };
    } catch (e) {
      console.warn('Could not load audio state:', e);
      return { isPlaying: false, currentTime: 0 };
    }
  }

  // Initialize audio player
  function initPersistentAudio() {
    const audio = document.getElementById('myAudio');
    const toggle = document.getElementById('audio-toggle');
    const icon = document.getElementById('audio-icon');

    if (!audio || !toggle || !icon) {
      console.log('[Audio] Elements not found');
      return;
    }

    console.log('[Audio] Initializing...');

    // Load previous state
    const state = loadAudioState();
    console.log(`[Audio] Loaded state - Playing: ${state.isPlaying}, Time: ${state.currentTime.toFixed(2)}s`);
    
    let isRestoring = false; // Flag to prevent saving during restoration

    // Update icon based on playing state
    function updateIcon() {
      if (audio.paused) {
        // Play icon
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5v14l11-7-11-7z" />';
      } else {
        // Pause icon
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v18h4V3z M15 3v18h4V3z" />';
      }
    }

    // Restore time and play if needed
    function restoreAudioState() {
      console.log('[Audio] Attempting to restore state...');
      isRestoring = true; // Start restoring - don't save during this
      
      // Set the time position
      if (state.currentTime > 0) {
        try {
          audio.currentTime = state.currentTime;
          console.log(`[Audio] Set currentTime to ${state.currentTime.toFixed(2)}s`);
        } catch (e) {
          console.error('[Audio] Failed to set currentTime:', e);
        }
      }

      // Resume playback if it was playing
      if (state.isPlaying) {
        console.log('[Audio] Attempting to resume playback...');
        audio.play()
          .then(() => {
            console.log('[Audio] Playback resumed successfully');
            // Wait a bit for seek to complete, then allow saving
            setTimeout(() => {
              isRestoring = false;
              console.log('[Audio] Restoration complete, now tracking normally');
            }, 500);
          })
          .catch(err => {
            console.warn('[Audio] Autoplay blocked:', err);
            isRestoring = false;
            // Update state to paused since we couldn't play
            saveAudioState(false, audio.currentTime);
          });
      } else {
        isRestoring = false;
      }
      
      updateIcon();
    }

    // Wait for audio to be ready, then restore state
    if (audio.readyState >= 2) {
      // Audio is already loaded
      console.log('[Audio] Audio already loaded, restoring immediately');
      restoreAudioState();
    } else {
      // Wait for audio to load
      console.log('[Audio] Waiting for audio to load...');
      audio.addEventListener('loadeddata', function onLoaded() {
        console.log('[Audio] Audio loaded, restoring state');
        restoreAudioState();
      }, { once: true });
    }

    // Toggle button click handler
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      console.log('[Audio] Toggle clicked');
      if (audio.paused) {
        audio.play().catch(err => {
          console.error('[Audio] Play failed:', err);
        });
      } else {
        audio.pause();
      }
    });

    // Event listeners for play/pause
    audio.addEventListener('play', () => {
      console.log('[Audio] Play event fired');
      updateIcon();
      if (!isRestoring) {
        saveAudioState(true, audio.currentTime);
      }
    });

    audio.addEventListener('pause', () => {
      console.log('[Audio] Pause event fired');
      updateIcon();
      if (!isRestoring) {
        saveAudioState(false, audio.currentTime);
      }
    });

    // Continuously save position while playing
    audio.addEventListener('timeupdate', () => {
      if (!audio.paused && !isRestoring) {
        saveAudioState(true, audio.currentTime);
      }
    });

    // Save position when leaving page (multiple events for cross-browser support)
    const saveOnExit = () => {
      console.log('[Audio] Saving state before exit');
      saveAudioState(!audio.paused, audio.currentTime);
    };

    window.addEventListener('beforeunload', saveOnExit);
    window.addEventListener('pagehide', saveOnExit);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        saveOnExit();
      }
    });

    // Handle audio errors
    audio.addEventListener('error', (e) => {
      console.error('[Audio] Error:', e);
    });

    // Initial icon update
    updateIcon();
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPersistentAudio);
  } else {
    initPersistentAudio();
  }
})();
