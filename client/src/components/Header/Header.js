import React, { useRef } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/Group.png";

const Header = () => {
  return (
    <div className="container">
      <section className="header">
        <Link to="/" className="logo">
          <img src={logo} alt="" className="logo__image" />
          <h1 className="logo__title">Fast Track</h1>
        </Link>

        <ul className="nav-links">
          <li className="nav-links__item">
            <a href="#features" className="nav-links__item__links">
              Features
            </a>
          </li>
          <li className="nav-links__item">
            <a href="#resources" className="nav-links__item__links" to="/">
              Resources
            </a>
          </li>
          <li className="nav-links__item">
            <button className="nav-links__item__button">GET STARTED</button>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Header;
