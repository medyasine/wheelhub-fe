export default function ExperienceSection() {
  return (
    <div className="card mb-3">
      <div className="card-header bg-body-tertiary">
        <h5 className="mb-0">Experience</h5>
      </div>
      <div className="card-body fs-10">
        <div className="d-flex">
          <a href="#!">
            <img
              className="img-fluid"
              src="./assets/img/logos/g.png"
              alt=""
              width="56"
            />
          </a>
          <div className="flex-1 position-relative ps-3">
            <h6 className="fs-9 mb-0">
              Big Data Engineer
              <span
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Verified"
              >
                <small
                  className="fa fa-check-circle text-primary"
                  data-fa-transform="shrink-4 down-2"
                ></small>
              </span>
            </h6>
            <p className="mb-1">
              <a href="#!">Google</a>
            </p>
            <p className="text-1000 mb-0">
              Apr 2012 - Present &bull; 6 yrs 9 mos
            </p>
            <p className="text-1000 mb-0">California, USA</p>
            <div className="border-bottom border-dashed my-3"></div>
          </div>
        </div>
        <div className="d-flex">
          <a href="#!">
            <img
              className="img-fluid"
              src="./assets/img/logos/apple.png"
              alt=""
              width="56"
            />
          </a>
          <div className="flex-1 position-relative ps-3">
            <h6 className="fs-9 mb-0">
              Software Engineer
              <span
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Verified"
              >
                <small
                  className="fa fa-check-circle text-primary"
                  data-fa-transform="shrink-4 down-2"
                ></small>
              </span>
            </h6>
            <p className="mb-1">
              <a href="#!">Apple</a>
            </p>
            <p className="text-1000 mb-0">Jan 2012 - Apr 2012 &bull; 4 mos</p>
            <p className="text-1000 mb-0">California, USA</p>
            <div className="border-bottom border-dashed my-3"></div>
          </div>
        </div>
        <div className="d-flex">
          <a href="#!">
            <img
              className="img-fluid"
              src="./assets/img/logos/nike.png"
              alt=""
              width="56"
            />
          </a>
          <div className="flex-1 position-relative ps-3">
            <h6 className="fs-9 mb-0">
              Mobile App Developer
              <span
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Verified"
              >
                <small
                  className="fa fa-check-circle text-primary"
                  data-fa-transform="shrink-4 down-2"
                ></small>
              </span>
            </h6>
            <p className="mb-1">
              <a href="#!">Nike</a>
            </p>
            <p className="text-1000 mb-0">
              Jan 2011 - Apr 2012 &bull; 1 yr 4 mos
            </p>
            <p className="text-1000 mb-0">Beaverton, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
}
