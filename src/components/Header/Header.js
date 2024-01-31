import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import headerImg from "./img/favicon.jpeg";
import mmmlogo from "./img/mmmlogo.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-white"
        style={{
          position: "relative",
          width: "100%",
          top: "0",
          zIndex: "10",
          margin: "0px",
          padding: "0px",
          backgroundAttachment: "scroll",
        }}
      >
        <div className="container-fluid" style={{ backgroundColor: "black" }}>
          <Link className="navbar-brand mx-3" to="#">
            <div className="logclass">
              <img
                src={headerImg}
                alt="logo"
                style={{ width: "10%", margin: "1%" }}
              />
              <h3>The Finance Club</h3>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ backgroundColor: "white" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  activeClassName="active_name"
                  className="nav-link"
                  to="/Home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active_name"
                  className="nav-link"
                  to="/About"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active_name"
                  className="nav-link"
                  to="/Event"
                >
                  Event
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active_name"
                  className="nav-link"
                  to="/Team"
                >
                  Team
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active_name"
                  className="nav-link"
                  to="/Contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
