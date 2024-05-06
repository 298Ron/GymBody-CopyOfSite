import * as yup from "yup";
import { FunctionComponent, useEffect, useState } from "react";
import { useFormik } from "formik";
import { successMsg } from "../services/feedbackService";
interface ContactProps {}

const Contact: FunctionComponent<ContactProps> = ({}) => {
  let formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema: yup.object({
      name: yup.string().required().min(2),
      email: yup.string().required().email(),
      message: yup.string().required().min(10),
    }),
    onSubmit(values) {
      console.log(values);
      successMsg("Message sent successfully!");
    },
  });
  return (
    <div style={{ minHeight: "70vh", maxWidth: "90vw", margin: "0 auto" }}>
      {/* TITLE */}
      <div>
        <div className="titleSection text-light">
          <h2>CONTACT US</h2>
          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain will give you a complete account of the
            system and expound teachings.
          </p>
        </div>
        {/* INPUTS */}
        <form onSubmit={formik.handleSubmit}>
          <div className="inputs">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingName"
                placeholder="Name"
                name="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <label htmlFor="floatingName">Name</label>
              {formik.touched.name && formik.errors.name && (
                <small className="text-danger">{formik.errors.name}</small>
              )}
            </div>
            <div className="form-floating my-3">
              <input
                type="email"
                className="form-control"
                id="floatingEmail"
                placeholder="name@example.com"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <label htmlFor="floatingEmail">Email address</label>
              {formik.touched.email && formik.errors.email && (
                <small className="text-danger">{formik.errors.email}</small>
              )}
            </div>
            <div className=" ">
              <textarea
                /* className="form-control" */
                style={{ width: "100%", borderRadius: "10px" }}
                id="floatingMessage"
                placeholder="Message"
                name="message"
                rows={8}
                cols={40}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.message}
              />
              <label htmlFor="floatingMessage">Message</label>
              {formik.touched.message && formik.errors.message && (
                <small className="text-danger">{formik.errors.message}</small>
              )}
            </div>
          </div>
          <button className="btn btn-success">Send message</button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
