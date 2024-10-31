import React from "react";
import p1 from "../assets/portfolio/p1.jpg";
import p2 from "../assets/portfolio/p2.jpg";
import p3 from "../assets/portfolio/p3.jpg";
import p4 from "../assets/portfolio/p4.jpg";
import p5 from "../assets/portfolio/p5.jpg";

const Portfolio = () => {
  return (
    <section className="padding">
      <div className="secTitle">
        <h2 className="text-center text-uppercase">Portfolio</h2>
      </div>
      <div className="container my-5">
        <div className="row justify-content-center text-center">
          <div className="col-md-4 text-center">
            <div>
              <img src={p1} alt="" className="Mobwidth" />
            </div>
            <div className="my-4">
              <img src={p2} alt="" className="Mobwidth" />
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div>
              <img src={p3} alt="" className="Mobwidth" />
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="my-4">
              <img src={p4} alt="" className="Mobwidth" />
            </div>
            <div className="my-4">
              <img src={p5} alt="" className="Mobwidth" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
