import React from "react";
import { Link } from "react-router-dom";
import { navmenu } from "../Nav/Data";
import "./style.css";


export const Nav = (props) => {
  return (
    <>
    {/* <h1>hellonav</h1> */}

      <div
       className="container-fluid wrapper">
        <ul className="header-list">
          
          {navmenu.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.path} className={item.cName}>
                  {item.title} 
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
