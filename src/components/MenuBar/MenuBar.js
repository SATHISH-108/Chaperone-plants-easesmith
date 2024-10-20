import React from "react";
import { Sidebar, Products } from "../index";
import "./MenuBar.css";
import Pagination from "../Pagination/Pagination";
const MenuBar = () => {
  return (
    <div>
      {/* Sidebar & Products Container Horizontally */}
    <div className="menubar-container">
      <Sidebar />
      <Products />
    </div>
    <Pagination/>
    </div>
  );
};

export default MenuBar;
