import React, { useState } from "react";
import "./Home.css";
import Focus from "./Focus";

const Home = () => {
	const [startClicked, setStartClicked] = useState(false);

  const handleStartClick = () => {
	setStartClicked(true);
  };

 

  return (
    <div className="box">
      <div className="onboarding-alt">
        <div className="frame">
          <div className="text-wrapper">Next</div>
        </div>
        <p className="p">What would you like to do?</p>
        <div className="div">
          <div className="text-wrapper-2">Noura</div>
          <img className="cancel" alt="Cancel" src="cancel.png" />
        </div>
        <div className="group">
          <div className="div-wrapper" >
            <div className="text-wrapper">Breaks</div>
          </div>
          {!startClicked ? (
        <div className="frame-2" onClick={handleStartClick}>
          <div className="text-wrapper">Focus</div>
        </div>
      ) : (
        <Focus />
      )}
          <div className="frame-3" >
            <div className="text-wrapper">Water</div>
          </div>
          <div className="frame-4" >
            <div className="text-wrapper">Breath</div>
          </div>
        </div>
        <div className="frame-5">
          <div className="text-wrapper-3">Stretch</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
