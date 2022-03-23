import React, { useEffect,useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {Link} from "react-router-dom"
import Button from "@mui/material/Button";
// import MetaData from "../../components/layouts/MetaData";
import Axios from 'axios'
import DeleteIcon from "@mui/icons-material/Delete";

const AllProducts = ({ history }) => {
  let [responseData, setResponseData] = useState('')

  useEffect(() => {
    getContactInfo()
  }, [])
  
  const url = "http://localhost:5000/api/contact/information"

  const getContactInfo = async ()=>{
    try{
      const res  = await Axios.get(url)
      setResponseData(res.data.contactInfo)
    }catch(err){
      console.log(err)
    }
  }

  const columns = [
    { field: "id", headerName: "User ID", minWidth: 200, flex: 0.5 },

    {
      field: "fname",
      headerName: "First Name",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "lname",
      headerName: "Last Name",
      // type: "number",
      minWidth: 150,
      flex: 0.3,
      sortable: false
    },

    {
      field: "email",
      headerName: "Email",
      // type: "number",
      minWidth: 200,
      flex: 0.5,
      sortable: false
    },

    {
        minWidth: 250,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={`/product/update/${params.getValue(params.id, "id")}`}>
              <MdModeEditOutline />
            </Link> */}
            <Link to="/Forms/contactUs/contactDetails">
              <Button variant="outlined">Details</Button>

            </Link>
            
              <Button><DeleteIcon /></Button>
          </>
        );
      },
    },
  ];

  // const rows = [{
  //   id: "001",
  //   email: "asdasd@gmail.com",
  //   lname: "Khan",
  //   fname: "Zubair",
  // },{
  //   id: "002",
  //   email: "asdd@gmail.com",
  //   lname: "Khan2",
  //   fname: "Zubair2",
  // }];
const rows = []

responseData && responseData.forEach((item) => {
  rows.push({
    id: item._id,
    email: item.email,
    lname: item.lName,
    fname: item.fName,
  });
});

// responseData && responseData.forEach((item) => {
//       rows.push({
//         id: item._id,
//         email: item.email,
//         lname: item.lname,
//         fname: item.fname,
//       });
//     });

  return (
    <>
      {/* <MetaData title={`ALL PRODUCTS - Admin`} /> */}

      <div className="dashboard">
        <div className="productListContainer">
          <h1 id="productListHeading">Contact Submissions</h1>
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

export default AllProducts;
