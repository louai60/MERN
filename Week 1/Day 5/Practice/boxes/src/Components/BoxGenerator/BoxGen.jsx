import React, { useState } from 'react';
import './style.css'

const BoxGen = () => {
  const [boxes, setBoxes] = useState([]);
  const [color, setColor] = useState('');

  const SubmitHandler = (e) => {
    e.preventDefault();
    setBoxes([...boxes, color]);
    setColor(''); 
  };

  return (
    <div className="container">
      <form onSubmit={SubmitHandler}>
        <label htmlFor="color">Color: </label>
        <input
          type="text"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div className="box-container">
        {boxes.map((boxColor, idx) => (
          <div key={idx} className={`box`} style={{ backgroundColor: boxColor }} />
        ))}
      </div>
    </div>
  );
};

export default BoxGen;

