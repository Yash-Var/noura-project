import React from "react";
import "./Getup1.css";

export const Getup1 = () => {
  return (
    <div className="getup">
      <div className="div">
        <div className="frame">
          <div className="text-wrapper">Stop</div>
        </div>
        <div className="text-wrapper-2">Get up and move!</div>
        <div className="frame-2">
          <div className="text-wrapper-3">Noura</div>
          <img
            className="cancel"
            alt="Cancel"
            src="https://generation-sessions.s3.amazonaws.com/2496079498129325bb3729a507ebeaf1/img/cancel@2x.png"
          />
        </div>
        <div className="overlap-group">
          <img
            className="physical-therapy"
            alt="Physical therapy"
            src="https://generation-sessions.s3.amazonaws.com/2496079498129325bb3729a507ebeaf1/img/physical-therapy@2x.png"
          />
          <h1 className="h-1">10:00</h1>
        </div>
      </div>
    </div>
  );
};
