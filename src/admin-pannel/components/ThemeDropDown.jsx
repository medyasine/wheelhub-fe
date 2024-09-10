import React from "react";

function ThemeDropDown() {
  return (
    <li className="nav-item d-flex align-items-center me-2">
      <div className="dropdown theme-control-dropdown landing-drop">
        <a
          className="nav-link d-flex align-items-center dropdown-toggle fa-icon-wait pe-1"
          href="#"
          role="button"
          id="themeSwitchDropdown"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="d-none d-lg-block">
            <span
              className="fas fa-sun"
              data-theme-dropdown-toggle-icon="light"
            ></span>
            <span
              className="fas fa-moon"
              data-theme-dropdown-toggle-icon="dark"
            ></span>
            <span
              className="fas fa-adjust"
              data-theme-dropdown-toggle-icon="auto"
            ></span>
          </span>
          <span className="d-lg-none">Switch theme</span>
        </a>
        <div
          className="dropdown-menu dropdown-menu-end dropdown-caret border py-0 mt-1"
          aria-labelledby="themeSwitchDropdown"
        >
          <div className="bg-white dark__bg-1000 rounded-2 py-2">
            <button
              className="dropdown-item link-600 d-flex align-items-center gap-2"
              type="button"
              value="light"
              data-theme-control="theme"
            >
              <span className="fas fa-sun"></span>Light
              <span className="fas fa-check dropdown-check-icon ms-auto text-600"></span>
            </button>
            <button
              className="dropdown-item link-600 d-flex align-items-center gap-2"
              type="button"
              value="dark"
              data-theme-control="theme"
            >
              <span className="fas fa-moon" data-fa-transform=""></span>Dark
              <span className="fas fa-check dropdown-check-icon ms-auto text-600"></span>
            </button>
            <button
              className="dropdown-item link-600 d-flex align-items-center gap-2"
              type="button"
              value="auto"
              data-theme-control="theme"
            >
              <span className="fas fa-adjust" data-fa-transform=""></span>Auto
              <span className="fas fa-check dropdown-check-icon ms-auto text-600"></span>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ThemeDropDown;
