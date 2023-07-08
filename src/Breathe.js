import React, { useState } from 'react';
import './Breathe.css';
import Breathe2 from './Breathe2';
import Breathe3 from './Breathe3';

const Breathe = () => {
  const [startClicked, setStartClicked] = useState(false);
  const [sessionDuration, setSessionDuration] = useState(0);

  const handleStartClick = () => {
    setStartClicked(true);
  };

  const handleDurationChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setSessionDuration(Math.max(0, Math.min(60, value)));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSessionDuration((prevDuration) => Math.min(60, prevDuration + 1));
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSessionDuration((prevDuration) => Math.max(0, prevDuration - 1));
    }
  };

  return (
    <div className="breath">
      {!startClicked ? (
        <div className="frame" onClick={handleStartClick}>
          <div className="Start">Start</div>
        </div>
      ) : ( sessionDuration>0 ? 
        <Breathe2 sessionDuration={sessionDuration} /> : <Breathe3 />
      
      )}
      <p className="p">How long do you want this session to last?</p>
      <div className="frame-2">
        <div className="div-wrapper">
          <input
            type="number"
            className="text-wrapper-2"
            min="0"
            max="60"
            value={sessionDuration}
            onChange={handleDurationChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="text-wrapper-3">minutes</div>
      </div>
      <div className="frame-3">
        <div className="text-wrapper-4">Noura</div>
        <img className="cancel" alt="Cancel" src="cancel.png" />
      </div>
    </div>
  );
};

export default Breathe;
