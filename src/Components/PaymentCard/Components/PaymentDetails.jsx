import React from "react";
import "./PaymentDetails.css";

const PaymentDetails = () => {
  return (
    <div className="paymentTextContainer">
      <div>
        <p className="paymentText1">Alpha Bank</p>
        <p className="paymentNumbers">$ 12,000</p>
      </div>
      <div>
        <p className="paymentText2">Payment</p>
        <p className="paymentNumbers">$ 23,000</p>
      </div>
    </div>
  );
};

export default PaymentDetails;
