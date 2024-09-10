import React from "react";

function SearchDropDown() {
  return (
    <div className="dropdown-menu border font-base start-0 mt-2 py-0 overflow-hidden w-100">
      <div className="scrollbar list py-3" style={{ "max-height": "24rem" }}>
        <h6 className="dropdown-header fw-medium text-uppercase px-x1 fs-11 pt-0 pb-2">
          Recently Browsed
        </h6>
        <a
          className="dropdown-item fs-10 px-x1 py-1 hover-primary"
          href="app/events/event-detail.html"
        >
          <div className="d-flex align-items-center">
            <span className="fas fa-circle me-2 text-300 fs-11"></span>
            <div className="fw-normal title">
              Pages
              <span
                className="fas fa-chevron-right mx-1 text-500 fs-11"
                data-fa-transform="shrink-2"
              ></span>
              Events
            </div>
          </div>
        </a>
        <a
          className="dropdown-item fs-10 px-x1 py-1 hover-primary"
          href="app/e-commerce/customers.html"
        >
          <div className="d-flex align-items-center">
            <span className="fas fa-circle me-2 text-300 fs-11"></span>
            <div className="fw-normal title">
              E-commerce
              <span
                className="fas fa-chevron-right mx-1 text-500 fs-11"
                data-fa-transform="shrink-2"
              ></span>
              Customers
            </div>
          </div>
        </a>
        <hr className="text-200 dark__text-900" />
        <h6 className="dropdown-header fw-medium text-uppercase px-x1 fs-11 pt-0 pb-2">
          Suggested Filter
        </h6>
        <a
          className="dropdown-item px-x1 py-1 fs-9"
          href="app/e-commerce/customers.html"
        >
          <div className="d-flex align-items-center">
            <span className="badge fw-medium text-decoration-none me-2 badge-subtle-warning">
              customers:
            </span>
            <div className="flex-1 fs-10 title">All customers list</div>
          </div>
        </a>
        <a
          className="dropdown-item px-x1 py-1 fs-9"
          href="app/events/event-detail.html"
        >
          <div className="d-flex align-items-center">
            <span className="badge fw-medium text-decoration-none me-2 badge-subtle-success">
              events:
            </span>
            <div className="flex-1 fs-10 title">
              Latest events in current month
            </div>
          </div>
        </a>
        <a
          className="dropdown-item px-x1 py-1 fs-9"
          href="app/e-commerce/product/product-grid.html"
        >
          <div className="d-flex align-items-center">
            <span className="badge fw-medium text-decoration-none me-2 badge-subtle-info">
              products:
            </span>
            <div className="flex-1 fs-10 title">Most popular products</div>
          </div>
        </a>
        <hr className="text-200 dark__text-900" />
        <h6 className="dropdown-header fw-medium text-uppercase px-x1 fs-11 pt-0 pb-2">
          Files
        </h6>
        <a className="dropdown-item px-x1 py-2" href="#!">
          <div className="d-flex align-items-center">
            <div className="file-thumbnail me-2">
              <img
                className="border h-100 w-100 object-fit-cover rounded-3"
                src="./assets/img/products/3-thumb.png"
                alt=""
              />
            </div>
            <div className="flex-1">
              <h6 className="mb-0 title">iPhone</h6>
              <p className="fs-11 mb-0 d-flex">
                <span className="fw-semi-bold">Antony</span>
                <span className="fw-medium text-600 ms-2">
                  27 Sep at 10:30 AM
                </span>
              </p>
            </div>
          </div>
        </a>
        <a className="dropdown-item px-x1 py-2" href="#!">
          <div className="d-flex align-items-center">
            <div className="file-thumbnail me-2">
              <img
                className="img-fluid"
                src="./assets/img/icons/zip.png"
                alt=""
              />
            </div>
            <div className="flex-1">
              <h6 className="mb-0 title">Falcon v1.8.2</h6>
              <p className="fs-11 mb-0 d-flex">
                <span className="fw-semi-bold">John</span>
                <span className="fw-medium text-600 ms-2">
                  30 Sep at 12:30 PM
                </span>
              </p>
            </div>
          </div>
        </a>
        <hr className="text-200 dark__text-900" />
        <h6 className="dropdown-header fw-medium text-uppercase px-x1 fs-11 pt-0 pb-2">
          Members
        </h6>
        <a className="dropdown-item px-x1 py-2" href="pages/user/profile.html">
          <div className="d-flex align-items-center">
            <div className="avatar avatar-l status-online me-2">
              <img
                className="rounded-circle"
                src="./assets/img/team/1.jpg"
                alt=""
              />
            </div>
            <div className="flex-1">
              <h6 className="mb-0 title">Anna Karinina</h6>
              <p className="fs-11 mb-0 d-flex">Technext Limited</p>
            </div>
          </div>
        </a>
        <a className="dropdown-item px-x1 py-2" href="pages/user/profile.html">
          <div className="d-flex align-items-center">
            <div className="avatar avatar-l me-2">
              <img
                className="rounded-circle"
                src="./assets/img/team/2.jpg"
                alt=""
              />
            </div>
            <div className="flex-1">
              <h6 className="mb-0 title">Antony Hopkins</h6>
              <p className="fs-11 mb-0 d-flex">Brain Trust</p>
            </div>
          </div>
        </a>
        <a className="dropdown-item px-x1 py-2" href="pages/user/profile.html">
          <div className="d-flex align-items-center">
            <div className="avatar avatar-l me-2">
              <img
                className="rounded-circle"
                src="./assets/img/team/3.jpg"
                alt=""
              />
            </div>
            <div className="flex-1">
              <h6 className="mb-0 title">Emma Watson</h6>
              <p className="fs-11 mb-0 d-flex">Google</p>
            </div>
          </div>
        </a>
      </div>
      <div className="text-center mt-n3">
        <p className="fallback fw-bold fs-8 d-none">No Result Found.</p>
      </div>
    </div>
  );
}

export default SearchDropDown;
