import React from 'react';
import "./About.css";
import Footer from "./footer";

const About = () => {
  return (
    <>
    <div className="backg">
      <div className="About">
      <div class="Row ">
          <div class="column-event">
            <h2>MegaBucks</h2>
            <p>
              <b>
                The Finance Club of MMMUT provides you with the platform to show
                trading skills and strategy in the stock market without the risk
                of losing money. In this, we do live trading with help of
                virtual money stocked in the trading account. Participants use
                their knowledge, skill, and strategy to maximize their profit.
                MEGABUCKS Creating wealth through capital appreciation
                Protecting your earnings from market volatility Improving the
                proficiency of your investment portfolio Maximizing returns on
                investments (ROI) Optimizing the risk.
              </b>
            </p>
          </div>
          <div class="column-event">
            <h2>Fiscal Short</h2>
            <p>
              <b>
                Embark on a creative journey with The Finance Club Photo
                Contest! This contest invites you to presents your financial
                prowess through captivating photos. Using the provided Google
                Form, showcase your creativity by uploading a finance-themed
                photo and stay tuned for updates on our Instagram page
                '@arthavya.' The winner will be determined by the highest number
                of likes on their photo, so rally your supporters for a chance
                to clinch the title.Don't miss this opportunity to blend your
                passion for finance with your creative flair.
              </b>
            </p>
          </div>
        </div>
      </div>
      
    </div>
    <Footer className="footer mt-5" />
    </>
  );
};

export default About;
