import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import headerImg from "./img/favicon.jpeg";
import mmmlogo from "./img/mmmlogo.png"


const Header = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ position: 'relative', width: '100%', top: '0', zIndex: '10',margin:"0px",padding:"0px",backgroundAttachment: 'scroll' }}>
  <div className="container-fluid"style={{backgroundColor:"black"}}>
    <a className="navbar-brand mx-3" href="#">
    <div className="logclass">
    <img src={headerImg} alt="logo" style={{width:"10%", margin:"1%"}}/>
      <h3>The Finance Club</h3>
    </div>
   
     
      
      </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="/Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Event">Event</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Team">Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Contact">Contact</a>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>


     
    </>
  );
};

export default Header;
