import React from "react";
import landingBackground from "../../img/restaurant_background.jpg";

const Landing = () => {
  const onLoginSubmit = async e => {
    e.preventDefault();
  };

  const onRegisterSubmit = async e => {
    e.preventDefault();
  };
  return (
    <section className="landing">
      <div className="landing-info">
        <div className="card home text-center card-form">
          <div className="card-body">
            <ul className="nav nav-tabs md-tabs tabs-2 darken-3" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
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
                  className="nav-link"
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
                <p className="mt-4 mb-4">Log into your account</p>
                <form
                  className="md-form form-sm"
                  onSubmit={e => onLoginSubmit(e)}
                >
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
                <p className="mt-4 mb-4">
                  Please fill out this form to register
                </p>
                <form
                  className="md-form form-sm"
                  onSubmit={e => onRegisterSubmit(e)}
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
                      name="password2"
                      type="password"
                      placeholder="Confirm Password"
                      className="form-control form-control-lg my-2"
                    />
                    <label for="jobPositionSelect" className="jobPositionLabel">
                      Choose Your Job Position
                    </label>
                    <select
                      name="jobPosition"
                      id="jobPositionSelect"
                      className="form-control form-control-lg my-2"
                      required
                    >
                      <option value="">Please choose an option</option>
                      <option value="server">Server</option>
                      <option value="bartender">Bartender</option>
                      <option value="packer">Packer</option>
                      <option value="cook">Cook</option>
                      <option value="dishwasher">Dishwasher</option>
                      <option value="host">Host/Hostess</option>
                      <option value="manager">Manager</option>
                    </select>
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
