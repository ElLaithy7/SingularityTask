import React from "react";
import Logo from "./Components/Logo";
import NavBar from "./Components/NavBar";
import SignUpButton from "./Components/SignUpButton";
import "./Header.css";
const Header = () => {
  return (
    <div className="headerContainer">
      <Logo />
      <NavBar />
      <SignUpButton />
    </div>
  );
};

export default Header;
