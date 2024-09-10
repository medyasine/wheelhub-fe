import React from "react";
import ThemeDropDown from "../admin-pannel/components/ThemeDropDown";
import LoginDropDown from "./LoginDropDown";

function Header() {
  return (
    <nav
      className="navbar navbar-standard navbar-expand-lg fixed-top navbar-dark"
      data-navbar-darken-on-scroll="data-navbar-darken-on-scroll"
    >
      <div className="container">
        <a className="navbar-brand" href="../index.html">
          <span className="text-white dark__text-white">Falcon</span>
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarStandard"
          aria-controls="navbarStandard"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse scrollbar" id="navbarStandard">
          <ul
            className="navbar-nav"
            data-top-nav-dropdowns="data-top-nav-dropdowns"
          >
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                id="dashboards"
              >
                Dashboard
              </a>
              <div
                className="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0"
                aria-labelledby="dashboards"
              >
                <div className="bg-white dark__bg-1000 rounded-3 py-2">
                  <a
                    className="dropdown-item link-600 fw-medium"
                    href="../index.html"
                  >
                    Default
                  </a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                id="apps"
              >
                App
              </a>
              <div
                className="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0"
                aria-labelledby="apps"
              >
                <div className="card navbar-card-app shadow-none dark__bg-1000">
                  <div className="card-body scrollbar max-h-dropdown">
                    <img
                      className="img-dropdown"
                      src="../assets/img/icons/spot-illustrations/authentication-corner.png"
                      width="130"
                      alt=""
                    />
                    <div className="row">
                      <div className="col-6 col-md-4">
                        <div className="nav flex-column">
                          <a
                            className="nav-link py-1 link-600 fw-medium"
                            href="../app/calendar.html"
                          >
                            Calendar
                          </a>
                          <p className="nav-link text-700 mb-0 fw-bold">
                            Social
                          </p>
                          <a
                            className="nav-link py-1 link-600 fw-medium"
                            href="../app/social/feed.html"
                          >
                            Feed
                          </a>
                          <p className="nav-link text-700 mb-0 fw-bold">
                            Support Desk
                          </p>
                          <a
                            className="nav-link py-1 link-600 fw-medium"
                            href="../app/support-desk/table-view.html"
                          >
                            Table view
                          </a>
                        </div>
                      </div>
                      <div className="col-6 col-md-4">
                        <div className="nav flex-column">
                          <p className="nav-link text-700 mb-0 fw-bold">
                            E-Learning
                          </p>
                          <a
                            className="nav-link py-1 link-600 fw-medium"
                            href="../app/e-learning/course/course-list.html"
                          >
                            Course list
                          </a>
                          <p className="nav-link text-700 mb-0 fw-bold">
                            Events
                          </p>
                          <a
                            className="nav-link py-1 link-600 fw-medium"
                            href="../app/events/create-an-event.html"
                          >
                            Create an event
                          </a>
                          <p className="nav-link text-700 mb-0 fw-bold">
                            Email
                          </p>
                          <a
                            className="nav-link py-1 link-600 fw-medium"
                            href="../app/email/inbox.html"
                          >
                            Inbox
                          </a>
                        </div>
                      </div>
                      <div className="col-6 col-md-4">
                        <div className="nav flex-column">
                          <p className="nav-link text-700 mb-0 fw-bold">
                            E-Commerce
                          </p>
                          <a
                            className="nav-link py-1 link-600 fw-medium"
                            href="../app/e-commerce/product/product-list.html"
                          >
                            Product list
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <ThemeDropDown />
            <LoginDropDown />
            <li className="nav-item">
              <a
                className="nav-link"
                href="#!"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
