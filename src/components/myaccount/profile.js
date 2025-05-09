import React from "react";
function Profile() {
  return (
    <div className="col-md-8">
      <div className="card p-4 mb-4 shadow-sm border-0">
        <form style={{ paddingInline: "30px" }}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Name*
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Type here"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formEmail" className="form-label">
              Email*{" "}
            </label>
            <input
              type="email"
              id="formEmail"
              className="form-control"
              placeholder="Type here"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username*
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
              Password*
            </label>
            <input
              type="password"
              id="formPassword"
              className="form-control"
              placeholder="Type here"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formPassword" className="form-label">
              Photo*
            </label>
            <input
              type="file"
              id="formPassword"
              className="form-control"
              placeholder="Type here"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formPassword" className="form-label">
              Location*
            </label>
            <input
              type="text"
              id="location"
              className="form-control"
              placeholder="Type here"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formPassword" className="form-label">
              Contact Number*
            </label>
            <input
              type="tel"
              id="location"
              className="form-control"
              placeholder="Type here"
            />
          </div>
        </form>

        <div className="text-center" style={{ paddingInline: "30px" }}>
          <button className="btn btn-outline-danger" style={{ width: "100%" }}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
export default Profile;
