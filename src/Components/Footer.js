import React from "react";
import "../Media.css";
import "../Mirage.css";
import logo from "../Assets/Icons/Mirage.svg";
import insta from "../Assets/Icons/instagram.svg";
import twitter from "../Assets/Icons/twitter.svg";
import youtube from "../Assets/Icons/video.svg";
import facebok from "../Assets/Icons/facebook.svg";
import copyright from "../Assets/Icons/copyright.svg";
import language from "../Assets/Icons/language.svg";

export function Footer() {
  return (
    <footer>
      <div id="footer_top_container">
        <div id="logo_card">
          <img src={logo} alt="" />
          <p>560 N Riverview D Ste 658</p>
          <p>North Carolina DA 598745 USA</p>
          <p>Follow us on</p>
          <div id="sm_card">
            <div id="mini_card">
              <img src={insta} alt="" />
            </div>
            <div id="mini_card">
              <img src={twitter} alt="" />
            </div>
            <div id="mini_card">
              <img src={youtube} alt="" />
            </div>
            <div id="mini_card">
              <img src={facebok} alt="" />
            </div>
          </div>
        </div>
        <div id="footer_link_card">
          <p>Resouces</p>
          <a href="sa">Revisions</a>
          <a href="sa">Sheets</a>
          <a href="sa">Quiz</a>
          <a href="sa">Drill</a>
        </div>
        <div id="footer_link_card">
          <p>About</p>
          <a href="sa">About us</a>
          <a href="sa">Partners</a>
          <a href="sa">Contact us</a>
          <a href="sa">Contact us</a>
        </div>
        <div id="footer_link_card">
          <p>Helpful link</p>
          <a href="sa">Mirage</a>
          <a href="sa">Solutions</a>
          <a href="sa">Industries</a>
          <a href="sa">Services</a>
        </div>
      </div>
      <div id="footer_footer_card">
        <div id="footer_left_card">
          <img src={copyright} alt="" />
          <span>All Rights Reserved By Mirage 2020</span>
        </div>
        <div id="footer_right_card">
          <img src={language} alt="" />
          <select name="language" id="cars">
            <option value="english">Eng</option>
            <option value="russian">Rus</option>
          </select>
        </div>
      </div>
    </footer>
  );
}
