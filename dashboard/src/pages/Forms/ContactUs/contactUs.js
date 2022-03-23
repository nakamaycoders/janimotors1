import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
// import "./AllProduct.css";
import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router-dom"
// import {useAlert} from 'react-alert';
import Button from "@mui/material/Button";
// import MetaData from "../../components/layouts/MetaData";
// import EditIcon from '@mui/icons-material/Edit';
// import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { MdModeEditOutline } from "react-icons/md";
import DeleteIcon from "@mui/icons-material/Delete";
// import SideBar from "../../components/Sidebar";


const AllProducts = ({ history }) => {
  const dispatch = useDispatch();

  const { error, products } = useSelector((state) => state.product);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.products
  );



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

  const rows = [{
    id: "001",
    email: "asdasd@gmail.com",
    lname: "Khan",
    fname: "Zubair",
  },{
    id: "002",
    email: "asdd@gmail.com",
    lname: "Khan2",
    fname: "Zubair2",
  }];

//   products &&
//     products.forEach((item) => {
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
