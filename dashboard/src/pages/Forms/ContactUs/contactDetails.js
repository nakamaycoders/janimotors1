import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Axios from "axios";
import './contactDetails.css'
// import { MdWifiProtectedSetup } from "react-icons/md";





const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(Field, Data) {

  return { Field, Data };
}

const rows = [
  createData('Name', "Zubair"),
  createData('Last Name', "Khan"),
  createData('Email', "asdasda@gmail.com"),
  createData('Phone', "0909090909"),
  createData('Message', "Gand Marwao Gand Marwao Gand Marwao Gand Marwao Gand Marwao Gand Marwao Gand Marwao Gand Marwao Gand Marwao Gand Marwao Gand Marwao Gand Marwao Gand Marwao Gand Marwao Gand Marwao Gand Marwao Gand Marwao Gand Marwao Gand Marwao Gand Marwao Gand Marwao Gand Marwao Gand Marwao Gand Marwao Gand Marwao Gand Marwao Gand Marwao Gand Marwao "),
]
// {------------------------------------------------------------------------------------------------}
export default function CustomizedTables(props) {
  const [responseData, setResponseData] = useState('');
  const url = "http://localhost:5000/api/contact/information/623c26012b12b83bc28a61e6";
const getContactInfo = async ()=>{

  try{
    const res  = await Axios.get(url)
    setResponseData(res.data.result);
    console.log(responseData);
  }catch(err){
    console.log(err)
  }
}

  return (
    <>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            
            <StyledTableCell>Field</StyledTableCell>
            <StyledTableCell >Data</StyledTableCell>
            {/* <StyledTableCell ></StyledTableCell> */}
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              
              <StyledTableCell >{row.Field}</StyledTableCell>
              <StyledTableCell >{row.Data}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Link to="/Forms/contactUs/contactUs">
    <Button variant="outlined my-3"> &larr; Go Back</Button>

  </Link>
    </>
  );
}
