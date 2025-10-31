import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AudioPlayer from './AudioPlayer';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const sidebarRef = useRef(null);
  const wheelRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Infinite wheel scrolling effect
  useEffect(() => {
    if (!isSidebarOpen || !wheelRef.current) return;

    const wheel = wheelRef.current;
    const items = wheel.querySelectorAll('a');
    const itemHeight = items[0]?.offsetHeight || 0;
    const itemCount = items.length;
    
    let currentIndex = 0;
    let startY = 0;
    let isDragging = false;

    const updateWheel = (index) => {
      // Normalize index to loop
      currentIndex = ((index % itemCount) + itemCount) % itemCount;
      
      items.forEach((item, i) => {
        const offset = i - currentIndex;
        const normalizedOffset = ((offset % itemCount) + itemCount) % itemCount;
        const adjustedOffset = normalizedOffset > itemCount / 2 ? normalizedOffset - itemCount : normalizedOffset;
        
        const translateY = adjustedOffset * (itemHeight + 40);
        const scale = adjustedOffset === 0 ? 1.1 : 0.85;
        const opacity = adjustedOffset === 0 ? 1 : 0.5;
        
        item.style.transform = `translateY(${translateY}px) scale(${scale})`;
        item.style.opacity = opacity;
        item.style.transition = isDragging ? 'none' : 'all 0.3s ease';
      });
    };

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
      isDragging = true;
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      
      const deltaY = e.touches[0].clientY - startY;
      const threshold = 50;
      
      if (Math.abs(deltaY) > threshold) {
        const direction = deltaY > 0 ? -1 : 1;
        currentIndex += direction;
        updateWheel(currentIndex);
        startY = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
      updateWheel(currentIndex);
    };

    const handleWheel = (e) => {
      e.preventDefault();
      const direction = e.deltaY > 0 ? 1 : -1;
      currentIndex += direction;
      updateWheel(currentIndex);
    };

    // Initialize wheel position
    updateWheel(0);

    wheel.addEventListener('touchstart', handleTouchStart, { passive: true });
    wheel.addEventListener('touchmove', handleTouchMove, { passive: false });
    wheel.addEventListener('touchend', handleTouchEnd, { passive: true });
    wheel.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      wheel.removeEventListener('touchstart', handleTouchStart);
      wheel.removeEventListener('touchmove', handleTouchMove);
      wheel.removeEventListener('touchend', handleTouchEnd);
      wheel.removeEventListener('wheel', handleWheel);
    };
  }, [isSidebarOpen]);

  return (
    <>
      <AudioPlayer />
      
      <button 
        className="menu-toggle" 
        aria-label="Open navigation menu"
        onClick={toggleSidebar}
      >
        ☰
      </button>

      <div 
        className={`sidebar-overlay ${isSidebarOpen ? 'show' : ''}`}
        onClick={closeSidebar}
      />

      <nav ref={sidebarRef} className={`sidebar-nav ${isSidebarOpen ? 'open' : ''}`}>
        <div ref={wheelRef} className="wheel-container">
        <Link to="/" onClick={closeSidebar}>Interstellar Psychology</Link>
        <Link 
          to="/phd/music" 
          className={isActive('/phd/music') ? 'active' : ''}
          onClick={closeSidebar}
        >
          Music
        </Link>
        <Link 
          to="/phd/psychedelics" 
          className={isActive('/phd/psychedelics') ? 'active' : ''}
          onClick={closeSidebar}
        >
          Psychedelics
        </Link>
        <Link 
          to="/phd/telepathy" 
          className={isActive('/phd/telepathy') ? 'active' : ''}
          onClick={closeSidebar}
        >
          Telepathy
        </Link>
        <Link 
          to="/phd/mindsight" 
          className={isActive('/phd/mindsight') ? 'active' : ''}
          onClick={closeSidebar}
        >
          Mindsight
        </Link>
        <Link 
          to="/phd/remote-viewing" 
          className={isActive('/phd/remote-viewing') ? 'active' : ''}
          onClick={closeSidebar}
        >
          Remote Viewing
        </Link>
        <Link 
          to="/phd/out-of-body-experience" 
          className={isActive('/phd/out-of-body-experience') ? 'active' : ''}
          onClick={closeSidebar}
        >
          Out of Body Experience
        </Link>
        <Link 
          to="/phd/non-human-intelligence" 
          className={isActive('/phd/non-human-intelligence') ? 'active' : ''}
          onClick={closeSidebar}
        >
          Non Human Intelligence
        </Link>
        <Link 
          to="/phd/multiverse" 
          className={isActive('/phd/multiverse') ? 'active' : ''}
          onClick={closeSidebar}
        >
          Multiverse
        </Link>
        <Link 
          to="/phd/infinity" 
          className={isActive('/phd/infinity') ? 'active' : ''}
          onClick={closeSidebar}
        >
          Infinity
        </Link>
        <Link 
          to="/phd/easter-egg" 
          className={isActive('/phd/easter-egg') ? 'active' : ''}
          onClick={closeSidebar}
        >
          🥚 Easter Egg
        </Link>
        </div>
      </nav>

      {children}
    </>
  );
};

export default Layout;
