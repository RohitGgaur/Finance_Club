import React,{Link} from 'react'
import "./Team.css";

import img from "../components/Header/img/AayushSharma.jpeg";
// import img1 from "../components/Header/img/Team_member/Final Year/Amisha Gupta.jpg";
import img2 from "../components/Header/img/Team_member/Main Part/Mandeep.jpg";
import man from "../components/Header/img/boss.png";
import woman from "../components/Header/img/woman.png";
import manish from "../components/Header/img/Team_member/Main Part/Manish.jpeg";

    //2nd Year picture

import tanisha2 from "../components/Header/img/Team_member/Second Year/Tanisha Agrahari - Tanisha Agrahari.jpg"
import prashant2 from "../components/Header/img/Team_member/Second Year/20220904_121952 - Prashant Sharma.jpg"
import akarsh2 from "../components/Header/img/Team_member/Second Year/AkarshSingh - Akarsh Singh.jpg"
import anuj2 from "../components/Header/img/Team_member/Second Year/Anuj Gupta  - Anuj Gupta.jpg"
import sakshij2 from "../components/Header/img/Team_member/Second Year/DSC_0018 (2) - Sakshi Jaiswal.jpg"
import sakshig2 from "../components/Header/img/Team_member/Second Year/IMG_20230528_120050_360 - Sakshi Gupta.jpg"
import anish2 from "../components/Header/img/Team_member/Second Year/IMG_20230603_235910 - Anish Tiwari.jpg"
import muskan2 from "../components/Header/img/Team_member/Second Year/IMG_20230927_131433 - Muskan Chirania.jpg"
import harshb2 from "../components/Header/img/Team_member/Second Year/IMG_20230927_134643 - HB.jpg"
import richa2 from "../components/Header/img/Team_member/Second Year/Richa Mishra.jpeg"
import kajal2 from "../components/Header/img/Team_member/Second Year/Kajal Lakhotia - Kajal Lakhotia.jpg"
import manish2 from "../components/Header/img/Team_member/Second Year/Manish Kumar - Manish Kumar.jpg"
import mansi2 from "../components/Header/img/Team_member/Second Year/Mansi Upadhyay - Mansi Upadhyay.jpg"
import taukir2 from "../components/Header/img/Team_member/Second Year/Taukir Alam - Manish Kumar.jpg"
import himanshu2 from "../components/Header/img/Team_member/Second Year/WhatsApp Image 2023-09-27 at 12.17.35 AM - Himanshu Yadav.jpeg"
import anurag2 from "../components/Header/img/Team_member/Second Year/Anurag Verma - Anurag Verma.jpg"
import mahak2 from "../components/Header/img/Team_member/Second Year/WhatsApp Image 2023-09-27 at 15.53.13.jpeg"
import shraddha2 from "../components/Header/img/Team_member/Second Year/IMG-20230927-WA0000 - Shraddha.jpg"
import devansh2 from "../components/Header/img/Team_member/Second Year/IMG_3997 - devansh pandey.jpeg"
import tanya2 from "../components/Header/img/Team_member/Second Year/IMG_20230927_181708 - Taanya Gupta.jpg"
import arav2 from "../components/Header/img/Team_member/Second Year/1694197206883 - Arav Prajapati.jpg"
import aman2 from "../components/Header/img/Team_member/Second Year/IMG-20230927-WA0006 - Aman Patel.jpg"
import chaitanya2 from "../components/Header/img/Team_member/Second Year/IMG_20230910_165827-Chaitanya Raj.jpg"
import garvita2 from "../components/Header/img/Team_member/Second Year/IMG-20230502-WA0078 - Garvita Singh.jpg"

    //Third Year Picture

