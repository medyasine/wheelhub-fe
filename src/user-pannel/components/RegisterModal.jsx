import React from "react";

function RegisterModal() {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body p-4">
            <div className="row text-start justify-content-between align-items-center mb-2">
              <div className="col-auto">
                <h5 id="modalLabel">Register</h5>
              </div>
              <div className="col-auto">
                <p className="fs-10 text-600 mb-0">
                  Have an account?
                  <a href="authentication/simple/login.html">Login</a>
                </p>
              </div>
            </div>
            <form>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  autocomplete="on"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="email"
                  autocomplete="on"
                  placeholder="Email address"
                />
              </div>
              <div className="row gx-2">
                <div className="mb-3 col-sm-6">
                  <input
                    className="form-control"
                    type="password"
                    autocomplete="on"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3 col-sm-6">
                  <input
                    className="form-control"
                    type="password"
                    autocomplete="on"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="modal-register-checkbox"
                />
                <label className="form-label" for="modal-register-checkbox">
                  I accept the <a href="#!">terms </a>and
                  <a className="white-space-nowrap" href="#!">
                    privacy policy
                  </a>
                </label>
              </div>
              <div className="mb-3">
                <button
                  className="btn btn-primary d-block w-100 mt-3"
                  type="submit"
                  name="submit"
                >
                  Register
                </button>
              </div>
            </form>
            <div className="position-relative mt-4">
              <hr />
              <div className="divider-content-center">or register with</div>
            </div>
            <div className="row g-2 mt-2">
              <div className="col-sm-6">
                <a
                  className="btn btn-outline-google-plus btn-sm d-block w-100"
                  href="#"
                >
                  <span
                    className="fab fa-google-plus-g me-2"
                    data-fa-transform="grow-8"
                  ></span>
                  google
                </a>
              </div>
              <div className="col-sm-6">
                <a
                  className="btn btn-outline-facebook btn-sm d-block w-100"
                  href="#"
                >
                  <span
                    className="fab fa-facebook-square me-2"
                    data-fa-transform="grow-8"
                  ></span>
                  facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterModal;
