function Weather() {
  return (
    <div className="col-md-6 col-xxl-3">
      <div className="card h-md-100">
        <div className="card-header d-flex flex-between-center pb-0">
          <h6 className="mb-0">Weather</h6>
          <div className="dropdown font-sans-serif btn-reveal-trigger">
            <button
              className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal"
              type="button"
              id="dropdown-weather-update"
              data-bs-toggle="dropdown"
              data-boundary="viewport"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="fas fa-ellipsis-h fs-11"></span>
            </button>
            <div
              className="dropdown-menu dropdown-menu-end border py-2"
              aria-labelledby="dropdown-weather-update"
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
        <div className="card-body pt-2">
          <div className="row g-0 h-100 align-items-center">
            <div className="col">
              <div className="d-flex align-items-center">
                <img
                  className="me-3"
                  src="assets/img/icons/weather-icon.png"
                  alt=""
                  height="60"
                />
                <div>
                  <h6 className="mb-2">New York City</h6>
                  <div className="fs-11 fw-semi-bold">
                    <div className="text-warning">Sunny</div>Precipitation: 50%
                  </div>
                </div>
              </div>
            </div>
            <div className="col-auto text-center ps-2">
              <div className="fs-5 fw-normal font-sans-serif text-primary mb-1 lh-1">
                31&deg;
              </div>
              <div className="fs-10 text-800">32&deg; / 25&deg;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
