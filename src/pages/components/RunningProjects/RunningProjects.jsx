import React from "react";

function RunningProjects() {
  return (
    <div className="col-lg-6 pe-lg-2 mb-3">
      <div className="card h-lg-100 overflow-hidden">
        <div className="card-header bg-body-tertiary">
          <div className="row align-items-center">
            <div className="col">
              <h6 className="mb-0">Running Projects</h6>
            </div>
            <div className="col-auto text-center pe-x1">
              <select className="form-select form-select-sm">
                <option>Working Time</option>
                <option>Estimated Time</option>
                <option>Billable Time</option>
              </select>
            </div>
          </div>
        </div>
        <div className="card-body p-0">
          <div className="row g-0 align-items-center py-2 position-relative border-bottom border-200">
            <div className="col ps-x1 py-1 position-static">
              <div className="d-flex align-items-center">
                <div className="avatar avatar-xl me-3">
                  <div className="avatar-name rounded-circle bg-primary-subtle text-dark">
                    <span className="fs-9 text-primary">F</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h6 className="mb-0 d-flex align-items-center">
                    <a className="text-800 stretched-link" href="#!">
                      Falcon
                    </a>
                    <span className="badge rounded-pill ms-2 bg-200 text-primary">
                      38%
                    </span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col py-1">
              <div className="row flex-end-center g-0">
                <div className="col-auto pe-2">
                  <div className="fs-10 fw-semi-bold">12:50:00</div>
                </div>
                <div className="col-5 pe-x1 ps-2">
                  <div
                    className="progress bg-200 me-2"
                    style={{ height: "5px" }}
                    role="progressbar"
                    aria-valuenow="38"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar rounded-pill"
                      style={{ width: "38%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-0 align-items-center py-2 position-relative border-bottom border-200">
            <div className="col ps-x1 py-1 position-static">
              <div className="d-flex align-items-center">
                <div className="avatar avatar-xl me-3">
                  <div className="avatar-name rounded-circle bg-success-subtle text-dark">
                    <span className="fs-9 text-success">R</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h6 className="mb-0 d-flex align-items-center">
                    <a className="text-800 stretched-link" href="#!">
                      Reign
                    </a>
                    <span className="badge rounded-pill ms-2 bg-200 text-primary">
                      79%
                    </span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col py-1">
              <div className="row flex-end-center g-0">
                <div className="col-auto pe-2">
                  <div className="fs-10 fw-semi-bold">25:20:00</div>
                </div>
                <div className="col-5 pe-x1 ps-2">
                  <div
                    className="progress bg-200 me-2"
                    style={{ height: "5px" }}
                    role="progressbar"
                    aria-valuenow="79"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar rounded-pill"
                      style={{ width: "79%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-0 align-items-center py-2 position-relative border-bottom border-200">
            <div className="col ps-x1 py-1 position-static">
              <div className="d-flex align-items-center">
                <div className="avatar avatar-xl me-3">
                  <div className="avatar-name rounded-circle bg-info-subtle text-dark">
                    <span className="fs-9 text-info">B</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h6 className="mb-0 d-flex align-items-center">
                    <a className="text-800 stretched-link" href="#!">
                      Boots4
                    </a>
                    <span className="badge rounded-pill ms-2 bg-200 text-primary">
                      90%
                    </span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col py-1">
              <div className="row flex-end-center g-0">
                <div className="col-auto pe-2">
                  <div className="fs-10 fw-semi-bold">58:20:00</div>
                </div>
                <div className="col-5 pe-x1 ps-2">
                  <div
                    className="progress bg-200 me-2"
                    style={{ height: "5px" }}
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar rounded-pill"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-0 align-items-center py-2 position-relative border-bottom border-200">
            <div className="col ps-x1 py-1 position-static">
              <div className="d-flex align-items-center">
                <div className="avatar avatar-xl me-3">
                  <div className="avatar-name rounded-circle bg-warning-subtle text-dark">
                    <span className="fs-9 text-warning">R</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h6 className="mb-0 d-flex align-items-center">
                    <a className="text-800 stretched-link" href="#!">
                      Raven
                    </a>
                    <span className="badge rounded-pill ms-2 bg-200 text-primary">
                      40%
                    </span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col py-1">
              <div className="row flex-end-center g-0">
                <div className="col-auto pe-2">
                  <div className="fs-10 fw-semi-bold">21:20:00</div>
                </div>
                <div className="col-5 pe-x1 ps-2">
                  <div
                    className="progress bg-200 me-2"
                    style={{ height: "5px" }}
                    role="progressbar"
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar rounded-pill"
                      style={{ width: "40%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-0 align-items-center py-2 position-relative">
            <div className="col ps-x1 py-1 position-static">
              <div className="d-flex align-items-center">
                <div className="avatar avatar-xl me-3">
                  <div className="avatar-name rounded-circle bg-danger-subtle text-dark">
                    <span className="fs-9 text-danger">S</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h6 className="mb-0 d-flex align-items-center">
                    <a className="text-800 stretched-link" href="#!">
                      Slick
                    </a>
                    <span className="badge rounded-pill ms-2 bg-200 text-primary">
                      70%
                    </span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col py-1">
              <div className="row flex-end-center g-0">
                <div className="col-auto pe-2">
                  <div className="fs-10 fw-semi-bold">31:20:00</div>
                </div>
                <div className="col-5 pe-x1 ps-2">
                  <div
                    className="progress bg-200 me-2"
                    style={{ height: "5px" }}
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar rounded-pill"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer bg-body-tertiary p-0">
          <a className="btn btn-sm btn-link d-block w-100 py-2" href="#!">
            Show all projects
            <span className="fas fa-chevron-right ms-1 fs-11"></span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default RunningProjects;
