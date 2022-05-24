import React from "react";
import ExplorePlatformButton from "./ExplorePlatformButton";
import WatchIntroButton from "./WatchIntroButton";
import "./ButtonsGrouped.css";
const ButtonsGrouped = () => {
  return (
    <div className="buttonsContainer">
      <ExplorePlatformButton />
      <WatchIntroButton />
    </div>
  );
};

export default ButtonsGrouped;
