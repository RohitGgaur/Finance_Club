import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section
        class="contact"
        id="contact"
        style={{ background: "rgb(0, 0, 0)" }}
      >
        <h2 class="text-center my-5">Contact Me!</h2>
        <form action="#">
          <div class="input-box">
            <div class="input-field">
              <input type="text" placeholder="Full Name" required />
              <span class="focus"></span>
            </div>
            <div class="input-field">
              <input type="text" placeholder="Email Address" required />
              <span class="focus"></span>
            </div>
          </div>
          <div class="input-box">
            <div class="input-field">
              <input type="number" placeholder="Mobile Number" required />
              <span class="focus"></span>
            </div>
            <div class="input-field">
              <input type="text" placeholder="Email Subject" required />
              <span class="focus"></span>
            </div>
          </div>

          <div class="textarea-field">
            <textarea
              cols="20"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <span class="focus"></span>
          </div>
          <div class="btn-box">
            <button type="submit" class="btn">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
