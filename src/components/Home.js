import React from "react";
import "./Home.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavLink } from "react-router-dom";
// import HeaderImage from '../components/Header/img/home1.jpeg';
import img1 from "../components/Header/img/img6.png";
import img2 from "../components/Header/img/bitcoin.jpeg";
import img3 from "../components/Header/img/blackBg1.png";
const Home = () => {
  return (
    <>
      <div className="box3">
        {/* <marquee className="mar">
          The main objective of our Society is to improve financial skills
        </marquee> */}

        <div className="text-center1">
          <div className="content1">
            <span>
              <h4 className="welcome">Welcome</h4>
            </span>
            <span className="title">
              <p>Our Finance Club</p>
            </span>
            <p className="subtopic">"Smart Money, Bright Futures."</p>
            <br />
          </div>
          <div className="icons" style={{ marginTop: "10px" }}>
            <a
              href="https://www.instagram.com/financeclubmmmut/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram socialLogo"></i>
            </a>

            <a
              href="https://www.facebook.com/financeclubmmmut"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook socialLogo"></i>
            </a>

            <a
              href="https://www.linkedin.com/company/financeclubmmmut/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin socialLogo"></i>
            </a>
          </div>
          <button className="readmore">
            Read More
          </button>
        </div>
      </div>
      <div className="mainbox ">
        <div className="contain">
          <img src={img2} alt="Your Image" className="aboutimage" />
          <div className="content ">
            <h3 className="Aboutus">About Us</h3>
              <p className="para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
                quas quos, excepturi doloremque sapiente inventore fugiat
                delectus magnam labore adipisci quis! Dignissimos itaque error
                animi hic reprehenderit quam, quos minus, in necessitatibus
                commodi doloribus. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Nemo, quas quos, excepturi doloremque sapiente
                inventore fugiat delectus magnam labore adipisci quis!
                Dignissimos itaque error animi hic reprehenderit quam, quos
                minus, in necessitatibus commodi doloribus.
              </p>
            
           <button className="ReadMore">Read More</button>
          </div>
        </div>

        <div className="contain  ct2">
          <img src={img2} alt="Your Image" className="aboutimage" />
          <div className="content ctx2 ">
            <h3 className="Aboutus">About Us</h3>
              <p className="para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
                quas quos, excepturi doloremque sapiente inventore fugiat
                delectus magnam labore adipisci quis! Dignissimos itaque error
                animi hic reprehenderit quam, quos minus, in necessitatibus
                commodi doloribus. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Nemo, quas quos, excepturi doloremque sapiente
                inventore fugiat delectus magnam labore adipisci quis!
                Dignissimos itaque error animi hic reprehenderit quam, quos
                minus, in necessitatibus commodi doloribus.
              </p>
            <button className="ReadMore">Read More</button>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
