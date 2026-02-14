import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ onSearch }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">
          User Management System
        </Link>

        <form className="d-flex mx-auto ms-5" style={{ width: "40%" }}>
          <input
            className="form-control"
            type="search"
            placeholder="Search user..."
            onChange={(e) => onSearch(e.target.value)}
          />
        </form>

        <Link className="btn btn-outline-light" to="/adduser">
          Add User
        </Link>

      </div>
    </nav>
  );
}
