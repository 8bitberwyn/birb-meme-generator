import React from 'react';

const BurtTheChicken = ({ feathers, glasses, hats, backgrounds }) => {
  return (
    <div style={{ margin: '0px', padding: '0px', position: 'absolute', width: '500px', height: '500px' }}>
      {backgrounds && <img src={backgrounds} alt="background" style={{ position: 'absolute', width: '100%', height: '100%' }} />}
      {feathers && <img src={feathers} alt="feathers" style={{ position: 'absolute', width: '100%', height: '100%' }} />}
      {glasses && <img src={glasses} alt="glasses" style={{ position: 'absolute', width: '100%', height: '100%' }} />}
      {hats && <img src={hats} alt="hats" style={{ position: 'absolute', width: '100%', height: '100%' }} />}
    </div>
  );
};

export default BurtTheChicken;