import React from 'react'
import "./Contact.css";

const Contact = () => {
  return (
    <>
     <section class="contact" id="contact" style={{background:"#3327e9"}}>
    <h2 class="text-center my-5">Contact Me!</h2>
    <form action="#">
        <div class="input-box">
            <div class="input-field">
                <input type="text" placeholder="Full Name" required/>
                <span class="focus"></span>
            </div>
            <div class="input-field">
                <input type="text" placeholder="Email Address" required/>
                <span class="focus"></span>
            </div>
           
        </div>
        <div class="input-box">
            <div class="input-field">
                <input type="number" placeholder="Mobile Number" required/>
                <span class="focus"></span>
            </div>
            <div class="input-field">
                <input type="text" placeholder="Email Subject" required/>
                <span class="focus"></span>
            </div>
        </div>
        
        <div class="textarea-field">
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" required></textarea>
            <span class="focus"></span>
        </div>
        <div class="btn-box">
            <button type="submit"class="btn">Submit</button>
        </div>
    </form>
    <div class="detail">
        <div class="contact-no"><i class='bx bxs-phone-call'>7906626698</i></div>
        <div class="email"><i class='bx bx-envelope'> financeclubmmmut@gmail.com</i></div>
    </div>
  </section>
    </>
  )
}

export default Contact