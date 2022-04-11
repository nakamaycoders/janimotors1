import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Axios from "axios";
// import './contactDetails.css'

export default function CustomizedTables(props) {
  let [responseData, setResponseData] = useState("");
  const url = "http://localhost:5000/api/joint/information";
  
  const getContactInfoById = async () => {
    const id = props.location.params.id;
    try {
      const res = await Axios.get(`${url}/${id}`);
      setResponseData(res.data.result);
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };
  useEffect(() => {
    getContactInfoById();
  },[]);
  // if(Object.keys(responseData).length === 0){
  //     return localStorage.getItem(id)
  // }

  return (
    <>
    <main className="content">
      <table className="table-resptable-dark">
        <thead>
          <tr>
            <th>Applicant Fields</th>
            <th>Data</th>
            <th>Co-Applicant Fields</th>
            <th>Data</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>First Name</td>
            <td>{responseData.fname}</td>
            <td>First Name</td>
            <td>{responseData.Cofname}</td>
            

          </tr>
          <tr>
            <td>Middle Name</td>
            <td>{responseData.midName}</td>
            <td>Middle Name</td>
            <td>{responseData.CoMidName}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{responseData.lName}</td>
            <td>Last Name</td>
            <td>{responseData.ColName}</td>
          </tr>
          {/* ------------------------------------------------------------------- */}
          <tr>
            <td>Suffix</td>
            <td>{responseData.Suffix}</td>
            <td>Suffix</td>
            <td>{responseData.CoSuffix}</td>
            </tr>
          <tr>
            <td>Home Number</td>
            <td>{responseData.homeNum}</td>
            <td>Home Number</td>
            <td>{responseData.CohomeNum}</td>
          </tr>
          <tr>
            <td>Cell No</td>
            <td>{responseData.cellNum}</td>
            <td>Cell No</td>
            <td>{responseData.CocellNum}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{responseData.email}</td>
            <td>Email</td>
            <td>{responseData.Coemail}</td>
          </tr>
          <tr>
            <td>Rural Route</td>
            <td>{responseData.rr}</td>
            <td>Rural Route</td>
            <td>{responseData.Corr}</td>
          </tr>
          <tr>
            <td>Box</td>
            <td>{responseData.box}</td>
            <td>Box</td>
            <td>{responseData.Cobox}</td>
          </tr>
          <tr>
            <td>Street</td>
            <td>{responseData.street}</td>
            <td>Street</td>
            <td>{responseData.Costreet}</td>
          </tr>
          <tr>
            <td>Street Name</td>
            <td>{responseData.StreetName}</td>
            <td>Street Name</td>
            <td>{responseData.CoStreetName}</td>
          </tr>
          <tr>
            <td>Street Type</td>
            <td>{responseData.StreetOptional}</td>
            <td>Street Type</td>
            <td>{responseData.CoStreetOptional}</td>
          </tr>
          <tr>
            <td>APT</td>
            <td>{responseData.apt}</td>
            <td>APT</td>
            <td>{responseData.Coapt}</td>
          </tr>
          <tr>
            <td>ZIP</td>
            <td>{responseData.zip}</td>
            <td>ZIP</td>
            <td>{responseData.Cozip}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{responseData.city}</td>
            <td>City</td>
            <td>{responseData.Cocity}</td>
          </tr>
          <tr>
            <td>State</td>
            <td>{responseData.State}</td>
            <td>State</td>
            <td>{responseData.CoState}</td>
          </tr>
          <tr>
            <td>House</td>
            <td>{responseData.House}</td>
            <td>House</td>
            <td>{responseData.CoHouse}</td>
          </tr>
          <tr>
            <td>Year</td>
            <td>{responseData.Year}</td>
            <td>Year</td>
            <td>{responseData.CoYear}</td>
          </tr>
          <tr>
            <td>Month</td>
            <td>{responseData.Month}</td>
            <td>Month</td>
            <td>{responseData.CoMonth}</td>
          </tr>
          <tr>
            <td>Mortgage</td>
            <td>{responseData.Mortgage}</td>
            <td>Mortgage</td>
            <td>{responseData.CoMortgage}</td>
          </tr>
          <tr>
            <td>Dob</td>
            <td>{responseData.Dob}</td>
            <td>Dob</td>
            <td>{responseData.Codob}</td>
          </tr>
          <tr>
            <td>SSN</td>
            <td>{responseData.SSN}</td>
            <td>SSN</td>
            <td>{responseData.CoSSN}</td>
          </tr>
          <tr>
            <td>Co-Applicant Relation</td>
            <td>{responseData.CoApplicantRelation}</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>SelectHousingStatus</td>
            <td>{responseData.SelectHousingStatus}</td>
            <td>SelectHousingStatus</td>
            <td>{responseData.CoSelectHousingStatus}</td>
          </tr>
          <tr>
            <td>Employer</td>
            <td>{responseData.Employer}</td>
            <td>Employer</td>
            <td>{responseData.CoEmployer}</td>
          </tr>
          <tr>
            <td>WorkTitle</td>
            <td>{responseData.WorkTitle}</td>
            <td>WorkTitle</td>
            <td>{responseData.CoWorkTitle}</td>
          </tr>
          <tr>
            <td>WorkPhone</td>
            <td>{responseData.WorkPhone}</td>
            <td>WorkPhone</td>
            <td>{responseData.CoWorkPhone}</td>
          </tr>
          <tr>
            <td>Years</td>
            <td>{responseData.yearss}</td>
            <td>Years</td>
            <td>{responseData.Coyearss}</td>
          </tr>
          <tr>
            <td>Months</td>
            <td>{responseData.monthss}</td>
            <td>Months</td>
            <td>{responseData.Comonthss}</td>
          </tr>
          <tr>
            <td>Self WorkPhone</td>
            <td>{responseData.SelfWorkPhone}</td>
            <td>Self WorkPhone</td>
            <td>{responseData.CoSelfWorkPhone}</td>
          </tr>
          <tr>
            <td>Self Year</td>
            <td>{responseData.Selfyear}</td>
            <td>Self Year</td>
            <td>{responseData.CoSelfyear}</td>
          </tr>
          <tr>
            <td>Self Months</td>
            <td>{responseData.Selfmonths}</td>
            <td>Self Months</td>
            <td>{responseData.CoSelfmonths}</td>
          </tr>
          <tr>
            <td>Emp Status</td>
            <td>{responseData.EmpStatus}</td>
            <td>Emp Status</td>
            <td>{responseData.CoEmpStatus}</td>
          </tr>
          <tr>
            <td>Per Year</td>
            <td>{responseData.PerYear}</td>
            <td>Per Year</td>
            <td>{responseData.CoPerYear}</td>
          </tr>
         
            
          
        </tbody>
      </table>
      <Link to="/Credit-Approval">
        <Button variant="outlined my-3"> &larr; Go Back</Button>
      </Link>
      </main>
    </>
  );
}
