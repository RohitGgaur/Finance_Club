
import React from 'react'
import img1 from "../components/Header/img/backgroundevent1.jpg";
import img2 from "../components/Header/img/event/Business.jpg"
import img3 from "../components/Header/img/event/class.jpg"
import img4 from "../components/Header/img/event/kbc.jpg"
import img5 from "../components/Header/img/event/stall.jpg"
import img6 from "../components/Header/img/event/budget.jpg"
import img7 from "../components/Header/img/event/night.jpg"
import img8 from "../components/Header/img/event/back.jpeg"

import "./Event.css";


const Event = () => {
  return (
    <div className="background" style={{ backgroundColor: "#002723" }}>
      <div className="heading">
        <h2>FEST- Arthavya</h2>
      </div>
      <div className="online-event mt-3">
        <h3 className="x" style={{ color: "green" }}>Online event -</h3>
        <div class="row mt-4">
          <div class="column">
            <h2>MegaBucks</h2>
            <p>The Finance Club of MMMUT provides you with the platform to show trading skills and strategy in the stock market without the risk of losing money. In this, we do live trading with help of virtual money stocked in the trading account. Participants use their knowledge, skill, and strategy to maximize their profit. MEGABUCKS Creating wealth through capital appreciation Protecting your earnings from market volatility Improving the proficiency of your investment portfolio Maximizing returns on investments (ROI) Optimizing the risk.</p>
          </div>
          <div class="column ">
            <h2>Fiscal Short</h2>
            <p>Embark on a creative journey with The Finance Club Photo Contest!  This contest invites you to presents your financial prowess through captivating photos. Using the provided Google Form, showcase your creativity by uploading a finance-themed photo and stay tuned for updates on our Instagram page '@arthavya.' 

The winner will be determined by the highest number of likes on their photo, so rally your supporters for a chance to clinch the title.Don't miss this opportunity to blend your passion for finance with your creative flair.</p>
          </div>
        </div>
      </div>
      <div className="offline-event mt-4">
        <h3 className='x' style={{ color: "green" }}>Offline event</h3>
        <div className="event1 mt-4">
          <h3 className='back-to-pavallion'>Back To Pavilion</h3><br />
          <div className="row">
            <div className="column1">
              <img src={img8} alt="Photo" style={{ width: "80vh", height: "50vh", borderRadius: "10px",boxShadow:"10px 10px 10px black" }} />
            </div>
            <div className="column2" style={{ width: "100vh", height: "50vh", marginLeft: "18rem", paddingTop: "5rem" }} >
              <p><b>The Finance Club hosts an engaging IPL Auction event, offering a simulation of real-time bidding for cricket players with virtual money. This initiative not only enhances participants' cricket and management skills but also provides a platform for fun learning about money management. With 616 registered students, the top three teams receive certificates. Additionally, the club organizes insightful webinars featuring renowned speakers to broaden students' understanding of finance.</b></p>
            </div>
          </div>
        </div>
        {/* 2nd */}
        <div className="event1 mt-4 mx-4">
          <h3 className='back-to-pavallion'>Bussiness Tycoon</h3>
          <div className="row">
            <div className="column4" style={{ width: "50%", marginRight: "3%", paddingTop: "5rem" }}>
              <p><b>The Finance Club is going to introduce something new, so brace yourselves for a fresh take on the traditional business game. Our rules are carefully crafted to challenge your critical thinking and push the boundaries of strategic planning.
We are going to provide an opportunity to the candidates to connect with like-minded enthusiasts, a competitive environment and strategic thinking in a fast-paced. It's a test of adaptability, innovation, and out-of-the-box thinking.</b></p>
            </div>
            <div className="column3" style={{ width: "47%", height: "50vh" }}>
              <img src={img2} alt="Photo" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px",boxShadow:"10px 10px 10px black" }} />
            </div>
          </div>
        </div>
        {/* 3rd */}
        <div className="event1 mt-4">
          <h3 className='back-to-pavallion'>Dollar Discussion</h3><br />
          <div className="row">
            <div className="column1">
              <img src={img6} alt="Photo" style={{ width: "80vh", height: "50vh", borderRadius: "10px",boxShadow:"10px 10px 10px black" }} />
            </div>
            <div className="column2" style={{ width: "100vh", height: "50vh", marginLeft: "18rem", paddingTop: "5rem" }} >
              <p><b>The Finance Club initiates a spirited debate on the budget, where insightful minds converge to dissect fiscal policies. This event serves as a platform for diverse perspectives, fostering a deeper understanding of economic intricacies. As the financial landscape unfolds, The Finance Club's budget debate stands as an intellectual arena, sparking dialogue and enlightening discourse on the financial roadmap that shapes our economic future</b></p>
            </div>
          </div>
        </div>
        {/* 4th */}
        <div className="event1 mt-4 mx-4">
          <h3 className='back-to-pavallion'>Rise To Top</h3>
          <div className="row">
            <div className="column4" style={{ width: "50%", marginRight: "3%", paddingTop: "5rem" }}>
              <p><b>The Finance Club is thrilled to introduce a dynamic format for KBC's upcoming season. In the first round, participants will engage in a lottery system to determine their initial standing. Moving into the second round, teams will be strategically divided, fostering a spirited competition—be it boys vs. girls. This innovative approach promises an exciting blend of chance and strategic collaboration, enhancing the overall KBC experience. </b></p>
            </div>
            <div className="column3" style={{ width: "47%", height: "50vh" }}>
              <img src={img4} alt="Photo" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px",boxShadow:"10px 10px 10px black" }} />
            </div>
          </div>
        </div>
        {/* 5th */}
        <div className="event1 mt-4">
          <h3 className='back-to-pavallion'>Pop-Up Media</h3><br />
          <div className="row">
            <div className="column1">
              <img src={img1} alt="Photo" style={{ width: "80vh", height: "50vh", borderRadius: "10px",boxShadow:"10px 10px 10px black" }} />
            </div>
            <div className="column2" style={{ width: "100vh", height: "50vh", marginLeft: "18rem", paddingTop: "5rem" }} >
              <p><b>The Finance Club presents an event that will test your knowledge of Hollywood and Bollywood movies and series. In this event, participants step into the spotlight of our virtual stage, where the challenge is to recreate iconic dialogues from blockbuster movies and series.</b></p>
            </div>
          </div>
        </div>

        {/* 6th */}
        <div className="event1 mt-4 mx-4">
          <h3 className='back-to-pavallion'>Rustic Corner</h3>
          <div className="row">
            <div className="column4" style={{ width: "50%", marginRight: "3%", paddingTop: "5rem" }}>
              <p><b>The  Finance  Club  is  giving  you  an  opportunity  to  set  up  your own stall during the whole fest with anything that reflects your capabilities and passion. This is your chance to step into the spotlight and unleash your entrepreneurial skills to captivate the maximum audience. There will be some nominal charges which will be applied to each stall.</b></p>
            </div>
            <div className="column3" style={{ width: "47%", height: "50vh" }}>
              <img src={img5} alt="Photo" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px", boxShadow:"10px 10px 10px black" }} />
            </div>
          </div>
        </div>
        {/* 7th */}
        <div className="event1 mt-4">
          <h3 className='back-to-pavallion'>Capital Classroom</h3><br />
          <div className="row">
            <div className="column1">
              <img src={img3} alt="Photo" style={{ width: "80vh", height: "50vh", borderRadius: "10px" ,boxShadow:"10px 10px 10px black" }} />
            </div>
            <div className="column2" style={{ width: "100vh", height: "50vh", marginLeft: "18rem", paddingTop: "5rem" }} >
              <p><b>The Finance Club proudly presents "CLASS" – an exclusive event designed to elevate your financial knowledge to new heights. It is going to be a unique experience for the participants where final-year students of the finance club will provide information or knowledge about the finance and the stock world.
In this event, we are not just teaching finance; we are  creating an experience. Candidates will be able to learn some concepts and insights related to  finance and economics.</b></p>
            </div>
          </div>
        </div>
        {/* 8th */}
        <div className="event1 mt-4 mx-4">
          <h3 className='back-to-pavallion'>Casino Carnival</h3>
          <div className="row">
            <div className="column4" style={{ width: "50%", marginRight: "3%", paddingTop: "5rem" }}>
              <p><b>Indulge in an evening of refined enchantment at Finance Club's Prom Night. Immerse yourself in the rhythm of our vibrant dance floor, where each step is a celebration. The chic ramp walk adds a touch of glamour, providing a spotlight for showcasing your unique style.
The crowning moment awaits as we unveil the Prom Night winner, chosen for their exceptional performance that captivates the essence of the night. Embrace the magic—this is more than just a night</b></p>
            </div>
            <div className="column3" style={{ width: "47%", height: "50vh" }}>
              <img src={img7} alt="Photo" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px",boxShadow:"10px 10px 10px black" }} />
            </div>
          </div>
        </div>




      </div>
    </div>


  )
}
export default Event;
