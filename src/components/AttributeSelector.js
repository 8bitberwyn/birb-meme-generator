import React from 'react';

const AttributeSelector = ({ title, options, selected, onSelect }) => {
  const imageStyle = {
    border: '2px solid black',
    cursor: 'pointer',
    margin: '0 25px',
    width: '100px',
    height: '100px',
    borderRadius: '10px'
  };

  return (
    <div>
      <h3>{title}</h3>
      <div style={{  width: '500px', display: 'flex', flexDirection: 'row', overflowX: 'scroll' }}>
        {options.map((option, index) => (
          <img
            key={index}
            src={option}
            alt={option}
            style={{
              ...imageStyle,
              border: selected === option ? '2px solid white' : '2px solid black',
            }}
            onClick={() => onSelect(option)}
          />
        ))}
      </div>
    </div>
  );
};

export default AttributeSelector;