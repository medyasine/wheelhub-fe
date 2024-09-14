import ThemeDropDown from "../ThemeDropDown";
import Notifications from "../Notifications";
import DotsDropDown from "../DotsDropDown";
import ProfileDropDown from "../ProfileDropDown";
import { Link } from "react-router-dom";

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
            width="20"
          />
          <span className="font-sans-serif text-primary">wheelhub</span>
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
                <Link className="dropdown-item link-600 fw-medium" to="">
                  Default
                </Link>
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
              Management
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
                        <p className="nav-link text-700 mb-0 fw-bold">Users</p>
                        <Link
                          className="nav-link py-1 link-600 fw-medium"
                          to="users"
                        >
                          All users
                        </Link>
                        <Link
                          className="nav-link py-1 link-600 fw-medium"
                          to="users/create"
                        >
                          Ceate user
                        </Link>
                      </div>
                    </div>
                    <div className="col-6 col-xxl-3">
                      <div className="nav flex-column">
                        <p className="nav-link text-700 mb-0 fw-bold">
                          Vehicles
                        </p>
                        <Link
                          className="nav-link py-1 link-600 fw-medium"
                          to="vehicles"
                        >
                          All vehicles
                        </Link>
                        <Link
                          className="nav-link py-1 link-600 fw-medium"
                          to="vehicles/create"
                        >
                          Create vehicle
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6 col-xxl-3">
                      <div className="nav flex-column">
                        <p className="nav-link text-700 mb-0 fw-bold">
                          Appointements
                        </p>
                        <a
                          className="nav-link py-1 link-600 fw-medium"
                          href="pages/miscellaneous/associations.html"
                        >
                          All appointemnets
                        </a>
                        <a
                          className="nav-link py-1 link-600 fw-medium"
                          href="pages/miscellaneous/associations.html"
                        >
                          Create appointemnet
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
