export default function EducationSection() {
  return (
    <div className="card mb-3">
      <div className="card-header bg-body-tertiary">
        <h5 className="mb-0">Education</h5>
      </div>
      <div className="card-body fs-10">
        <div className="d-flex">
          <a href="#!">
            <div className="avatar avatar-3xl">
              <div className="avatar-name rounded-circle">
                <span>SU</span>
              </div>
            </div>
          </a>
          <div className="flex-1 position-relative ps-3">
            <h6 className="fs-9 mb-0">
              <a href="#!">
                Stanford University
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
              </a>
            </h6>
            <p className="mb-1">Computer Science and Engineering</p>
            <p className="text-1000 mb-0">2010 - 2014 • 4 yrs</p>
            <p className="text-1000 mb-0">California, USA</p>
            <div className="border-bottom border-dashed my-3"></div>
          </div>
        </div>
        <div className="d-flex">
          <a href="#!">
            <img
              className="img-fluid"
              src="/assets/img/logos/staten.png"
              alt=""
              width="56"
            />
          </a>
          <div className="flex-1 position-relative ps-3">
            <h6 className="fs-9 mb-0">
              <a href="#!">
                Staten Island Technical High School
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
              </a>
            </h6>
            <p className="mb-1">Higher Secondary School Certificate, Science</p>
            <p className="text-1000 mb-0">2008 - 2010 &bull; 2 yrs</p>
            <p className="text-1000 mb-0">New York, USA</p>
            <div className="border-bottom border-dashed my-3"></div>
          </div>
        </div>
        <div className="d-flex">
          <a href="#!">
            <img
              className="img-fluid"
              src="/assets/img/logos/tj-heigh-school.png"
              alt=""
              width="56"
            />
          </a>
          <div className="flex-1 position-relative ps-3">
            <h6 className="fs-9 mb-0">
              <a href="#!">
                Thomas Jefferson High School for Science and Technology
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
              </a>
            </h6>
            <p className="mb-1">Secondary School Certificate, Science</p>
            <p className="text-1000 mb-0">2003 - 2008 &bull; 5 yrs</p>
            <p className="text-1000 mb-0">Alexandria, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
}
