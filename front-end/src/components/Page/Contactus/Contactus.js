import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import axios from 'axios';
 
const ContactUs = () => {

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
      phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
      .required('phone is required'),
    message: Yup.string()
      // .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('message is required'),
  })
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      }}
      validationSchema={validate}
      onSubmit={data => {
        console.log(data)
         
        // let formData = new FormData();
        // formData.append('firstName', data.firstName)
        // formData.append('lastName', data.lastName)
        // formData.append('email', data.email)
        // formData.append('phone', data.phone)
        // formData.append('message', data.message)
  
        axios({
            method: 'post',
            url: 'http://localhost:5000/api/contact',
            data: data,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (response) {
            //handle success
            console.log(response)
            alert('New User Successfully Added.');  
        })
        .catch(function (response) {
            //handle error
            console.log(response)
        });
         
      }}>
       
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <Form>
            <TextField label="FirstName" name="firstName" type="text" />
            <TextField label="lastName" name="lastName" type="text" />
            <TextField label="email" name="email" type="email" />
            <TextField label="phone" name="phone" type="number" />
            <TextField label="message" name="message" type="text" />
            <button className="btn btn-primary mt-3" type="submit" style={{marginRight: 20}}>Register</button>
            <button className="btn btn-warning mt-3 ml-3" type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default ContactUs