import React from "react";
import clientLogo from "../assets/c7.png";


const Clients = () => {
  return (
    <section className="padding">
      <div className="secTitle">
        <h2 className="text-center text-uppercase">Clients</h2>
      </div>
      <div className="container">
        <div className="row text-center justify-content-center align-items-center my-5  ">
          <div className="col-md-2">
            <img src={clientLogo} alt="" />
          </div>
          <div className="col-md-2">
            <img src={clientLogo} alt="" />
          </div>
          <div className="col-md-2">
            <img src={clientLogo} alt="" />
          </div>
          <div className="col-md-2">
            <img src={clientLogo} alt="" />
          </div>
          <div className="col-md-2">
            <img src={clientLogo} alt="" />
          </div>
          <div className="col-md-2">
            <img src={clientLogo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
