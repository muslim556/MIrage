import React from "react";
import "../Media.css"
import "../Mirage.css";
import man from "../Assets/Images/man.png";
import rightbck from "../Assets/Background/left_middle_background.svg"

export function Section4() {
  return (
    <section id="sec4">
      <div id="sec4_img_card">
        <img src={man} alt="" />
      </div>
      <div id="sec2_text_card" className="sec4_text_card">
        <p>Testimonial</p>
        <p>Thats What Our Client Says About Us</p>
        <p>
          “ Heartiest congratulations to the team for Future projects. I extend
          thankful wishes and wish the team best of luck for the future
          assignments to come. Your effort is gladly ”
        </p>
        <p>Jorge Morrison</p>
        <p>North California,USA</p>
          </div>
          <img src={ rightbck} alt="" id="sec4_img" />
    </section>
  );
}
