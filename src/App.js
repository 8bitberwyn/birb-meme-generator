import React, { useState, useRef } from 'react';
import './App.css';
import AttributeSelector from './components/AttributeSelector';
import BurtTheChicken from './components/BurtTheChicken';

import partyHat from './assets/hats/party.png';
import propelHat from './assets/hats/propel.png';
import tophatHat from './assets/hats/tophat.png';

import monacleGlasses from './assets/glasses/monacle.png';
import nerdGlasses from './assets/glasses/nerd.png';
import sunniesGlasses from './assets/glasses/sunnies.png';

import blackFeathers from './assets/feathers/black.png';
import blueFeathers from './assets/feathers/blue.png';
import cyanFeathers from './assets/feathers/cyan.png';
import purpleFeathers from './assets/feathers/purple.png';
import whiteFeathers from './assets/feathers/white.png';
import yellowFeathers from './assets/feathers/yellow.png';

import cloudsBackground from './assets/backgrounds/clouds.png';
import eggsBackground from './assets/backgrounds/eggs.png';
import feathersBackground from './assets/backgrounds/feathers.png';
import fireBackground from './assets/backgrounds/fire.png';
import nestBackground from './assets/backgrounds/nest.png';

function App() {
  const [selectedHat, setSelectedHat] = useState(partyHat);
  const [selectedGlasses, setSelectedGlasses] = useState(monacleGlasses);
  const [selectedFeathers, setSelectedFeathers] = useState(blackFeathers);
  const [selectedBackground, setSelectedBackground] = useState(cloudsBackground);
  const canvasRef = useRef(null);

  const handleDownload = () => {
    const canvas = canvasRef.current.getCanvas();
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'burt-the-chicken.png';
    link.click();
  };

  return (
    <>
      <h1 className='header'>Customize Burt the Chicken</h1>
      <div className="App">
        <div className="selectors">
          <AttributeSelector
            title="Hats"
            options={[partyHat, propelHat, tophatHat]}
            selected={selectedHat}
            onChange={setSelectedHat} />
          <AttributeSelector
            title="Glasses"
            options={[monacleGlasses, nerdGlasses, sunniesGlasses]}
            selected={selectedGlasses}
            onChange={setSelectedGlasses} />
          <AttributeSelector
            title="Feathers"
            options={[blackFeathers, blueFeathers, cyanFeathers, purpleFeathers, whiteFeathers, yellowFeathers]}
            selected={selectedFeathers}
            onChange={setSelectedFeathers} />
          <AttributeSelector
            title="Backgrounds"
            options={[cloudsBackground, eggsBackground, feathersBackground, fireBackground, nestBackground]}
            selected={selectedBackground}
            onChange={setSelectedBackground} />
        </div>
        <div className="burt">
          <BurtTheChicken
            ref={canvasRef}
            feathers={selectedFeathers}
            glasses={selectedGlasses}
            hats={selectedHat}
            backgrounds={selectedBackground} />
          <button onClick={handleDownload} style={{ marginTop: '20px' }}>Download Image</button>
        </div>
      </div>
    </>
  );
}

export default App;
