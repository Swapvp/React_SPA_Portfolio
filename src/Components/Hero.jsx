import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  const handleDownload = () => {
    // The file path should match where you placed your PDF in the public folder
    const filePath = "/Resume.pdf";
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "Resume.pdf"; // This is the name it will be saved as
    link.click();
  };
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className="row">
          <div className={styles.headerText}>
            <h1 className="text-center text-white">
              Hi <span>,</span> i'm Swapnesh Pawar <span>.</span>
            </h1>
            <p className="text-center"> web developer</p>
            <button onClick={handleDownload}>Download Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
