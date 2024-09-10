import React from "react";

function TopProducts() {
  return (
    <div className="col-xxl-6 px-xxl-2">
      <div className="card h-100">
        <div className="card-header bg-body-tertiary py-2">
          <div className="row flex-between-center">
            <div className="col-auto">
              <h6 className="mb-0">Top Products</h6>
            </div>
            <div className="col-auto d-flex">
              <a className="btn btn-link btn-sm me-2" href="#!">
                View Details
              </a>
              <div className="dropdown font-sans-serif btn-reveal-trigger">
                <button
                  className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal"
                  type="button"
                  id="dropdown-top-products"
                  data-bs-toggle="dropdown"
                  data-boundary="viewport"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="fas fa-ellipsis-h fs-11"></span>
                </button>
                <div
                  className="dropdown-menu dropdown-menu-end border py-2"
                  aria-labelledby="dropdown-top-products"
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
          </div>
        </div>
        <div className="card-body h-100">
          {/* <!-- Find the JS file for the following chart at: src/js/charts/echarts/top-products.js--><!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/theme.js--> */}
          <div
            className="echart-bar-top-products h-100"
            data-echart-responsive="true"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default TopProducts;
