import React from "react";
import Header from "../Header/Header";
import TitleArea from "../TitleArea/TitleArea";
import "./Main.css";
import PaymentCard from "../PaymentCard/PaymentCard";
import CreditCardGraphic from "../CreditCardGraphic/CreditCardGraphic";
import UserCard from "../UserCard/UserCard";
import MainChimpCard from "../MainChimpCard/MainChimpCard";

const Main = () => {
  return (
    <div className="mainContainer">
      <div className="container1">
        <Header />
        <TitleArea />
      </div>
      <div className="container2">
        <PaymentCard />
        <CreditCardGraphic />
        <UserCard />
        <MainChimpCard />
      </div>
    </div>
  );
};

export default Main;
