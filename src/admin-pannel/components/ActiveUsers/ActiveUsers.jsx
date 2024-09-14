function ActiveUsers() {
  return (
    <div className="col-md-6 col-xxl-3 pe-md-2 mb-3 mb-xxl-0">
      <div className="card">
        <div className="card-header d-flex flex-between-center bg-body-tertiary py-2">
          <h6 className="mb-0">Active Users</h6>
          <div className="dropdown font-sans-serif btn-reveal-trigger">
            <button
              className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal"
              type="button"
              id="dropdown-active-user"
              data-bs-toggle="dropdown"
              data-boundary="viewport"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="fas fa-ellipsis-h fs-11"></span>
            </button>
            <div
              className="dropdown-menu dropdown-menu-end border py-2"
              aria-labelledby="dropdown-active-user"
            >
              <a className="dropdown-item" href="#!">
                View
              </a>
              <a className="dropdown-item" href="#!">
                Export
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item text-danger" href="#!">
                Remove
              </a>
            </div>
          </div>
        </div>
        <div className="card-body py-2">
          <div className="d-flex align-items-center position-relative mb-3">
            <div className="avatar avatar-2xl status-online">
              <img className="rounded-circle" src="/assets/img/team/1.jpg" alt="" />
            </div>
            <div className="flex-1 ms-3">
              <h6 className="mb-0 fw-semi-bold">
                <a
                  className="stretched-link text-900"
                  href="pages/user/profile.html"
                >
                  Emma Watson
                </a>
              </h6>
              <p className="text-500 fs-11 mb-0">Admin</p>
            </div>
          </div>
          <div className="d-flex align-items-center position-relative mb-3">
            <div className="avatar avatar-2xl status-online">
              <img className="rounded-circle" src="/assets/img/team/2.jpg" alt="" />
            </div>
            <div className="flex-1 ms-3">
              <h6 className="mb-0 fw-semi-bold">
                <a
                  className="stretched-link text-900"
                  href="pages/user/profile.html"
                >
                  Antony Hopkins
                </a>
              </h6>
              <p className="text-500 fs-11 mb-0">Moderator</p>
            </div>
          </div>
          <div className="d-flex align-items-center position-relative mb-3">
            <div className="avatar avatar-2xl status-away">
              <img className="rounded-circle" src="/assets/img/team/3.jpg" alt="" />
            </div>
            <div className="flex-1 ms-3">
              <h6 className="mb-0 fw-semi-bold">
                <a
                  className="stretched-link text-900"
                  href="pages/user/profile.html"
                >
                  Anna Karinina
                </a>
              </h6>
              <p className="text-500 fs-11 mb-0">Editor</p>
            </div>
          </div>
          <div className="d-flex align-items-center position-relative mb-3">
            <div className="avatar avatar-2xl status-offline">
              <img className="rounded-circle" src="/assets/img/team/4.jpg" alt="" />
            </div>
            <div className="flex-1 ms-3">
              <h6 className="mb-0 fw-semi-bold">
                <a
                  className="stretched-link text-900"
                  href="pages/user/profile.html"
                >
                  John Lee
                </a>
              </h6>
              <p className="text-500 fs-11 mb-0">Admin</p>
            </div>
          </div>
          <div className="d-flex align-items-center position-relative false">
            <div className="avatar avatar-2xl status-offline">
              <img className="rounded-circle" src="/assets/img/team/5.jpg" alt="" />
            </div>
            <div className="flex-1 ms-3">
              <h6 className="mb-0 fw-semi-bold">
                <a
                  className="stretched-link text-900"
                  href="pages/user/profile.html"
                >
                  Rowen Atkinson
                </a>
              </h6>
              <p className="text-500 fs-11 mb-0">Editor</p>
            </div>
          </div>
        </div>
        <div className="card-footer bg-body-tertiary p-0">
          <a
            className="btn btn-sm btn-link d-block w-100 py-2"
            href="app/social/followers.html"
          >
            All active users
            <span className="fas fa-chevron-right ms-1 fs-11"></span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ActiveUsers;
