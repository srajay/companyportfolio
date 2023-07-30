import React from "react";
import "./aboutpage.css";
import BackgroundImg from "../../assets/bg2.jpg";

const AboutPage = () => {
  return (
    <>
      <div className="about-page">
        <div
          className="about-container"
          style={{
            backgroundImage: `url(${BackgroundImg})`,
            backgroundSize: `cover`,
            backgroundPositionY: `-200px`,
          }}
        >
          <div className="about-box">
            <div>
              <p>
                Home / <span>about</span>
              </p>
              <h1>ABOUT US</h1>
            </div>
          </div>
        </div>
        <div className="about-content">
          <p>Add more section here . . .</p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
