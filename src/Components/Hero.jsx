import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className="row">
          <div className={styles.headerText}>
            <h1 className="text-center text-white">
              Hi <span>,</span> i'm Swapnesh Pawar <span>.</span>
            </h1>
            <p className="text-center"> web developer</p>
            <button>Download Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
