import React ,{Link}from 'react'
import "./footer.css"
import img1 from "./Header/img/favicon.jpeg"
import img2 from "./Header/img/mmmlogo.png"


export const footer = () => {
  return (
   <>
     <div class="main-box" style={{background:"black"}}>
      <div class="row py-5">
        <div class="col-lg-6 col-md-12 col-sm-12 my-1">
          <img id="logo1" src={img1} alt="Finance Club "/>
          <img id="logo2" src={img2} alt="MMMUT"/>
          <p>
            An Initiative Towards Financial literacy in Society by the Young Minds!
          </p>
          <h5>Follow Us On</h5>
          <div class="social-links d-none d-md-flex align-items-center mx-3">

            <a href="https://m.facebook.com/financeclubmmmut/?ref=page_internal&mt_nav=0" class="facebook mx-2"><i
                class="bi bi-facebook"></i></a>

            <a href="https://www.instagram.com/financeclubmmmut/" class="instagram mx-2"><i class="bi bi-instagram"></i></a>

            <a href="https://www.linkedin.com/company/financeclubmmmut/" class="linkedin mx-2"><i
                class="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12 my-2">
          <h4 style={{color: "#f82249"}}>Contact Us</h4>
          <p><i class="fa fa-home me-3"></i> Madan Mohan Malaviya University of Technology, Gorakhpur(U.P), India</p>
          <p><i class="fa fa-envelope me-3"></i> financeclubmmmut@gmail.com</p>
          <p><i class="fa fa-phone me-3"></i> +91-XXXXXXXXXX</p>
        </div>
        <iframe style={{width:"30%", height:"30%" ,style:"border:0" ,allowfullscreen:"" ,loading:"lazy",
          referrerpolicy:"no-referrer-when-downgrade"}}
          src="https://www.google.com/maps/place/Humanities+and+Management+Science+Department/@26.7301635,83.4338429,18z/data=!4m14!1m7!3m6!1s0x39915ca3e2aa136b:0xc039bdf0211338a9!2sMadan+Mohan+Malaviya+University+Of+Technology!8m2!3d26.7314295!4d83.4331276!16zL20vMDQ0NWN4!3m5!1s0x39915d16ed194649:0x3cce301ca132e024!8m2!3d26.7302512!4d83.4345732!16s%2Fg%2F11frrjg0dw?entry=ttu">
         </iframe>

      </div>
      <div class="row py-2">
        <div class="col-lg-6">
          <p>Copyright © 2023 Finance Club MMMUT Gorakhpur. All Rights Reserved</p>
        </div>
        <div class="col-lg-6 text-lg-right">
          <p>Desinged By <a href="#">Rohit Gaur</a></p>
        </div>
      </div>
    </div>
   </>
  )
};
export default footer;
