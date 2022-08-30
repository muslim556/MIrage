import React, { useState } from "react";
import "../Mirage.css";
import logo from "../Assets/Icons/Mirage.svg";
import line from "../Assets/Icons/Menu.svg";
import { DrawerTop } from "./Drawer";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div>
        <a href="!#">
          <img
            src={logo}
            alt="logo"
            style={{
              cursor: "pointer",
            }}
          />
        </a>
      </div>
      <div id="link_card">
        <a href="!#">Home</a>
        <a href="!#">About</a>
        <a href="!#">Product</a>
        <a href="!#">Pricing</a>
      </div>
      <button id="nav_btn">
        <img
          src={line}
          alt="line"
          onClick={() => {
            setOpen(true);
          }}
        />
      </button>
      <DrawerTop open={open} setOpen={setOpen} />
    </nav>
  );
}
