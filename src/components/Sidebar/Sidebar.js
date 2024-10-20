import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="filter-container">
      <div className="filter-category">
        <p>Filter</p>
        <p>CLEAR ALL</p>
      </div>
      <div className="filter-category">
        <p>Type of Plants</p>
        <p>+</p>
      </div>
      <div className="filter-category">
        <p>Price</p>
        <p>+</p>
      </div>
      <div className="filter-category">
        <p>Nursery</p>
        <p>+</p>
      </div>
      <div className="filter-category">
        <p>Ideal Plants Location</p>
        <p>+</p>
      </div>
      <div className="filter-category">
        <p>Indoor/ Outdoor</p>
        <p>+</p>
      </div>
      <div className="filter-category">
        <p>Maintenance</p>
        <p>+</p>
      </div>
      <div className="filter-category">
        <p>Plant Size</p>
        <p>+</p>
      </div>
      <div className="filter-category">
        <p>Water Schedule</p>
        <p>+</p>
      </div>
      <div className="filter-category">
        <p>Color</p>
        <p>+</p>
      </div>
      <div className="filter-category">
        <p>Seasonal</p>
        <p>+</p>
      </div>
      <div className="filter-category">
        <p>Light Efficient</p>
        <p>+</p>
      </div>
    </div>
  );
};

export default Sidebar;
