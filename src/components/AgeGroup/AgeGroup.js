import React from "react";
import "./ageGroup.css";
import age2 from "../../assets/age2.png";

export default function AgeGroup() {
  return (
    <div className="age_grp_box">
      <img src={age2} alt="" />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste illo eos
        eius, excepturi harum corrupti aliquam nulla, ut, alias illum quas neque
        incidunt accusa ntium facere autem exercita tionem! Sed non hic beatae
        iusto dolore, nostrum.
      </p>
      <button>Age Group 7-9</button>
    </div>
  );
}
