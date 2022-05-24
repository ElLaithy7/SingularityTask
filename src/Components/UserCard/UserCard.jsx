import React from "react";
import ArcGraphic from "./Components/ArcGraphic";
import UserAvatar from "./Components/UserAvatar";
import UserBalance from "./Components/UserBalance";
import UserDetails from "./Components/UserDetails";
import "./UserCard.css";

const UserCard = () => {
  return (
    <div className="userCard">
      <div className="userCardHeader">
        <UserAvatar />

        <UserDetails />
      </div>

      <div className="arcContainer">
        <ArcGraphic />
        <UserBalance />
      </div>
    </div>
  );
};

export default UserCard;
