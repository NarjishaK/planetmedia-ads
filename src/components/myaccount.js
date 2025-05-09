import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/myaccount.css"; // Custom styles
import Profile from "./myaccount/profile"
import Myaccount from "./myaccount/mypage"
import AllAds from "./myaccount/allads"
import PostAds from "./myaccount/postads"
import Navbar from "./navbar";
import Footer from "./footer";
const ProfilePage = () => {
  return (
    <>
    <Navbar/>
    <div className="container my-4">
      {/* Breadcrumb */}
      <nav className="mb-3">
        <ol className="breadcrumb bg-transparent p-0">
          <li className="breadcrumb-item">Home</li>
          <li className="breadcrumb-item active">My Profile</li>
        </ol>
      </nav>

      <div className="row ">
        {/* Sidebar */}
        <div className="col-md-4 card list-group shadow-sm p-4 mb-4 shadow-sm border-0">
          <div className="" id="myaccount">
            <button className="list-group-item list-group-item-action active">
              My Account
            </button>
            <button className="list-group-item list-group-item-action">
              Profile
            </button>
            <button className="list-group-item list-group-item-action">
              Ads
            </button>
            <button className="list-group-item list-group-item-action text-danger fw-bold">
              Post Ad
            </button>
            <button className="list-group-item list-group-item-action">
              Logout
            </button>
          </div>
        </div>

        <>
       <Myaccount/>
       </>
      </div>
    </div>

    <Footer/>
    </>
  );
};

export default ProfilePage;
