import React from "react";

const Contact = () => {
  return (
    <section className="padding">
      <div className="secTitle">
        <h2 className="text-center text-uppercase">Contact</h2>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
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
                <textarea name="" id="" className="w-100"></textarea>
              </div>
              <div className="my-2">
                <input type="submit" value="SUBMIT" className="w-100" />
              </div>
            </form>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
