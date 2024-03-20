import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./style.css";

const Certificate = () => {
  const loc = useLocation();
  let name = loc.pathname.split("/")[2];
  let name1 = loc.pathname.split("/")[3];
  let name2 = loc.pathname.split("/")[4];

  console.log(name);

  const navigate = useNavigate();
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure to logout?");
    if (confirmLogout) {
      navigate("/");
    }
  };

 

  return (
    <>
      {/* Header */}
      <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-lg">
        <div class="container-fluid">
          <a class="navbar-brand" onClick={handleLogout}>
            Online <span className="pcolor">Certificate</span> Maker
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/registration"
                >
                  {" "}
                  Registration
                </Link>
              </li>

              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/template"
                >
                  {" "}
                  Template
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/Contact" class="nav-link active" href="#">
                  Contact Us
                </Link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a
                    class="btn btn-outline-danger"
                    aria-current="page"
                    onClick={handleLogout}
                  >
                    {" "}
                    Logout
                  </a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>

      <div class="body">
        <div class="bg-image">
          <div class="container-fluid certificate-container">
            <div class="row">
              <div class="col-md-8 offset-md-2">
                <div class="certificate-content">
                  <h1 class="certificate-title">
                    {" "}
                    Certificate Of Achievement{" "}
                  </h1>
                  <p class="certificate-text">
                    This certificate is proudly awarded to
                  </p>
                  <h2 class="certificate-recipient text-primary">
                    {name + " " + name1 + " " + name2}
                  </h2>
                  <hr></hr>
                  <p class="certificate-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div class="text-center">
          <a href="c2.jpeg" download>
            <button id="btn" class="btn btn-outline-success">
              Download Certificate
            </button>
          </a>
        </div>
      </div>

      {/* Footer */}
      <div class="bg-secondary">
        <p class="text-center text-light p-5 mb-0">
          Copyright © 2024 Privacy Policy Terms and Conditions
        </p>
      </div>
    </>
  );
};

export default Certificate;
