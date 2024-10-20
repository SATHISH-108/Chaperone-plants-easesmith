import React from "react";
import { SearchPlant, TopHeader } from "../index";
import { Navbar } from "../../Pages/index";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <TopHeader/>
      <Navbar />
      <SearchPlant />
    </div>
  );
};

export default Header;
