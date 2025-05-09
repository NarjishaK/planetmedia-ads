import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import img from "../images/first.png";
import logo from "../images/logo.png";
import "../styles/login.css";
import { Link } from "react-router-dom";
import Footer from "./footer";

function App() {
  return (
    <>
      <Navbar />

      <div className="container my-5">
        <div className="row g-0 shadow rounded-4 overflow-hidden">
          {/* Left Section */}
          <div className="col-lg-6 col-12 p-5 d-flex flex-column justify-content-center">
            <div className="text-center mb-4">
              <img
                src={logo}
                style={{ width: "150px" }}
                alt="logo"
                className="img-fluid"
              />
            </div>

            <p className="pb-4">
              <b className="mb-44">Listbnb</b> a Largest Classified Listing
              Marketplace offers perfect
              <br />
              Ads classifieds...{" "}
            </p>
            <h4 className="mb-44">
              Login To Your
              <br /> Account
            </h4>
            <form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  placeholder="Type here"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="formPassword" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="formPassword"
                  className="form-control"
                  placeholder="Type here"
                />
              </div>
            </form>

            <div className="text-center">
              <button
                className="btn btn-outline-danger"
                style={{ width: "100%" }}
              ><Link
              to={"/home"}
              className="text-decoration-none text-white"
            >
                Login
                </Link>
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div
            className="col-lg-6 col-12 text-white d-flex align-items-center"
            id="bg-div"
          >
            <div className="p-5">
              <img src={img} alt="logo" className="img-fluid" />
              <h4 className="mb-44">
                Don't Have an Account
                <i class="bi bi-question" id="icon-color" />
              </h4>
              <p className="pb-4">
                To connect with us please register for a new <br />
                account if you are not having one already.
              </p>
              <div className="text-center">
                <button className="btn btn-outline-danger">
                  &nbsp;{" "}
                  <Link
                    to={"/register"}
                    className="text-decoration-none text-white"
                  >
                    Register <i class="bi bi-arrow-right"></i>
                  </Link>
                </button>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
