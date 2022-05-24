import React from "react";
import "./CreditCardGraphic.css";
import ContactlessOutlinedIcon from "@mui/icons-material/ContactlessOutlined";
// import MasterCardLogo from "../../../Assets/MasterCardLogo.png";

const CreditCardGraphic = () => {
  return (
    <div className="creditCard">
      <div className="cardHeaderContainer">
        <div className="moneyText">$5,156.00</div>
        <div className="iconContainer">
          <ContactlessOutlinedIcon sx={{ color: "white" }} />
        </div>
      </div>
      <div className="detailsContainer1">**** 5693</div>
      <div className="nameContainer">
        <div className="detailsContainer2">SAMI AHMED</div>
        <div className="detailsContainer3">05/24</div>
      </div>
    </div>
  );
};

export default CreditCardGraphic;
