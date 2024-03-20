import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./TemplateData.json";
import Fav from "./Fav";

const Template = () => {
  const [searchTerm, setSearchTerm] = useState("");


  const [Fav, setFav] = useState(() => {
    const jsonValue = localStorage.getItem("Fav");
    if (jsonValue !== null) return JSON.parse(jsonValue);
    return [];
  });

  useEffect(() => {
    localStorage.setItem("Fav", JSON.stringify(Fav));
  }, [Fav]);

  const handleFav = (val) => {
    setFav((prevFav) => [...prevFav, val]);
    console.log(Fav);
    alert("Add Template In Favrouite");
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure to logout?");
    if (confirmLogout) {
      navigate("/");
    }
  };

  return (
    <div>
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
                  to="/template"
                >
                  {" "}
                  Template
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/Fav" class="nav-link active" href="#">
                  Favrouite
                </Link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search For Template"
                aria-label="Search"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <button
                    class="btn btn-outline-danger"
                    aria-current="page"
                    onClick={handleLogout}
                  >
                    {" "}
                    Logout
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>

      {/* Template */}
      <div id="template" className="container">
        <div className="row">
          {data
            .filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val) => {
              return (
                <div className="col-md-3">
                  <div class="card m-1">
                    <Link to="/Info">
                      <img src={val.image} class="card-img-top" alt="..." />
                    </Link>
                    <div class="card-body">
                      <h5 class="card-title">{val.title}</h5>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleFav(val)}
                      >
                        Add to Fav
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Footer */}
      <div class="bg-secondary">
        <p class="text-center text-light p-5 mb-0">
          Copyright © 2024 Privacy Policy Terms and Conditions
        </p>
      </div>
    </div>
  );
};

export default Template;

// {
//   plugins: [react()],
//   resolve: {
//     extensions: ['.js', '.jsx', '.json'] // Ensure JSON is included in extensions
//   }
// }
