import React from "react";
import c1 from "../assets/clients/c1.png";
import c2 from "../assets/clients/c2.png";
import c3 from "../assets/clients/c3.png";
import c4 from "../assets/clients/c4.png";
import c5 from "../assets/clients/c5.png";
import c6 from "../assets/clients/c6.png";
import c7 from "../assets/clients/c7.png";
import styles from "./Clients.module.css";

const Clients = () => {
  return (
    <section className="padding" id="clients">
      <div className="secTitle">
        <h2 className="text-center text-uppercase">Clients</h2>
      </div>
      <div className="container">
        <div className="row text-center  my-5  ">
          <div className={styles.clientLogos}>
            <img src={c1} alt="" />
            <img src={c2} alt="" />
            <img src={c3} alt="" />
            <img src={c4} alt="" />
            <img src={c5} alt="" />
            <img src={c6} alt="" />
            <img src={c7} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
