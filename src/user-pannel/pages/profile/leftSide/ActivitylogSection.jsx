function ActivitylogSection() {
  return (
    <div className="card mb-3">
      <div className="card-header bg-body-tertiary d-flex justify-content-between">
        <h5 className="mb-0">Activity log</h5>
        <a
          className="font-sans-serif"
          href="../../app/social/activity-log.html"
        >
          All logs
        </a>
      </div>
      <div className="card-body fs-10 p-0">
        <a
          className="border-bottom-0 notification rounded-0 border-x-0 border border-300"
          href="#!"
        >
          <div className="notification-avatar">
            <div className="avatar avatar-xl me-3">
              <div className="avatar-emoji rounded-circle ">
                <span role="img" aria-label="Emoji">
                  🎁
                </span>
              </div>
            </div>
          </div>
          <div className="notification-body">
            <p className="mb-1">
              <strong>Jennifer Kent</strong> Congratulated
              <strong>Anthony Hopkins</strong>
            </p>
            <span className="notification-time">November 13, 5:00 Am</span>
          </div>
        </a>

        <a
          className="border-bottom-0 notification rounded-0 border-x-0 border border-300"
          href="#!"
        >
          <div className="notification-avatar">
            <div className="avatar avatar-xl me-3">
              <div className="avatar-emoji rounded-circle ">
                <span role="img" aria-label="Emoji">
                  🏷️
                </span>
              </div>
            </div>
          </div>
          <div className="notification-body">
            <p className="mb-1">
              <strong>California Institute of Technology</strong> tagged
              <strong>Anthony Hopkins</strong> in a post.
            </p>
            <span className="notification-time">November 8, 5:00 PM</span>
          </div>
        </a>

        <a
          className="border-bottom-0 notification rounded-0 border-x-0 border border-300"
          href="#!"
        >
          <div className="notification-avatar">
            <div className="avatar avatar-xl me-3">
              <div className="avatar-emoji rounded-circle ">
                <span role="img" aria-label="Emoji">
                  📋️
                </span>
              </div>
            </div>
          </div>
          <div className="notification-body">
            <p className="mb-1">
              <strong>Anthony Hopkins</strong> joined
              <strong>Victory day cultural Program</strong> with
              <strong>Tony Stark</strong>
            </p>
            <span className="notification-time">November 01, 11:30 AM</span>
          </div>
        </a>
        <a
          className="notification border-x-0 border-bottom-0 border-300 rounded-top-0"
          href="#!"
        >
          <div className="notification-avatar">
            <div className="avatar avatar-xl me-3">
              <div className="avatar-emoji rounded-circle ">
                <span role="img" aria-label="Emoji">
                  📅️
                </span>
              </div>
            </div>
          </div>
          <div className="notification-body">
            <p className="mb-1">
              <strong>Massachusetts Institute of Technology</strong>
              invited <strong>Anthony Hopkin</strong> to an event
            </p>
            <span className="notification-time">October 28, 12:00 PM</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ActivitylogSection;
