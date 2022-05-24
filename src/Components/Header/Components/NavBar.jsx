import { SvgIcon } from "@mui/material";
import React from "react";
import "./NavBar.css";
import { createSvgIcon } from "@mui/material";

const NavBar = () => {
  const items = ["Product", "Company", "Pricing"];
  const ArrowDownIcon = createSvgIcon(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 35 35">
      <defs>
        <clipPath>
          <path fill="#00f" fill-opacity=".514" d="m-7 1024.36h34v34h-34z" />
        </clipPath>
        <clipPath>
          <path fill="#aade87" fill-opacity=".472" d="m-6 1028.36h32v32h-32z" />
        </clipPath>
      </defs>
      <path
        d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373"
        transform="matrix(-.00013.03541.03541.00013 3.02 2.988)"
        fill="#4d4d4d"
      />
    </svg>
  );
  return (
    <div className="navBarContainer">
      {items.map((item, i) =>
        i === items.length - 1 ? (
          <div className="pricingContainer">
            <div key={i} className="pricingText">
              {item}
            </div>
            <SvgIcon component={ArrowDownIcon} width="5" height="5" />
          </div>
        ) : (
          <div key={i}>{item}</div>
        )
      )}
    </div>
  );
};

export default NavBar;
