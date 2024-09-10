import React from "react";

function TotalOrder() {
  return (
    <div className="col-md-6 col-xxl-3">
      <div className="card h-md-100">
        <div className="card-header pb-0">
          <h6 className="mb-0 mt-2">Total Order</h6>
        </div>
        <div className="card-body d-flex flex-column justify-content-end">
          <div className="row justify-content-between">
            <div className="col-auto align-self-end">
              <div className="fs-5 fw-normal font-sans-serif text-700 lh-1 mb-1">
                58.4K
              </div>
              <span className="badge rounded-pill fs-11 bg-200 text-primary">
                <span className="fas fa-caret-up me-1"></span>13.6%
              </span>
            </div>
            <div className="col-auto ps-0 mt-n4">
              <div
                className="echart-default-total-order"
                data-echarts='{"tooltip":{"trigger":"axis","formatter":"{b0} : {c0}"},"xAxis":{"data":["Week 4","Week 5","Week 6","Week 7"]},"series":[{"type":"line","data":[20,40,100,120],"smooth":true,"lineStyle":{"width":3}}],"grid":{"bottom":"2%","top":"2%","right":"10px","left":"10px"}}'
                data-echart-responsive="true"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalOrder;
