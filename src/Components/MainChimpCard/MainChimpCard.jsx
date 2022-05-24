import React from "react";
import MainChimpLogo from "./Components/MainChimpLogo";
import Subscription from "./Components/Subscription";
import "./MainChimpCard.css";

const MainChimpCard = () => {
  return (
    <div className="MainChimpCardContainer">
      <div style={{ marginLeft: "10%" }}>
        <MainChimpLogo />
        <Subscription />
      </div>
    </div>
  );
};

export default MainChimpCard;
