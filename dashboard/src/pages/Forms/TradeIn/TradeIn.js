import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
// import MetaData from "../../components/layouts/MetaData";
import Axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { useHistory } from "react-router";

const TradeIn = () => {
  let [InitialState, setInitialState] = useState(true);

  const changeView = (id) => {
    const changeViewUrl = `http://localhost:5000/api/trade-in/update`;
    try {
      Axios.patch(`${changeViewUrl}/${id}`);
    } catch (err) {
      alert(err);
    }
  };

  let [responseData, setResponseData] = useState("");
  const history = useHistory();
  useEffect(() => {
    getContactInfo();
    // deleteContactHandler()
  }, []);

  const url = "http://localhost:5000/api/trade-in/information";

  const getContactInfo = async () => {
    try {
      const res = await Axios.get(url);
      setResponseData(res.data.tradeInfo);
      console.log(res.data.tradeInfo);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUrl = `http://localhost:5000/api/trade-in/delete`;
  const deleteContactHandler = (id) => {
    try {
      Axios.delete(`${deleteUrl}/${id}`);
      // console.log("Item successfully deleted.", res);
      history.go(0);
    } catch (err) {
      alert(err);
    }
  };

  const rows = [];
  responseData &&
    responseData.forEach((item) => {
      rows.splice(0, 0,{
        id: item._id,
        email: item.email,
        firstName: item.firstName,
        view: item.view,
      });
    });
  console.log(rows);

  return (
    <>
      {/* <MetaData title={`ALL PRODUCTS - Admin`} /> */}
      <main className="content">
        <div className="dashboard">
          <div className="productListContainer">
            <h1 id="productListHeading">Trade In Submissions</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Email</th>
                  <th>Action</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {InitialState &&
                  rows.map((item) => (
                    <tr key={item.id}>
                      <td
                        style={{
                          fontWeight: `${
                            item.view == "unread" ? "bolder" : ""
                          }`,
                        }}
                      >
                        {item.firstName}
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
                            pathname: `/TradeIn/TradeInDetails/${item.id}`,
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

export default TradeIn;
