import React from "react";
import { navmenu } from "../Nav/Data";
import "./style.css";


export const Nav = (props) => {
  return (
    <>
      <div
       className="container-fluid wrapper">
        <ul className="header-list">
          
          {navmenu.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.path} className={item.cName}>
                  {item.title} 
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
