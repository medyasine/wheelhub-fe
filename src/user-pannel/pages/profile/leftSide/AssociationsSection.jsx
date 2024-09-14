function AssociationsSection() {
  return (
    <div className="card mb-3">
      <div className="card-header bg-body-tertiary d-flex justify-content-between">
        <h5 className="mb-0">Associations</h5>
        <a
          className="font-sans-serif"
          href="../miscellaneous/associations.html"
        >
          All Associations
        </a>
      </div>
      <div className="card-body fs-10 pb-0">
        <div className="row">
          <div className="col-sm-6 mb-3">
            <div className="d-flex position-relative align-items-center mb-2">
              <img
                className="d-flex align-self-center me-2 rounded-3"
                src="/assets/img/logos/apple.png"
                alt=""
                width="50"
              />
              <div className="flex-1">
                <h6 className="fs-9 mb-0">
                  <a className="stretched-link" href="#!">
                    Apple
                  </a>
                </h6>
                <p className="mb-1">3243 associates</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mb-3">
            <div className="d-flex position-relative align-items-center mb-2">
              <img
                className="d-flex align-self-center me-2 rounded-3"
                src="/assets/img/logos/g.png"
                alt=""
                width="50"
              />
              <div className="flex-1">
                <h6 className="fs-9 mb-0">
                  <a className="stretched-link" href="#!">
                    Google
                  </a>
                </h6>
                <p className="mb-1">34598 associates</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mb-3">
            <div className="d-flex position-relative align-items-center mb-2">
              <img
                className="d-flex align-self-center me-2 rounded-3"
                src="/assets/img/logos/intel-2.png"
                alt=""
                width="50"
              />
              <div className="flex-1">
                <h6 className="fs-9 mb-0">
                  <a className="stretched-link" href="#!">
                    Intel
                  </a>
                </h6>
                <p className="mb-1">7652 associates</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mb-3">
            <div className="d-flex position-relative align-items-center mb-2">
              <img
                className="d-flex align-self-center me-2 rounded-3"
                src="/assets/img/logos/facebook.png"
                alt=""
                width="50"
              />
              <div className="flex-1">
                <h6 className="fs-9 mb-0">
                  <a className="stretched-link" href="#!">
                    Facebook
                  </a>
                </h6>
                <p className="mb-1">765 associates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssociationsSection;
