import React from "react";
import { Link } from "react-router-dom";
import { navmenu } from "../Nav/Data";
import "./style.css";

export const Nav = (props) => {
  return (
    <>
      <div className="container-fluid wrapper">
        <ul className="header-list">
          {navmenu.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path} className={item.cName}>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <li>
            <a href="tel:+630-221-1800" className="nav-menues">
              815-219-1969
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
