import React, { useEffect, useState } from "react";
import "./Breathe.css";
import Breathe3 from "./Breathe3.js";

const Breathe2 = ({ sessionDuration }) => {
  const [timer, setTimer] = useState(sessionDuration * 60);
  const [message, setMessage] = useState("Breathe In");
  const [isTimerComplete, setTimerComplete] = useState(false);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage((prevMessage) => {
        if (prevMessage === "Breathe In") {
          return "Hold";
        } else if (prevMessage === "Hold") {
          return "Exhale";
        } else if (prevMessage === "Exhale") {
          return "Breathe In";
        }
        return prevMessage;
      });
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setTimerComplete(true);
    }
  }, [timer]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  if (isTimerComplete) {
    return <Breathe3 />;
  }

  return (
    <div className="breath2">
      <div className="div">
        <div className="frame2">
          <div className="Noura">Noura</div>
          <img className="cancel" alt="Cancel" src="cancel.png" />
        </div>
        <div className="timer-breathe2">{formatTime(timer)}</div>
        <div className="breathe-msg">{message}</div>
        <div className="overlap-group">
          <div className="ellipse" />
          <div className="ellipse-2" />
        </div>
      </div>
    </div>
  );
};

export default Breathe2;
