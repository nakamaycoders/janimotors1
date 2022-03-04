import React from "react";
import { Link } from "react-router-dom";
import { navmenu } from "./Data";
import "./style.css";


export const Nav = (props) => {
  return (
    <>
      <div className="container-fluid wrapper">
        <ul className="header-list">
          <li>
            <img
              style={{ marginTop: "5px", marginRight: "46px" }}
              src="https://www.chicagomotorcars.com/template/images/icons/karmalogo.svg"
              alt=""
            />
          </li>
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