import abdul3 from "../components/Header/img/Team_member/Third Year 2/IMG_4066 - Abdul Kalam 01.jpg"
import aman3 from "../components/Header/img/Team_member/Third Year 2/Photo  - Aman Patel3.jpg"
import ayushi3 from "../components/Header/img/Team_member/Third Year 2/IMG-20220820-WA0054 - Ayushi Ranjan.jpg"
import devansh3 from "../components/Header/img/Team_member/Third Year 2/IMG20230901122235 - Devansh soni.jpg"
import dileep3 from "../components/Header/img/Team_member/Third Year 2/IMG_20230516_213616_0760 - Dileep Agrahari.jpg"
import garima3 from "../components/Header/img/Team_member/Third Year 2/IMG_20230223_145316 - Garima Sharma.jpg"
import isha3 from "../components/Header/img/Team_member/Third Year 2/IMG_20230223_144923 - Isha Singh.jpg"
import malaika3 from "../components/Header/img/Team_member/Third Year 2/IMG_3962 - Malaika Chaurasia.jpeg"
import Manvendra3 from "../components/Header/img/Team_member/Third Year 2/Manvendra (1) - Manvendra Sharma.jpg"
import Priyanka3 from "../components/Header/img/Team_member/Third Year 2/IMG_0046 - Priyanka.jpeg"
import Rohit3 from "../components/Header/img/Team_member/Third Year 2/IMG_20230528_011502 - Rohit Gaur.jpg"
import Shivangi3 from "../components/Header/img/Team_member/Third Year 2/IMG_5849 - Shivangi Mishra2.jpg"
import Shubham3 from "../components/Header/img/Team_member/Third Year 2/IMG-20230908-WA0064 - shubham gupta.jpg"
import sonu3 from "../components/Header/img/Team_member/Third Year 2/sonu yadav - Sonu Yadav.jpg"
import Sumit3 from "../components/Header/img/Team_member/Third Year 2/20220722_153934 - Sumit sharma.jpg"
import yash3 from "../components/Header/img/Team_member/Third Year 2/IMG_20221110_163538 - Yash Raj.jpg"

    //Final Year Picture

import ayush4 from "../components/Header/img/Team_member/Final Year/Aayush.jpg";
import aditi4 from "../components/Header/img/Team_member/Final Year/Aditi Yadav.jpg";
import aditya4 from "../components/Header/img/Team_member/Final Year/Aditya.jpeg";
import alisher4 from "../components/Header/img/Team_member/Final Year/Alisher.jpg";
import amartya4 from "../components/Header/img/Team_member/Final Year/Amartya.jpeg";
import amisha4 from "../components/Header/img/Team_member/Final Year/Amisha Gupta.jpg";
// import manish4 from "../components/Header/img/Team_member/Final Year/Manish.jpeg";
import poonam4 from "../components/Header/img/Team_member/Final Year/Poonam.jpg";
// import pratik4 from "../components/Header/img/Team_member/Final Year/IMG_20230818_100445 - Pratik Mishra.jpg";
import rishika4 from "../components/Header/img/Team_member/Final Year/Rishika Srivastava.jpg";
// import ritik4 from "../components/Header/img/Team_member/Final Year/Ritik Tayal.jpg";
import shashank4 from "../components/Header/img/Team_member/Final Year/Shashank.jpg";
import Shivam4 from "../components/Header/img/Team_member/Final Year/Shivam Dubey.jpg";
import Shreyap4 from "../components/Header/img/Team_member/Final Year/Shreya Patel.jpg";
import shreya4 from "../components/Header/img/Team_member/Final Year/Shreya.jpeg";
import shruti4 from "../components/Header/img/Team_member/Final Year/Shruti Pandey.jpg";

        //Alumnis Picture

