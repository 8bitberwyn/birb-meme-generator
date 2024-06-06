import React, { useEffect, useImperativeHandle } from 'react';

const BurtTheChicken = React.forwardRef(({ feathers, glasses, hats, backgrounds }, ref) => {
  const canvasRef = React.useRef(null);

  useImperativeHandle(ref, () => ({
    getCanvas: () => canvasRef.current,
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const images = [backgrounds, feathers, glasses, hats].filter(Boolean);
    const loadImage = (src) => new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(img);
    });

    Promise.all(images.map(loadImage)).then((loadedImages) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      loadedImages.forEach((img) => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      });
    });
  }, [backgrounds, feathers, glasses, hats]);

  return (
    <div style={{ position: 'relative', width: '500px', height: '500px' }}>
      <canvas ref={canvasRef} width={500} height={500} style={{ display: 'none' }} />
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        {backgrounds && <img src={backgrounds} alt="background" style={{ position: 'absolute', width: '100%', height: '100%' }} />}
        {feathers && <img src={feathers} alt="feathers" style={{ position: 'absolute', width: '100%', height: '100%' }} />}
        {glasses && <img src={glasses} alt="glasses" style={{ position: 'absolute', width: '100%', height: '100%' }} />}
        {hats && <img src={hats} alt="hats" style={{ position: 'absolute', width: '100%', height: '100%' }} />}
      </div>
    </div>
  );
});

export default BurtTheChicken;
