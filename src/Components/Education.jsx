import React from "react";
import { GoDotFill } from "react-icons/go";
import styles from "./Education.module.css";

const Education = () => {
  return (
    <section className="padding gray">
      <div className="secTitle">
        <h2 className="text-center text-uppercase">Education</h2>
      </div>
      <div className="container padding">
        <div className="row ">
          <div className="col-md-4">
            <div>
              <h3 className={styles.eduYear}>2008 - 2010</h3>
              <p className={styles.eduDegree}>master of computer science</p>
            </div>
            <div className={styles.timeline}>
              <GoDotFill />
              <span></span>
            </div>
            <div>
              <h3 className={styles.eduYear}>university of north carolina</h3>
              <p className={styles.eduLoc}>north carolina, USA</p>
              <p className={styles.edudesc}>
                Duis aute irure dolor in reprehenderit in vol patate velit esse
                cillum dolore eu fugiat nulla pari. Excepteur sint occana inna
                tecat cupidatat non proident.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <h3 className={styles.eduYear}>2008 - 2010</h3>
              <p className={styles.eduDegree}>master of computer science</p>
            </div>
            <div className={styles.timeline}>
              <GoDotFill />
              <span></span>
            </div>
            <div>
              <h3 className={styles.eduYear}>university of north carolina</h3>
              <p className={styles.eduLoc}>north carolina, USA</p>
              <p className={styles.edudesc}>
                Duis aute irure dolor in reprehenderit in vol patate velit esse
                cillum dolore eu fugiat nulla pari. Excepteur sint occana inna
                tecat cupidatat non proident.
              </p>
            </div>
          </div>{" "}
          <div className="col-md-4">
            <div>
              <h3 className={styles.eduYear}>2008 - 2010</h3>
              <p className={styles.eduDegree}>master of computer science</p>
            </div>
            <div className={styles.timeline}>
              <GoDotFill />
              <span></span>
            </div>
            <div>
              <h3 className={styles.eduYear}>university of north carolina</h3>
              <p className={styles.eduLoc}>north carolina, USA</p>
              <p className={styles.edudesc}>
                Duis aute irure dolor in reprehenderit in vol patate velit esse
                cillum dolore eu fugiat nulla pari. Excepteur sint occana inna
                tecat cupidatat non proident.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
