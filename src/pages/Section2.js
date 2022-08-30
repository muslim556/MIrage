import React from "react";
import "../Media.css"
import "../Mirage.css";
import artist from "../Assets/Images/woman_artist.png";
import arrow from "../Assets/Icons/arrow_right.svg"

export function Section2() {
  return (
    <section id="sec2">
      <div id="sec2_img">
        <img src={artist} alt="" />
      </div>
      <div id="sec2_text_card">
        <p>Design Things </p>
        <p>We Loves To Design Your Creative Ideas</p>
        <p>
          A creative concept is an overarching “Big Idea” that captures audience
          interest, influences their emotional response and inspires them to
          take action.It is a unifying theme that can be used across all
          campaign messages
        </p>
        <button>
          <span>Learn more</span>
          <img src={arrow} alt="arrow" />
        </button>
      </div>
    </section>
  );
}
