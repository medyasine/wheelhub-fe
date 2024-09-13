function ThemeDropDown() {
  return (
    <li className="nav-item d-flex align-items-center me-2">
      <div className="theme-control-toggle">
        <input
          className="form-check-input ms-0 theme-control-toggle-input"
          id="themeControlToggleExample"
          type="checkbox"
          data-theme-control="theme"
          value="dark"
        />
        <label
          className="mb-0 theme-control-toggle-label theme-control-toggle-light"
          htmlFor="themeControlToggleExample"
        >
          <span className="fas fa-sun fs-9"></span>
        </label>
        <label
          className="mb-0 theme-control-toggle-label theme-control-toggle-dark"
          htmlFor="themeControlToggleExample"
        >
          <span className="fas fa-moon fs-9"></span>
        </label>
      </div>
    </li>
  );
}

export default ThemeDropDown;
