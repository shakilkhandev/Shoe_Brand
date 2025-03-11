import React from "react";
import "./HeroSection.css";
import ButtonRed from "../Button/ButtonRed/ButtonRed";
import ButtonWhite from "../Button/ButtonWhite/ButtonWhite";

// HeroSection component definition
const HeroSection = () => {
  return (
    <>
      <main className="hero-section">
        <div className="hero-intro-section">
          <h1 className="hero-intro-title"> Where Comfort Meets Style</h1>
          <h2>Discover our wide range of footwear for every occasion!</h2>
          <p>
            Step into a world of unparalleled comfort and style with our
            exclusive collection of shoes. From casual wear to formal occasions,
            we have the perfect <br /> pair to complement your unique taste and
            lifestyle.
          </p>

          <div className="hero-button">
            {/* Red button for "Shop Now" */}
            <ButtonRed name={"Shop Now"} className={"hover"} />
            {/* White button for "Explore More!" */}
            <ButtonWhite name={"Explore More!"} color={"black"}   />
          </div>
          <div className="hero-intro-available-logos">
            <p>Also available On</p>
            <div className="available-on-logo-container">
              <a href="https://www.flipkart.com/" target="_blank">
                <img
                  height="38px"
                  src="./image/flipkart.png"
                  alt=" flipkart logo"
                />
              </a>
              <a href="https://www.amazon.in/" target="_blank">
                <img height="34px" src="./image/amazon.png" alt="amazon logo" />
              </a>
              <div>Made by Shakil Khan</div>
            </div>
          </div>
        </div>

        {/* Hero image section */}
        <div className="hero-image-section">
          <div className="hero-image-section-background"></div>
          <img src="image/shoe.png" alt="Shoe" />
        </div>
        
      </main>

      
    </>
  );
};

export default HeroSection;
