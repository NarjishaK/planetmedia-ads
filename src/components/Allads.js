import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import img from "../images/banner.png";
import "../styles/login.css";

const AllAds = () => {
    const img ="https://images.unsplash.com/photo-1502673530728-f79b4cab31b1"
  return (
    <div className="container-fluid">
      <div className="row overflow-hidden">
        <div className="text-center">
          <small className="small-text">WHAT'S NEW</small>
          <h2>Fresh Recommendations</h2>
        </div>
      </div>
      
      <div className="container mt-4">
      <small className="text-xl font-semibold mb-6">
        <b className="text-pink-600" id="icon-color">33</b> Items
      </small><br/><br/>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
              <img className="card-img-top" src={img} alt="Card image cap" />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">Paris</small>
                  <small className="text-muted">1 day ago</small>
                </div>
                <br />
                <h6 className="card-title">
                  This is a wider card with supporting text below.
                </h6>
                <div className="d-flex justify-content-between align-items-center">
                  <b className="price" id="icon-color">
                    $499
                  </b>
                  <i class="bi bi-eye"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
              <img className="card-img-top" src={img} alt="Card image cap" />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">Paris</small>
                  <small className="text-muted">1 day ago</small>
                </div>
                <br />
                <h6 className="card-title">
                  This is a wider card with supporting text below.
                </h6>
                <div className="d-flex justify-content-between align-items-center">
                  <b className="price" id="icon-color">
                    $499
                  </b>
                  <i class="bi bi-eye"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
              <img className="card-img-top" src={img} alt="Card image cap" />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">Paris</small>
                  <small className="text-muted">1 day ago</small>
                </div>
                <br />
                <h6 className="card-title">
                  This is a wider card with supporting text below.
                </h6>
                <div className="d-flex justify-content-between align-items-center">
                  <b className="price" id="icon-color">
                    $499
                  </b>
                  <i class="bi bi-eye"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
              <img className="card-img-top" src={img} alt="Card image cap" />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">Paris</small>
                  <small className="text-muted">1 day ago</small>
                </div>
                <br />
                <h6 className="card-title">
                  This is a wider card with supporting text below.
                </h6>
                <div className="d-flex justify-content-between align-items-center">
                  <b className="price" id="icon-color">
                    $499
                  </b>
                  <i class="bi bi-eye"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
              <img className="card-img-top" src={img} alt="Card image cap" />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">Paris</small>
                  <small className="text-muted">1 day ago</small>
                </div>
                <br />
                <h6 className="card-title">
                  This is a wider card with supporting text below.
                </h6>
                <div className="d-flex justify-content-between align-items-center">
                  <b className="price" id="icon-color">
                    $499
                  </b>
                  <i class="bi bi-eye"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
              <img className="card-img-top" src={img} alt="Card image cap" />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">Paris</small>
                  <small className="text-muted">1 day ago</small>
                </div>
                <br />
                <h6 className="card-title">
                  This is a wider card with supporting text below.
                </h6>
                <div className="d-flex justify-content-between align-items-center">
                  <b className="price" id="icon-color">
                    $499
                  </b>
                  <i class="bi bi-eye"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllAds;
