import React from "react";
import "./motto.css";
import mottoImg from "../../assets/motto_img.png";
import goal from "../../assets/goal.svg";

export default function Motto() {
  return (
    <>
      <div className="motto_header">
        <h2>OUR MOTTO</h2>
        <img className="header_img" src={goal} alt="" />
      </div>
      <div className="motto_body">
        <div className="motto_box motto_one">
          <div className="motto_content align_left">
            <h1 className="motto_heading">Our Vision</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio quibusdam sunt, officia accusantium sed pariatur, aut
              rem assumenda, optio eveniet quis. Facilis deserunt minus maiores
              earum voluptate veniam.
            </p>
          </div>
          <img src={mottoImg} alt="" className="motto_img" />
        </div>

        <div className="motto_box motto_two">
          <img src={mottoImg} alt="" className="motto_img" />

          <div className="motto_content align_right">
            <h1 className="motto_heading">Our Mission</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio quibusdam sunt, officia accusantium sed pariatur, aut
              rem assumenda, optio eveniet quis. Facilis deserunt minus maiores
              earum voluptate veniam.
            </p>
          </div>
        </div>

        <div className="motto_box motto_three">
          <div className="motto_content align_left">
            <h1 className="motto_heading">Our Promises</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio quibusdam sunt, officia accusantium sed pariatur, aut
              rem assumenda, optio eveniet quis. Facilis deserunt minus maiores
              earum voluptate veniam.
            </p>
          </div>
          <img src={mottoImg} alt="" className="motto_img" />
        </div>
      </div>
    </>
  );
}
