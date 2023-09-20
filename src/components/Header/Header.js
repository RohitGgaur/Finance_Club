import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      {/* <header id="header" class="d-flex align-items-center">
    <div class="container d-flex justify-content-between">
      <div class="logo" >
         <a href="index.html"><img src="src\components\Header\img\favicon.png" alt="" class="img-fluid"/></a> 
        <img src="favicon.png" alt="React Image" />
        <h1 class="text-light"><a href="index.html">Finance Club</a></h1>
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <a class="nav-link scrollto active" href="index.html">Home</a>
          <a class="nav-link scrollto" href="#about">About</a>
          <a class="nav-link scrollto" href="events.html">Events</a>
          <a class="nav-link scrollto " href="#portfolio">Next Page</a>
          <a class="nav-link scrollto" href="team.html">Team</a>

          <a class="nav-link scrollto" href="#contact">Contact</a>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
    https://ibb.co/ZgBNWjD
https://ibb.co/N3K4Tr5
https://ibb.co/2MyzCVZ
https://ibb.co/GJGvTYV
https://ibb.co/rMqgcTL
https://ibb.co/bRkMq6c
https://ibb.co/bR6mghS
https://ibb.co/rMqgcTL
https://ibb.co/DWGZZDM
  </header> */}
      <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <div className="img-1 mx-3">
              <img
                src="https://i.ibb.co/2PRwsmL/favicon.png"
                class="img-fluid"
                alt="..."
              />
            </div>
            <a class="navbar-brand" href="#">
              Finance Club
            </a>

            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="/Home">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="About">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Event">
                    Event
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
