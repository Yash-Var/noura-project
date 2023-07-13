import React from "react";
import "./Water1.css";
import Water1 from "./Water1";
import { useLocation } from "react-router-dom";
function Water2(props) {
  const {
    noura,
    cancel,
    whatIsYourTarget,
    number,
    oz,
    theUSNationalAc,
    next,
    rom,
  } = props;
  const location = useLocation();

  return (
    <Water1
      noura="Noura"
      cancel="https://anima-uploads.s3.amazonaws.com/projects/64a6aade9654ba018ab6591b/releases/64a6abb07c04d59cacb2ee02/img/cancel@2x.png"
      whatIsYourTarget="How often do you want to be reminded?"
      oz="mins"
      next="Next"
      Every="Every"
      rom="water3"
    />
  );
}

export default Water2;
