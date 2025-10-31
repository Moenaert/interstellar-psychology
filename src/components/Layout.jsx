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

  // Buttery smooth infinite wheel scrolling
  useEffect(() => {
    if (!isSidebarOpen || !wheelRef.current) return;

    const wheel = wheelRef.current;
    const items = Array.from(wheel.querySelectorAll('a'));
    const itemCount = items.length;
    
    let currentRotation = 0;
    let targetRotation = 0;
    let velocity = 0;
    let lastY = 0;
    let lastTime = 0;
    let isDragging = false;
    let animationFrame = null;

    const itemSpacing = 100; // Distance between items in pixels

    const updateWheel = () => {
      // Smooth interpolation
      const diff = targetRotation - currentRotation;
      currentRotation += diff * 0.15; // Smooth easing

      // Apply momentum/friction
      if (!isDragging) {
        velocity *= 0.92; // Friction
        currentRotation += velocity;
      }

      // Update each item's position
      items.forEach((item, index) => {
        const offset = index - (currentRotation / itemSpacing);
        const normalizedOffset = ((offset % itemCount) + itemCount) % itemCount;
        const adjustedOffset = normalizedOffset > itemCount / 2 
          ? normalizedOffset - itemCount 
          : normalizedOffset;

        const translateY = adjustedOffset * itemSpacing;
        const distance = Math.abs(adjustedOffset);
        
        // Smooth scaling and opacity based on distance from center
        const scale = Math.max(0.7, 1.2 - distance * 0.25);
        const opacity = Math.max(0.3, 1 - distance * 0.35);
        const blur = Math.min(distance * 1.5, 4);
        
        item.style.transform = `translateY(${translateY}px) scale(${scale})`;
        item.style.opacity = opacity;
        item.style.filter = `blur(${blur}px)`;
        item.style.zIndex = Math.round(100 - distance * 10);
      });

      // Continue animation
      animationFrame = requestAnimationFrame(updateWheel);
    };

    const handleTouchStart = (e) => {
      isDragging = true;
      lastY = e.touches[0].clientY;
      lastTime = Date.now();
      velocity = 0;
      targetRotation = currentRotation;
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      
      const currentY = e.touches[0].clientY;
      const currentTime = Date.now();
      const deltaY = currentY - lastY;
      const deltaTime = Math.max(1, currentTime - lastTime);
      
      // Calculate velocity for momentum
      velocity = (deltaY / deltaTime) * 16; // Scale for 60fps
      
      // Direct manipulation while dragging
      currentRotation -= deltaY * 0.8;
      targetRotation = currentRotation;
      
      lastY = currentY;
      lastTime = currentTime;
    };

    const handleTouchEnd = () => {
      isDragging = false;
      // Snap to nearest item
      const snapTarget = Math.round(currentRotation / itemSpacing) * itemSpacing;
      targetRotation = snapTarget;
    };

    const handleWheel = (e) => {
      e.preventDefault();
      velocity += e.deltaY * 0.1;
      // Snap to nearest item
      setTimeout(() => {
        const snapTarget = Math.round(currentRotation / itemSpacing) * itemSpacing;
        targetRotation = snapTarget;
      }, 150);
    };

    // Start animation loop
    updateWheel();

    wheel.addEventListener('touchstart', handleTouchStart, { passive: true });
    wheel.addEventListener('touchmove', handleTouchMove, { passive: false });
    wheel.addEventListener('touchend', handleTouchEnd, { passive: true });
    wheel.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      cancelAnimationFrame(animationFrame);
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
