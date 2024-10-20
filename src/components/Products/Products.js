import React from "react";
import "./Products.css";
import { ChevronDown, Heart } from "../../assests/icons";
import Product1 from "../../assests/ProductPlantImages/Product1.jpeg";
import Product2 from "../../assests/ProductPlantImages/Product2.jpeg";
import Product3 from "../../assests/ProductPlantImages/Product3.jpeg";
import Rating from "../../assests/ProductPlantImages/Rating.png";
import { useGlobalContext } from "../Context/Context";
const Products = () => {
  const { setIsOpen, isOpen, setIsThankyou, setCurrentProductName } =
    useGlobalContext();
  console.log(isOpen);
  return (
    <div className="products-sort-container">
      {/* 300 Products Heading & Sort By button container */}
      <div className="sort-by-container">
        <p className="sort-products-heading">
          300 products &nbsp; &nbsp;
          <span className="sort-btn">
            SORT BY <ChevronDown />
          </span>
        </p>
      </div>
      {/*Products Container */}
      <div className="Products-container">
        {/*First Product Container */}
        <div className="product-container">
          <div className="product-image-container">
            <div className="image-wrapper">
              <div className="heart-icon-container">
                <Heart />
              </div>
              <img src={Product1} alt="Product" className="product-image" />
            </div>
            <button
              className="View-product-btn"
              onClick={() => {
                setIsThankyou(true);
                setCurrentProductName("Monsterra");
              }}
            >
              View Product
            </button>
          </div>
          <div className="product-content-container">
            <p className="product-name">Monsterra</p>
            <p>Indoor Plant Low maintenance</p>
            <p className="rating-para">
              <img src={Rating} alt="rating_image" className="rating-image" />{" "}
              &nbsp; &nbsp; 4.9
            </p>

            <p className="product-price">
              <span className="marked-price">$359</span>
              <span>$ 299</span>
            </p>
            <div className="product-btns-container">
              <button
                className="product-add-btn"
                onClick={() => setIsOpen(true)}
              >
                <span>-</span> Add to cart
                <span>+</span>
              </button>
              <button className="product-buy-btn">Buy on Rent</button>
            </div>
          </div>
        </div>
        {/* Second Product Container */}
        <div className="product-container">
          <div className="product-image-container">
            <div className="image-wrapper">
              <div className="heart-icon-container">
                <Heart />
              </div>
              <img src={Product2} alt="Product" className="product-image" />
            </div>
            <button
              className="View-product-btn"
              onClick={() => {
                setIsThankyou(true);
                setCurrentProductName("Monsterra");
              }}
            >
              View Product
            </button>
          </div>
          <div className="product-content-container">
            <p className="product-name">Monsterra</p>
            <p>Indoor Plant Low maintenance</p>
            <p className="rating-para">
              <img src={Rating} alt="rating_image" className="rating-image" />{" "}
              &nbsp; &nbsp; 4.9
            </p>

            <p className="product-price">
              <span className="marked-price">$359</span>
              <span>$ 299</span>
            </p>
            <div className="product-btns-container">
              <button
                className="product-add-btn"
                onClick={() => setIsOpen(true)}
              >
                <span>-</span> Add to cart
                <span>+</span>
              </button>
              <button className="product-buy-btn">Buy on Rent</button>
            </div>
          </div>
        </div>
        {/* Third Product Container */}
        <div className="product-container">
          <div className="product-image-container">
            <div className="image-wrapper">
              <div className="heart-icon-container">
                <Heart />
              </div>
              <img src={Product3} alt="Product" className="product-image" />
            </div>
            <button
              className="View-product-btn"
              onClick={() => {
                setIsThankyou(true);
                setCurrentProductName("Monsterra");
              }}
            >
              View Product
            </button>
          </div>
          <div className="product-content-container">
            <p className="product-name">Monsterra</p>
            <p>Indoor Plant Low maintenance</p>
            <p className="rating-para">
              <img src={Rating} alt="rating_image" className="rating-image" />{" "}
              &nbsp; &nbsp; 4.9
            </p>

            <p className="product-price">
              <span className="marked-price">$359</span>
              <span>$ 299</span>
            </p>
            <div className="product-btns-container">
              <button
                className="product-add-btn"
                onClick={() => setIsOpen(true)}
              >
                <span>-</span> Add to cart
                <span>+</span>
              </button>
              <button className="product-buy-btn">Buy on Rent</button>
            </div>
          </div>
        </div>
        {/* Fourth Product Container */}
        <div className="product-container">
          <div className="product-image-container">
            <div className="image-wrapper">
              <div className="heart-icon-container">
                <Heart />
              </div>
              <img src={Product1} alt="Product" className="product-image" />
            </div>
            <button
              className="View-product-btn"
              onClick={() => {
                setIsThankyou(true);
                setCurrentProductName("Monsterra");
              }}
            >
              View Product
            </button>
          </div>
          <div className="product-content-container">
            <p className="product-name">Monsterra</p>
            <p>Indoor Plant Low maintenance</p>
            <p className="rating-para">
              <img src={Rating} alt="rating_image" className="rating-image" />{" "}
              &nbsp; &nbsp; 4.9
            </p>

            <p className="product-price">
              <span className="marked-price">$359</span>
              <span>$ 299</span>
            </p>
            <div className="product-btns-container">
              <button
                className="product-add-btn"
                onClick={() => setIsOpen(true)}
              >
                <span>-</span> Add to cart
                <span>+</span>
              </button>
              <button className="product-buy-btn">Buy on Rent</button>
            </div>
          </div>
        </div>
        {/* Fifth Product Container */}
        <div className="product-container">
          <div className="product-image-container">
            <div className="image-wrapper">
              <div className="heart-icon-container">
                <Heart />
              </div>
              <img src={Product2} alt="Product" className="product-image" />
            </div>
            <button
              className="View-product-btn"
              onClick={() => {
                setIsThankyou(true);
                setCurrentProductName("Monsterra");
              }}
            >
              View Product
            </button>
          </div>
          <div className="product-content-container">
            <p className="product-name">Monsterra</p>
            <p>Indoor Plant Low maintenance</p>
            <p className="rating-para">
              <img src={Rating} alt="rating_image" className="rating-image" />{" "}
              &nbsp; &nbsp; 4.9
            </p>

            <p className="product-price">
              <span className="marked-price">$359</span>
              <span>$ 299</span>
            </p>
            <div className="product-btns-container">
              <button
                className="product-add-btn"
                onClick={() => setIsOpen(true)}
              >
                <span>-</span> Add to cart
                <span>+</span>
              </button>
              <button className="product-buy-btn">Buy on Rent</button>
            </div>
          </div>
        </div>
        {/* Sixth Product Container */}
        <div className="product-container">
          <div className="product-image-container">
            <div className="image-wrapper">
              <div className="heart-icon-container">
                <Heart />
              </div>
              <img src={Product3} alt="Product" className="product-image" />
            </div>
            <button
              className="View-product-btn"
              onClick={() => {
                setIsThankyou(true);
                setCurrentProductName("Monsterra");
              }}
            >
              View Product
            </button>
          </div>
          <div className="product-content-container">
            <p className="product-name">Monsterra</p>
            <p>Indoor Plant Low maintenance</p>
            <p className="rating-para">
              <img src={Rating} alt="rating_image" className="rating-image" />{" "}
              &nbsp; &nbsp; 4.9
            </p>

            <p className="product-price">
              <span className="marked-price">$359</span>
              <span>$ 299</span>
            </p>
            <div className="product-btns-container">
              <button
                className="product-add-btn"
                onClick={() => setIsOpen(true)}
              >
                <span>-</span> Add to cart
                <span>+</span>
              </button>
              <button className="product-buy-btn">Buy on Rent</button>
            </div>
          </div>
        </div>
        {/* Seventh Product Container */}
        <div className="product-container">
          <div className="product-image-container">
            <div className="image-wrapper">
              <div className="heart-icon-container">
                <Heart />
              </div>
              <img src={Product1} alt="Product" className="product-image" />
            </div>
            <button
              className="View-product-btn"
              onClick={() => {
                setIsThankyou(true);
                setCurrentProductName("Monsterra");
              }}
            >
              View Product
            </button>
          </div>
          <div className="product-content-container">
            <p className="product-name">Monsterra</p>
            <p>Indoor Plant Low maintenance</p>
            <p className="rating-para">
              <img src={Rating} alt="rating_image" className="rating-image" />{" "}
              &nbsp; &nbsp; 4.9
            </p>

            <p className="product-price">
              <span className="marked-price">$359</span>
              <span>$ 299</span>
            </p>
            <div className="product-btns-container">
              <button
                className="product-add-btn"
                onClick={() => setIsOpen(true)}
              >
                <span>-</span> Add to cart
                <span>+</span>
              </button>
              <button className="product-buy-btn">Buy on Rent</button>
            </div>
          </div>
        </div>
        {/* Eight Product Container */}
        <div className="product-container">
          <div className="product-image-container">
            <div className="image-wrapper">
              <div className="heart-icon-container">
                <Heart />
              </div>
              <img src={Product2} alt="Product" className="product-image" />
            </div>
            <button
              className="View-product-btn"
              onClick={() => {
                setIsThankyou(true);
                setCurrentProductName("Monsterra");
              }}
            >
              View Product
            </button>
          </div>
          <div className="product-content-container">
            <p className="product-name">Monsterra</p>
            <p>Indoor Plant Low maintenance</p>
            <p className="rating-para">
              <img src={Rating} alt="rating_image" className="rating-image" />{" "}
              &nbsp; &nbsp; 4.9
            </p>

            <p className="product-price">
              <span className="marked-price">$359</span>
              <span>$ 299</span>
            </p>
            <div className="product-btns-container">
              <button
                className="product-add-btn"
                onClick={() => setIsOpen(true)}
              >
                <span>-</span> Add to cart
                <span>+</span>
              </button>
              <button className="product-buy-btn">Buy on Rent</button>
            </div>
          </div>
        </div>
        {/* Nineth Product Container */}
        <div className="product-container">
          <div className="product-image-container">
            <div className="image-wrapper">
              <div className="heart-icon-container">
                <Heart />
              </div>
              <img src={Product3} alt="Product" className="product-image" />
            </div>
            <button
              className="View-product-btn"
              onClick={() => {
                setIsThankyou(true);
                setCurrentProductName("Monsterra");
              }}
            >
              View Product
            </button>
          </div>
          <div className="product-content-container">
            <p className="product-name">Monsterra</p>
            <p>Indoor Plant Low maintenance</p>
            <p className="rating-para">
              <img src={Rating} alt="rating_image" className="rating-image" />{" "}
              &nbsp; &nbsp; 4.9
            </p>

            <p className="product-price">
              <span className="marked-price">$359</span>
              <span>$ 299</span>
            </p>
            <div className="product-btns-container">
              <button
                className="product-add-btn"
                onClick={() => setIsOpen(true)}
              >
                <span>-</span> Add to cart
                <span>+</span>
              </button>
              <button className="product-buy-btn">Buy on Rent</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
