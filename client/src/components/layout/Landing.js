import React from "react";
import landingBackground from "../../img/restaurant_background.jpg";

const Landing = () => {
  return (
    <section className="landing">
      <div className="landing-info">
        {/* <Tab.Container className="loginForm">
          <Row>
            <Col>
              <Nav>
                <Nav.Item>

                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Tab.Container> */}
        <div class="card home text-center card-form">
          <div class="card-body">
            <ul class="nav nav-tabs md-tabs tabs-2 darken-3" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active text-dark"
                  data-toggle="tab"
                  href="#panel7"
                  role="tab"
                >
                  <i class="fas fa-user mr-1"></i>
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-dark"
                  data-toggle="tab"
                  href="#panel8"
                  role="tab"
                >
                  <i class="fas fa-user-plus mr-1"></i>
                  Register
                </a>
              </li>
            </ul>
            <div class="tab-content">
              <div
                class="tab-pane fade in show active"
                id="panel7"
                role="tabpanel"
              >
                <h3 class="mt-3">Welcome Back</h3>
                <p>Log into your account</p>
                <form action="/" method="POST" class="md-form form-sm">
                  <input
                    required
                    type="text"
                    name="username"
                    placeholder="Email"
                    class="form-control form-control-lg my-2"
                  />
                  <input
                    required
                    name="password"
                    type="password"
                    placeholder="Password"
                    class="form-control form-control-lg my-2"
                  />
                  <input
                    type="submit"
                    value="Log In"
                    class="btn btn-outline-light btn-block mt-4"
                  />
                </form>
              </div>
              <div class="tab-pane fade" id="panel8" role="tabpanel">
                <h3 class="mt-3">Sign Up Today</h3>
                <p>Please fill out this form to register</p>
                <form action="/signup" method="POST" class="md-form form-sm">
                  <div class="form-group">
                    <input
                      required
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      class="form-control form-control-lg my-2"
                    />
                    <input
                      required
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      class="form-control form-control-lg my-2"
                    />
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Email"
                      class="form-control form-control-lg my-2"
                    />
                    <input
                      required
                      name="password"
                      type="password"
                      placeholder="Password"
                      class="form-control form-control-lg my-2"
                    />
                    <input
                      required
                      type="text"
                      name="phoneNumber"
                      placeholder="Mobile Number"
                      class="form-control form-control-lg my-2"
                    />
                    <input
                      type="submit"
                      value="Register"
                      data-toggle="modal"
                      data-target="#TermsAndAgreement"
                      class="btn btn-outline-light btn-block mt-4"
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
