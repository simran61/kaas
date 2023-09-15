import React from "react";
// import video from "../../assets/company.mp4";
import video from "../../assets/dummy_video.mp4";
import "./companyworks.css";

export default function CompanyWorks() {
  return (
    <div className="company_works">
      <div className="motto_header">
        <h2>WHY COMPANY?</h2>
      </div>
      <div className="company_body">
        <video
          className="video"
          width="500"
          //   height="500"
          controls
          autoPlay="true"
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="company_content">
          <h2>How Company Works?</h2>
          <p>
            Lorem ipsum dolor, sit amet conse fssactetur adipisicing elit. At,
            odit placeat facere nisi error quia atque volu ptatem mollitia. ique
            error quia atque volu ptatem mollitia. Itaque culpa, similique animi
            ere nisi error quia atque voluptatem mollitia. Itaque animi impedit
            qui reic impedit qui reiciendis.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}
