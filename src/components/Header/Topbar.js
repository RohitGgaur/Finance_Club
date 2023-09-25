import React from "react";
import "./Header.css";
const Topbar = () => {
  return (
    <>
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"></link>
      <section id="topbar" class="d-flex align-items-center">
        <div  style={{background:"red",width:"100%"}}>
          <div class="contact-info d-flex align-items-center">
            <i class="bi bi-envelope-fill">
              <a href="financeclubmmmut@gmail.com">
                financeclubmmmut@gmail.com
              </a>
            </i>
            <i class="bi bi-phone d-flex align-items-center ms-4 " >
              <span>+917488682755</span>
            </i>
          
         <div class="social-links d-flex align-items-center ms-4 ">  
          
            <a href="#" class="twitter mx-2">
            <i class="bi bi-twitter-x"></i>
            </a>
           
            <a href="#"class="facebook mx-2">
            <i class="bi bi-facebook"></i>
            </a>
            <a href="#"class="instagram mx-2" >
            <i class="bi bi-instagram"></i>
            </a>
            <a href="#"class="linkedin mx-2">
            <i class="bi bi-linkedin"></i>
            </a>
           </div> 
         </div> 
        </div>
      </section>
    </>
  );
};

export default Topbar;
