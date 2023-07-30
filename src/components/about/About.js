import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-content">
          <div className="about-content-text">
            <p>
              Kiewit is one of North America’s largest and most respected
              engineering and construction organizations. Kiewit’s commitment to
              safety, quality and environmental stewardship are ingrained in
              everything we do. It’s visible in our core values, the work that
              we build and in our people.
            </p>
            <p>Learn more about Kiewit.</p>
          </div>
          <div className="about-btn">
            <button>Engineering</button>
            <button>Construction</button>
          </div>
        </div>
        <div className="about-data">
          <div className="data">
            <div className="side-rectangle"></div>
            <div className="data-revenue">
              <h1>$13.7 billion</h1>
              <p>2022 Revenues</p>
            </div>
          </div>

          <div className="data">
            <div className="side-rectangle"></div>
            <div className="data-craft">
              <h1>25,700</h1>
              <p>Craft and staff employees</p>
            </div>
          </div>
          <div className="data">
            <div className="side-rectangle"></div>
            <div className="data-rank">
              <h1>#3</h1>
              <p>Rank in ENR's list of Top 400</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
