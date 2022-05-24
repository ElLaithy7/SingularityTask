import React from "react";
import Footer from "../Footer/Footer";
import ButtonsGrouped from "./Components/ButtonsGrouped";
import Title from "./Components/Title";
import "./TitleArea.css";

const TitleArea = () => {
  return (
    <div className="titleAreaContainer">
      <Title />
      <ButtonsGrouped />
      <Footer />
    </div>
  );
};

export default TitleArea;
