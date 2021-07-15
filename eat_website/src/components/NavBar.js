import React, { Component } from "react";
import { SiDell } from "react-icons/si";
import { Link } from "react-router-dom";
import Logo from "../img/dds__brand-delltechnologies.png";
import Migrate from "../img/dds__migrate.png";

// import "../css/sb-admin-2.css";

export class callMe extends Component {}

export default class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-fixed navbar-expand-lg navbar-dark "
          style={{ backgroundColor: "#0076CE" }}
        >
          <div className="container-fluid ">
            <a className="navbar-brand" href="/Dashboard">
              <img
                src={Migrate}
                style={{ float: "right", display: "inline" }}
                alt=""
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                {this.props.loggedIn && (
                  <li className="nav-item">
                    <Link
                      className="nav-link "
                      aria-current="page"
                      to="/Dashboard"
                    >
                      Dashboard
                    </Link>
                  </li>
                )}
                {/* <li className="nav-item ">
                  <Link className="nav-link" to="/BasicPage">
                    Basic Page
                  </Link>
                </li> */}
                <li className="nav-item ">
                  <Link className="nav-link" to="/AboutPage">
                    About Us
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/ResourcePage">
                    Resources
                  </Link>
                </li>
                {!this.props.loggedIn && (
                  <li className="nav-item">
                    <Link
                      className="nav-link "
                      to="/Login"
                      tabIndex="-1"
                      aria-disabled="true"
                    >
                      Login
                    </Link>
                  </li>
                )}
                {this.props.loggedIn && (
                  <li className="nav-item">
                    <span
                      className="nav-link"
                      onClick={() => {
                        localStorage.setItem("loggedIn", false);
                        this.props.setLoggedIn(false);
                      }}
                    >
                      Sign Out
                    </span>
                  </li>
                )}
                {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
