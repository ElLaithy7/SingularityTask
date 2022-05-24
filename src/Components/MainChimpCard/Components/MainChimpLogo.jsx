import React from "react";
import ChimpLogo from "../../../Assets/MainChimpLogo.png";
import "./MainChimpLogo.css";

const MainChimpLogo = () => {
  return (
    <div className="MainChimpLogoContainer">
      <img className="mainChimpLogo" src={ChimpLogo} alt="MainChimpLogo" />
      <p className="MainChimpText">MainChimp</p>
    </div>
  );
};

export default MainChimpLogo;
