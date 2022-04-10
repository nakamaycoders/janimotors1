import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
// import MetaData from "../../components/layouts/MetaData";
import Axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { useHistory } from "react-router";


const CreditApproval = () => {
  let unreadCount = 0;
  const rows = [];
  let [responseData, setResponseData] = useState("");
  const history = useHistory();

  const url = "http://localhost:5000/api/credit/information";

  const getCreditInfo = async () => {
    try {
      const res = await Axios.get(url);
      setResponseData(res.data.creditInfo);
      
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCreditInfo();
  }, []);

  responseData &&
    responseData.forEach((item) => {
      rows.splice(0, 0, {
        id: item._id,
        email: item.email,
        lName: item.fName,
        fName: item.lName,
        view: item.view,
      });
      if(item.view == "unread"){
        unreadCount= unreadCount +1;
      }
    });

  const deleteUrl = `http://localhost:5000/api/contact/delete`;
  const deleteCreditHandler = (id) => {
    try {
      Axios.delete(`${deleteUrl}/${id}`);
      history.go(0);
    } catch (err) {
      alert(err);
    }
  };

  const changeView = (id) => {
    const changeViewUrl = `http://localhost:5000/api/credit/update`;
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
            <h1 id="productListHeading">Credit Submissions</h1>
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
                {rows.map((item) => (
                  <tr key={item.id}>
                    <td
                      style={{
                        fontWeight: `${item.view === "unread" ? "bolder" : ""}`,
                      }}
                    >
                      {item.lName}
                    </td>
                    <td
                      style={{
                        fontWeight: `${item.view === "unread" ? "bolder" : ""}`,
                      }}
                    >
                      {item.fName}
                    </td>
                    <td
                      style={{
                        fontWeight: `${item.view === "unread" ? "bolder" : ""}`,
                      }}
                    >
                      {item.email}
                    </td>
                    <td
                      style={{
                        fontWeight: `${item.view === "unread" ? "bolder" : ""}`,
                      }}
                    >
                      <Link
                        to={{
                          pathname: `/credit/credit-detail/${item.id}`,
                          params: { id: item.id },
                        }}
                      >
                        <Button onClick={() => changeView(item.id)}>
                          View
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <Button onClick={() => deleteCreditHandler(item.id)}>
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

export default CreditApproval;
