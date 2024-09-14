function WeeklySales() {
  return (
    <div className="col-md-6 col-xxl-3">
      <div className="card h-md-100 ecommerce-card-min-width">
        <div className="card-header pb-0">
          <h6 className="mb-0 mt-2 d-flex align-items-center">
            Weekly Sales
            <span
              className="ms-1 text-400"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Calculated according to last week's sales"
            >
              <span
                className="far fa-question-circle"
                data-fa-transform="shrink-1"
              ></span>
            </span>
          </h6>
        </div>
        <div className="card-body d-flex flex-column justify-content-end">
          <div className="row">
            <div className="col">
              <p className="font-sans-serif lh-1 mb-1 fs-5">$47K</p>
              <span className="badge badge-subtle-success rounded-pill fs-11">
                +3.5%
              </span>
            </div>
            <div className="col-auto ps-0">
              <div className="echart-bar-weekly-sales h-100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeeklySales;
