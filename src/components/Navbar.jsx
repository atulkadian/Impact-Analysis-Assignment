import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = (props) => {
  var activeClass = props.active;
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <span className={activeClass === "top" ? "active" : "inactive"}>
            Top Candidates
          </span>
        </Link>
        <Link to="/shortlisted">
          <span
            className={activeClass === "shortlisted" ? "active" : "inactive"}
          >
            Shortlisted
          </span>
        </Link>
        <Link to="/rejected">
          <span className={activeClass === "rejected" ? "active" : "inactive"}>
            Rejected
          </span>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
