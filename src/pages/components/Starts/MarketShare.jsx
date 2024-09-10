import React from "react";

function MarketShare() {
  return (
    <div className="col-md-6 col-xxl-3">
      <div className="card h-md-100">
        <div className="card-body">
          <div className="row h-100 justify-content-between g-0">
            <div className="col-5 col-sm-6 col-xxl pe-2">
              <h6 className="mt-1">Market Share</h6>
              <div className="fs-11 mt-3">
                <div className="d-flex flex-between-center mb-1">
                  <div className="d-flex align-items-center">
                    <span className="dot bg-primary"></span>
                    <span className="fw-semi-bold">Samsung</span>
                  </div>
                  <div className="d-xxl-none">33%</div>
                </div>
                <div className="d-flex flex-between-center mb-1">
                  <div className="d-flex align-items-center">
                    <span className="dot bg-info"></span>
                    <span className="fw-semi-bold">Huawei</span>
                  </div>
                  <div className="d-xxl-none">29%</div>
                </div>
                <div className="d-flex flex-between-center mb-1">
                  <div className="d-flex align-items-center">
                    <span className="dot bg-300"></span>
                    <span className="fw-semi-bold">Apple</span>
                  </div>
                  <div className="d-xxl-none">20%</div>
                </div>
              </div>
            </div>
            <div className="col-auto position-relative">
              <div className="echart-market-share"></div>
              <div className="position-absolute top-50 start-50 translate-middle text-1100 fs-7">
                26M
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketShare;
