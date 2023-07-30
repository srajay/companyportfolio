import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductPage from "./productpage/ProductPage";
import AboutPage from "./aboutpage/AboutPage";
import ContactPage from "./contactpage/ContactPage";

const BodySection = () => {
  return (
    <>
      <div className="bodysection">
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/product" exact element={<ProductPage />}></Route>
          <Route path="/about" exact element={<AboutPage />}></Route>
          <Route path="/contact" exact element={<ContactPage />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default BodySection;
