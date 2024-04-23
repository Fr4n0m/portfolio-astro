import React from "react";
import HeaderNav from "./header-nav/HeaderNavComponent";
import Logo from "../logo/LogoComponent";
import SearchInput from "./search-input/SearchInputComponent";

const Header = () => {
  return (
    <>
      <header
        id="header"
        className="header absolute flex justify-around items-center w-full"
      >
        <Logo />

        <HeaderNav />

        <SearchInput />
      </header>
    </>
  );
};

export default Header;
