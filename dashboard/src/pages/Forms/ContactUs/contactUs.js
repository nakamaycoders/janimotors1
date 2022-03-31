import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';
// import MetaData from "../../components/layouts/MetaData";
import Axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { useHistory } from "react-router";
// import { spacing } from '@mui/system';
// import { red } from "@mui/material/colors";
// import Box from '@mui/material/Box';
// import 'bootstrap';

const ContactUs = () => {
  const rows = [];

  const [UnreadRow, setUnreadRow] = useState([]);
  const [ReadRow, setReadRow] = useState([]);
  let [responseData, setResponseData] = useState("");
  let [ReadMessages, setReadMessages] = useState(false);
  let [InitialState, setInitialState] = useState(true);
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
  responseData &&
  responseData.forEach((item) => {
    rows.splice(0,0,{
      id: item._id,
      email: item.email,
      lname: item.firstName,
      fname: item.lastName,
      view: item.view
    });
  });

  
  // console.log(rows);
  // console.log("rows length: ", rows.length);
  // console.log(UnreadRow)
  const showRead = () =>{
    let ReadFilterRow = [];
    rows.forEach((item) => {
      // console.log(item.view);
      if(item.view == "read"){
        ReadFilterRow.push(item);
        setReadRow(ReadFilterRow);
      }
    });
    setReadMessages(true); 
    setInitialState(false);
  }
  const showUnRead =()=>{
    let filteredRow = [];
    rows.forEach((item) => {
      if(item.view == "unread"){
        filteredRow.push(item);
        setUnreadRow(filteredRow);
      }
    });
    
      setReadMessages(false); 
      setInitialState(true);
  }
  
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
// -------------------------------------------
  // const rows = [];
  
 
    
  return (
    <>
      {/* <MetaData title={`ALL PRODUCTS - Admin`} /> */}
      <main className="content">
      <div className="dashboard">
      
        <div className="productListContainer">
{/* (ReadMessages)?console.log(UnreadRow):console.log(rows) */}
          <h1 id="productListHeading">Contact Submissions</h1>
         <ButtonGroup  sx={{ mx: "auto"}} variant="contained" aria-label="outlined primary button group">
            <Button color="error" onClick={showUnRead}>Un-Read</Button>
            <Button color="primary" onClick={showRead}>Read</Button>
          </ButtonGroup>
         {/* <DataGrid
            rows={(ReadMessages)?UnreadRow:UnreadRow}
            getRowId={rows => rows._id}
            columns={columns}
            pageSize={100}
            disableSelectionOnClick
            className={`productListTable `}
            autoHeight
            /> */}
             <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* {showUnRead()} */}
          {InitialState && UnreadRow.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.lname}</td>
              <td>{item.fname}</td>
              <td>{item.email}</td>
              <td><Button> View Details</Button></td>
            </tr>
          ))}
          {ReadMessages && ReadRow.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.lname}</td>
              <td>{item.fname}</td>
              <td>{item.email}</td>
              <td><Link 
              to={{
                pathname: `/contactUs/contactDetails/${item.id}`
              }}
              >
                <Button> View</Button>
              </Link>
              </td>
            </tr>
          ))}
        </tbody>

          {console.log(UnreadRow, ReadRow)}
          </table>
        </div>
      </div>
      </main>
    </>
  );
};

export default ContactUs;
