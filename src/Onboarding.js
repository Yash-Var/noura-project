import React, {useState} from 'react';
import './Onboarding.css';
import Home from './Home';

const OnboardingAlt = () => {
	const [startClicked, setStartClicked] = useState(false);

	const handleStartClick = () => {
		setStartClicked(true);
	  };

  return (
    <div className="onboarding-alt">
      
	  {!startClicked ? (
        <div className="frame" onClick={handleStartClick}>
          <div className="text-wrapper">Next</div>
        </div>
      ) : (
        <Home />
      )}
        <p className="p">What do you want to work on?</p>
        <div className="frame-2">
          <div className="frame-3">
            <input type="radio" className="radio-button" id="breaks" name="workOn" />
            <label htmlFor="breaks" className="text-wrapper-2">Taking more breaks</label>
          </div>
          <div className="frame-3">
            <input type="radio" className="radio-button" id="focus" name="workOn" />
            <label htmlFor="focus" className="text-wrapper-2">Help me focus</label>
          </div>
          <div className="frame-4">
            <input type="radio" className="radio-button" id="water" name="workOn" />
            <label htmlFor="water" className="text-wrapper-3">Drink more water</label>
          </div>
          <div className="frame-4">
            <input type="radio" className="radio-button" id="breathing" name="workOn" />
            <label htmlFor="breathing" className="text-wrapper-3">Breathing and Stretching</label>
          </div>
        </div>
        <div className="frame-5">
          <div className="text-wrapper-2">Noura</div>
          <img className="img" alt="Cancel" src="cancel.png" />
        </div>
      </div>
    
  );
};

export default OnboardingAlt;
