import React from 'react';
import "./About.css";
import Footer from "./footer";

const About = () => {
  return (
    <>
    <div className="bg mt-5">
      <div className="About">
        <div className="row ">
          <div className="column">
            <h2>Our Vision</h2>
            <p>To be a premier hub for financial knowledge, the Finance Club envisions cultivating a dynamic community dedicated to excellence in finance. Focused on education, ethics, and real-world experiences, our goal is to inspire the next generation of finance leaders. Through collaborative initiatives, we aim to empower individuals with the skills and insights necessary for success in the ever-evolving financial landscape</p>
          </div>
          <div className="column">
            <h2>MegaBucks</h2>
            <p>The Finance Club of MMMUT provides you with the platform to show trading skills and strategy in the stock market without the risk of losing money. In this, we do live trading with the help of virtual money stocked in the trading account. Participants use their knowledge, skill, and strategy to maximize their profit. MEGABUCKS Creating wealth through capital appreciation Protecting your earnings from market volatility Improving the proficiency of your investment portfolio Maximizing returns on investments (ROI) Optimizing the risk.</p>
          </div>
        </div>
      </div>
      
    </div>
    <Footer className="footer mt-5" />
    </>
  );
};

export default About;
