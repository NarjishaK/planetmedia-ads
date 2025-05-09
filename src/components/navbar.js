import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import logo  from "../images/logo.png"
import "../styles/login.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <div className="shadow d-flex" style={{justifyContent:"space-around"}}>
        <div className="col-lg-6 col-sm-12 col-md-12">
        <img src={logo} style={{ width: "150px" }} />
        </div>
        <div style={{marginTop:"10px"}}>
        <small style={{marginRight:"5px"}}> <i class="bi bi-person" style={{color:"gray"}}></i>Sign In</small>{" "}
          <button className="btn btn-outline-danger">
            &nbsp;{" "}
            <Link to={"/myaccount"} className="text-decoration-none text-white">
              Post Your Ad <i class="bi bi-arrow-right"></i>
            </Link>
          </button>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
