import React from "react";
import NurseryImage1 from "../../assests/NurseryImages/NurseryImage1.png";
import NurseryImage2 from "../../assests/NurseryImages/NurseryImage2.png";
import NurseryImage3 from "../../assests/NurseryImages/NurseryImage3.png";
import NurseryImage4 from "../../assests/NurseryImages/NurseryImage4.png";
import NurseryImage5 from "../../assests/NurseryImages/NurseryImage5.png";
import NurseryImage6 from "../../assests/NurseryImages/NurseryImage6.png";
import WhatsAppImage from "../../assests/WhatsAppImage.png";
import { ChevronUp, ChevronRight } from "../../assests/icons";
import "./Nursery.css";

const Nursery = () => {
  return (
    <div className="nursery-container">
      <h1 className="nursery-heading">Nursery</h1>
      <div className="nursery-images-container">
        <div>
          <img
            src={NurseryImage1}
            alt="nurseryImage1"
            className="nursery-image"
          />
          <p className="nursery-image-paragraph">
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum{" "}
          </p>
        </div>
        <div>
          <img
            src={NurseryImage2}
            alt="nurseryImage2"
            className="nursery-image"
          />
          <p className="nursery-image-paragraph">
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum{" "}
          </p>
        </div>
        <div>
          <img
            src={NurseryImage3}
            alt="nurseryImage3"
            className="nursery-image"
          />
          <p className="nursery-image-paragraph">
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum{" "}
          </p>
        </div>
        <div>
          <img
            src={NurseryImage4}
            alt="nurseryImage4"
            className="nursery-image"
          />
          <p className="nursery-image-paragraph">
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum{" "}
          </p>
        </div>
        <div>
          <img
            src={NurseryImage5}
            alt="nurseryImage5"
            className="nursery-image"
          />
          <p className="nursery-image-paragraph">
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum{" "}
          </p>
        </div>

        <div>
          <p>
            <ChevronRight />
          </p>
          <img src={WhatsAppImage} alt="what's_app_image" className="whats-app-image"/>
          <p>
            <ChevronUp />
          </p>
        </div>

        <div className="whatsapp-icons-container">
          <img
            src={NurseryImage6}
            alt="nurseryImage6"
            className="nursery-image"
          />
          <p className="nursery-image-paragraph">
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nursery;
