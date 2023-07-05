import React, { useEffect, useState } from "react";
import "./Breathe.css";

const Breathe2 = ({ sessionDuration }) => {
  const [timer, setTimer] = useState(sessionDuration * 60);

  useEffect(() => {
    let interval = null;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  useEffect(() => {
    setTimer(sessionDuration * 60);
  }, [sessionDuration]);

  return (
    <div className="breath2">
      <div className="div">
        <div className="frame2">
          <div className="Noura">Noura</div>
          <img className="cancel" alt="Cancel" src="cancel.png" />
        </div>
        <div className="timer-breathe2">{formatTime(timer)}</div>
        <div className="breathe-in">breath in</div>
        <div className="overlap-group">
          <div className="ellipse" />
          <div className="ellipse-2" />
        </div>
      </div>
    </div>
  );
};

export default Breathe2;
