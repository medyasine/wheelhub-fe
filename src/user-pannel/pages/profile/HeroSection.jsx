function HeroSection() {
  return (
    <div className="card mb-3">
      <div className="card-header position-relative min-vh-25 mb-7">
        <div
          className="bg-holder rounded-3 rounded-bottom-0"
          style={{ backgroundImage: "url(./assets/img/generic/4.jpg)" }}
        ></div>
        <div className="avatar avatar-5xl avatar-profile">
          <img
            className="rounded-circle img-thumbnail shadow-sm"
            src="./assets/img/team/2.jpg"
            width="200"
            alt=""
          />
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-lg-8">
            <h4 className="mb-1">
              Anthony Hopkins
              <span
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Verified"
              >
                <small
                  className="fa fa-check-circle text-primary"
                  data-fa-transform="shrink-4 down-2"
                ></small>
              </span>
            </h4>
            <h5 className="fs-9 fw-normal">
              Senior Software Engineer at Technext Limited
            </h5>
            <p className="text-500">New York, USA</p>
            <button
              className="btn btn-falcon-primary btn-sm px-3"
              type="button"
            >
              Following
            </button>
            <button
              className="btn btn-falcon-default btn-sm px-3 ms-2"
              type="button"
            >
              Message
            </button>
            <div className="border-bottom border-dashed my-4 d-lg-none"></div>
          </div>
          <div className="col ps-2 ps-lg-3">
            <a className="d-flex align-items-center mb-2" href="#">
              <span
                className="fas fa-user-circle fs-6 me-2 text-700"
                data-fa-transform="grow-2"
              ></span>
              <div className="flex-1">
                <h6 className="mb-0">See followers (330)</h6>
              </div>
            </a>
            <a className="d-flex align-items-center mb-2" href="#">
              <img
                className="align-self-center me-2"
                src="./assets/img/logos/g.png"
                alt="Generic placeholder image"
                width="30"
              />
              <div className="flex-1">
                <h6 className="mb-0">Google</h6>
              </div>
            </a>
            <a className="d-flex align-items-center mb-2" href="#">
              <img
                className="align-self-center me-2"
                src="./assets/img/logos/apple.png"
                alt="Generic placeholder image"
                width="30"
              />
              <div className="flex-1">
                <h6 className="mb-0">Apple</h6>
              </div>
            </a>
            <a className="d-flex align-items-center mb-2" href="#">
              <img
                className="align-self-center me-2"
                src="./assets/img/logos/hp.png"
                alt="Generic placeholder image"
                width="30"
              />
              <div className="flex-1">
                <h6 className="mb-0">Hewlett Packard</h6>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
