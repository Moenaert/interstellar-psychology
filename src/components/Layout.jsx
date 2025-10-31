import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AudioPlayer from './AudioPlayer';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

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
      </nav>

      {children}
    </>
  );
};

export default Layout;
