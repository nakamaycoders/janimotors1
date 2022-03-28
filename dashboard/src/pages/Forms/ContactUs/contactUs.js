import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
// import MetaData from "../../components/layouts/MetaData";
import Axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { useHistory } from "react-router";
// import { red } from "@mui/material/colors";
// import Box from '@mui/material/Box';

const ContactUs = () => {
  let [responseData, setResponseData] = useState("");
  // const [MessagesNo, setMessagesNo] = useState(responseData.length)
  const history = useHistory();
  useEffect(() => {
    getContactInfo();
    // deleteContactHandler()
  }, []);

  const url = "http://localhost:5000/api/contact/information";
  

  const getContactInfo = async () => {
    try {
      const res = await Axios.get(url);
      setResponseData(res.data.contactInfo);
      
      // console.log("messages: ", MessagesNo);
    } catch (err) {
      console.log(err);
    }
  };

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

  const columns = [
    { field: "id", headerName: "User ID", minWidth: 200, flex: 0.5 },

    {
      field: "fname",
      headerName: "First Name",
      headerClassName: 'header',
      minWidth: 200,
      flex: 1,
    },
    {
      field: "lname",
      headerName: "Last Name",
      minWidth: 150,
      flex: 0.3,
      sortable: false
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
                pathname: `/contactUs/contactDetails/${param.getValue(param.id,"id")}`,
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
      // rows.push({
      //   id: item._id,
      //   email: item.email,
      //   lname: item.firstName,
      //   fname: item.lastName,
      // });
      rows.splice(0,0,{
        id: item._id,
        email: item.email,
        lname: item.firstName,
        fname: item.lastName,
      });
    });
    console.log("rows length: ", rows.length);

    

  return (
    <>
      {/* <MetaData title={`ALL PRODUCTS - Admin`} /> */}
      <main className="content">
      <div className="dashboard">
        <div className="productListContainer">
          <h1 id="productListHeading">Contact Submissions</h1>
         
          <DataGrid
          md={{
            // height: 300,
            // width: 1,
            '.header': {
              backgroundColor: 'black',
            },
          }}
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className={`productListTable `}
            autoHeight
            />
          {/* {console.log(responseData[0].fName)} */}
          
        </div>
      </div>
      </main>
    </>
  );
};

export default ContactUs;
