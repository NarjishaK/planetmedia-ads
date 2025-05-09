import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/myaccount.css"; // Custom styles

import Navbar from "./navbar";
import Footer from "./footer";
const Adview = () => {
  return (
    <>
    <Navbar/>
   
    <div className="container my-4">
      {/* Breadcrumb */}

      <div className="row ">
        <div className="col-md-9">
          <div className="card p-4 mb-4 shadow-sm border-0">
            <div>
              <b className="mb-0">Apple MacBook Air (2023) Apple M2 Chip</b>
              <div className="" style={{ justifyContent: "center" }}>
                <small className="">
                  <i className="bi bi-geo-alt" id="icon-color"></i> New York,
                  United States &nbsp;{" "}
                </small>
                <small>
                  <i className="bi bi-calendar" id="icon-color"></i> Nov 01,
                  2023, 10:00am{" "}
                </small>
              </div>{" "}
              <br /> <br />
            </div>
            <div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1502673530728-f79b4cab31b1"
                  alt="Profile"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>

          {/* Ad Items */}
          <div className="card p-3 mb-3 shadow-sm border-0 d-flex flex-md-row align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <div>
                <b className="mb-1">Overview</b>
                <br />
                <br />
                <small className="text-muted" style={{ display: "flex" }}>
                  The Apple MacBook Air 13.6-Inch laptop is powered by the new
                  M2 chip. It is loaded with 8GB RAM and 256GB SSD. The MacBook
                  Air features a brilliant Retina display, a FaceTime HD camera,
                  and studio-quality mics. It comes with the same compact design
                  but now it supports up to 20 hours of battery life and an
                  active cooling system to sustain enhanced performance. macOS
                  and M2 work together to bring more speed and responsiveness to
                  all your go-to apps. The Apple MacBook Air comes with active
                  cooling that sustains blazing-fast performance. <br />
                  <br />
                  The Apple M2 chip is an 8-core CPU with 4 performance cores
                  and 4 efficiency cores. It comes with 10-core GPU, 16-core
                  Neural Engine, and 100GB/s memory bandwidth for superfluid
                  multitasking and working with massive files. The M2 is built
                  using an enhanced second-generation 5-nanometer technology. It
                  features over 20 billion transistors - 25 percent more than
                  M1. And its 16-core Neural Engine is capable of executing up
                  to 15.8 trillion operations per second to accelerate machine
                  learning tasks. The high-performance media engine on M2
                  supports ProRes encode and decode. So you can play and edit up
                  to 11 streams of 4K ProRes video and up to 2 streams of 8K
                  ProRes video. The Apple MacBook Air 13.6-Inch comes with a
                  brilliant 13.6-inch (diagonal) LED-backlit display with IPS
                  technology: 2560-by-1664 native resolution at 224 pixels per
                  inch with support for millions of colors. It takes images on
                  an incredible level of detail and realism. The bright LED
                  backlighting delivers deep blacks and bright whites. It
                  features 500 nits brightness, Wide color (P3), and True Tone
                  technology.
                </small>
              </div>
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <div className="col-md-3">
          <div className="card p-4 mb-4 shadow-sm border-0">
            <div className=" justify-content-between align-items-center mb-3">
              <div>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">Price</small>
                  <i className="bi bi-tags"></i>
                </div>

                <h5 className="mb-0" id="price">
                  $599
                </h5>
              </div>
            </div>
          </div>
          {/* personal details */}
          <div className="card p-4 mb-4 shadow-sm border-0">
            <div className=" justify-content-between align-items-center mb-3">
              <div
                className="d-flex align-items-center"
                style={{ justifyContent: "space-around" }}
              >
                <img
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                  alt="Profile"
                  className="rounded-circle me-3"
                  width="80"
                  height="80"
                />
              </div>
              <br />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <small className="text-muted text-center ">
                  Member since 2019
                </small>

                <h5 className="mb-0 text-center">Cameron Williamson</h5>
              </div>
            </div>
            <hr />
            <div
              className="card p-4 mb-4 shadow-sm border-0"
              style={{ backgroundColor: "#efefefbf" }}
            >
              <div className="" style={{ justifyContent: "center" }}>
                <small className="">Click To Show Number &nbsp; </small>
                <b className="mb-0">
                  {" "}
                  <i className="bi bi-telephone-fill" id="icon-color"></i>{" "}
                  +88XXXXXXXXX
                </b>
              </div>
            </div>
            <div
              className="card p-4 mb-4 shadow-sm border-0"
              style={{ backgroundColor: "#efefefbf" }}
            >
              <div className="" style={{ justifyContent: "center" }}>
                <small className="">Click To Show Email &nbsp; </small>
                <br />
                <b className="mb-0">
                  {" "}
                  <i className="bi bi-envelope" id="icon-color"></i>{" "}
                  info@xxxxxxx
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
    </>
  );
};

export default Adview;
