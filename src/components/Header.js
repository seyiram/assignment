import React from "react";
import "./Header.css";
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <header role="navigation">
      <div className="top-menu-bar">
        <ul className="top-menu-links d-flex justify-content-end">
          <li className="top-menu-item">
            <a href="">Departments</a>
          </li>
          <li className="top-menu-item">
            <a href="">Newsroom</a>
          </li>
          <li className="top-menu-item">
            <a href="">
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li className="top-menu-item">
            <a href="">
              <i class="fab fa-twitter-square"></i>
            </a>
          </li>
          <li className="top-menu-item">
            <a href="">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li className="top-menu-item">
            <a href="">English</a>
          </li>
          <li className="top-menu-item">
            <a href="">Francais</a>
          </li>
        </ul>
      </div>
      <nav className="navbar">
        <div className="row">
          <div className="col-md-12 col-sm-6 d-flex">
            <img src={logo} alt="logo" />
            <div className="navbar-items">
              <ul className="navbar-links d-flex mt-4 ml-5">
                <li className="navbar-item">
                  <a href="#">Organization</a>
                </li>
                <li className="navbar-item">
                  <a href="#">Services</a>
                </li>
                <li className="navbar-item">
                  <a href="#">Find BAC/BRC</a>
                </li>
                <li className="navbar-item">
                  <a href="#">Become A Client</a>
                </li>
                <li className="navbar-item">
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
