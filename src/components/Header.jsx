import React from "react";
import BottomHalfHeader from "./HeaderComponents/BottomHalfHeader";
import TopHalfHeader from "./HeaderComponents/TopHalfHeader";

const Header = () => {
  return (
    <header className="header">
      <TopHalfHeader />
      <BottomHalfHeader />
    </header>
  );
};

export default Header;
