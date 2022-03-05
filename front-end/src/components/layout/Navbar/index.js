import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      </nav>


    </>

  );
};
