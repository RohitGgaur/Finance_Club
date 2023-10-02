import React,{Link} from 'react'
import "./Team.css";
 import img from "../components/Header/img/AayushSharma.jpeg";
 import img1 from "../components/Header/img/Team_member/Second Year/Amisha Gupta.jpg";
 import img2 from "../components/Header/img/Team_member/Alumnis/Mandeep.jpg";
const Team = () => {
    return (
        <>
        
            <div style={{ "background": "rgb(0,0,33)" }}>
                <div class="container py-5">
                    <h1 class="text-center " style={{color:"white"}}>Teams Page</h1>
                    <div class="section-title-divider mb-4"></div>
                    <div class="col mb-4">
                        <div class="col-lg-4 col-sm-6"><a class="showSingle session" target="1">Alumnis</a></div>
                        <div class="col-lg-4 col-sm-6"><a class="showSingle session" target="div2">Final Year</a></div>
                        <div class="col-lg-4 col-sm-6"><a class="showSingle session" target="3">Third Year</a></div>
                        <div class="col-lg-4 col-sm-6"><a class="showSingle session" target="4">Second Year</a></div>
                    </div>
                    <div id="div1" class="targetDiv my-5"
                        style={{ "background": "rgb(0,0,33)" }}>

                        <div class="gallery-block grid-gallery">
                            <h4>Our Main Part</h4>
                            {/* <hr> */}
                            <div class="container p-2">
                                <div class="row text-center">
                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background" style={{ "background": "#112e42" }} ><img
                                            src="assets\img\Team_member\Alumnis\Manish.jpeg" alt=""
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


                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }}><img
                                            src={img2} alt=""
                                             class="img-fluid rounded-circle mb-3  shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Mandeep Kumar</h5><span class="small text-uppercase" style={{color:"white"}}>Founder of Finance Club</span>
                                            <div class="social">
                                               <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                               <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                               <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                               <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>


                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="ugrasen.jpg" alt=""
                                             class="img-fluid rounded-circle mb-3  shadow-sm" />
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


                    <div id="div2" class="targetDiv my-5" style={{ "background": "rgb(0,0,33)" }} >

                        <div class="gallery-block grid-gallery">
                            <h4>Secretarys of Finance club</h4>
                            {/* <hr> */}
                            <div class="container p-3">
                                <div class="row text-center">


                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background" style={{ "background": "#112e42" }}
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

                                        <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src={img1} alt="" 
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

                    {/* FINAL YEAR  */}

                    <div id="div3" class="targetDiv my-5" style={{ "background": "rgb(0,0,33)" }}>
                        <div class="gallery-block grid-gallery ">
                            <h4>Second year Members</h4>
                            {/* <hr> */}
                            {/* <!-- For demo purpose --> */}
                            <div class="container p-2">
                                <div class="row text-center">


                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/Second Year/Aayush.jpg" alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">xyz</h5><span
                                                class="small text-uppercase" style={{color:"white"}}>B.tech EE 2nd Year</span>
                                                 <div class="social">
                                               <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                               <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                               <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                               <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/Second Year/Aditi Yadav.jpg" alt=""
                                             class="img-fluid rounded-circle mb-3  shadow-sm" />
                                            <h5 class="mb-0">Aditi Yadav</h5><span class="small text-uppercase" style={{color:"white"}}>B.Tech Ch.E 2nd year</span>
                                            <div class="social">
                                               <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                               <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                               <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                               <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>


                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/Second Year/Aditya.jpeg" alt=""
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


                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/Second Year/Alisher.jpg" alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Alisher Ali</h5><span class="small text-uppercase" style={{color:"white"}}>B.tech ME 2nd year</span>
                                            <div class="social">
                                               <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                               <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                               <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                               <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/Second Year/Amartya.jpeg" alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Amartya Narayan Tripathi</h5><span class="small text-uppercase" style={{color:"white"}}>B.tech EE 2nd year</span>
                                            <div class="social">
                                               <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                               <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                               <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                               <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/Second Year/Amisha Gupta.jpg" alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Amisha Gupta</h5><span class="small text-uppercase" style={{color:"white"}}>B.tech CE 2nd year</span>
                                            <div class="social">
                                               <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                               <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                               <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                               <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/Second Year/Poonam.jpg" alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Poonam </h5><span class="small text-uppercase" style={{color:"white"}}>B.tech CSE 2nd year</span>
                                            <div class="social">
                                               <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                               <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                               <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                               <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/Second Year/Rishika Srivastava.jpg" alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Rishika Shrivastava</h5><span class="small text-uppercase" style={{color:"white"}}>BBA 2nd year</span>
                                            <div class="social">
                                               <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                               <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                               <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                               <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/Second Year/Shruti Pandey.jpg" alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Shruti Pandey</h5><span class="small text-uppercase" style={{color:"white"}}>BBA 2nd year</span>
                                            <div class="social">
                                               <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                               <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                               <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                               <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>


                                        </div>
                                    </div>


                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/Second Year/Shashank.jpg" alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Shashank Shekhar Mishra</h5><span class="small text-uppercase" style={{color:"white"}}>B.tech CSE 2nd year</span>
                                            <div class="social">
                                               <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                               <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                               <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                               <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/Second Year/Shreya Patel.jpg" alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Shreya Patel</h5><span class="small text-uppercase" style={{color:"white"}}>BBA 2nd year</span>
                                            <div class="social">
                                               <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                               <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                               <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                               <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>


                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/Second Year/Shivam Dubey.jpg" alt=""
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

                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/Second Year/Shreya.jpeg" alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Shreya Srivastava</h5><span class="small text-uppercase" style={{color:"white"}}>B.tech ChE 2nd year</span>
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


                    <div id="div4" class="targetDiv my-5" style={{ "background": "rgb(0,0,33)" }}>
                        <div class="gallery-block grid-gallery">
                            <h4>Final Year Member</h4>
                            {/* <hr> */}
                            {/* <!-- For demo purpose --> */}
                            <div class="container p-2">
                                <div class="row text-center">


                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/Second Year/Aayush.jpg" alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm card-hover" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Ayush Sharma</h5><span
                                                class="small text-uppercase" style={{color:"white"}}>B.tech EE 2nd Year</span>
                                                 <div class="social">
                                               <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                               <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                               <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                               <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/Second Year/Aditi Yadav.jpg" alt=""
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


                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/Second Year/Aditya.jpeg" alt=""
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


                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/Second Year/Alisher.jpg" alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Alisher Ali</h5><span class="small text-uppercase" style={{color:"white"}}>B.tech ME 2nd year</span>
                                            <div class="social">
                                               <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                               <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                               <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                               <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/Second Year/Amartya.jpeg" alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Amartya Narayan Tripathi</h5><span class="small text-uppercase" style={{color:"white"}}>B.tech EE 2nd year</span>
                                            <div class="social">
                                               <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                               <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                               <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                               <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/Second Year/Amisha Gupta.jpg" alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Amisha Gupta</h5><span class="small text-uppercase" style={{color:"white"}}>B.tech CE 2nd year</span>
                                            <div class="social">
                                               <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                               <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                               <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                               <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/Second Year/Poonam.jpg" alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Poonam </h5><span class="small text-uppercase" style={{color:"white"}}>B.tech CSE 2nd year</span>
                                            <div class="social">
                                               <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                               <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                               <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                               <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/Second Year/Rishika Srivastava.jpg" alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Rishika Shrivastava</h5><span class="small text-uppercase" style={{color:"white"}}>BBA 2nd year</span>
                                            <div class="social">
                                               <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                               <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                               <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                               <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/Second Year/Shruti Pandey.jpg" alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Shruti Pandey</h5><span class="small text-uppercase" style={{color:"white"}}>BBA 2nd year</span>
                                            <div class="social">
                                               <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                               <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                               <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                               <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>


                                        </div>
                                    </div>


                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/Second Year/Shashank.jpg" alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Shashank Shekhar Mishra</h5><span class="small text-uppercase" style={{color:"white"}}>B.tech CSE 2nd year</span>
                                            <div class="social">
                                               <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                               <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                               <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                               <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/Second Year/Shreya Patel.jpg" alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Shreya Patel</h5><span class="small text-uppercase" style={{color:"white"}}>BBA 2nd year</span>
                                            <div class="social">
                                               <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                               <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                               <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                               <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>


                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/Second Year/Shivam Dubey.jpg" alt=""
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

                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/Second Year/Shreya.jpeg" alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Shreya Srivastava</h5><span class="small text-uppercase" style={{color:"white"}}>B.tech ChE 2nd year</span>
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
                    <div id="div5" class="targetDiv my-5" style={{ "background": "rgb(0,0,33)" }}>
                        <div class="gallery-block grid-gallery ">
                            <h4> Our Alumni</h4>
                            {/* <hr> */}
                            {/* <!-- For demo purpose --> */}
                            <div class="container p-2">
                                <div class="row text-center">


                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/third Year/Ambuj_Mishra.jpeg" alt=""


                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <div class="social">
                                               <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                               <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                               <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                               <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>
                                            <h5 class="mb-0">Ambuj Mishra</h5><span
                                                class="small text-uppercase" style={{color:"white"}}>B.Tech 3rd Year IT</span>

                                        </div>
                                    </div>


                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/third Year/Antara_Ghosh.jpeg" alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Antara Ghosh</h5><span class="small ">BBA 3rd Year</span>
                                            <div class="social">
                                               <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                               <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                               <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                               <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>


                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/third Year/AyushTiwari.jpeg" alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Ayush Tiwari</h5><span
                                                class="small text-uppercase" style={{color:"white"}}>B.Tech CSE 3rd Year</span>
                                                 <div class="social">
                                               <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                               <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                               <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                               <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>


                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/third Year/Jayantika_Jaiswal.jpeg" alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Jayantika Jaiswal</h5><span class="small text-uppercase" style={{color:"white"}}>BBA 3rd Year</span>
                                            <div class="social">
                                               <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                               <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                               <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                               <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/third Year/Laxmi_Pandey.jpeg" alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Laxmi Pandey</h5><span
                                                class="small text-uppercase" style={{color:"white"}}>B.Tech 3rd Year ME</span>
                                                 <div class="social">
                                               <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                               <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                               <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                               <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/third Year/Sachin Verma.jpg" alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Sachin Verma</h5><span
                                                class="small text-uppercase" style={{color:"white"}}>B.Tech ECE 3rd Year </span>
                                                 <div class="social">
                                               <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                               <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                               <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                               <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/third Year/Sakir_Khan.jpg" alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Sakir Khan</h5><span
                                                class="small text-uppercase" style={{color:"white"}}>B.Tech IT 3rd Year</span>
                                                 <div class="social">
                                               <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                               <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                               <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                               <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/third Year/Shashwat_Mishra.jpeg" alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Shashwat Mishra</h5><span
                                                class="small text-uppercase" style={{color:"white"}}>B.Tech IT 3rd Year</span>
                                                 <div class="social">
                                               <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                               <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                               <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                               <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/third Year/Shiva Singh.jpg" alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Shiva Singh</h5><span
                                                class="small text-uppercase" style={{color:"white"}}>B.Tech EE 3rd Year</span>
                                                 <div class="social">
                                               <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                               <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                               <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                               <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/third Year/Surya Singh.jpeg" alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Surya Singh</h5><span
                                                class="small text-uppercase" style={{color:"white"}}>B.tech CSE 3yd Year</span>
                                                 <div class="social">
                                               <a href=""><i class="bi bi-twitter mx-2"></i></a>
                                               <a href=""><i class="bi bi-facebook mx-2"></i></a>
                                               <a href=""><i class="bi bi-instagram mx-2"></i></a>
                                               <a href=""><i class="bi bi-linkedin mx-2"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-sm-3 mb-5">
                                        <div class=" rounded shadow-sm py-5 px-4 cards-background"style={{ "background": "#112e42" }} ><img
                                            src="assets/img/Team_member/third Year/Virat Singh Tomer.jpeg" alt=""
                                             class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{height:"30%",width:"53%"}} />
                                            <h5 class="mb-0">Virat Singh Tomer</h5><span
                                                class="small text-uppercase" style={{color:"white"}}>B.tech IT 3rd Year</span>
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
            {/* </div> */}
        </>
    )
}

export default Team;