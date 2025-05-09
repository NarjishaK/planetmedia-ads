import React from "react";
function AllAds(){
    return(
        <div className="col-md-8">
        {/* Ad Items */}
        {[1, 2].map((_, index) => (
          <div
            key={index}
            className="card p-3 mb-3 shadow-sm border-0 d-flex flex-md-row align-items-center justify-content-between"
          >
            <div className="d-flex align-items-center">
              <img
                src={
                  index === 0
                    ? "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1"
                    : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MLA42"
                }
                alt="Ad"
                className="rounded-4 me-3"
                width="100"
                height="100"
                style={{ objectFit: "cover" }}
              />
              <div>
                <h6 className="mb-1">
                  {index === 0
                    ? "Luxury couple apartment"
                    : "Beats Studio 3 Wireless Over Ear"}
                </h6>
                <small className="text-muted" style={{display:"flex"}}>Dallas, Texas · <p className="time">24hrs ago</p></small>
                <p className="mb-0 fw-semibold mt-2">$124.80</p>
              </div>
            </div>
            <div className="d-flex gap-2 mt-3 mt-md-0">
              <button className="btn" id="edit-btn">View</button>
              <button className="btn btn-danger">Edit Ad</button>
            </div>
          </div>
        ))}
      </div>
    )
}
export default AllAds