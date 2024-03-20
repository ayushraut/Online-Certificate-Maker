import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    fname: " ",
    lname: " ",
    email: " ",
    password: " ",
    cpassword: " ",
  });
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let isvalid = true;
    let validationErrors = {};
    if (formData.fname === " " || formData.fname === null) {
      isvalid = false;
      validationErrors.fname = "*First name required";
    }
    if (formData.lname === " " || formData.lname === null) {
      isvalid = false;
      validationErrors.lname = "*Last name required";
    }
    if (formData.email === " " || formData.email === null) {
      isvalid = false;
      validationErrors.email = "*Email required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isvalid = false;
      validationErrors.email = "*Email is not valid";
    }
    if (formData.password === " " || formData.password === null) {
      isvalid = false;
      validationErrors.password = "*Password required";
    } else if (formData.password.length < 6) {
      isvalid = false;
      validationErrors.password = "*Password length at least 6 char";
    }
    if (formData.cpassword !== formData.password) {
      isvalid = false;
      validationErrors.cpassword = "*Password is not match";
    }
    setErrors(validationErrors);
    setValid(isvalid);

    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("http://localhost:8000/users", formData)
        .then((result) => {
          alert("Register Successfully");
          navigate("/login");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>

           {/* Header */}
     <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-lg">
     <div class="container-fluid">
       <Link class="navbar-brand" to="/">Online <span className="pcolor">Certificate</span> Maker</Link>
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarSupportedContent">
         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
           <li class="nav-item">
             <Link class="nav-link active" aria-current="page" to="/registration">
               {" "}
               Registration
               </Link>
           </li>
   
           <li class="nav-item">
             <Link class="nav-link active" aria-current="page" to="/login">
               {" "}
               Template
               </Link>
           </li>
   
   
   
           <li class="nav-item">
             <Link to="/Contact" class="nav-link active" href="#">Contact Us</Link>
           </li>
         
         </ul>
      
       </div>
     </div>
   </nav>

  {/* Main */}
    <div class="container" id="reg">
      <div class="row">
        <div class="col-md-6 offset-md-3 mt-5">
          <div class="signup-form">
            <form
              class="mt-5 border p-4 bg-light shadow"
              onSubmit={handleSubmit}
            >
              <h4 class="mb-5 text-primary">Create Your Account</h4>
              {/* {valid ? (
                <></>
              ) : (
                <span className="text-danger">
                   {errors.lname}; {errors.email};{" "}
                  {errors.password}; {errors.cpassword}
                </span>
              )} */}
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label>
                   <b> First Name </b>  <span class="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="fname"
                    class="form-control"
                    placeholder="Enter First Name"
                    onChange={(event) =>
                      setFormData({ ...formData, fname: event.target.value })
                    }
                  />
                  <span className="text-danger">{errors.fname}</span>
                </div>

                <div class="mb-3 col-md-6">
                  <label>
                  <b>Last Name  </b>  <span class="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="Lname"
                    class="form-control"
                    placeholder="Enter Last Name"
                    onChange={(event) =>
                      setFormData({ ...formData, lname: event.target.value })
                    }
                  />
                    <span className="text-danger">{errors.lname}</span>
                </div>

                <div class="mb-3 col-md-12">
                  <label>
                  <b>  Email</b> <span class="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="Enter Email"
                    onChange={(event) =>
                      setFormData({ ...formData, email: event.target.value })
                    }
                  />
                    <span className="text-danger">{errors.email}</span>
                </div>

                <div class="mb-3 col-md-12">
                  <label>
                  <b>Password </b>  <span class="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    class="form-control"
                    placeholder="Enter Password"
                    onChange={(event) =>
                      setFormData({ ...formData, password: event.target.value })
                    }
                  />
                    <span className="text-danger">{errors.password}</span>
                </div>
                <div class="mb-3 col-md-12">
                  <label>
                  <b>Confirm Password </b>  <span class="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    name="confirmpassword"
                    class="form-control"
                    placeholder="Confirm Password"
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        cpassword: event.target.value,
                      })
                    }
                  />
                    <span className="text-danger">{errors.cpassword}</span>
                </div>
                <div class="col-md-12">
                  <button class="btn btn-primary float-end">Signup Now</button>
                </div>
              </div>
              <p class="text-center mt-3 text-secondary">
                If you have account, Please <Link to="/login">Login Now</Link>
              </p>
            </form>
          </div>
        </div>
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

export default Registration;
