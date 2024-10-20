import React from "react";
import ThankyouPageImage from "../../assests/ThankyouPage/ThankyouPageImage.png";
import { Xmark } from "../../assests/icons";
import { useGlobalContext } from "../Context/Context";
import "./Thankyou.css";
const Thankyou = () => {
  const { setIsThankyou, currentProductName } = useGlobalContext();
  return (
    <div className="thankyou-cart-container">
      <div className="cart-heading-cancel-icon-container">
        <p className="thankyou-heading">Your Cart</p>
        <p onClick={() => setIsThankyou(false)}>
          <Xmark className="cancel-icon" />
        </p>
      </div>
      <hr />
      <p className="paragraph">Congratulation Order Placed!</p>
      <p className="thankyou-paragraph">
        Thank you for your interest in &nbsp;
        {currentProductName}!.
      </p>
      <img src={ThankyouPageImage} alt="Thankyou" className="thankyou-image" />
      <p className="thankyou-paragraph">
        Thank you for choosing Chaperone services. will soon get in touch with
        you!
      </p>

      <button className="go-shopping-button">CONTINUE SHOPPING</button>
    </div>
  );
};

export default Thankyou;
