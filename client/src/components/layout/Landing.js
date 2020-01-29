import React from "react";
import landingBackground from "../../img/restaurant_background.jpg";

const Landing = () => {
  return (
    <section className="landing">
      <div className="landing-info">
        <div className="card home text-center card-form">
          <div className="card-body">
            <ul className="nav nav-tabs md-tabs tabs-2 darken-3" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active text-dark"
                  data-toggle="tab"
                  href="#login"
                  role="tab"
                >
                  <i className="fas fa-user mr-1"></i>
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark"
                  data-toggle="tab"
                  href="#register"
                  role="tab"
                >
                  <i className="fas fa-user-plus mr-1"></i>
                  Register
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className="tab-pane fade in show active"
                id="login"
                role="tabpanel"
              >
                <h3 className="mt-3">Welcome Back</h3>
                <p className="mt-3 mb-3">Log into your account</p>
                <form action="/" method="POST" className="md-form form-sm">
                  <input
                    required
                    type="text"
                    name="username"
                    placeholder="Email"
                    className="form-control form-control-lg my-2"
                  />
                  <input
                    required
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="form-control form-control-lg my-2"
                  />
                  <input
                    type="submit"
                    value="Log In"
                    className="btn btn-outline-light btn-block mt-4"
                  />
                </form>
              </div>
              <div className="tab-pane fade" id="register" role="tabpanel">
                <h3 className="mt-3">Sign Up Today</h3>
                <p className="mt-3 mb-3">
                  Please fill out this form to register
                </p>
                <form
                  action="/signup"
                  method="POST"
                  className="md-form form-sm"
                >
                  <div className="form-group">
                    <input
                      required
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="form-control form-control-lg my-2"
                    />
                    <input
                      required
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className="form-control form-control-lg my-2"
                    />
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control form-control-lg my-2"
                    />
                    <input
                      required
                      name="password"
                      type="password"
                      placeholder="Password"
                      className="form-control form-control-lg my-2"
                    />
                    <input
                      required
                      type="text"
                      name="phoneNumber"
                      placeholder="Mobile Number"
                      className="form-control form-control-lg my-2"
                    />
                    <input
                      type="submit"
                      value="Register"
                      data-toggle="modal"
                      data-target="#TermsAndAgreement"
                      className="btn btn-outline-light btn-block mt-4"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="landing-background">
        <img
          src={landingBackground}
          alt="Logo Background"
          className="landing-background-img"
        />
      </div>
    </section>
  );
};

export default Landing;
