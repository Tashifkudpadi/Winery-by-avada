import React from "react";
import "./fourthSec.css";
import data from "../fourthSection/fourthData";

function FourthSec() {
  return (
    <>
      <div className="fourthSection">
        <div className="titleContent">
          <p>Specializing in only</p>
          <h1>Selected Bottles</h1>
        </div>
        <div className="fourthCards">
          {data.map((d) => (
            <div className="fourthCard">
              <img src={d.image} alt="err" />
              <h1>{d.title}</h1>
              <p>{d.subTitle}</p>
              <h3>${d.price}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FourthSec;
