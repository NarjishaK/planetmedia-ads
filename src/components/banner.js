import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import img from "../images/banner.png";
import "../styles/login.css";
import AllAds from "./Allads";
import Navbar from "./navbar";
import Footer from "./footer";
const DailyListingSection = () => {
  return (
    <>
     <Navbar/>
    <div className="container-fluid">
      <div className="row overflow-hidden">
        {/* Left Section */}
        <div className="col-lg-6 col-12 p-5 d-flex flex-column justify-content-center" style={{textAlign:"center"}}>
          <h1>
            Get daily thing
            <br />
            in same <b className="main-head"> platform</b>{" "}
          </h1>
        </div>

        {/* Right Section */}
        <div className="col-lg-6 col-12 text-white d-flex align-items-center">
          <div className="p-5">
            <img src={img} alt="logo" className="img-fluid" />
          </div>
        </div>
      </div>
      <br />
      <AllAds />
    </div>
    <Footer/>
    </>
  );
};

export default DailyListingSection;
