// import { useState } from "react";
import React, { useState } from "react";
import "./Water1.css";
// import Water1 from "./Water1";
import { Link } from "react-router-dom";
function Water1(props) {
  const {
    noura,
    cancel,
    whatIsYourTarget,
    number,
    oz,
    theUSNationalAc,
    next,
    Every,
    rom,
  } = props;
  console.log(rom + "pp");
  const [nnumber, setnnumber] = useState("0");
  return (
    <div className="">
      <div className="water1 screen">
        <div className="frame-29">
          <div className="noura">{noura}</div>
          <img className="cancel" src={cancel} alt="cancel" />
        </div>
        <div className="what-is-your-target inter-normal-white-16px">
          {whatIsYourTarget}
        </div>
        <div className="frame-30">
          <div className="oz inter-normal-white-16px">{Every}</div>
          <div className="frame-11">
            <input
              className="number inter-normal-log-cabin-14px yash"
              value={nnumber}
              onChange={(e) => {
                setnnumber(e.target.value);
              }}
            />
          </div>
          <div className="oz inter-normal-white-16px">{oz}</div>
        </div>
        <p className="the-us-national-ac">{theUSNationalAc}</p>
        <div className="frame-27">
          <div className="next inter-normal-log-cabin-14px">
            <Link to={`/${rom}`}>{next}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Water1;
