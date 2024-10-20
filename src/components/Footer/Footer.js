import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      {/* Footer Items Container */}
      <div className="footer-items-container">
        {/* Subscribe To Our Newsletter Container */}
        <div className="footer-item-container">
          <p className="footer-title">SUBSCRIBE TO OUR NEWSLETTER</p>
          <p className="footer-item-paragraph">
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
            necesbus enim
          </p>
          <input
            type="email"
            placeholder="ENTRR Your Email Address"
            className="email-input"
          />
          <button className="newsletter-btn">SUBSCRIBE</button>
        </div>
        {/* About Us Container */}
        <div className="footer-item-container">
          <p className="footer-title">ABOUT US</p>
          <p className="footer-item-paragraph">Our Story</p>
          <p className="footer-item-paragraph">Blogs</p>
          <p className="footer-item-paragraph">Careers</p>
          <p className="footer-item-paragraph">Contact Us</p>
          <p className="footer-item-paragraph">Help & Support</p>
        </div>
        {/* Our Services Container*/}
        <div className="footer-item-container">
          <p className="footer-title">OUR SERVICES</p>
          <p className="footer-item-paragraph">Book Maali</p>
          <p className="footer-item-paragraph">Plant Day Care</p>
          <p className="footer-item-paragraph">Rent Plants</p>
          <p className="footer-item-paragraph">Plants & Pots</p>
          <p className="footer-item-paragraph">Gardening Tools</p>
        </div>
        {/* My Account Container */}
        <div className="footer-item-container">
          <p className="footer-title">My Account</p>
          <p className="footer-item-paragraph">Orders & Returns</p>
          <p className="footer-item-paragraph">Track Order</p>
          <p className="footer-item-paragraph">Privacy Policy</p>
          <p className="footer-item-paragraph">
            Return, Refund & Replacemnet Policy
          </p>
        </div>
        {/* Get In Touch Container */}
        <div className="footer-item-container">
          <p className="footer-title">GET IN TOUCH</p>
          <p className="footer-item-paragraph">Address: F-262, First Floor, </p>
          <p className="footer-item-paragraph">Sushant Lok Phase-III, </p>
          <p className="footer-item-paragraph">Sector-57, Gurgaon,</p>
          <p className="footer-item-paragraph">Haryana, India 122003</p>
          <p className="footer-item-paragraph">Call: +919958287272</p>
          <p className="footer-item-paragraph">
            Email: care@chaperoneplants.com
          </p>
        </div>
        <div>
          {/* Chaperone Container */}
          <div>
            <p className="footer-title">CHAPERONE</p>
            <p className="chaperone-paragraph">
              Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
              necessitatibus enim ut internos accusantium a numquam autem ab
              rerum omnis. Non molestiae ratione et laborum doloribus aut
              molestiae voluptates ut porro excepturi sit molestiae obcaecati
              qui quis beatae est voluptatem eius. Et architecto nihil id labore
              omnis hic iste deleniti et porro aspernatur.
            </p>
          </div>
          {/* Follow Us On Container */}
          <div className="social-network">
            <p className="footer-title">Follow us on</p>
            <div className="social-media-icons-container">
              <FaInstagram />
              <FaFacebook />
              <FaSquareThreads />
              <FaYoutube />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
      {/* Copy Right Container */}
      <hr className="social-media-hr-line" />
      <p className="social-medial-copy-right-paragraph">
        @2023, chaperone.com All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
