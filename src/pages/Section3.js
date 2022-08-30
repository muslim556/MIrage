import React from "react";
import "../Media.css"
import "../Mirage.css";
import Children from "../Assets/Images/children.png";
import arrow from "../Assets/Icons/arrow_right.svg";
import rightbck from "../Assets/Background/right_middle_background.svg";

export function Section3() {
  return (
    <section id="sec3">
      <div id="sec2_text_card" className="sec2_text">
        <p>Our Teamwork </p>
        <p>We Believe Success Lies On Teamwork</p>
        <p>
          Good teamwork means a synergistic way of working with each person
          committed and working towards a shared goal. ... It is therefore a
          necessity that leaders facilitate and build the teamwork skills of
          their people if they are
        </p>
        <button id="sec3_btn">
          <span>Learn more</span>
          <img src={arrow} alt="arrow" />
        </button>
      </div>
      <div id="sec3_img">
        <img src={Children} alt="" id="sec3_img" />
      </div>
      <img src={rightbck} alt="" id="sec3_img_bck" style={{display: "none"}}/>
    </section>
  );
}
