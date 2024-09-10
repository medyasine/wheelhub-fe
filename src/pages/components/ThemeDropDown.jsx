import React from "react";

function ThemeDropDown() {
  return (
    <li className="nav-item ps-2 pe-0">
      <div className="dropdown theme-control-dropdown">
        <a
          className="nav-link d-flex align-items-center dropdown-toggle fa-icon-wait fs-9 pe-1 py-0"
          href="#"
          role="button"
          id="themeSwitchDropdown"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span
            className="fas fa-sun fs-7"
            data-fa-transform="shrink-2"
            data-theme-dropdown-toggle-icon="light"
          ></span>
          <span
            className="fas fa-moon fs-7"
            data-fa-transform="shrink-3"
            data-theme-dropdown-toggle-icon="dark"
          ></span>
          <span
            className="fas fa-adjust fs-7"
            data-fa-transform="shrink-2"
            data-theme-dropdown-toggle-icon="auto"
          ></span>
        </a>
        <div
          className="dropdown-menu dropdown-menu-end dropdown-caret border py-0 mt-3"
          aria-labelledby="themeSwitchDropdown"
        >
          <div className="bg-white dark__bg-1000 rounded-2 py-2">
            <button
              className="dropdown-item d-flex align-items-center gap-2"
              type="button"
              value="light"
              data-theme-control="theme"
            >
              <span className="fas fa-sun"></span>Light
              <span className="fas fa-check dropdown-check-icon ms-auto text-600"></span>
            </button>
            <button
              className="dropdown-item d-flex align-items-center gap-2"
              type="button"
              value="dark"
              data-theme-control="theme"
            >
              <span className="fas fa-moon" data-fa-transform=""></span>
              Dark
              <span className="fas fa-check dropdown-check-icon ms-auto text-600"></span>
            </button>
            <button
              className="dropdown-item d-flex align-items-center gap-2"
              type="button"
              value="auto"
              data-theme-control="theme"
            >
              <span className="fas fa-adjust" data-fa-transform=""></span>
              Auto
              <span className="fas fa-check dropdown-check-icon ms-auto text-600"></span>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ThemeDropDown;
