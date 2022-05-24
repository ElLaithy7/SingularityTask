import React from "react";
import CirclesGraphic from "./Components/CirclesGraphic";
import Statistics from "./Components/Statistics";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footerContainer">
      <CirclesGraphic />
      <Statistics />
    </div>
  );
};

export default Footer;
