import React from 'react';
import './Home.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Correct import statement for Bootstrap icons
import HeaderImage from '../components/Header/img/home1.jpeg'; // Correct import statement for the image
import img1 from "../components/Header/img/img6.png"
import img2 from "../components/Header/img/bitcoin.jpeg"
const Home = () => {
  return (
    <>
      <div className='box3' style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundColor: "#41273A" }}>

        <marquee className="x" style={{ color: 'green' }}>
          The main objective of our Society is to improve financial skills
        </marquee>

        <div className="text-center1">
          <span style={{ color: 'green' }}>
            <h4 >Welcome</h4>
          </span>
          <span style={{ color: "yellow" }}>
            <h1>Our Finance Club</h1>
          </span>
          <b>"Smart Money, Bright Futures."</b>
          <br />
          <div className="icons" style={{ marginTop: "10px", }}>
            <i className="bi bi-instagram" style={{ marginRight: "20px", fontSize: "30px", display: "inline-block", color: "white" }}></i>
            <i className="bi bi-facebook" style={{ marginRight: "20px", fontSize: "30px", display: "inline-block", color: "white" }}></i>
            <i className="bi bi-linkedin" style={{ marginRight: "20px", fontSize: "30px", display: "inline-block", color: "white" }}></i>


          </div>
          <button
            style={{
              background: 'transparent',
              color: 'red',
              boxShadow: '10px 10px 40px black',
              width: '140px',
              height: '40px',
              marginTop: '30px',
            }}
          >
            Read More
          </button>
        </div>
      </div>
      <div className="mainbox">
        <div className="container mt-4">
          <img src={img2} alt="Your Image" style={{ width: "70rem", height: "20rem", marginTop: "15px", marginRight: '20px', borderRadius: "10px" }} />

          <div className="content">
            <h3 className='Aboutus'>About Us</h3>
            <div className="para mt-2">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, quas quos, excepturi doloremque sapiente inventore fugiat delectus magnam labore adipisci quis! Dignissimos itaque error animi hic reprehenderit quam, quos minus, in necessitatibus commodi doloribus.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, quas quos, excepturi doloremque sapiente inventore fugiat delectus magnam labore adipisci quis! Dignissimos itaque error animi hic reprehenderit quam, quos minus, in necessitatibus commodi doloribus.</p>
            </div>
            <button style={{ width: "140px", height: "40px", background: "transparent", color: "green", border: "2px solid green", boxShadow: "5px 5px 5px black", borderRadius: "2px" }}>Read More</button>

          </div>
        </div>

        <div className="container mt-4">
          <div className="content mx-5">
            <h3 className='Aboutus'>About Us</h3>
            <div className="para mt-2">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, quas quos, excepturi doloremque sapiente inventore fugiat delectus magnam labore adipisci quis! Dignissimos itaque error animi hic reprehenderit quam, quos minus, in necessitatibus commodi doloribus.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, quas quos, excepturi doloremque sapiente inventore fugiat delectus magnam labore adipisci quis! Dignissimos itaque error animi hic reprehenderit quam, quos minus, in necessitatibus commodi doloribus.</p>
            </div>
          </div>

          <img src={img2} alt="Your Image" style={{ width: "70rem", height: "20rem", margin: "10px", borderRadius: "10px" }} />

        </div>
        <button style={{width:"140px",height:"40px",background:"transparent",color:"green",border:"2px solid green",boxShadow:"5px 5px 5px black",borderRadius:"2px",marginLeft:"7%",marginBottom:"3%"}}>Read More</button>
      </div>
    </>
  );
};

export default Home;





