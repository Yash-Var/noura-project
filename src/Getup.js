import React from "react";
import "./getup.css";

export const Getup = () => {
  return (
    <div className="getup">
      <div className="div">
        <div className="frame">
          <div className="text-wrapper">Start</div>
        </div>
        <p className="p">
          It’s recommended to get up and move a few minutes each hour during a
          workday. How often do you want to move?
        </p>
        <div className="frame-2">
          <div className="div-wrapper">
            <div className="text-wrapper-2">0</div>
          </div>
          <div className="text-wrapper-3">minutes per hour</div>
        </div>
        <div className="frame-3">
          <div className="text-wrapper-4">Noura</div>
          <img
            className="cancel"
            alt="Cancel"
            src="https://generation-sessions.s3.amazonaws.com/671c29488cc7891593b9d53d285a1593/img/cancel@2x.png"
          />
        </div>
      </div>
    </div>
  );
};
