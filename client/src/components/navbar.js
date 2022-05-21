import React from "react";
import '../css/styles.css'
import '../bs-init'
import '../fonts/font-awesome.min.css'
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light navbar-expand-md top"
      style={{
        "background-color": "#E1EFFF", "padding-top": "20px", "padding-left": "80px", "padding-right": "80px", "padding-bottom": "20px", "margin-bottom": "0px"
      }}>
      <div className="container-fluid"><a className="navbar-brand d-flex justify-content-center align-items-center align-content-center" href="https://www.jacando.com/en">
        <img alt="" className="img-fluid" src="https://www.jacando.com/wp-content/uploads/2019/04/jacando_HR-Management_Software_Logo_1-768x169.png"
          width="150px"></img></a><button data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
            className="navbar-toggler text-white bg-primary navbar-toggler-right text-uppercase rounded" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa fa-bars"></i></button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1"></li>
          </ul>
          <NavLink className="btn btn-primary btn-lg d-flex justify-content-center align-items-center align-content-center justify-content-sm-end align-items-sm-center"
            to="/create"
            data-bss-hover-animate="pulse"
            style={{ "background-color": "#FC7A00" }}
          >
            Add New Employee
          </NavLink>
        </div>
      </div>
    </nav>
  );
}