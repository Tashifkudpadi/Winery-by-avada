import React from "react";
import "./SeventhSec.css";
import data from "../seventhSection/seventhData";

function SeventhSec() {
  return (
    <>
      <div className="seventhSection">
        <div className="titleContent">
          <p>THROUGH THE GRAPEVINE</p>
          <h1>Recent News</h1>
        </div>
        <div className="seventhCards">
          {data.map((d) => (
            <div className="seventhCard">
              <img src={d.image} alt="err" />
              <h1>{d.title}</h1>
              <p>{d.subTitle}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="readMore">
        <span>READ MORE NEWS</span>
      </div>
    </>
  );
}

export default SeventhSec;
