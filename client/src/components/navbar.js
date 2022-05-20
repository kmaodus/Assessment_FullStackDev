import React from "react";
import styles from '../mystyle.module.css';

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

// Here, we display our Navbar
export default function Navbar() {
  return (
    <div className={styles.jacando_blue}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <NavLink className="navbar-brand" to="/">
          <img style={{ "width": 25 + '%' }} 
               src="https://www.jacando.com/wp-content/uploads/2019/04/jacando_HR-Management_Software_Logo_1-768x169.png"
               alt=""
          >
          </img>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/create">
                Add New Employee
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
