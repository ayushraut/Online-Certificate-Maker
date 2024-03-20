import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import data from "./TemplateData.json";

const Fav = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [Fav, setFav] = useState([]);

  useEffect(() => {
    const jsonValue = JSON.parse(localStorage.getItem("Fav"));

    setFav(jsonValue);
  }, []);

  const removeFromFav = (itemToRemove) => {
    const updatedFav = Fav.filter((item) => item !== itemToRemove);
    setFav(updatedFav);
    localStorage.setItem("Fav", JSON.stringify(updatedFav));
    alert("Remove Template In Favrouite");
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure to logout?");
    if (confirmLogout) {
      navigate("/");
    }
  };

  return (
    <>
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
      </div>

      {/* Template */}
      <div id="template" className="container">
        <div className="row">
          {Fav.filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          }).map((val) => {
            return (
              <div className="col-md-3">
                <div class="card m-1">
                  <Link to="/Info">
                    <img src={val.image} class="card-img-top" alt="..." />
                  </Link>
                  <div class="card-body">
                    <h5 class="card-title">{val.title}</h5>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromFav(val)}
                    >
                      Remove To Fav
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Fav;
