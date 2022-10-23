import React from "react";
import CTA from "./CTA";
import "./header.css";
import userProfile from "../../assets/svg/user-profile.svg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Granit Nebiu</h1>
        <h5 className="text-light">Fullstack developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="user-profile">
          <img src={userProfile} alt="user-profile" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
