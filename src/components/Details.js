import React from "react";

export default function Details() {
  return (
    <div className="bg-dark bg-gradient">
      <div
        className="container-fluid bg-dark bg-gradient"
        style={{ marginTop: "80px", color: "white" }}
      >
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>Student Details</h2>
          </div>
          <div className="col-md-5">
            <form className="d-flex " role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <div className="col-md-1 ">
            <button type="button" className="btn btn-info w-100">
              Add+
            </button>
          </div>
        </div>
      </div>
      <div className="table-responsive ">
        <table className="table table-dark table-striped">
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">fname</th>
              <th scope="col">contact</th>
              <th scope="col">email</th>
              <th scope="col">class</th>
              <th scope="col">gender</th>
              <th scope="col">terms</th>
              <th scope="col">note</th>
              <th scope="col">dob</th>
              <th scope="col">created</th>
              <th scope="col">status</th>
              <th scope="col">create_by</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}
