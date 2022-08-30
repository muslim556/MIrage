import React from "react";
import "../Media.css";
import "../Mirage.css";
import arrow from "../Assets/Icons/arrow_right.svg";
import headerimg from "../Assets/Images/Hero Image.png";
import headerbck from "../Assets/Background/top_top_background.svg";

export function Header() {
  return (
    <>
      <header>
        <div id="header_text">
          <div>
            <span>____</span>
            <span>Creative Agency</span>
          </div>
          <p id="we_deliver">We Deliver The Best Product for You</p>
          <p id="design_is">
            Design is the creation of a plan or convention for the construction
            of an object or a system as in architectural blueprints, engineering
            drawings, business processes,
          </p>
          <button>
            <span>Get started</span>
            <img src={arrow} alt="arrow" />
          </button>
        </div>
        <div id="header_right">
          <img src={headerimg} alt="img" id="headerimg" />
        </div>
        <img src={headerbck} alt="" id="header_bck" />
      </header>
    </>
  );
}
