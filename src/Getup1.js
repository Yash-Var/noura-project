import React from "react";
import "./geet2.css";
import { Link } from "react-router-dom";
export const Getup1 = () => {
  return (
    <div className="getup">
      <div className="div">
        <div className="frame">
          <Link to="/getup2">
            {" "}
            <div className="text-wrapper">Stop</div>
          </Link>
        </div>
        <div className="text-wrapper-2">Get up and move!</div>
        <div className="frame-2">
          <div className="text-wrapper-3">Noura</div>
          <img
            className="cancel"
            alt="Cancel"
            src="https://generation-sessions.s3.amazonaws.com/842df57e88e4bd5a789ac8949a66ee51/img/cancel@2x.png"
          />
        </div>
        <div className="overlap-group">
          <img
            className="physical-therapy"
            alt="Physical therapy"
            src="https://generation-sessions.s3.amazonaws.com/842df57e88e4bd5a789ac8949a66ee51/img/physical-therapy@2x.png"
          />
          <h1 className="h-1">10:00</h1>
        </div>
      </div>
    </div>
  );
};
