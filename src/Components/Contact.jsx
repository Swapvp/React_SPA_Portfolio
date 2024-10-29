import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className="padding gray">
      <div className="secTitle">
        <h2 className="text-center text-uppercase">Contact</h2>
      </div>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <form action="#">
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    placeholder="First Name"
                    className="w-100"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    id=""
                    placeholder="Your Email"
                    className="w-100"
                  />
                </div>
              </div>
              <div className="my-2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Subject"
                  className="w-100"
                />
              </div>
              <div className="my-2">
                <textarea
                  name=""
                  id=""
                  className="w-100"
                  rows="4"
                  cols="50"
                ></textarea>
              </div>
              <div className="my-2">
                <input type="submit" value="SUBMIT" className="w-100" />
              </div>
            </form>
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
