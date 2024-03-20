import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Info = () => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    setErrors((prevState) => ({ ...prevState, [name]: "" }));
  };

  const handleValidation = () => {
    const { FirstName, MiddleName, LastName } = inputs;
    const newErrors = {};
    if (!FirstName) {
      newErrors.FirstName = "* Please enter your First Name.";
    }
    if (!MiddleName) {
      newErrors.MiddleName = "* Please enter your Middle Name.";
    }
    if (!LastName) {
      newErrors.LastName = "* Please enter your Last Name.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const Handleclick = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      alert("Generate Successfully");
      navigate(
        `/Certificate/${inputs.FirstName}/${inputs.MiddleName}/${inputs.LastName}/${inputs.Subtitle}`
      );
    }
  };


  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure to logout?");
    if (confirmLogout) {
      navigate("/");
    }
  };

  return (
    <>
      {/* Header */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg">
        <div className="container-fluid">
          <a className="navbar-brand" onClick={handleLogout}>
            Online <span className="pcolor">Certificate</span> Maker
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/registration"
                >
                  {" "}
                  Registration
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/template"
                >
                  {" "}
                  Template
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/Contact" className="nav-link active" href="#">
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

      <div className="container border border-dark mt-4 shadow-lg p-3 mb-5 bg-body-dark rounded">
        <div>
          <div className="p-2 g-col-6">
            <p className="p-3 mb-3 bg-body-light">
              <form className="row g-3" onSubmit={Handleclick}>
                <div className="col-md-8 position-relative">
                  <label
                    className="required-field"
                    htmlFor="validationTooltip01"
                    class="form-label"
                  >
                    <b>
                      First Name<span class="text-danger">*</span>
                    </b>
                  </label>
                  <input
                    placeholder="First Name"
                    type="text"
                    className="form-control p-3"
                    id="validationTooltip01"
                    name="FirstName"
                    value={inputs.FirstName || ""}
                    onChange={handleForm}
                    required
                  />
                  <span className="text-danger">{errors.FirstName}</span>
                </div>

                <div className="col-md-8 position-relative">
                  <label
                    className="required-field"
                    htmlFor="validationTooltip02"
                    class="form-label"
                  >
                    <b>
                      Middle Name<span class="text-danger">*</span>
                    </b>
                  </label>
                  <input
                    placeholder="Middle Name"
                    type="text"
                    className="form-control p-3"
                    id="validationTooltip02"
                    name="MiddleName"
                    value={inputs.MiddleName || ""}
                    onChange={handleForm}
                    required
                  />
                  <span className="text-danger">{errors.MiddleName}</span>
                </div>

                <div className="col-md-8 position-relative">
                  <label
                    className="required-field"
                    htmlFor="validationTooltip03"
                    class="form-label"
                  >
                    <b>
                      Last Name<span class="text-danger">*</span>
                    </b>
                  </label>
                  <input
                    placeholder="Last Name"
                    type="text"
                    className="form-control p-3"
                    id="validationTooltip03"
                    name="LastName"
                    value={inputs.LastName || ""}
                    onChange={handleForm}
                    required
                  />
                  <span className="text-danger">{errors.LastName}</span>
                </div>

                <div className="col-md-8 position-relative">
                  <label htmlFor="validationTooltip04" className="form-label">
                    <b>Subtitle(Optional)</b>
                  </label>
                  <input
                    placeholder="Subtitle"
                    type="text"
                    className="form-control p-3"
                    id="validationTooltip04"
                    name="Subtitle"
                  />
                </div>

                <div className="col-md-8 position-relative">
                  <label htmlFor="validationTooltip05" className="form-label">
                    <b>Date</b>
                  </label>
                  <input
                    type="date"
                    className="form-control p-2"
                    id="validationTooltip05"
                  />
                </div>

                <div id="myAlert" className="alert alert-success hide">
                  <div className="text-center">
                    <button
                      onClick={Handleclick}
                      className="btn btn-outline-success"
                      type="submit"
                    >
                      Generate Certificate{" "}
                    </button>
                  </div>
                </div>
              </form>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-secondary">
        <p className="text-center text-light p-5 mb-0">
          Copyright © 2024 Privacy Policy Terms and Conditions
        </p>
      </div>
    </>
  );
};

export default Info;
