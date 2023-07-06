import React from "react";
import "./Water1.css";

function Water1(props) {
  const { noura, cancel, whatIsYourTarget, number, oz, theUSNationalAc, next } =
    props;

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
          <div className="frame-11">
            <div className="number inter-normal-log-cabin-14px">{number}</div>
          </div>
          <div className="oz inter-normal-white-16px">{oz}</div>
        </div>
        <p className="the-us-national-ac">{theUSNationalAc}</p>
        <div className="frame-27">
          <div className="next inter-normal-log-cabin-14px">{next}</div>
        </div>
      </div>
    </div>
  );
}

export default Water1;
