function FilterPannel() {
  return (
    <div className="col-xxl-2 col-xl-3">
      <div
        className="offcanvas offcanvas-end offcanvas-filter-sidebar border-0 dark__bg-card-dark h-auto rounded-xl-3"
        tabIndex="-1"
        id="ticketOffcanvas"
        aria-labelledby="ticketOffcanvasLabel"
      >
        <div className="offcanvas-header d-flex flex-between-center d-xl-none bg-body-tertiary">
          <h6 className="fs-9 mb-0 fw-semi-bold">Filter</h6>
          <button
            className="btn-close text-reset d-xl-none shadow-none"
            id="ticketOffcanvasLabel"
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="card scrollbar shadow-none shadow-show-xl">
          <div className="card-header bg-body-tertiary d-none d-xl-block">
            <h6 className="mb-0">Filter</h6>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-2 mt-n2">
                <label className="mb-1">Priority</label>
                <select className="form-select form-select-sm">
                  <option>None</option>
                  <option>Urgent</option>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </div>
              <div className="mb-2">
                <label className="mb-1 mt-2">Source</label>
                <select className="form-select form-select-sm">
                  <option>None</option>
                  <option>Email</option>
                  <option>Phone</option>
                  <option>Forum</option>
                  <option selected="selected">Facebook</option>
                </select>
              </div>
            </form>
          </div>
          <div className="card-footer border-top border-200 py-x1">
            <button className="btn btn-primary w-100">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterPannel;
