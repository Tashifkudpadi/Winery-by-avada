import React from "react";
import "./thirdSec.css";
import data from "./thirdSecData";

function ThirdSection() {
  return (
    <>
      <div className="thirdContainer">
        <div className="containerBg"></div>
        <div className="cards">
          {data.map((d) => (
            <div className="card">
              <h2>{d.title}</h2>
              <img src={d.image} alt="err" />
              <span>{d.shop}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ThirdSection;
