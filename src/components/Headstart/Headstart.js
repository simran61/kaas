import React from "react";
import "./headstart.css";
import flag from "../../assets/Flag.png";
import AgeGroup from "../AgeGroup/AgeGroup";

export default function Headstart() {
  return (
    <div className="headstart">
      <div className="headstart_header">
        <h2>GIVE YOUR CHILD A HEADSTART</h2>
        <img className="header_img" src={flag} alt="" />
      </div>

      <div className="headstart_body">
        <AgeGroup />
        <AgeGroup />
        <AgeGroup />
      </div>
    </div>
  );
}
