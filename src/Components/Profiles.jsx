import React from "react";
import { LiaThemeco } from "react-icons/lia";
import {
  AiFillAccountBook,
  AiFillAlipayCircle,
  AiFillAlipaySquare,
  AiFillAliwangwang,
  AiFillAmazonCircle,
  AiFillAndroid,
  AiFillApi,
} from "react-icons/ai";

import styles from "./Profiles.module.css";
const Profiles = () => {
  return (
    <section className="padding" id="profiles">
      <div className="secTitle">
        <h2 className="text-center text-uppercase">Profiles</h2>
      </div>
      <div className="container">
        <div className={`row text-center my-5 ${styles.mobBorder}`}>
          <div className="col-md-3 p-5 iCSS">
            <LiaThemeco />
            <p className="my-3">LiaThemeco</p>
          </div>
          <div className="col-md-3 p-5 iCSS">
            <AiFillAccountBook />
            <p className="my-3">AiFillAccountBook</p>
          </div>
          <div className="col-md-3 p-5 iCSS">
            <AiFillAlipayCircle />
            <p className="my-3">AiFillAlipayCircle</p>
          </div>
          <div className="col-md-3 p-5 iCSS profile-no-border">
            <AiFillAlipaySquare />
            <p className="my-3">AiFillAlipaySquare</p>
          </div>
          <div className="col-md-3 p-5 iCSS noBootom">
            <AiFillAliwangwang />
            <p className="my-3">AiFillAliwangwang</p>
          </div>
          <div className="col-md-3 p-5 iCSS noBootom">
            <AiFillAmazonCircle />
            <p className="my-3">AiFillAmazonCircle</p>
          </div>
          <div className="col-md-3 p-5 iCSS noBootom">
            <AiFillAndroid />
            <p className="my-3">AiFillAndroid</p>
          </div>
          <div className="col-md-3 p-5 iCSS profile-no-border noBootom">
            <AiFillApi />
            <p className="my-3">AiFillApi</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profiles;