import ambuj0 from "../components/Header/img/Team_member/Alumnis/Ambuj_Mishra.jpeg";
import Antara0 from "../components/Header/img/Team_member/Alumnis/Antara_Ghosh.jpeg";
import ayush0 from "../components/Header/img/Team_member/Alumnis/AyushTiwari.jpeg";
import Jayantika0 from "../components/Header/img/Team_member/Alumnis/Jayantika_Jaiswal.jpeg";
import Laxmi0 from "../components/Header/img/Team_member/Alumnis/Laxmi_Pandey.jpeg";
import Sachin0 from "../components/Header/img/Team_member/Alumnis/Sachin Verma.jpg";
import Sakir0 from "../components/Header/img/Team_member/Alumnis/Sakir_Khan.jpg";
import Shashwat0 from "../components/Header/img/Team_member/Alumnis/Shashwat_Mishra.jpeg";
import Shiva0 from "../components/Header/img/Team_member/Alumnis/Shiva Singh.jpg";
import Surya0 from "../components/Header/img/Team_member/Alumnis/Surya Singh.jpeg";
import Virat0 from "../components/Header/img/Team_member/Alumnis/Virat Singh Tomer.jpg";
// import ambuj0 from "../components/Header/img/Team_member/Alumnis/Ambuj_Mishra.jpeg";

// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
const Team = () => {
    return (
        <>
        
            <div style={{ "background": "rgb(0, 0, 0)" }}>
                <div class="container1 py-5">
                    <h1 class="text-center " style={{color:"white"}}>Teams Page</h1>
                    <div class="section-title-divider mb-4"></div>
                   
                    <div id="div1" class="targetDiv my-5"
                        style={{ "background": "rgb(0, 0, 0)"  }}>

                        <div class="gallery-block grid-gallery">
                            <h4>Our Main Part</h4>
                            {/* <hr> */}
                            <div class="container p-2">
                                <div class="row text-center">
                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class="rounded py-5 px-4 cards-background" style={{background: "#112e42",boxShadow: "0px 0px 10px white"}}><img
                                            src={manish} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Manish Rao </h5><span
                                                class="small text-uppercase" style={{color:"white"}}>Founder of Finance Club</span>
                                            <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background" style={{ background:"#112e42",boxShadow: "0px 0px 10px white"}}><img
                                            src={img2} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Mandeep Kumar</h5><span class="small text-uppercase" style={{color:"white"}}>Founder of Finance Club</span>
                                            <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>


                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={man} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}}/>
                                            <h5 class="mb-0">Ugrasen Singh</h5><span class="small text-uppercase" style={{color:"white"}} >Faculty Advisor</span>
                                            <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>


                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>


                    {/* //Secretary */}


                    <div id="div2" class="targetDiv my-5" style={{ "background": "rgb(0, 0, 0)"  }} >

                        <div class="gallery-block grid-gallery">
                            <h4>Secretarys of Finance club</h4>
                            {/* <hr> */}
                            <div class="container p-3">
                                <div class="row text-center">


                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background" style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}}
                                        >
                                            <img
                                                src={img} alt="img"
                                                class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}}/>
                                                
                                            <h5 class="mb-0">Aayush Sharma </h5><span
                                                class="small text-uppercase" style={{color:"white"}}>Secretary of Finance Club</span>
                                             <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>
                                            </div>
                                        </div>

                                        <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={amisha4} alt="" 
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}}/>
                                            <h5 class="mb-0">Amisha Gupta</h5><span class="small text-uppercase"style={{color:"white"}} >Secretary of Finance Club </span>
                                            <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>
                                        </div>
                                    </div>


                                    </div>


                                

                                </div>
                            </div>

                        </div>
                    </div>

                    {/* SECOND YEAR  */}

                    <div id="div3" class="targetDiv my-5" style={{ "background": "rgb(0, 0, 0)"  }}>
                        <div class="gallery-block grid-gallery ">
                            <h4>Second year Members</h4>
                            {/* <hr> */}
                            {/* <!-- For demo purpose --> */}
                            <div class="container p-2">
                                <div class="row text-center">


                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={akarsh2} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Akarsh Singh</h5><span
                                                class="small text-uppercase" style={{color:"white"}}>B.tech CSE 2nd Year</span>
                                                 <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={aman2} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}}/>
                                            <h5 class="mb-0">Aman Patel</h5><span class="small text-uppercase" style={{color:"white"}}>B.Tech IT 2nd year</span>
                                            <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>


                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={anish2} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Anish Tiwari</h5><span
                                                class="small text-uppercase" style={{color:"white"}}>B.tech CSE 2nd year</span>
                                                 <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>


                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={anuj2} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Anuj Gupta</h5><span class="small text-uppercase" style={{color:"white"}}>BBA 2nd year</span>
                                            <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={anurag2} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Anurag Verma</h5><span class="small text-uppercase" style={{color:"white"}}>MBA 2nd year</span>
                                            <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={arav2} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Arav Prajapati</h5><span class="small text-uppercase" style={{color:"white"}}>B.tech CSE 2nd year</span>
                                            <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={chaitanya2} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Chaitanya Raj</h5><span class="small text-uppercase" style={{color:"white"}}>B.tech CSE 2nd year</span>
                                            <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={devansh2} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Devansh Pandey </h5><span class="small text-uppercase" style={{color:"white"}}>B.tech EE 2nd year</span>
                                            <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={garvita2} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Garvita Singh</h5><span class="small text-uppercase" style={{color:"white"}}>MBA 2nd year</span>
                                            <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>
                                            </div>
                                            </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={harshb2} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Harsh Bansal</h5><span class="small text-uppercase" style={{color:"white"}}>B.Tech ECE 2nd year</span>
                                            <div class="social">
                                                <a href=" "><i class="bi bi-twitter-x mx-2"></i></a>
                                                <a href=" "><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=" "><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=" "><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>


                                        </div>
                                    </div>


                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={himanshu2} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Himanshu Yadav</h5><span class="small text-uppercase" style={{color:"white"}}>B.tech EE 2nd year</span>
                                            <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={kajal2} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Kajal Lakhotia</h5><span class="small text-uppercase" style={{color:"white"}}>BBA 2nd year</span>
                                            <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>


                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={mahak2} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Mahak Yadav</h5><span class="small text-uppercase" style={{color:"white"}}>BBA 2nd year</span>
                                            <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={manish2} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Manish Agrahari</h5><span class="small text-uppercase" style={{color:"white"}}>B.tech EE 2nd year</span>
                                            <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={mansi2} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Mansi Upadhyay</h5><span class="small text-uppercase" style={{color:"white"}}>B.Pharma 2nd year</span>
                                            <div class="social">
                                                <a href=" "><i class="bi bi-twitter-x mx-2"></i></a>
                                                <a href=" "><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=" "><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=" "><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={muskan2} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Muskan Chiraniya</h5><span class="small text-uppercase" style={{color:"white"}}>BBA 2nd year</span>
                                            <div class="social">
                                                <a href=" "><i class="bi bi-twitter-x mx-2"></i></a>
                                                <a href=" "><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=" "><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=" "><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={prashant2} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Prashant Mishra</h5><span class="small text-uppercase" style={{color:"white"}}>B.tech CE 2nd year</span>
                                            <div class="social">
                                                <a href=" "><i class="bi bi-twitter-x mx-2"></i></a>
                                                <a href=" "><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=" "><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=" "><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={richa2} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Richa Mishra</h5><span class="small text-uppercase" style={{color:"white"}}>B.tech ME 2nd year</span>
                                            <div class="social">
                                                <a href=" "><i class="bi bi-twitter-x mx-2"></i></a>
                                                <a href=" "><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=" "><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=" "><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={sakshig2} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Sakshi Gupta</h5><span class="small text-uppercase" style={{color:"white"}}>BBA 2nd year</span>
                                            <div class="social">
                                                <a href=" "><i class="bi bi-twitter-x mx-2"></i></a>
                                                <a href=" "><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=" "><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=" "><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={sakshij2} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Sakshi Jaiswal</h5><span class="small text-uppercase" style={{color:"white"}}>BBA 2nd year</span>
                                            <div class="social">
                                                <a href=" "><i class="bi bi-twitter-x mx-2"></i></a>
                                                <a href=" "><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=" "><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=" "><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={shraddha2} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Shraddha Gupta</h5><span class="small text-uppercase" style={{color:"white"}}>BBA 2nd year</span>
                                            <div class="social">
                                                <a href=" "><i class="bi bi-twitter-x mx-2"></i></a>
                                                <a href=" "><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=" "><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=" "><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={woman} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Swati Singh</h5><span class="small text-uppercase" style={{color:"white"}}>MBA 2nd year</span>
                                            <div class="social">
                                                <a href=" "><i class="bi bi-twitter-x mx-2"></i></a>
                                                <a href=" "><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=" "><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=" "><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={tanisha2} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Tanisha Agrahari</h5><span class="small text-uppercase" style={{color:"white"}}>BBA 2nd year</span>
                                            <div class="social">
                                                <a href=" "><i class="bi bi-twitter-x mx-2"></i></a>
                                                <a href=" "><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=" "><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=" "><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={tanya2} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Tanya Gupta</h5><span class="small text-uppercase" style={{color:"white"}}>BBA 2nd year</span>
                                            <div class="social">
                                                <a href=" "><i class="bi bi-twitter-x mx-2"></i></a>
                                                <a href=" "><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=" "><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=" "><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={taukir2} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Taukir Alam</h5><span class="small text-uppercase" style={{color:"white"}}>B.tech EE 2nd year</span>
                                            <div class="social">
                                                <a href=" "><i class="bi bi-twitter-x mx-2"></i></a>
                                                <a href=" "><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=" "><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=" "><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}

                    {/* THIRD YEAR  */}

                    <div id="div3" class="targetDiv my-5" style={{ "background": "rgb(0, 0, 0)" }}>
                        <div class="gallery-block grid-gallery ">
                            <h4>Third year Members</h4>
                            {/* <hr> */}
                            {/* <!-- For demo purpose --> */}
                            <div class="container p-2">
                                <div class="row text-center">


                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={abdul3} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Abdul Kalam</h5><span
                                                class="small text-uppercase" style={{color:"white"}}>B.tech EE 3nd Year</span>
                                                 <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={aman3} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}}/>
                                            <h5 class="mb-0">Aman Patel</h5><span class="small text-uppercase" style={{color:"white"}}>B.Tech CSE 3rd year</span>
                                            <div class="social">
                                                <a href=" "><i class="bi bi-twitter-x mx-2"></i></a>
                                                <a href=" "><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=" "><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=" "><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>


                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={ayushi3} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Aditi Yadav</h5><span class="small text-uppercase" style={{color:"white"}}>B.Tech Ch.E 2nd year</span>
                                            <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>


                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={devansh3} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Aditya Kumar Singh</h5><span
                                                class="small text-uppercase" style={{color:"white"}}>B.tech ME 2nd year</span>
                                                 <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={dileep3} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Dileep Agrahari</h5><span class="small text-uppercase" style={{color:"white"}}>B.tech CE 3rd year</span>
                                            <div class="social">
                                                <a href=" "><i class="bi bi-twitter-x mx-2"></i></a>
                                                <a href=" "><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=" "><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=" "><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={garima3} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Garima Sharma</h5><span class="small text-uppercase" style={{color:"white"}}>B.tech EE 3rd year</span>
                                            <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={isha3} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Isha Singh</h5><span class="small text-uppercase" style={{color:"white"}}>B.tech EE 3rd year</span>
                                            <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={malaika3} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Malaika Chaurasia</h5><span class="small text-uppercase" style={{color:"white"}}>BBA 3rd year</span>
                                            <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>
                                            </div>
                                            </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={Manvendra3} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Manvendra Sharma</h5><span class="small text-uppercase" style={{color:"white"}}>B.Tech CSE 3rd year</span>
                                            <div class="social">
                                                <a href=" "><i class="bi bi-twitter-x mx-2"></i></a>
                                                <a href=" "><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=" "><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=" "><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={Priyanka3} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Priyanka Agrawal</h5><span class="small text-uppercase" style={{color:"white"}}>B.tech ECE 3rd year</span>
                                            <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={Rohit3} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Rohit Gaur</h5><span class="small text-uppercase" style={{color:"white"}}>B.tech IT 3rd year</span>
                                            <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>


                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={Shivangi3} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Shivangi Mishra</h5><span class="small text-uppercase" style={{color:"white"}}>BBA 3rd year</span>
                                            <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={Shubham3} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Shubham Gupta</h5><span class="small text-uppercase" style={{color:"white"}}>BBA 3rd year</span>
                                            <div class="social">
                                                <a href=" "><i class="bi bi-twitter-x mx-2"></i></a>
                                                <a href=" "><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=" "><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=" "><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={sonu3} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Sonu Yadav</h5><span class="small text-uppercase" style={{color:"white"}}>B.tech ME 3rd year</span>
                                            <div class="social">
                                                <a href=" "><i class="bi bi-twitter-x mx-2"></i></a>
                                                <a href=" "><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=" "><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=" "><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={Sumit3} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Sumit Sharma</h5><span class="small text-uppercase" style={{color:"white"}}>B.tech CE 3rd year</span>
                                            <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={yash3} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Yash Raj</h5><span class="small text-uppercase" style={{color:"white"}}>B.tech EE 3rd year</span>
                                            <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FINAL YEAR  */}
                    <div id="div4" class="targetDiv my-5" style={{ "background": "rgb(0, 0, 0)" }}>
                        <div class="gallery-block grid-gallery">
                            <h4>Final Year Member</h4>
                            {/* <hr> */}
                            {/* <!-- For demo purpose --> */}
                            <div class="container p-2">
                                <div class="row text-center">


                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={aditi4} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Aditi Yadav</h5><span class="small text-uppercase" style={{color:"white"}}>B.Tech Ch.E Final year</span>
                                            <div class="social">
                                                <a href=" "><i class="bi bi-twitter-x mx-2"></i></a>
                                                <a href=" "><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=" "><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=" "><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>


                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={aditya4} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Shivam Dubey</h5><span class="small text-uppercase" style={{color:"white"}}>B.tech IT 2nd year</span>
                                            <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>


                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={alisher4} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Alisher Ali</h5><span class="small text-uppercase" style={{color:"white"}}>B.tech ME Final year</span>
                                            <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={amartya4} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Amartya Narayan Tripathi</h5><span class="small text-uppercase" style={{color:"white"}}>B.tech EE Final year</span>
                                            <div class="social">
                                                <a href=" "><i class="bi bi-twitter-x mx-2"></i></a>
                                                <a href=" "><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=" "><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=" "><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={amisha4} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Amisha Gupta</h5><span class="small text-uppercase" style={{color:"white"}}>B.tech CE Final year</span>
                                            <div class="social">
                                                <a href=" "><i class="bi bi-twitter-x mx-2"></i></a>
                                                <a href=" "><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=" "><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=" "><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={ayush4} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Ayush Sharma</h5><span
                                                class="small text-uppercase" style={{color:"white"}}>B.tech EE Final Year</span>
                                                 <div class="social">
                                                <a href=" "><i class="bi bi-twitter-x mx-2"></i></a>
                                                <a href=" "><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=" "><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=" "><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={poonam4} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Poonam </h5><span class="small text-uppercase" style={{color:"white"}}>B.tech CSE Final year</span>
                                            <div class="social">
                                                <a href=" "><i class="bi bi-twitter-x mx-2"></i></a>
                                                <a href=" "><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=" "><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=" "><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={rishika4} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Rishika Shrivastava</h5><span class="small text-uppercase" style={{color:"white"}}>BBA Final year</span>
                                            <div class="social">
                                                <a href=" "><i class="bi bi-twitter-x mx-2"></i></a>
                                                <a href=" "><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=" "><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=" "><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={shashank4} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Shashank Shekhar Mishra</h5><span class="small text-uppercase" style={{color:"white"}}>B.tech CSE Final year</span>
                                            <div class="social">
                                                <a href=" "><i class="bi bi-twitter-x mx-2"></i></a>
                                                <a href=" "><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=" "><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=" "><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={Shivam4} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Shivam Dubey</h5><span class="small text-uppercase" style={{color:"white"}}>B.tech IT Final year</span>
                                            <div class="social">
                                                <a href=" "><i class="bi bi-twitter-x mx-2"></i></a>
                                                <a href=" "><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=" "><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=" "><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={Shreyap4} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Shreya Patel</h5><span class="small text-uppercase" style={{color:"white"}}>BBA Final year</span>
                                            <div class="social">
                                                <a href=" "><i class="bi bi-twitter-x mx-2"></i></a>
                                                <a href=" "><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=" "><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=" "><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>


                                        </div>
                                    </div>
                                  
                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={shreya4} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Shreya Srivastava</h5><span class="small text-uppercase" style={{color:"white"}}>B.tech ChE Final year</span>
                                            <div class="social">
                                                <a href=" "><i class="bi bi-twitter-x mx-2"></i></a>
                                                <a href=" "><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=" "><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=" "><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                            
                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={shruti4} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Shruti Pandey</h5><span class="small text-uppercase" style={{color:"white"}}>BBA Final year</span>
                                            <div class="social">
                                                <a href=" "><i class="bi bi-twitter-x mx-2"></i></a>
                                                <a href=" "><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=" "><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=" "><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

        {/* Alumni List */}

                    <div id="div5" class="targetDiv my-5" style={{ "background": "rgb(0, 0, 0)" }}>
                        <div class="gallery-block grid-gallery ">
                            <h4> Our Alumni</h4>
                            {/* <hr> */}
                            {/* <!-- For demo purpose --> */}
                            <div class="container p-2">
                                <div class="row text-center">


                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={ambuj0} alt=""


                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Ambuj Mishra</h5><span
                                                class="small text-uppercase" style={{color:"white"}}>Alumni IT</span>
                                            <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>


                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={Antara0} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                             <h5 class="mb-0">Antara Ghosh</h5><span
                                                class="small text-uppercase" style={{color:"white"}}>BBA Alumni</span>
                                            <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>


                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={ayush0} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Ayush Tiwari</h5><span
                                                class="small text-uppercase" style={{color:"white"}}>Alumni CSE</span>
                                                 <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>


                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={Jayantika0} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Jayantika Jaiswal</h5><span class="small text-uppercase" style={{color:"white"}}>BBA Alumni</span>
                                            <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={Laxmi0} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Laxmi Pandey</h5><span
                                                class="small text-uppercase" style={{color:"white"}}>Alumni ME</span>
                                                 <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={Sachin0} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Sachin Verma</h5><span
                                                class="small text-uppercase" style={{color:"white"}}>Alumni ECE</span>
                                                 <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={Sakir0} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Sakir Khan</h5><span
                                                class="small text-uppercase" style={{color:"white"}}>Alumni IT</span>
                                                 <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={Shashwat0} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Shashwat Mishra</h5><span
                                                class="small text-uppercase" style={{color:"white"}}>Alumni IT</span>
                                                 <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={Shiva0} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Shiva Singh</h5><span
                                                class="small text-uppercase" style={{color:"white"}}>Alumni EE</span>
                                                 <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={Surya0} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Surya Singh</h5><span
                                                class="small text-uppercase" style={{color:"white"}}>Alumni CSE</span>
                                                 <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5 card-hover ">
                                        <div class=" rounded  py-5 px-4 cards-background"style={{ background: "#112e42",boxShadow:"0px 0px 10px white"}} ><img
                                            src={Virat0} alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Virat Singh Tomer</h5><span
                                                class="small text-uppercase" style={{color:"white"}}>Alumni IT</span>
                                                 <div class="social">
                                                <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                                <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                                <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                                <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>
                                        </div>

                                    </div>



                                </div>

                            </div>
                        </div>
                    </div>


               
             </div>

        </>
    )
}

export default Team 