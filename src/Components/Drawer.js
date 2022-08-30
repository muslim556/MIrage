import React from "react";
import { Drawer, List, ListItemButton, Divider } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import PaymentIcon from "@mui/icons-material/Payment";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import faq from "../Assets/Icons/faq.png";

export function DrawerTop({ open, setOpen }) {
  return (
    <Drawer
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      anchor="top"
    >
      <List
        style={{
          width: "100%",
          height: "400px",
        }}
      >
        <ListItemButton
          onClick={() => {
            setOpen(false);
          }}
        >
          <HomeIcon />
          <p
            style={{
              paddingLeft: "10px",
              color: "#919299",
            }}
          >
            Home
          </p>
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            setOpen(false);
          }}
        >
          <InfoIcon />
          <p
            style={{
              paddingLeft: "10px",
              color: "#919299",
            }}
          >
            About
          </p>
        </ListItemButton>{" "}
        <ListItemButton
          onClick={() => {
            setOpen(false);
          }}
        >
          <ProductionQuantityLimitsIcon />
          <p
            style={{
              paddingLeft: "10px",
              color: "#919299",
            }}
          >
            Product
          </p>
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            setOpen(false);
          }}
        >
          <PaymentIcon />
          <p
            style={{
              paddingLeft: "10px",
              color: "#919299",
            }}
          >
            Payment
          </p>
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            setOpen(false);
          }}
        >
          <img
            src={faq}
            alt=""
            style={{
              width: "20px",
              height: "20px",
            }}
          />
          <p
            style={{
              paddingLeft: "10px",
              color: "#919299",
            }}
          >
            FAQ
          </p>
        </ListItemButton>
        <Divider />
        <List
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ListItemButton>
            <TelegramIcon />
            <a
              href="https://t.me/muslim_1233"
              target="blank"
              style={{
                paddingLeft: "10px",
              }}
            >
              Telegram
            </a>
          </ListItemButton>
          <ListItemButton>
            <InstagramIcon />
            <a
              href="https://www.instagram.com/muslim_najmiddinov/"
              target="blank"
              style={{
                paddingLeft: "10px",
              }}
            >
              Instagram
            </a>
          </ListItemButton>
          <ListItemButton>
            <CallIcon />
            <a
              href="tel:+998911831282"
              target="blank"
              style={{
                paddingLeft: "10px",
              }}
            >
              Call
            </a>
          </ListItemButton>
          <ListItemButton>
            <EmailIcon />
            <a
              href="mailto: muslimbeknajmiddinov31@gmail.com"
              target="blank"
              style={{
                paddingLeft: "10px",
              }}
            >
              Email
            </a>
          </ListItemButton>
        </List>
      </List>
    </Drawer>
  );
}
