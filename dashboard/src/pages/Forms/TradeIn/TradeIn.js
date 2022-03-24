import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
// import MetaData from "../../components/layouts/MetaData";
import Axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { useHistory } from "react-router";

const TradeIn = () => {
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
      console.log(res.data.tradeInfo)
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUrl = `http://localhost:5000/api/trade-in/delete`;
  const deleteContactHandler = (id) => {
    try {
      const res = Axios.delete(`${deleteUrl}/${id}`);
      // console.log("Item successfully deleted.", res);
      history.go(0);
    } catch (err) {
      alert(err);
    }
  };

  const columns = [
    { field: "id", headerName: "User ID", minWidth: 200, flex: 0.5 },

    {
      field: "fname",
      headerName: "First Name",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "make",
      headerName: "Make",
      minWidth: 150,
      flex: 0.3,
      sortable: false,
    },

    {
      field: "email",
      headerName: "Email",
      minWidth: 200,
      flex: 0.5,
      sortable: false,
    },

    {
      minWidth: 250,
      renderCell: (param) => {
        return (
          <>
            <Link
              to={{
                pathname: `/Forms/TradeIn/TradeInDetails/${param.getValue(param.id,"id")}`,
                params: { id: param.id },
              }}
              >
              <Button variant="outlined">Details</Button>
            </Link>

            <Button onClick={() => deleteContactHandler(param.id)}>
              <DeleteIcon />
            </Button>
          </>
        );
      },
    },
  ];

  const rows = [];
  responseData &&
    responseData.forEach((item) => {
      rows.push({
        id: item._id,
        email: item.email,
        make: item.make,
        fname: item.fname,
      });
    });


  return (
    <>
      {/* <MetaData title={`ALL PRODUCTS - Admin`} /> */}

      <div className="dashboard">
        <div className="productListContainer">
          <h1 id="productListHeading">Trade In Submissions</h1>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
    </>
  );
};

export default TradeIn;
