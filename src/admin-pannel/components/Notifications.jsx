function Notifications() {
  return (
    <>
      <li className="nav-item d-none d-sm-block">
        <a
          className="nav-link px-0 notification-indicator notification-indicator-warning notification-indicator-fill fa-icon-wait"
          href="app/e-commerce/shopping-cart.html"
        >
          <span
            className="fas fa-shopping-cart"
            data-fa-transform="shrink-7"
            style={{ "fontSize": "33px" }}
          ></span>
          <span className="notification-indicator-number">1</span>
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link notification-indicator notification-indicator-primary px-0 fa-icon-wait"
          id="navbarDropdownNotification"
          role="button"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          data-hide-on-body-scroll="data-hide-on-body-scroll"
        >
          <span
            className="fas fa-bell"
            data-fa-transform="shrink-6"
            style={{ "fontSize": "33px" }}
          ></span>
        </a>
        <div
          className="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end dropdown-menu-card dropdown-menu-notification dropdown-caret-bg"
          aria-labelledby="navbarDropdownNotification"
        >
          <div className="card card-notification shadow-none">
            <div className="card-header">
              <div className="row justify-content-between align-items-center">
                <div className="col-auto">
                  <h6 className="card-header-title mb-0">Notifications</h6>
                </div>
                <div className="col-auto ps-0 ps-sm-3">
                  <a className="card-link fw-normal" href="#">
                    Mark all as read
                  </a>
                </div>
              </div>
            </div>
            <div className="scrollbar-overlay" style={{ maxHeight: "19rem" }}>
              <div className="list-group list-group-flush fw-normal fs-10">
                <div className="list-group-title border-bottom">NEW</div>
                <div className="list-group-item">
                  <a
                    className="notification notification-flush notification-unread"
                    href="#!"
                  >
                    <div className="notification-avatar">
                      <div className="avatar avatar-2xl me-3">
                        <img
                          className="rounded-circle"
                          src="/assets/img/team/1-thumb.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="notification-body">
                      <p className="mb-1">
                        <strong>Emma Watson</strong> replied to your comment :
                        Hello world 😍
                      </p>
                      <span className="notification-time">
                        <span className="me-2" role="img" aria-label="Emoji">
                          💬
                        </span>
                        Just now
                      </span>
                    </div>
                  </a>
                </div>
                <div className="list-group-title border-bottom">EARLIER</div>
                <div className="list-group-item">
                  <a className="notification notification-flush" href="#!">
                    <div className="notification-avatar">
                      <div className="avatar avatar-2xl me-3">
                        <img
                          className="rounded-circle"
                          src="/assets/img/icons/weather-sm.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="notification-body">
                      <p className="mb-1">
                        The forecast today shows a low of 20&#8451; in
                        California. See todays weather.
                      </p>
                      <span className="notification-time">
                        <span className="me-2" role="img" aria-label="Emoji">
                          🌤️
                        </span>
                        1d
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="card-footer text-center border-top">
              <a
                className="card-link d-block"
                href="app/social/notifications.html"
              >
                View all
              </a>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default Notifications;
