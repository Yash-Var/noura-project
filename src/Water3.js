import React from "react";
import "./Water3.css";

export const Water3 = () => {
  return (
    <div className="water">
      <div className="div">
        <div className="frame">
          <div className="text-wrapper">Next</div>
        </div>
        <div className="text-wrapper-2">Daily water gauge.</div>
        <p className="p">Keep it up! Next water break in:</p>
        <div className="text-wrapper-3">120oz</div>
        <div className="text-wrapper-4">0oz</div>
        <div className="frame-2">
          <div className="text-wrapper-5">Noura</div>
          <img
            className="cancel"
            alt="Cancel"
            src="https://generation-sessions.s3.amazonaws.com/31ad3ffedd08a73ffb211843c6f2d1c7/img/cancel@2x.png"
          />
        </div>
        <div className="overlap-group">
          <div className="rectangle" />
        </div>
        <h1 className="h-1">25:00</h1>
      </div>
    </div>
  );
};
