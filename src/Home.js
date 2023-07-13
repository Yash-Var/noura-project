// import React, { useState } from "react";
// import "./Home.css";
// import Focus from "./Focus";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// const Home = () => {
//   const [startClicked, setStartClicked] = useState(false);
//   const handleStartClick = () => {
//     setStartClicked(true);
//   };

//   return (
//     <div className="container">
//       <nav className="nav">
//         <div className="title">Noura</div>
//         <button className="close">x</button>
//       </nav>
//       <div className="button-select">
//         <p className="prompt">What would you like to do?</p>
//         <div className="btn-container">
//           <div className="btn-item">
//             <button type="button" id="b1" className="button">
//               Stretch
//             </button>
//           </div>
//           {!startClicked ? (
//             <div className="btn-item" onClick={handleStartClick}>
//               <button type="button" id="b2" className="button">
//                 Focus
//               </button>
//             </div>
//           ) : (
//             <Focus />
//           )}
//           <div className="btn-item">
//             <button type="button" id="b3" className="button">
//               Breathe
//             </button>
//           </div>
//           <div className="btn-item">
//             <button type="button" id="b4" className="button">
//               <a href="/water">Water</a>
//             </button>
//           </div>
//           <div className="btn-item">
//             <button type="button" id="b5" className="button">
//               Custom
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="bottom-button">
//         <button className="next">Next</button>
//       </div>
//     </div>
//   );
// };
// export default Home;

import React, { useState } from "react";
import "./Home.css";
import Focus from "./Focus";
import Water from "./Water";
import { Link } from "react-router-dom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const Home = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [startClicked, setStartClicked] = useState(false);

  const handleStartClick = () => {
    setStartClicked(true);
  };

  const handleButtonClick = (buttonId) => {
    if (buttonId === "b1") {
      handleStartClick();
      setSelectedButton(buttonId);
    } else if (buttonId === "b2") {
      handleStartClick();
      setSelectedButton(buttonId);
    } else if (buttonId === "b3") {
      handleStartClick();
      setSelectedButton(buttonId);
    } else if (buttonId === "b4") {
      handleStartClick();
      setSelectedButton(buttonId);
    } else if (buttonId === "b5") {
      handleStartClick();
      setSelectedButton(buttonId);
    } else if (buttonId === "Back") {
      setSelectedButton(null);
      setStartClicked(false);
    } else {
      setSelectedButton(buttonId);
    }
  };

  return (
    <div className="container">
      <nav className="nav">
        <div className="title">Noura</div>
        <button className="close">x</button>
      </nav>
      <div className="button-select">
        <p
          className={`prompt ${selectedButton || startClicked ? "hidden" : ""}`}
        >
          What would you like to do?
        </p>
        <div
          className={`btn-container ${
            selectedButton || startClicked ? "hidden" : ""
          }`}
        >
          <div className="btn-item">
            <button
              type="button"
              id="b1"
              className="button"
              onClick={() => handleButtonClick("b1")}
            >
              Stretch
            </button>
          </div>
          <div className="btn-item">
            <button
              type="button"
              id="b2"
              className="button"
              onClick={() => handleButtonClick("b2")}
            >
              Focus
            </button>
          </div>
          <div className="btn-item">
            <button
              type="button"
              id="b3"
              className="button"
              onClick={() => handleButtonClick("b3")}
            >
              Breathe
            </button>
          </div>
          <div className="btn-item">
            <Link to="/water" state={{ data: 0 }}>
              <button
                type="button"
                id="b4"
                className="button"
                onClick={() => handleButtonClick("b4")}
              >
                Water
              </button>
            </Link>
          </div>
          <div className="btn-item">
            <button
              type="button"
              id="b5"
              className="button"
              onClick={() => handleButtonClick("b5")}
            >
              Custom
            </button>
          </div>
        </div>
        {startClicked && <Focus />}
        {/* {startClicked && <Water /> && selectedButton === "b4"} */}
        {selectedButton}
      </div>
      <div className="bottom-button">
        <button className="next" onClick={() => handleButtonClick("Back")}>
          {selectedButton ? "Back" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Home;
