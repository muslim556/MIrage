import React from "react";
import "../Media.css"
import "../Mirage.css";
import mail from "../Assets/Images/Mail Illustration.png";
import email from "../Assets/Icons/Mail.svg";
import arrow from "../Assets/Icons/arrow_right.svg";
import background from "../Assets/Background/right_bottom_background.svg";

export function Subscription() {
  return (
    <div id="sub_container">
      <div id="sub_top_img" style={{
        display: "none"}}>
        <img src={mail} alt="" />
      </div>
      <div id="subs_text_container">
        <p>Subscribe To Our Blog</p>
        <p>
          A newsletter is a tool used to communicate regularly with your
          subscribers, delivering the information
        </p>
        <div id="form_card">
          <img src={email} alt="" />
          <input type="email" placeholder="Type Your Email Address" />
          <button>
            <span>Send now</span>
            <img src={arrow} alt="arrow" />
          </button>
        </div>
      </div>
      <img src={background} alt="" id="sub_img"/>
    </div>
  );
}
