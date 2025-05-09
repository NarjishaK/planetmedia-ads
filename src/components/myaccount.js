import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/myaccount.css";
import Profile from "./myaccount/profile";
import Myaccount from "./myaccount/mypage";
import AllAds from "./myaccount/allads";
import PostAds from "./myaccount/postads";
import Navbar from "./navbar";
import Footer from "./footer";

const ProfilePage = () => {
  const [activePage, setActivePage] = useState("myaccount");

  const renderPage = () => {
    switch (activePage) {
      case "profile":
        return <Profile />;
      case "ads":
        return <AllAds />;
      case "postad":
        return <PostAds />;
      default:
        return <Myaccount />;
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-4">
        {/* Breadcrumb */}
        <nav className="mb-3">
          <ol className="breadcrumb bg-transparent p-0">
            <li className="breadcrumb-item">Home</li>
            <li className="breadcrumb-item active">My Profile</li>
          </ol>
        </nav>

        <div className="row">
          {/* Sidebar */}
          <div className="col-md-4 card list-group shadow-sm p-4 mb-4 border-0">
            <div id="myaccount">
              <button
                className={`list-group-item list-group-item-action ${
                  activePage === "myaccount" ? "active" : ""
                }`}
                onClick={() => setActivePage("myaccount")}
              >
                My Account
              </button>
              <button
                className={`list-group-item list-group-item-action ${
                  activePage === "profile" ? "active" : ""
                }`}
                onClick={() => setActivePage("profile")}
              >
                Profile
              </button>
              <button
                className={`list-group-item list-group-item-action ${
                  activePage === "ads" ? "active" : ""
                }`}
                onClick={() => setActivePage("ads")}
              >
                Ads
              </button>
              <button
                className={`list-group-item list-group-item-action text-danger fw-bold ${
                  activePage === "postad" ? "active" : ""
                }`}
                onClick={() => setActivePage("postad")}
              >
                Post Ad
              </button>
              <button className="list-group-item list-group-item-action">
                Logout
              </button>
            </div>
          </div>

          {/* Dynamic Content */}
          {renderPage()}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
