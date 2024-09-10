import React from "react";
import ThemeDropDown from "../ThemeDropDown";
import Notifications from "../Notifications";
import DotsDropDown from "../DotsDropDown";
import ProfileDropDown from "../ProfileDropDown";

function NavbarDataContent() {
  return (
    <nav
      className="navbar navbar-light navbar-glass navbar-top navbar-expand-lg"
      style={{ display: "none" }}
      data-move-target="#navbarVerticalNav"
      data-navbar-top="combo"
    >
      <button
        className="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarVerticalCollapse"
        aria-controls="navbarVerticalCollapse"
        aria-expanded="false"
        aria-label="Toggle Navigation"
      >
        <span className="navbar-toggle-icon">
          <span className="toggle-line"></span>
        </span>
      </button>
      <a className="navbar-brand me-1 me-sm-3" href="index.html">
        <div className="d-flex align-items-center">
          <img
            className="me-2"
            src="./assets/img/icons/spot-illustrations/falcon.png"
            alt=""
            width="40"
          />
          <span className="font-sans-serif text-primary">falcon</span>
        </div>
      </a>
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
                  href="index.html"
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
                    src="./assets/img/icons/spot-illustrations/authentication-corner.png"
                    width="130"
                    alt=""
                  />
                  <div className="row">
                    <div className="col-6 col-md-4">
                      <div className="nav flex-column">
                        <a
                          className="nav-link py-1 link-600 fw-medium"
                          href="app/calendar.html"
                        >
                          Calendar
                        </a>
                        <p className="nav-link text-700 mb-0 fw-bold">
                          Support Desk
                        </p>
                        <a
                          className="nav-link py-1 link-600 fw-medium"
                          href="app/support-desk/table-view.html"
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
                          href="app/e-learning/course/course-list.html"
                        >
                          Course list
                        </a>
                        <p className="nav-link text-700 mb-0 fw-bold">Email</p>
                        <a
                          className="nav-link py-1 link-600 fw-medium"
                          href="app/email/inbox.html"
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
                          href="app/e-commerce/product/product-list.html"
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
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              id="pagess"
            >
              Pages
            </a>
            <div
              className="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0"
              aria-labelledby="pagess"
            >
              <div className="card navbar-card-pages shadow-none dark__bg-1000">
                <div className="card-body scrollbar max-h-dropdown">
                  <img
                    className="img-dropdown"
                    src="./assets/img/icons/spot-illustrations/authentication-corner.png"
                    width="130"
                    alt=""
                  />
                  <div className="row">
                    <div className="col-6 col-xxl-3">
                      <div className="nav flex-column">
                        <p className="nav-link text-700 mb-0 fw-bold">
                          Simple Auth
                        </p>
                        <a
                          className="nav-link py-1 link-600 fw-medium"
                          href="pages/authentication/simple/login.html"
                        >
                          Login
                        </a>
                      </div>
                    </div>
                    <div className="col-6 col-xxl-3">
                      <div className="nav flex-column">
                        <p className="nav-link text-700 mb-0 fw-bold">
                          Card Auth
                        </p>
                        <a
                          className="nav-link py-1 link-600 fw-medium"
                          href="pages/authentication/card/login.html"
                        >
                          Login
                        </a>
                      </div>
                    </div>
                    <div className="col-6 col-xxl-3">
                      <div className="nav flex-column">
                        <p className="nav-link text-700 mb-0 fw-bold">
                          Split Auth
                        </p>
                        <a
                          className="nav-link py-1 link-600 fw-medium"
                          href="pages/authentication/split/login.html"
                        >
                          Login
                        </a>
                      </div>
                    </div>
                    <div className="col-6 col-xxl-3">
                      <div className="nav flex-column">
                        <p className="nav-link text-700 mb-0 fw-bold">
                          Layouts
                        </p>
                        <a
                          className="nav-link py-1 link-600 fw-medium"
                          href="demo/navbar-vertical.html"
                        >
                          Navbar vertical
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6 col-xxl-3">
                      <div className="nav flex-column">
                        <p className="nav-link text-700 mb-0 fw-bold">User</p>
                        <a
                          className="nav-link py-1 link-600 fw-medium"
                          href="pages/user/profile.html"
                        >
                          Profile
                        </a>
                      </div>
                    </div>
                    <div className="col-6 col-xxl-3">
                      <div className="nav flex-column">
                        <p className="nav-link text-700 mb-0 fw-bold">
                          Pricing
                        </p>
                        <a
                          className="nav-link py-1 link-600 fw-medium"
                          href="pages/pricing/pricing-default.html"
                        >
                          Pricing default
                        </a>
                      </div>
                    </div>
                    <div className="col-6 col-xxl-3">
                      <div className="nav flex-column">
                        <p className="nav-link text-700 mb-0 fw-bold">Errors</p>
                        <a
                          className="nav-link py-1 link-600 fw-medium"
                          href="pages/errors/404.html"
                        >
                          404
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6 col-xxl-3">
                      <div className="nav flex-column">
                        <p className="nav-link text-700 mb-0 fw-bold">
                          Miscellaneous
                        </p>
                        <a
                          className="nav-link py-1 link-600 fw-medium"
                          href="pages/miscellaneous/associations.html"
                        >
                          Associations
                        </a>
                      </div>
                    </div>
                    <div className="col-6 col-xxl-3">
                      <div className="nav flex-column">
                        <p className="nav-link text-700 mb-0 fw-bold">FAQ</p>
                        <a
                          className="nav-link py-1 link-600 fw-medium"
                          href="pages/faq/faq-basic.html"
                        >
                          Faq basic
                        </a>
                      </div>
                    </div>
                    <div className="col-6 col-xxl-3">
                      <div className="nav flex-column">
                        <p className="nav-link text-700 mb-0 fw-bold">
                          Other Auth
                        </p>
                        <a
                          className="nav-link py-1 link-600 fw-medium"
                          href="pages/authentication/wizard.html"
                        >
                          Wizard
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <ul className="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center">
        <ThemeDropDown />
        <Notifications />
        <DotsDropDown />
        <ProfileDropDown />
      </ul>
    </nav>
  );
}

export default NavbarDataContent;
