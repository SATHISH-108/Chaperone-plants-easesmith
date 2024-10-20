import React from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "../../assests/icons";
import ChaperonePlantsLogo from "../../assests/ChaperonePlantsLogo.png";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { useGlobalContext } from "../../components/Context/Context";
import "./Navbar.css";
const Navbar = () => {
  const { cartCount } = useGlobalContext();

  const NavLinkStyled = (obj) => {
    const { isActive } = obj;
    return {
      color: isActive ? "#F3A939" : "#000000",
      textDecoration: isActive ? "underline" : "none",
      fontWeight: 600,
      fontSize: "18px",
    };
  };
  return (
    <div className="Navbar-container">
      {/* Chaperone Plant Log Image Container */}
      <div className="chaperone-plant-log-container">
        <img
          src={ChaperonePlantsLogo}
          alt="logo"
          className="chaperone-plants-logo"
        />
        <h3 className="chaperone-heading">Chaperone</h3>
      </div>
      {/* NavLinks container */}
      <div className="navlinks-container">
        <NavLink to="/" style={NavLinkStyled}>
          Home
        </NavLink>

        <NavLink to="/plantspots" style={NavLinkStyled}>
          Plants & Pots
        </NavLink>
        <div>
          <NavLink to="/tools" style={NavLinkStyled}>
            Tools
          </NavLink>
          <ChevronDown />
        </div>

        <div>
          <NavLink to="/ourservices" style={NavLinkStyled}>
            Our Services
          </NavLink>
          <ChevronDown />
        </div>

        <NavLink to="/blog" style={NavLinkStyled}>
          Blog
        </NavLink>

        <NavLink to="/ourstory" style={NavLinkStyled}>
          Our Story
        </NavLink>

        <NavLink to="/faqs" style={NavLinkStyled}>
          FAQs
        </NavLink>
      </div>
      {/* User Cart Container */}
      <div className="user-cart-container">
        <div className="user-logo-container">
          <AiOutlineUser className="icon" />
          <p>My Profile</p>
        </div>
        <div className="cart-logo-container">
          <p className="products-count">{cartCount}</p>
          <BsCart className="icon" />
          <p>Cart</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
