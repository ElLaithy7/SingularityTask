import React from "react";
import PayButton from "./Components/PayButton";
import PaymentDetails from "./Components/PaymentDetails";
import PieChartGraphic from "./Components/PieChartGraphic";
import "./PaymentCard.css";

const PaymentCard = () => {
  return (
    <div className="payCard">
      <div className="payCardContainer">
        <PieChartGraphic />
        <PaymentDetails />
        <PayButton />
      </div>
    </div>
  );
};

export default PaymentCard;
