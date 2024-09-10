import React from "react";

function RegisterModal() {
  return (
    <div
      className="modal fade"
      id="authentication-modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="authentication-modal-label"
      aria-hidden="true"
    >
      <div className="modal-dialog mt-6" role="document">
        <div className="modal-content border-0">
          <div className="modal-header px-5 position-relative modal-shape-header bg-shape">
            <div className="position-relative z-1">
              <h4 className="mb-0 text-white" id="authentication-modal-label">
                Register
              </h4>
              <p className="fs-10 mb-0 text-white">
                Please create your free Falcon account
              </p>
            </div>
            <button
              className="btn-close position-absolute top-0 end-0 mt-2 me-2"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body py-4 px-5">
            <form>
              <div className="mb-3">
                <label className="form-label" for="modal-auth-name">
                  Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  autocomplete="on"
                  id="modal-auth-name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" for="modal-auth-email">
                  Email address
                </label>
                <input
                  className="form-control"
                  type="email"
                  autocomplete="on"
                  id="modal-auth-email"
                />
              </div>
              <div className="row gx-2">
                <div className="mb-3 col-sm-6">
                  <label className="form-label" for="modal-auth-password">
                    Password
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    autocomplete="on"
                    id="modal-auth-password"
                  />
                </div>
                <div className="mb-3 col-sm-6">
                  <label className="form-label" for="modal-auth-confirm-password">
                    Confirm Password
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    autocomplete="on"
                    id="modal-auth-confirm-password"
                  />
                </div>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="modal-auth-register-checkbox"
                />
                <label className="form-label" for="modal-auth-register-checkbox">
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
            <div className="position-relative mt-5">
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
