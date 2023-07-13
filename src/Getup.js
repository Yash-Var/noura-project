import React from "react";
import "./geet.css";
import { Link } from "react-router-dom";

export const Getup = () => {
  return (
    <div className="getup1">
      <div className="div">
        <div className="frame">
          <Link to="/getup1">
            {" "}
            <div className="text-wrapper">Start</div>
          </Link>
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
            src="https://generation-sessions.s3.amazonaws.com/a8a2fa6862b771f611809b24d0ebeece/img/cancel@2x.png"
          />
        </div>
      </div>
    </div>
  );
};
