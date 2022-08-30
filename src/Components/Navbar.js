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
        <a href="s">
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
        <a href="a">Home</a>
        <a href="a">About</a>
        <a href="a">Product</a>
        <a href="a">Pricing</a>
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
