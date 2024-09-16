import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function NavbarXl() {
  useEffect(() => {
    const navbarStyle = localStorage.getItem("navbarStyle");
    if (navbarStyle && navbarStyle !== "transparent") {
      const navbar = document.querySelector(".navbar-vertical");
      if (navbar) {
        navbar.classNameList.add(`navbar-${navbarStyle}`);
      }
    }
  }, []);

  return (
    <nav
      className="navbar navbar-light navbar-vertical navbar-expand-xl"
      style={{ display: "none" }}
    >
      <div className="d-flex align-items-center">
        <div className="toggle-icon-wrapper">
          <button
            className="btn navbar-toggler-humburger-icon navbar-vertical-toggle"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            title="Toggle Navigation"
          >
            <span className="navbar-toggle-icon">
              <span className="toggle-line"></span>
            </span>
          </button>
        </div>
        <a className="navbar-brand" href="index.html">
          <div className="d-flex align-items-center py-3">
            <img
              className="me-2"
              src="/assets/img/icons/spot-illustrations/falcon.png"
              alt=""
              width="30"
            />
            <span className="font-sans-serif text-primary">wheelhub</span>
          </div>
        </a>
      </div>
      <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
        <div className="navbar-vertical-content scrollbar">
          <ul className="navbar-nav flex-column mb-3" id="navbarVerticalNav">
            <li className="nav-item">
              <a
                className="nav-link dropdown-indicator"
                href="#dashboard"
                role="button"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="dashboard"
              >
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    <span className="fas fa-chart-pie"></span>
                  </span>
                  <span className="nav-link-text ps-1">Dashboard</span>
                </div>
              </a>
              <ul className="nav collapse show" id="dashboard">
                <li className="nav-item">
                  <Link className="nav-link active" to="">
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Default</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <div className="row navbar-vertical-label-wrapper mt-3 mb-2">
                <div className="col-auto navbar-vertical-label">Management</div>
                <div className="col ps-0">
                  <hr className="mb-0 navbar-vertical-divider" />
                </div>
              </div>
              <a
                className="nav-link dropdown-indicator"
                href="#users"
                role="button"
                data-bs-toggle="collapse"
                aria-expanded="false"
                aria-controls="users"
              >
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    <span className="fas fa-users"></span>
                  </span>
                  <span className="nav-link-text ps-1">Users</span>
                </div>
              </a>
              <ul className="nav collapse" id="users">
                <li className="nav-item">
                  <Link className="nav-link" to="users">
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">All</span>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="users/create">
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Add a vehicle</span>
                    </div>
                  </Link>
                </li>
              </ul>
              <a
                className="nav-link dropdown-indicator"
                href="#e-learning"
                role="button"
                data-bs-toggle="collapse"
                aria-expanded="false"
                aria-controls="e-learning"
              >
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    <span className="fas fa-car"></span>
                  </span>
                  <span className="nav-link-text ps-1">Vehicles</span>
                </div>
              </a>
              <ul className="nav collapse" id="e-learning">
                <li className="nav-item">
                  <Link className="nav-link" to="vehicles">
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">All</span>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="vehicles">
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Add a vehicle</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarXl;
