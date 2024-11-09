import React from "react";

import styles from "./Contact.module.css";
import Form from "./Form";

const Contact = () => {


  return (
    <section className="padding gray" id="contact">
      <div className="secTitle">
        <h2 className="text-center text-uppercase">Contact</h2>
      </div>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <Form />
          </div>
          <div className={`offset-md-2 col-md-4 ${styles.contactInfo}`}>
            <div>
              <h3>swapnesh pawar</h3>
              <p>Web Developer</p>
            </div>
            <div>
              <h5>phone </h5>
              <p>9999999999</p>
            </div>
            <div>
              <h5>email</h5>
              <p>Test@test.com</p>
            </div>
            <div>
              <h5>website</h5>
              <p>swapneshp.dev</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
