import React from "react";
import { BrandLogo, BrandLogoWhite } from "../../svgs/components";
import { Basket, SearchBar } from "../components";

import "../styles/Header.scss";

function Header() {
  return (
    <>
      <div className="header">
        <i className="fas fa-bars header__hamburger"></i>
        <BrandLogo className="header__brand-logo">
          <div className="brand-name">ÇiçekSepeti H1</div>
        </BrandLogo>
        <BrandLogoWhite className="header__brand-logo--white" />
        <SearchBar />
        <Basket />
      </div>
      <div className="brand-banner">
        <SearchBar banner />
      </div>
    </>
  );
}

export default Header;
