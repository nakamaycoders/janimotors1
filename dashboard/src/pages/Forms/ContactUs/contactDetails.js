import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Axios from "axios";
import './contactDetails.css'

export default function CustomizedTables(props) {

  let [responseData, setResponseData] = useState("");
  const url = "http://localhost:5000/api/contact/information";
  const getContactInfoById = async () => {
    console.log("data--", props.location.params.id)
    const id = props.location.params.id;
    try {
      const res = await Axios.get(`${url}/${id}`);
      setResponseData(res.data.result);
      // console.log(res.data.result)
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };
  useEffect(() => {
    getContactInfoById();
  }, []);

  if(Object.keys(responseData).length === 0){
    return null;
  }

  return (
    <>
      <table className="table-resptable-dark">
        <thead>
          <tr>
            <th>Fields</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>First Name</td>
            <td>{responseData.fName}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{responseData.lName}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{responseData.email}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{responseData.phone}</td>
          </tr>
          <tr>
            <td>Message</td>
            <td>{responseData.message}</td>
          </tr>
        </tbody>
      </table>
      <Link to="/Forms/contactUs/contactUs">
        <Button variant="outlined my-3"> &larr; Go Back</Button>
      </Link>
    </>
  );
}
