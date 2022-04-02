import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

// import MetaData from "../../components/layouts/MetaData";
import Axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { useHistory } from "react-router";

const ContactUs = () => {
  const rows = [];

  let [responseData, setResponseData] = useState("");

  let [InitialState, setInitialState] = useState(true);

  const history = useHistory();

  useEffect(() => {
    getContactInfo();
  }, []);

  const url = "http://localhost:5000/api/contact/information";

  const getContactInfo = async () => {
    try {
      const res = await Axios.get(url);
      setResponseData(res.data.contactInfo);
    } catch (err) {
      console.log(err);
    }
  };
  responseData &&
    responseData.forEach((item) => {
      rows.splice(0, 0, {
        id: item._id,
        email: item.email,
        lname: item.firstName,
        fname: item.lastName,
        view: item.view,
      });
    });

  const deleteUrl = `http://localhost:5000/api/contact/delete`;
  const deleteContactHandler = (id) => {
    try {
      Axios.delete(`${deleteUrl}/${id}`);
      // console.log("Item successfully deleted.", res);
      history.go(0);
    } catch (err) {
      alert(err);
    }
  };

  // -------------------------------------------
  // const rows = [];

  const changeView = (id) => {
    const changeViewUrl = `http://localhost:5000/api/contact/update`;
    try {
      Axios.patch(`${changeViewUrl}/${id}`);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      {/* <MetaData title={`ALL PRODUCTS - Admin`} /> */}
      <main className="content">
        <div className="dashboard">
          <div className="productListContainer">
            <h1 id="productListHeading">Contact Submissions</h1>

            <table className="table">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Action</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {InitialState &&
                  rows.map((item) => (
                    <tr key={item.id}>
                      {/* <td>{item.id}</td> */}
                      <td
                        style={{
                          fontWeight: `${
                            item.view == "unread" ? "bolder" : ""
                          }`,
                        }}
                      >
                        {item.lname}
                      </td>
                      <td
                        style={{
                          fontWeight: `${
                            item.view == "unread" ? "bolder" : ""
                          }`,
                        }}
                      >
                        {item.fname}
                      </td>
                      <td
                        style={{
                          fontWeight: `${
                            item.view == "unread" ? "bolder" : ""
                          }`,
                        }}
                      >
                        {item.email}
                      </td>
                      <td
                        style={{
                          fontWeight: `${
                            item.view == "unread" ? "bolder" : ""
                          }`,
                        }}
                      >
                        <Link
                          to={{
                            pathname: `/contactUs/contactDetails/${item.id}`,
                            params: { id: item.id },
                          }}
                        >
                          <Button onClick={() => changeView(item.id)}>
                            View
                          </Button>
                        </Link>
                      </td>
                      <td>
                        <Button onClick={() => deleteContactHandler(item.id)}>
                          <DeleteIcon />
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>

              {/* {console.log(UnreadRow, ReadRow, rows)} */}
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactUs;
