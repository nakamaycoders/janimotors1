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
           : (
            <span>{category.name}</span>
          )}
          {category.children.length > 0 ? (
            <ul>{displayCategories(category.children)}</ul>
          ) : null}
        </li>
      );
    }

    return myCategories;
  };

  return (
    <>
    {/* <h1>hellonavbar</h1> */}
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Jani Motors
          
          <i className='fab fa-firstdraft' />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fa fa-times' : 'fas fa-bars'}/>
        </div>
        <Box>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {navItems.map((item) => {
            if (item.title === "INVENTORY") {
              return (
                <li
                  key={item.id}
                  className="nav-item"
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path} className={item.cName} onClick={closeMobileMenu}>{item.title}</Link>
                  {dropdown && <Inventory />}
                </li>
              );
            }
            else if(item.title === "FINANCING"){
              return (
                <li
                  key={item.id}
                  className="nav-item"
                  onMouseEnter={() => setFinancingDropdown(true)}
                  onMouseLeave={() => setFinancingDropdown(false)}
                >
                  <Link to={item.path} className={item.cName} onClick={closeMobileMenu}>{item.title}</Link>
                  {financingDropdown && <Financing />}
                </li>
              );
              
            }
            else if(item.title === "SERVICES"){
              return (
                <li
                  key={item.id}
                  className="nav-item"
                  onMouseEnter={() => setServicesDropdown(true)}
                  onMouseLeave={() => setServicesDropdown(false)}
                >
                  <Link to={item.path} className={item.cName} onClick={closeMobileMenu}>{item.title}</Link>
                  {servicesDropdown && <Services />}
                </li>
              );
            }

            else if(item.title === "ABOUT US"){
              return (
                <li
                  key={item.id}
                  className="nav-item"
                  onMouseEnter={() => setAboutUsDropdown(true)}
                  onMouseLeave={() => setAboutUsDropdown(false)}
                >
                  <Link to={item.path} className={item.cName} onClick={closeMobileMenu}>{item.title}</Link>
                  {aboutUsDropdown && <About />}
                </li>
              );
            }

            return (
              <li key={item.id} className="nav-item" >
                <Link to={item.path} className={item.cName} onClick={closeMobileMenu}  >{item.title}</Link>
              </li>

            );

          })}
          
        </ul>
        </Box>

      </nav>


    </>

  );
};
