import ThemeDropDown from "../ThemeDropDown";
import Notifications from "../Notifications";
import DotsDropDown from "../DotsDropDown";
import ProfileDropDown from "../ProfileDropDown";

function NavbarContent() {
  return (
    <nav
      className="navbar navbar-light navbar-glass navbar-top navbar-expand"
      style={{ display: "none" }}
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
            src="/assets/img/icons/spot-illustrations/falcon.png"
            alt=""
            width="40"
          />
          <span className="font-sans-serif text-primary">wheelhub</span>
        </div>
      </a>
      <ul className="navbar-nav align-items-center d-none d-lg-block">
        <li className="nav-item">
          <div className="search-box" data-list='{"valueNames":["title"]}'>
            <form
              className="position-relative"
              data-bs-toggle="search"
              data-bs-display="static"
            >
              <input
                className="form-control search-input fuzzy-search"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <span className="fas fa-search search-box-icon"></span>
            </form>
            <div
              className="btn-close-falcon-container position-absolute end-0 top-50 translate-middle shadow-none"
              data-bs-dismiss="search"
            >
              <button
                className="btn btn-link btn-close-falcon p-0"
                aria-label="Close"
              ></button>
            </div>
          </div>
        </li>
      </ul>
      <ul className="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center">
        <ThemeDropDown />
        <Notifications />
        <DotsDropDown />
        <ProfileDropDown />
      </ul>
    </nav>
  );
}

export default NavbarContent;
