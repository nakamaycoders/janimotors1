import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box'
import {useSelector,useDispatch} from 'react-redux'
import { getAllCategory } from "../../../actions";
// import "./style.css";
import { navItems } from "./data";
import { Inventory } from "../Dropdown/Inventory";
import './Navbar.css'
import { Financing } from "../Dropdown/Financing";
import { Services } from "../Dropdown/Service";
import { About } from "../Dropdown/About";
import DehazeIcon from '@mui/icons-material/Dehaze';

/**
 * @author
 * @function Navbar
 **/

export const Navbar = (props) => {
  const category = useSelector((state) => state.category);

  const [click,setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [financingDropdown,setFinancingDropdown] = useState(false);
  const [servicesDropdown,setServicesDropdown] = useState(false);
  const [aboutUsDropdown,setAboutUsDropdown] = useState(false);
  const handleClick = () =>{
    setClick(!click)
  }
  const closeMobileMenu = () =>{
    setClick(false)
  }

  // const onMouseEnter = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(true);
  //   }
  // };

  // const onMouseLeave = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(false);
  //   }
  // };
  // const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const displayCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <li key={category.name}>
          {
          category.parentId ? 
            <a 
              href={`/${category.slug}?cid=${category._id}&type=${category.type}`}
            >
              {category.name}
            </a>
           : (<>
            {/* <span>{category.name}</span> */}
            <label htmlFor="drop-2" className="toggle">{category.name}</label>
            <Link to='#'>{category.name}</Link>
            <input type="checkbox" id="drop-2"/>
           </>
          )}
          {category.children.length > 0 ? (
            <ul>
              {displayCategories(category.children)}</ul>
          ) : null}
        </li>
      );
    }

    return myCategories;
  };

  return (
    <>
    {/* <h1>hellonavbar</h1> */}
    <nav className="container">
  <div id="logo"><img className="img-fluid" style={{width:'285px'}} src="./logo .png" alt="" /></div>
  <label for="drop" className="toggle">
  <DehazeIcon></DehazeIcon>
    </label>
  <input type="checkbox" id="drop" />
  <ul className="menu">
    {category.categories.length > 0
            ? displayCategories(category.categories)
            : null}
    <li>
      {/* <!-- First Tier Drop Down --> */}
      <label for="drop-1" className="toggle">Financing</label>
      <Link href="#">Financing</Link>
      <input type="checkbox" id="drop-1"/>
      <ul>
        <li><Link href="#">Service 1</Link></li>
        <li><Link href="#">Service 2</Link></li>
        <li><Link href="#">Service 3</Link></li>
      </ul>
    </li>
   
    {/* <li><Link href="#">Blog</Link></li>
    <li><Link href="#">Submit</Link></li> */}
    <li><Link href="#">About Us</Link></li>
    <li><Link href="#">Events</Link></li>
  </ul>
</nav>


    </>

  );
};
