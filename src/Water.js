import "./App.css";
import React, { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Water1 from "./Water1";
function Water() {
  return (
    <Water1
      noura="Noura"
      cancel="https://anima-uploads.s3.amazonaws.com/projects/64a6aade9654ba018ab6591b/releases/64a6abb07c04d59cacb2ee02/img/cancel@2x.png"
      whatIsYourTarget="What is your target?"
      oz="oz."
      number={0}
      theUSNationalAc={
        <React.Fragment>
          The U.S. National Academies of Sciences, Engineering, and Medicine
          determined that an adequate daily fluid intake is:
          <br />
          About 15.5 cups (124 oz) of fluids a day for men
          <br />
          About 11.5 cups (92 oz) of fluids a day for women
        </React.Fragment>
      }
      next="Next"
      rom="water2"
    />
  );
}

export default Water;
