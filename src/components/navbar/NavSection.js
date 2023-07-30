import React, { useState } from "react";
import "./navsection.css";
import { Link } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";

const NavSection = () => {
  const [activeNavItem, setActiveNavItem] = useState();

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };
  return (
    <>
      <div className="navbarsection">
        <div className="logo">
          <Link to="/">
            <h1>WEBAPP</h1>
          </Link>
        </div>
        <div className="navbar">
          <div className="nav-items">
            <Link to="/">
              <p
                className={activeNavItem === "home" ? "active" : ""}
                onClick={() => handleNavItemClick("home")}
              >
                HOME
              </p>
            </Link>
            <Link to="/product">
              <p
                className={activeNavItem === "product" ? "active" : ""}
                onClick={() => handleNavItemClick("product")}
              >
                PRODUCTS
              </p>
            </Link>

            <Link to="/about">
              <p
                className={activeNavItem === "about" ? "active" : ""}
                onClick={() => handleNavItemClick("about")}
              >
                ABOUT US
              </p>
            </Link>
            <Link to="/contact">
              <button>CONTACT US</button>
            </Link>
          </div>
        </div>
        {/* <div className="navbar-menu">
          {toggleMenu ? (
            <CloseIcon
              color="#000"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <MenuIcon
              color="#000"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="navbar-menu-container">
              <div className="navbar-menu-container-links">
                <p>
                  <a href="#home">Home</a>
                </p>
                <p>
                  <a href="#wgpt3">About US</a>
                </p>
                <p>
                  <a href="#possibility">Contact</a>
                </p>
                <p>
                  <a href="#features">our services</a>
                </p>
                <p>
                  <a href="#blog">Projects</a>
                </p>
              </div>
            </div>
          )}
        </div> */}
      </div>
    </>
  );
};

export default NavSection;
