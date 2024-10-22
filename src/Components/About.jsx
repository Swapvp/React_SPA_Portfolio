import React from "react";
import styles from "./About.module.css";
import "../App.css";
import proImg from "../assets/profile_image.jpg";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";

const About = () => {
  return (
    <section className="padding">
      <div className="secTitle">
        <h2 className="text-center text-uppercase">About me</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className={styles.leftHeading}>
              I am a Professional UI/UX Designer and Web developer. Consectetur
              an adipisi elita, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam quis nostrud.
            </p>
            <p className={styles.leftDesc}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Sed ut perspi unde omnis iste natus error sit
              voluptatem accusantium doloremque lauda ntium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam vo luptatem
              quia voluptas sit aspernatur aut odit aut fugit,
            </p>
            <div className="row justify-center">
              <div className="col-md-4">
                <p className={styles.infoTabs}>Phone</p>
                <a href="#">987-124-6547</a>
              </div>
              <div className="col-md-4">
                <p className={styles.infoTabs}>email</p>
                <a href="#">info@info.com</a>
              </div>
              <div className="col-md-4">
                <p className={styles.infoTabs}>website</p>
                <a href="#">info.com</a>
              </div>
            </div>
          </div>
          <div className="offset-md-1 col-md-5">
            <div className={styles.proImg}>
              <img src={proImg} alt="" />
              <div className={styles.bgcolored}></div>
            </div>

            <div className={styles.socials}>
              <a href="#">
                <TiSocialFacebook />
              </a>
              <a href="#">
                <SlSocialLinkedin />
              </a>
              <a href="#">
                <SlSocialInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
