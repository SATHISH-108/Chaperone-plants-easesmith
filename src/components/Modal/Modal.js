import React from "react";
import "./Modal.css";
import { useGlobalContext } from "../Context/Context";
const Modal = () => {
  const { cartCount, setCartCount, setIsOpen } = useGlobalContext();
  return (
    <div className="modal-container">
      <p>Are you sure want to add this item into cart ?</p>
      <div className="modal-button-container">
        <button
          className="confirm-btn"
          onClick={() => {
            setCartCount(cartCount + 1);
            setIsOpen(false);
          }}
        >
          CONFIRM
        </button>
        <button className="cancel-btn" onClick={() => setIsOpen(false)}>
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default Modal;
