import { useState } from 'react';

function Colors() {
  const [lastColor, setLastColor] = useState('red');

  const handleColorClick = (color) => {
    setLastColor(color);
  };

  return (
    <div>
      <div className="color-squares">
        <div
          className="color-square red"
          onClick={() => handleColorClick('red')}
        ></div>
        <div
          className="color-square blue"
          onClick={() => handleColorClick('blue')}
        ></div>
        <div
          className="color-square green"
          onClick={() => handleColorClick('green')}
        ></div>
        <div
          className="color-square yellow"
          onClick={() => handleColorClick('yellow')}
        ></div>
      </div>
      <p>The last color clicked is {lastColor}</p>
    </div>
  );
}

export default Colors;
