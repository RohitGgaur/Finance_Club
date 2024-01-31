import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import headerImg from "./img/favicon.jpeg";
import mmmlogo from "./img/mmmlogo.png"
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Header = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ position: 'relative', width: '100%', top: '0', zIndex: '10',margin:"0px",padding:"0px",backgroundAttachment: 'scroll' }}>
  <div className="container-fluid"style={{backgroundColor:"black"}}>
    <Link className="navbar-brand mx-3" to="#">
    <div className="logclass">
    <img src={headerImg} alt="logo" style={{width:"10%", margin:"1%"}}/>
      <h3>The Finance Club</h3>
    </div>
   
     
      
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink 
          activeClassName = "active-name"
          className="nav-link hey"       to="/Home"><p className="xy">Home</p></NavLink>
        </li>
        <li className="nav-item">

          <NavLink 
          activeClassName = "active-name"
          className="nav-link hey"       to="/About"><p className="xy">About</p></NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
          activeClassName = "active-name"
          className="nav-link hey "       to="/Event"><p className="xy">Event</p></NavLink>
        </li>
        <li className="nav-item">
          <NavLink
          activeClassName = "active-name"
           className="nav-link hey"       to="/Team"><p className="xy">Team</p></NavLink>
        </li>
        <li className="nav-item">
          <NavLink
          activeClassName = "active-name"
           className="nav-link hey"       to="/Contact"><p className="xy">Contact</p></NavLink>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>


     
    </>
  );
};

export default Header;
