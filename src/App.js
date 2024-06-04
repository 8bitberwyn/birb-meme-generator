import React, { useState } from 'react';
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
  const [selectedHat, setSelectedHat] = useState(null);
  const [selectedGlasses, setSelectedGlasses] = useState(null);
  const [selectedFeathers, setSelectedFeathers] = useState(null);
  const [selectedBackground, setSelectedBackground] = useState(null);

  return (
    <>
    <h2 style={{ display: 'flex', justifyContent: 'center', margin: '0px 0px', padding: '0px 0px' }}>
      Customize Burt the Chicken
    </h2>
    <div className="App">
      <div className="selectors">
        <AttributeSelector
          title="Feathers"
          options={[yellowFeathers, blackFeathers, blueFeathers, cyanFeathers, purpleFeathers, whiteFeathers]}
          selected={selectedFeathers}
          onSelect={setSelectedFeathers} />
        <AttributeSelector
          title="Hats"
          options={[partyHat, propelHat, tophatHat]}
          selected={selectedHat}
          onSelect={setSelectedHat} />
        <AttributeSelector
          title="Glasses"
          options={[monacleGlasses, nerdGlasses, sunniesGlasses]}
          selected={selectedGlasses}
          onSelect={setSelectedGlasses} />
        <AttributeSelector
          title="Backgrounds"
          options={[cloudsBackground, eggsBackground, feathersBackground, fireBackground, nestBackground]}
          selected={selectedBackground}
          onSelect={setSelectedBackground} />
      </div>
      <div className="burt">
        <BurtTheChicken
          feathers={selectedFeathers}
          glasses={selectedGlasses}
          hats={selectedHat}
          backgrounds={selectedBackground} />
      </div>
    </div>
    </>
  );
}

export default App;