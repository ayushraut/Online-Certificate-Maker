import React from 'react'
import { Link } from 'react-router-dom';


const Contact = () => {
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
             <a class="nav-link active" href="#">Contact Us</a>
           </li>

          
         </ul>
       
       </div>
     </div>
   </nav>


<div class="container border border-dark mt-4 shadow-lg p-3 mb-5 bg-body-dark rounded">
        <div>
          <div class="p-2 g-col-6">
            <p class="p-3 mb-3 bg-body-light">
              <form className="row g-3" action="https://formsubmit.co/raut0987ayush@gmail.com" method="POST" >
                <div className="col-md-8 position-relative">
                  <h1>Contact Us</h1>
                    <br></br>
                  <label
                    className="required-field"
                    for="validationTooltip01"
                    class="form-label"
                  >
                    <b>Full Name</b>
                  </label>
                  <input
                    placeholder="Full Name"
                    type="text"
                    class="form-control p-3"
                    id="validationTooltip01"
                    name="Name"
                    required
                  />
                </div>

                <div class="col-md-8 position-relative">
                  <label
                    className="required-field"
                    for="validationTooltip02"
                    class="form-label"
                  >
                    <b>Email</b>
                  </label>
                  <input
                    placeholder="E-Mail"
                    type="text"
                    class="form-control p-3"
                    id="validationTooltip02"
                    email="Email"
                    required
                  />
                </div>
            
                <div class="col-md-8 position-relative">
                  <label
                    className="required-field"
                    for="validationTooltip02"
                    class="form-label"
                  >
                    <b>Country</b>
                  </label>
                  <input
                    placeholder="Country For ex: India"
                    type="text"
                    class="form-control p-3"
                    id="validationTooltip02"
                    name="Country"
                   required
                  />
                </div>

                <div class="col-md-8 position-relative">
                  <label
                    className="required-field"
                    for="validationTooltip02"
                    class="form-label"
                  >
                    <b>Message</b>
                  </label>
                  <textarea
                    placeholder="Message"
                    type="text"
                    class="form-control p-3"
                    id="validationTooltip02"
                    name="Message"
                    required
                  />
                </div>


                <div>
                  <div className="center">
                    <button
                      className="btn btn-outline-primary "
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </p>
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
  )
}

export default Contact
