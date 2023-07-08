import React from "react";
import "./Breathe.css";
import congo from "./temp_preferences_custom.png";

const Breathe3 = () => {
  return (
    <div className="breath3">
      <div className="div">
        <div className="frame3">
          <div className="Noura">Noura</div>
          <img className="cancel" alt="Cancel" src="cancel.png" />
        </div>
        <p className="p">Great job! You did it!</p>
        <div className="div-wrapper">
          <div className="another-session">Another Session?</div>
        </div>
        <img className="temp-preferences" alt="Temp preferences" src={congo} />
      </div>
    </div>
  );
};

export default Breathe3;
