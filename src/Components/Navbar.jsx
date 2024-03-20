import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <div>
      {/* Header */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Online <span className="pcolor">Certificate</span> Maker
          </Link>
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
                  to="/login"
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
              <Link to="/Login" class="btn btn-outline-primary"
              data-toggle="modal" data-target="#mymodal"              
              type="submit">
                Login
              </Link>
            
            </form>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="cards m-5">
        <h1 className="text-center text-dark">
          Online <span className="pcolor"> Certificate </span> Maker
        </h1>
        <p className="text-center">
          Generate beautiful certificates for your students or colleagues and
          download in PDF format
        </p>
        <div className="text-center">
          <Link
            type="button"
            className="btn btn-outline-success btn-lg"
            to="/login"
          >
            Create a Certificate Now
          </Link>
        </div>
        <br></br>
        <p className="text-center ">100% Free — Download in PDF or JPG</p>
        <div className=" mb-3 p-5">
          {/* 1st Card */}
          <div className="row ">
            <div className="col-md-5 ">
              <img
                src="https://www.visme.co/wp-content/uploads/2021/03/Certificate-maker-templates.jpg"
                className="img-fluid rounded-start shadow-lg"
                alt="..."
              />
            </div>
            <div className="col-md-7 mt-5">
              <div className="card-body mt-5">
                <h1 className="card-title ms-5">
                  Beautiful <span className="pcolor">Certificate</span>{" "}
                  Templates{" "}
                </h1>
                <p className="card-text p-2 ms-5">
                  Get started with the professional certificate maker by
                  choosing from our free printable certificate templates that
                  will make your creation process quick and easy. You can fully
                  customize any template inside Visme to fit your vision and
                  needs.
                </p>
                <Link
                  to="/Login"
                  className="btn btn-outline-success btn-lg p-2 ms-5"
                >
                  Create Your Certificate
                </Link>
              </div>
            </div>
          </div>
          {/* 2nd Card */}
          <div className="row pt-5">
            <div className="col-md-7 mt-5">
              <div className="card-body mt-5">
                <h1 className="card-title ">
                  Build Your <span className="pcolor"> Certificate </span>
                </h1>
                <p className="card-text p-2">
                  {" "}
                  Whatever you create certificates for, whether it’s school
                  awards or course certifications, you can easily do so right
                  inside Visme’s free certificate maker. Add a header font for
                  your award name, graphics relevant to your industry and the
                  winner’s name in a script font.{" "}
                </p>
                <Link
                  to="/Login"
                  className="btn btn-outline-success btn-lg p-2"
                >
                  Create Your Certificate
                </Link>
              </div>
            </div>
            <div className="col-md-5 ">
              <img
                src="https://www.visme.co/wp-content/uploads/2021/03/Certificate-maker-create.jpg"
                className="img-fluid rounded-start shadow-lg"
                alt="..."
              />
            </div>
          </div>
          {/* 3rd Card */}
          <div className="row pt-5 ">
            <div className="col-md-5 ">
              <img
                src="https://www.visme.co/wp-content/uploads/2021/03/Certificate-maker-Customize.jpg"
                className="img-fluid rounded-start shadow-lg"
                alt="..."
              />
            </div>
            <div className="col-md-7 mt-5">
              <div className="card-body mt-5">
                <h1 className="card-title ms-5 ">
                  Customize every aspect of your certificate with your brand
                  fonts and colors{" "}
                </h1>
                <p className="card-text p-2 ms-5">
                  You might want your certificate to match company or school
                  branding. If your certificate needs to be branded, the online
                  certificate maker will have your brand kit colors available in
                  the color picker tab at the top of the editor and your brand
                  fonts available at the top of the font menu.
                </p>
                <Link
                  to="/Login"
                  className="btn btn-outline-success btn-lg p-2 ms-5"
                >
                  Create Your Certificate
                </Link>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-center p-2">
          Select <span className="pcolor">Certificate</span> Template
        </h1>
        <br></br>
        <div className="row row-cols-1 row-cols-md-4 g-4 shadow-lg p-3 mb-5 bg-body-dark rounded">
          <div className="col">
            <div className="card h-100">
              <Link to="/Login">
                {" "}
                <img
                  src="Photography-768x531.jpeg"
                  className="card-img-top"
                />{" "}
              </Link>
              <div className="card-body">
                <h5 className="card-title">Photography</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <Link to="/Login">
                {" "}
                <img src="Group-dance.jpg" className="card-img-top" />{" "}
              </Link>
              <div className="card-body">
                <h5 className="card-title">Cultural</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <Link to="/Login">
                {" "}
                <img
                  src="LAN-Gamming-768x512.jpg"
                  className="card-img-top"
                />{" "}
              </Link>
              <div className="card-body">
                <h5 className="card-title">Gaming</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <Link to="/Login">
                {" "}
                <img
                  src="code_bebug-768x512.jpeg"
                  className="card-img-top"
                />{" "}
              </Link>
              <div className="card-body">
                <h5 className="card-title">Technical</h5>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <Link to="/Login">
                {" "}
                <img
                  src="sports-tools_53876-138077.avif"
                  className="card-img-top"
                />{" "}
              </Link>
              <div className="card-body">
                <h5 className="card-title">Sport</h5>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <Link to="/Login">
                {" "}
                <img
                  src="https://www.quizwitz.com/assets/img/generated/blog/2023-01-25/quiz-800-9a2766d14.png"
                  className="card-img-top"
                />{" "}
              </Link>
              <div className="card-body">
                <h5 className="card-title">Quiz</h5>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <Link to="/Login">
                {" "}
                <img
                  src="https://vmrw8k5h.tinifycdn.com/news/wp-content/uploads/2021/03/kelly-pash-texas--1024x683.jpg"
                  className="card-img-top"
                />{" "}
              </Link>
              <div className="card-body">
                <h5 className="card-title">Swimming</h5>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <Link to="/Login">
                {" "}
                <img
                  src=" https://www.commbox.io/wp-content/uploads/2023/12/Why-You-Should-Start-Building-Your-Hackathon-for-Support-Professionals-5-Tips-For-Running-Successful-Hackathons.jpeg"
                  className="card-img-top"
                />{" "}
              </Link>
              <div className="card-body">
                <h5 className="card-title">Hackathons</h5>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className="row ">
          <div className="col-md-7 mt-5">
            <div className="card-body mt-5">
              <h1 className="card-title ">
                Share Your <span className="pcolor"> Certificate </span>
              </h1>
              <p className="card-text p-2">
                Once you’ve completed your certificate design, it’s easy to
                share it with recipients. Download your certificate as a PDF
                with bleed marks to print off and hand out to people who have
                won or generate a shareable link to share with recipients
                online. You can also download as an image to send in emails or
                offer as a download upon course completion.
              </p>
              <Link to="/Login" className="btn btn-outline-success btn-lg p-2">
                Create Your Certificate
              </Link>
            </div>
          </div>
          <div className="col-md-5 ">
            <img
              src="https://www.visme.co/wp-content/uploads/2021/03/Certificate-maker-share.jpg"
              className="img-fluid rounded-start "
              alt="..."
            />
          </div>
        </div>
        <div className="shadow-lg mt-3">
          <h1 className="text-center pt-5">High Quality Templates</h1>
          <br />
          <p className="text-center">
            We don't have as many templates as some other tools, but the ones we
            have <br></br>
            look great and are in high quality vector format — download your
            certificates and print them at high resolutions.
          </p>{" "}
          <br />
          <br />
          <h1 className="text-center">No Design Skills Needed</h1>
          <br />
          <p className="text-center">
            If you're a professional in any field, this is the certificate tool
            for you.<br></br>
            No design skills needed to create stunning certificates of
            achievement or other documents that represent your awards and
            achievements.
          </p>{" "}
          <br />
          <br />
          <h1 className="text-center">Download for Free </h1>
          <br />
          <p className="text-center pb-4">
            The certificate maker tool is designed as a free way to quickly
            create and download <br></br>
            certificates for anything you want. Create PDFs on your computer,
            iPad or iPhone - wherever you are, and download them instantly.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-secondary">
        <p className="text-center text-light p-5 mb-0">
          Copyright © 2024 Privacy Policy Terms and Conditions
        </p>
      </div>
    </div>
  );
};

export default Navbar;
