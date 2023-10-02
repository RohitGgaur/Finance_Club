
import React from 'react'
import img3 from "./Header/img/quizimg.png"
import img4 from "./Header/img/portfolio/Event_2_1.jpeg"
import img5 from "./Header/img/stockimg.jpg";
const Event = () => {
  return (
    <div style={{ "background": "red" }}>

      <div className="main">
        <p class="text-center">
          <h2 style={{ "color": "white" }}>Event page</h2>
        </p>
        <div className="class1">
          <h4>Bizz Quiz</h4>
          <div class="row my-5">
            <div class="col-6">
              <img src={img3} alt="Online quiz" style={{ height: "82%", width: "56%" }} />
            </div>
            <div class="col-6">
              <div class="content-heading"><h3>Experience &nbsp </h3><img src="" /></div>
              <p>Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
            </div>
          </div>
        </div>
{/* second event */}
        <div className="class2">
          <h4>Stock Market</h4>
          <div class="row my-5">
            <div class="col-6">
              <img src={img5} alt="Online quiz" style={{ height: "100%", width: "56%" }} />
            </div>
            <div class="col-6">
              <div class="content-heading"><h3>Experience bakchod &nbsp </h3><img src="#" /></div>
              <p>Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
            </div>
          </div>
        </div>

      </div>
{/* third event */}
      <div className="class3">
          <h4>Back To Pavilion</h4>
          <div class="row my-5">
            <div class="col-6">
              <img src={img4} alt="Online quiz" style={{ height: "82%", width: "56%" }} />
            </div>
            <div class="col-6">
              <div class="content-heading"><h3>Experience &nbsp </h3><img src="" /></div>
              <p>Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
            </div>
          </div>
        </div>


    </div>


   
  )
}
export default Event;
