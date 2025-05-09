import React from "react";
function Mypage(){
    return(
        <div className="col-md-8" >
            <div className="card p-4 mb-4 shadow-sm border-0" >
          <form  style={{paddingInline:"30px"}}>
          <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Ad Title*
              </label>
              <input
                type="text"
                id="username"
                className="form-control"
                placeholder="Type here"
              />
            </div><br/>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Description*
              </label>
              <textarea
                type="text"
                id="username"
                className="form-control"
                placeholder="Type here"
                rows={4}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formPassword" className="form-label">
                Photos*
              </label>
              <input
                type="file"
                id="formPassword"
                className="form-control"
                placeholder="Type here"
              />
            </div>
            <br/>
          </form>

          <div className="text-center" style={{paddingInline:"30px"}}> 
            <button className="btn btn-outline-danger" style={{width:"100%"}}>Post</button>
          </div>
          </div>
      </div>
    )
}
export default Mypage