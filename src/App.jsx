import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AudioProvider } from './contexts/AudioContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import PhD from './pages/PhD';
import Music from './pages/Music';
import Psychedelics from './pages/Psychedelics';
import Telepathy from './pages/Telepathy';
import Mindsight from './pages/Mindsight';
import RemoteViewing from './pages/RemoteViewing';
import OutOfBodyExperience from './pages/OutOfBodyExperience';
import NonHumanIntelligence from './pages/NonHumanIntelligence';
import Multiverse from './pages/Multiverse';
import Infinity from './pages/Infinity';
import EasterEgg from './pages/EasterEgg';
import Purchase from './pages/Purchase';

function App() {
  return (
    <AudioProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/phd" element={<PhD />} />
            <Route path="/phd/music" element={<Music />} />
            <Route path="/phd/psychedelics" element={<Psychedelics />} />
            <Route path="/phd/telepathy" element={<Telepathy />} />
            <Route path="/phd/mindsight" element={<Mindsight />} />
            <Route path="/phd/remote-viewing" element={<RemoteViewing />} />
            <Route path="/phd/out-of-body-experience" element={<OutOfBodyExperience />} />
            <Route path="/phd/non-human-intelligence" element={<NonHumanIntelligence />} />
            <Route path="/phd/multiverse" element={<Multiverse />} />
            <Route path="/phd/multiverse/purchase" element={<Purchase />} />
            <Route path="/phd/infinity" element={<Infinity />} />
            <Route path="/phd/easter-egg" element={<EasterEgg />} />
          </Routes>
        </Layout>
      </Router>
    </AudioProvider>
  );
}

export default App;
