function DotsDropDown() {
  return (
    <li className="nav-item dropdown px-1">
      <a
        className="nav-link fa-icon-wait nine-dots p-1"
        id="navbarDropdownMenu"
        role="button"
        data-hide-on-body-scroll="data-hide-on-body-scroll"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="43"
          viewBox="0 0 16 16"
          fill="none"
        >
          <circle cx="2" cy="2" r="2" fill="#6C6E71"></circle>
          <circle cx="2" cy="8" r="2" fill="#6C6E71"></circle>
          <circle cx="2" cy="14" r="2" fill="#6C6E71"></circle>
          <circle cx="8" cy="8" r="2" fill="#6C6E71"></circle>
          <circle cx="8" cy="14" r="2" fill="#6C6E71"></circle>
          <circle cx="14" cy="8" r="2" fill="#6C6E71"></circle>
          <circle cx="14" cy="14" r="2" fill="#6C6E71"></circle>
          <circle cx="8" cy="2" r="2" fill="#6C6E71"></circle>
          <circle cx="14" cy="2" r="2" fill="#6C6E71"></circle>
        </svg>
      </a>
      <div
        className="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end dropdown-menu-card dropdown-caret-bg"
        aria-labelledby="navbarDropdownMenu"
      >
        <div className="card shadow-none">
          <div className="scrollbar-overlay nine-dots-dropdown">
            <div className="card-body px-3">
              <div className="row text-center gx-0 gy-0">
                <div className="col-4">
                  <a
                    className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                    href="pages/user/profile.html"
                    target="_blank"
                  >
                    <div className="avatar avatar-2xl">
                      <img
                        className="rounded-circle"
                        src="/assets/img/team/3.jpg"
                        alt=""
                      />
                    </div>
                    <p className="mb-0 fw-medium text-800 text-truncate fs-11">
                      Account
                    </p>
                  </a>
                </div>
                <div className="col-12">
                  <a className="btn btn-outline-primary btn-sm mt-4" href="#!">
                    Show more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default DotsDropDown;
