import React from "react";
import "../Mirage.css";
import "../Media.css"
import ferrari from "../Assets/Icons/ferrari.svg";
import microsoft from "../Assets/Icons/microsoft-gray.svg";
import natgeo from "../Assets/Icons/National Geo Logo.svg";
import deloitte from "../Assets/Icons/Deloitte-gray.svg";
import google from "../Assets/Icons/google.svg";

export function Brands() {
  return (
    <div id="Brands">
      <img src={ferrari} alt="" />
      <img src={microsoft} alt="" />
      <img src={natgeo} alt="" />
      <img src={deloitte} alt="" />
      <img src={google} alt="" />
    </div>
  );
}
