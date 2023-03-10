import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";


export default function Header(props) {
  return (
    <section className="menu cid-s48OLK6784" alt="menu" id="menu1-h">
      <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
        <div className="container">
          <div className="navbar-brand">
            <span className="navbar-caption-wrap">
              <a className="navbar-caption text-black display-7" href={"/"}>
                {props.title}
              </a>
            </span>
          </div>
          <button
            className="navbar-toggler navbar-"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="fas fa-bars"
              style={{
                color: "darkorange",
                fontSize: "xx-large"
              }}
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul
              className="navbar-nav nav-dropdown nav-right"
              data-app-modern-menu="true"
            >
              <li className="nav-item">
                <a href="/" className="nav-link link text-black display-4">
                  Home
                  <br />
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link link text-black display-4" >
                  Generate Details
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link link text-black display-4" to={"/"}>
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link link text-black display-4"
                  to={"/about"}
                >
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section >
  );
}
Header.propTypes = {
  title: PropTypes.string
};
