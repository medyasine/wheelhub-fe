import React from "react";

function BestSellingProducts() {
  return (
    <div className="col-lg-7 col-xl-8 pe-lg-2 mb-3">
      <div className="card h-lg-100 overflow-hidden">
        <div className="card-body p-0">
          <div className="table-responsive scrollbar">
            <table className="table table-dashboard mb-0 table-borderless fs-10 border-200">
              <thead className="bg-body-tertiary">
                <tr>
                  <th className="text-900">Best Selling Products</th>
                  <th className="text-900 text-end">Revenue ($3333)</th>
                  <th
                    className="text-900 pe-x1 text-end"
                    style={{ width: "8rem" }}
                  >
                    Revenue (%)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-bottom border-200">
                  <td>
                    <div className="d-flex align-items-center position-relative">
                      <img
                        className="rounded-1 border border-200"
                        src="./assets/img/products/12.png"
                        width="60"
                        alt=""
                      />
                      <div className="flex-1 ms-3">
                        <h6 className="mb-1 fw-semi-bold">
                          <a className="text-1100 stretched-link" href="#!">
                            Raven Pro
                          </a>
                        </h6>
                        <p className="fw-semi-bold mb-0 text-500">Landing</p>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle text-end fw-semi-bold">$1311</td>
                  <td className="align-middle pe-x1">
                    <div className="d-flex align-items-center">
                      <div
                        className="progress me-3 rounded-3 bg-200"
                        style={{ height: "5px", width: "80px" }}
                        role="progressbar"
                        aria-valuenow="39"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="progress-bar rounded-pill"
                          style={{ width: "39%" }}
                        ></div>
                      </div>
                      <div className="fw-semi-bold ms-2">39%</div>
                    </div>
                  </td>
                </tr>
                <tr className="border-bottom border-200">
                  <td>
                    <div className="d-flex align-items-center position-relative">
                      <img
                        className="rounded-1 border border-200"
                        src="./assets/img/products/10.png"
                        width="60"
                        alt=""
                      />
                      <div className="flex-1 ms-3">
                        <h6 className="mb-1 fw-semi-bold">
                          <a className="text-1100 stretched-link" href="#!">
                            Boots4
                          </a>
                        </h6>
                        <p className="fw-semi-bold mb-0 text-500">Portfolio</p>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle text-end fw-semi-bold">$860</td>
                  <td className="align-middle pe-x1">
                    <div className="d-flex align-items-center">
                      <div
                        className="progress me-3 rounded-3 bg-200"
                        style={{ height: "5px", width: "80px" }}
                        role="progressbar"
                        aria-valuenow="26"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="progress-bar rounded-pill"
                          style={{ width: "26%" }}
                        ></div>
                      </div>
                      <div className="fw-semi-bold ms-2">26%</div>
                    </div>
                  </td>
                </tr>
                <tr className="border-bottom border-200">
                  <td>
                    <div className="d-flex align-items-center position-relative">
                      <img
                        className="rounded-1 border border-200"
                        src="./assets/img/products/11.png"
                        width="60"
                        alt=""
                      />
                      <div className="flex-1 ms-3">
                        <h6 className="mb-1 fw-semi-bold">
                          <a className="text-1100 stretched-link" href="#!">
                            Falcon
                          </a>
                        </h6>
                        <p className="fw-semi-bold mb-0 text-500">Admin</p>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle text-end fw-semi-bold">$539</td>
                  <td className="align-middle pe-x1">
                    <div className="d-flex align-items-center">
                      <div
                        className="progress me-3 rounded-3 bg-200"
                        style={{ height: "5px", width: "80px" }}
                        role="progressbar"
                        aria-valuenow="16"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="progress-bar rounded-pill"
                          style={{ width: "16%" }}
                        ></div>
                      </div>
                      <div className="fw-semi-bold ms-2">16%</div>
                    </div>
                  </td>
                </tr>
                <tr className="border-bottom border-200">
                  <td>
                    <div className="d-flex align-items-center position-relative">
                      <img
                        className="rounded-1 border border-200"
                        src="./assets/img/products/14.png"
                        width="60"
                        alt=""
                      />
                      <div className="flex-1 ms-3">
                        <h6 className="mb-1 fw-semi-bold">
                          <a className="text-1100 stretched-link" href="#!">
                            Slick
                          </a>
                        </h6>
                        <p className="fw-semi-bold mb-0 text-500">Builder</p>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle text-end fw-semi-bold">$343</td>
                  <td className="align-middle pe-x1">
                    <div className="d-flex align-items-center">
                      <div
                        className="progress me-3 rounded-3 bg-200"
                        style={{ height: "5px", width: "80px" }}
                        role="progressbar"
                        aria-valuenow="10"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="progress-bar rounded-pill"
                          style={{ width: "10%" }}
                        ></div>
                      </div>
                      <div className="fw-semi-bold ms-2">10%</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center position-relative">
                      <img
                        className="rounded-1 border border-200"
                        src="./assets/img/products/13.png"
                        width="60"
                        alt=""
                      />
                      <div className="flex-1 ms-3">
                        <h6 className="mb-1 fw-semi-bold">
                          <a className="text-1100 stretched-link" href="#!">
                            Reign Pro
                          </a>
                        </h6>
                        <p className="fw-semi-bold mb-0 text-500">Agency</p>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle text-end fw-semi-bold">$280</td>
                  <td className="align-middle pe-x1">
                    <div className="d-flex align-items-center">
                      <div
                        className="progress me-3 rounded-3 bg-200"
                        style={{ height: "5px", width: "80px" }}
                        role="progressbar"
                        aria-valuenow="8"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="progress-bar rounded-pill"
                          style={{ width: "8%" }}
                        ></div>
                      </div>
                      <div className="fw-semi-bold ms-2">8%</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-footer bg-body-tertiary py-2">
          <div className="row flex-between-center">
            <div className="col-auto">
              <select className="form-select form-select-sm">
                <option>Last 7 days</option>
                <option>Last Month</option>
                <option>Last Year</option>
              </select>
            </div>
            <div className="col-auto">
              <a className="btn btn-sm btn-falcon-default" href="#!">
                View All
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSellingProducts;
