import React from "react";
import SearchImage from "../../assests/SearchImage.png";
import SearchPlantImage from "../../assests/SearchPlantImage.png";
import "./SearchPlant.css";
const SearchPlant = () => {
  return (
    <div className="search-container">
      <div className="searchbar-images-container">
        <img src={SearchImage} alt="search_logo" className="search-logo" />
        <input
          type="search"
          placeholder="Search Plant"
          className="search-input"
        />

        <img
          src={SearchPlantImage}
          alt="search_plant"
          className="search-logo"
        />
      </div>
    </div>
  );
};

export default SearchPlant;
