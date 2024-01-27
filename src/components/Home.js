import React from 'react';
import './Home.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
// import HeaderImage from '../components/Header/img/home1.jpeg'; 
import img1 from "../components/Header/img/img6.png"
import img2 from "../components/Header/img/bitcoin.jpeg"
import img3 from "../components/Header/img/blackBg1.png"
const Home = () => {
  return (
    <>
      <div className='box3' style={{ backgroundImage: `url(${img3})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundColor: "black"
    
    }}>

        {/* <marquee className="x" style={{ color: 'green' }}>
          The main objective of our Society is to improve financial skills
        </marquee> */}

        <div className="text-center1">
          <div className="content1">
          <span >
            <h4 >Welcome</h4>
          </span>
          <span className='title'>
            <p>Our Finance Club</p>
          </span>
          <p className='subtopic'>"Smart Money, Bright Futures."</p>
          <br />
          </div>
          <div className="icons" style={{ marginTop: "10px", }}>
          <a href="https://www.instagram.com/financeclubmmmut/" target="_blank" rel="noopener noreferrer">
  <i className="bi bi-instagram" style={{ marginRight: "20px", fontSize: "30px", display: "inline-block", color: "white" }}></i>
</a>

<a href="https://www.facebook.com/financeclubmmmut" target="_blank" rel="noopener noreferrer">
  <i className="bi bi-facebook" style={{ marginRight: "20px", fontSize: "30px", display: "inline-block", color: "white" }}></i>
</a>

            <a href="https://www.linkedin.com/company/financeclubmmmut/" target="_blank" rel="noopener noreferrer">
  <i className="bi bi-linkedin" style={{ marginRight: "20px", fontSize: "30px", display: "inline-block", color: "white" }}></i>
</a>

          </div>
          <button
            className='readmore'
          >
            Read More
          </button>
        </div>
      </div>
      <div className="mainbox ">
        <div className="contain ">
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

        <div className="contain mt-4">
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





