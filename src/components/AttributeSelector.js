import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './AttributeSelector.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AttributeSelector = ({ title, options, selected, onChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    onChange(options[currentIndex]);
  }, [currentIndex, options, onChange]);

  const imageStyle = {
    border: '2px solid black',
    cursor: 'pointer',
    width: '100px',
    height: '100px',
    borderRadius: '10px'
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentIndex(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="attribute-selector">
      <h3>{title}</h3>
      <Slider {...settings} className="carousel-container">
        {options.map((option, index) => (
          <div
            key={index}
            className="carousel-item"
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={option}
              alt={option}
              style={{
                ...imageStyle,
                border: selected === option ? '2px solid white' : '2px solid black',
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AttributeSelector;
// import React from 'react';
// import Carousel from 'react-material-ui-carousel';
// import { Paper } from '@mui/material';
// import './AttributeSelector.css';

// const AttributeSelector = ({ title, options, selected, onSelect }) => {
//   const imageStyle = {
//     border: '2px solid black',
//     cursor: 'pointer',
//     width: '100px',
//     height: '100px',
//     borderRadius: '10px'
//   };

//   return (
//     <div>
//       <h3>{title}</h3>
//       <Carousel
//         className="carousel-container"
//         indicators={false}
//         navButtonsAlwaysVisible
//         autoPlay={false}
//         animation="slide"
//         cycleNavigation={false}
//         swipe
//       >
//         {options.map((option, index) => (
//           <Paper key={index} className="carousel-item">
//             <img
//               src={option}
//               alt={option}
//               style={{
//                 ...imageStyle,
//                 border: selected === option ? '2px solid white' : '2px solid black',
//               }}
//               onClick={() => onSelect(option)}
//             />
//           </Paper>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default AttributeSelector;
// import React from 'react';

// const AttributeSelector = ({ title, options, selected, onSelect }) => {
//   const imageStyle = {
//     border: '2px solid black',
//     cursor: 'pointer',
//     margin: '0 25px',
//     width: '100px',
//     height: '100px',
//     borderRadius: '10px'
//   };

//   return (
//     <div>
//       <h3>{title}</h3>
//       <div style={{  width: '500px', display: 'flex', flexDirection: 'row', overflowX: 'scroll' }}>
//         {options.map((option, index) => (
//           <img
//             key={index}
//             src={option}
//             alt={option}
//             style={{
//               ...imageStyle,
//               border: selected === option ? '2px solid white' : '2px solid black',
//             }}
//             onClick={() => onSelect(option)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AttributeSelector;