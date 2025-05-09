import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import logo from "../images/blacklogo.png";
import "../styles/login.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "black" }}>
      <div className="shadow d-flex" style={{ justifyContent: "space-around" }}>
        <div className="col-lg-6 col-sm-12 col-md-12" style={{color:"white" ,fontSize:"small"}}>
          <img src={logo} style={{ width: "150px"}} />| copy right 2024
        </div>
        <div
          style={{ marginTop: "20px" }}
        >
          <i
            class="bi bi-facebook"
            style={{ color: "gray", marginRight: "10px" }}
          ></i>
          <i
            class="bi bi-twitter"
            style={{ color: "gray", marginRight: "10px" }}
          ></i>
          <i
            class="bi bi-behance"
            style={{ color: "gray", marginRight: "10px" }}
          ></i>
          <i
            class="bi bi-youtube"
            style={{ color: "gray", marginRight: "10px" }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
