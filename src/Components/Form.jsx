import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./Contact.module.css";
import { useState } from "react";

function Form() {
  const [captchaValue, setCaptchaValue] = useState(null);

  const onCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please complete the reCAPTCHA");
      return;
    }
    // Submit form logic
    // console.log("Form submitted with captcha:", captchaValue);
  };

  const formik = useFormik({
    initialValues: {
      fname: "",
      email: "",
      subject: "",
      textArea: "",
    },

    validationSchema: Yup.object({
      fname: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Firstname is required"),

      email: Yup.string().email().required("Email is required"),

      subject: Yup.string()
        .min(2, "Too Short!")
        .max(20, "Too Long!")
        .required("subject is required"),

      textArea: Yup.string()
        .min(2, "Too Short!")
        .max(100, "Too Long!")
        .required("Message is required"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <input
            type="text"
            name="fname"
            id="fname"
            placeholder="First Name"
            className="w-100"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fname}
          />
          {formik.touched && formik.errors.fname ? (
            <p className={styles.contactErrors}>{formik.errors.fname}</p>
          ) : null}
        </div>
        <div className="col-md-6">
          <input
            type="email"
            name="email"
            id=""
            placeholder="Your Email"
            className="w-100"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched && formik.errors.email ? (
            <p className={styles.contactErrors}>{formik.errors.email}</p>
          ) : null}
        </div>
      </div>
      <div className="my-2">
        <input
          type="text"
          name="subject"
          id=""
          placeholder="Subject"
          className="w-100"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.subject}
        />
        {formik.touched && formik.errors.subject ? (
          <p className={styles.contactErrors}>{formik.errors.subject}</p>
        ) : null}
      </div>
      <div className="my-2">
        <textarea
          name="textArea"
          id=""
          className="w-100"
          rows="4"
          cols="50"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.textArea}
        ></textarea>
        {formik.touched && formik.errors.textArea ? (
          <p className={styles.contactErrors}>{formik.errors.textArea}</p>
        ) : null}
      </div>
      <div className="my-2">
        <ReCAPTCHA
          sitekey="6LfKPnIqAAAAABhxLAkrCosq5dI1s6b-zNhG9Akq"
          onChange={onCaptchaChange}
        />
      </div>
      <div className="my-2">
        <input type="submit" value="SUBMIT" className="w-100" />
      </div>
    </form>
  );
}

export default Form;
