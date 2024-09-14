function TotalSales() {
  return (
    <div className="col-lg-6 ps-lg-2 mb-3">
      <div className="card h-lg-100">
        <div className="card-header">
          <div className="row flex-between-center">
            <div className="col-auto">
              <h6 className="mb-0">Total Sales</h6>
            </div>
            <div className="col-auto d-flex">
              <select className="form-select form-select-sm select-month me-2">
                <option value="0">January</option>
                <option value="1">February</option>
                <option value="2">March</option>
                <option value="3">April</option>
                <option value="4">May</option>
                <option value="5">Jun</option>
                <option value="6">July</option>
                <option value="7">August</option>
                <option value="8">September</option>
                <option value="9">October</option>
                <option value="10">November</option>
                <option value="11">December</option>
              </select>
              <div className="dropdown font-sans-serif btn-reveal-trigger">
                <button
                  className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal"
                  type="button"
                  id="dropdown-total-sales"
                  data-bs-toggle="dropdown"
                  data-boundary="viewport"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="fas fa-ellipsis-h fs-11"></span>
                </button>
                <div
                  className="dropdown-menu dropdown-menu-end border py-2"
                  aria-labelledby="dropdown-total-sales"
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
        <div className="card-body h-100 pe-0">
          {/* <!-- Find the JS file for the following chart at: src\js\charts\echarts\total-sales.js--><!-- If you are not using gulp based workflow, you can find the transpiled code at: public\assets\js\theme.js--> */}
          <div
            className="echart-line-total-sales h-100"
            data-echart-responsive="true"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default TotalSales;
