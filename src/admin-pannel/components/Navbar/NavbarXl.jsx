import React, { useEffect } from "react";

function NavbarXl() {
  useEffect(() => {
    // Equivalent of the script tag logic
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
              src="./assets/img/icons/spot-illustrations/falcon.png"
              alt=""
              width="40"
            />
            <span className="font-sans-serif text-primary">falcon</span>
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
                  <a className="nav-link active" href="index.html">
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Default</span>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <div className="row navbar-vertical-label-wrapper mt-3 mb-2">
                <div className="col-auto navbar-vertical-label">App</div>
                <div className="col ps-0">
                  <hr className="mb-0 navbar-vertical-divider" />
                </div>
              </div>
              <a className="nav-link" href="app/calendar.html" role="button">
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    <span className="fas fa-calendar-alt"></span>
                  </span>
                  <span className="nav-link-text ps-1">Calendar</span>
                </div>
              </a>
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
                    <span className="fas fa-graduation-cap"></span>
                  </span>
                  <span className="nav-link-text ps-1">E learning</span>
                  <span className="badge rounded-pill ms-2 badge-subtle-success">
                    New
                  </span>
                </div>
              </a>
              <ul className="nav collapse" id="e-learning">
                <li className="nav-item">
                  <a
                    className="nav-link dropdown-indicator"
                    href="#course"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="e-learning"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Course</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="course">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="app/e-learning/course/course-list.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Course list
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="app/e-learning/student-overview.html"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">
                        Student overview
                      </span>
                    </div>
                  </a>
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
