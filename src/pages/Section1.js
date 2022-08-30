import React from "react";
import "../Media.css"
import "../Mirage.css";
import cubs from "../Assets/Icons/cubs.svg";
import dev from "../Assets/Icons/dev.svg";
import portfolio from "../Assets/Icons/portfolio (2).svg";
import illustration from "../Assets/Icons/layers 1.svg";
import arrow from "../Assets/Icons/arrow.svg";
import leftbck from "../Assets/Background/left_top_background.svg";

export function Section1() {
  return (
    <section id="sec1">
      <div id="sec1_text">
        <p>Our Services</p>
        <p>Why People Choose Us</p>
      </div>
      <div id="sec1_cards_container">
        <div id="sec1_card">
          <img src={cubs} alt="" />
          <p>Design</p>
          <p>a plan or drawing produced to show the look and function</p>
          <button id="sec1_btn">
            Learn more <img src={arrow} alt="" />{" "}
          </button>
        </div>
        <div id="sec1_card">
          <img src={dev} alt="" />
          <p>Development</p>
          <p>Development is defined as the process of growth or new </p>
          <button id="sec1_btn">
            Learn more <img src={arrow} alt="" />{" "}
          </button>
        </div>
        <div id="sec1_card">
          <img src={portfolio} alt="" id="portfolio" />
          <p>Branding</p>
          <p>The marketing practice of creating a name, symbol or </p>
          <button id="sec1_btn">
            Learn more <img src={arrow} alt="" />{" "}
          </button>
        </div>
        <div id="sec1_card">
          <img src={illustration} alt="" />
          <p>Illustration</p>
          <p>An illustration is a decoration, interpretation or visual</p>
          <button id="sec1_btn">
            Learn more <img src={arrow} alt="" />{" "}
          </button>
        </div>
      </div>
      <img src={leftbck} alt="" id="sec1_bck"/>
    </section>
  );
}
