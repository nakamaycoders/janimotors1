import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import axios from "axios";
import Layout from "../../layout/layout/layout";
import '../Contactus/Contactus.css';
import { useHistory } from "react-router-dom";


const ContactUs = () => {
  let history= useHistory();
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("First Name is Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Last Name is Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Phone is required"),
    message: Yup.string()
      // .oneOf([Yup.ref('password'), null], 'Password must match')
      .required("Message is required"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      }}
      validationSchema={validate}
      
      onSubmit={(data) => {
        console.log(data);

  
        axios({
          method: "post",
          url: "http://localhost:5000/api/contact",
          data: data,
          config: { headers: { "Content-Type": "multipart/form-data" } },
        })
          .then(function (response) {
            //handle success
            // console.log(response);
            // alert("New User Successfully Added.");
          })
          .catch(function (response) {
            //handle error
            // console.log(response);
          });
          history.go(0);

      }}
    >
      {(formik) => (
         <Layout>
        <div className="container text-center pt-2">
        <h1 className="pt-2" style={{ color: "red " }}>
          Contact US
        </h1>
        <p style={{ color: "white" }}>
          Don’t let your questions go unanswered. Call on Jani motors. We can
          answer any questions that you may have about our vehicles, the car
          buying process, or any aspect of our business. If you don’t want to
          pick up the phone, then just use your keyboard and send us an email
          using the provided form below. You can always stop by and see us in
          person too. We have two locations in Chicago and one more out in Las
          Vegas. Our locations are highlighted on the map we have on this page.
          See exactly where we are located and come over to see us today.
        </p>
          <Form className="col-md-">
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Phone" name="phone" type="number" />
            <TextField row={4} col={4} label="Message" name="message" type="text" />
            <button
              className="btn btn-primary mt-3"
              type="submit"
              style={{ marginRight: 20 }}
            >
              Submit
            </button>
            <button className="btn btn-warning mt-3 ml-3" type="reset">
              Reset
            </button>
          </Form>
          
        </div>
        </Layout>
      )}
    </Formik>
  );
};

export default ContactUs;
