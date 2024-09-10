import React from "react";

function BandwidthSaved() {
  return (
    <div className="col-md-6 col-xxl-3 ps-md-2 order-xxl-1 mb-3 mb-xxl-0">
      <div className="card h-100">
        <div className="card-header bg-body-tertiary d-flex flex-between-center py-2">
          <h6 className="mb-0">Bandwidth Saved</h6>
          <div className="dropdown font-sans-serif btn-reveal-trigger">
            <button
              className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal"
              type="button"
              id="dropdown-bandwidth-saved"
              data-bs-toggle="dropdown"
              data-boundary="viewport"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="fas fa-ellipsis-h fs-11"></span>
            </button>
            <div
              className="dropdown-menu dropdown-menu-end border py-2"
              aria-labelledby="dropdown-bandwidth-saved"
            >
              <a className="dropdown-item" href="#!">
                View
              </a>
              <a className="dropdown-item" href="#!">
                Export
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item text-danger" href="#!">
                Remove
              </a>
            </div>
          </div>
        </div>
        <div className="card-body d-flex flex-center flex-column">
          {/* <!-- Find the JS file for the following chart at: src/js/charts/echarts/bandwidth-saved.js--><!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/theme.js--> */}
          <div
            className="echart-bandwidth-saved"
            data-echart-responsive="true"
          ></div>
          <div className="text-center mt-3">
            <h6 className="fs-9 mb-1">
              <span
                className="fas fa-check text-success me-1"
                data-fa-transform="shrink-2"
              ></span>
              35.75 GB saved
            </h6>
            <p className="fs-10 mb-0">38.44 GB total bandwidth</p>
          </div>
        </div>
        <div className="card-footer bg-body-tertiary py-2">
          <div className="row flex-between-center">
            <div className="col-auto">
              <select className="form-select form-select-sm">
                <option>Last 6 Months</option>
                <option>Last Year</option>
                <option>Last 2 Year</option>
              </select>
            </div>
            <div className="col-auto">
              <a className="fs-10 font-sans-serif" href="#!">
                Help
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BandwidthSaved;
