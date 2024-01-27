import React from 'react';
import "./footer.css";
import img1 from "./Header/img/favicon.jpeg";
import img2 from "./Header/img/mmmlogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';



const Footer = () => {
  return (
    <>
     
      <div className="main"style={{backgroundColor:"yellow"}}>
  <div id="boxes">
        <div id="leftbox">
            
           <img src={img1} alt="img1"style={{width:"100px",height:"100px"}} />
           <img src={img2} alt="img2" />
        </div>
 
        <div id="middlebox"style={{paddingLeft: "18%"}}>
            <h2 >Social Link</h2>
            <div className="icons mt-5">
            <FontAwesomeIcon icon={faInstagram} style={{fontSize:"30px"}} />
            <FontAwesomeIcon icon={faFacebook} style={{paddingLeft: "8%",fontSize:"25px"}} />
            <FontAwesomeIcon icon={faLinkedin} style={{paddingLeft: "8%",fontSize:"25px"}}/>
            <FontAwesomeIcon icon={faTwitter} style={{paddingLeft: "8%",fontSize:"25px"}}/>
            

            </div>
            
        </div>
        
       
 
        <div id="rightbox">
            <h4>Contact Us</h4>
           <div className="d"style={{fontSize:"20px"}}>
            <p>Madan Mohan Malaviya University of Technology Gorakhpur,India</p>
            <div className="phone"style={{fontSize:"16px",display:"flex"}}>
            <FontAwesomeIcon icon={faPhone} />
           <p>+912837649027</p>
            </div>
           </div>
        </div>
    </div>
    
      </div>
      <div className="copyright"style={{textAlign:"center"}}>
              <p>copyright c 2024<b>Finance Club MMMUT,Gorakhpur</b> All Rights Reserved</p>
              <p ><b>Designed by </b>Rohit Gaur</p>
            </div>
    </>
  );
};

export default Footer;

