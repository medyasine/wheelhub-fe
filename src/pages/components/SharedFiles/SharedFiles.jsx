import React from "react";

function SharedFiles() {
  return (
    <div className="col-lg-5 col-xl-4 ps-lg-2 mb-3">
      <div className="card h-100">
        <div className="card-header d-flex flex-between-center bg-body-tertiary py-2">
          <h6 className="mb-0">Shared Files</h6>
          <a className="py-1 fs-10 font-sans-serif" href="#!">
            View All
          </a>
        </div>
        <div className="card-body pb-0">
          <div className="d-flex mb-3 hover-actions-trigger align-items-center">
            <div className="file-thumbnail">
              <img
                className="border h-100 w-100 object-fit-cover rounded-2"
                src="./assets/img/products/5-thumb.png"
                alt=""
              />
            </div>
            <div className="ms-3 flex-shrink-1 flex-grow-1">
              <h6 className="mb-1">
                <a className="stretched-link text-900 fw-semi-bold" href="#!">
                  apple-smart-watch.png
                </a>
              </h6>
              <div className="fs-10">
                <span className="fw-semi-bold">Antony</span>
                <span className="fw-medium text-600 ms-2">Just Now</span>
              </div>
              <div className="hover-actions end-0 top-50 translate-middle-y">
                <a
                  className="btn btn-tertiary border-300 btn-sm me-1 text-600"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Download"
                  href="./assets/img/icons/cloud-download.svg"
                  download="download"
                >
                  <img
                    src="./assets/img/icons/cloud-download.svg"
                    alt=""
                    width="15"
                  />
                </a>
                <button
                  className="btn btn-tertiary border-300 btn-sm me-1 text-600 shadow-none"
                  type="button"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Edit"
                >
                  <img
                    src="./assets/img/icons/edit-alt.svg"
                    alt=""
                    width="15"
                  />
                </button>
              </div>
            </div>
          </div>
          <hr className="text-200" />
          <div className="d-flex mb-3 hover-actions-trigger align-items-center">
            <div className="file-thumbnail">
              <img
                className="border h-100 w-100 object-fit-cover rounded-2"
                src="./assets/img/products/3-thumb.png"
                alt=""
              />
            </div>
            <div className="ms-3 flex-shrink-1 flex-grow-1">
              <h6 className="mb-1">
                <a className="stretched-link text-900 fw-semi-bold" href="#!">
                  iphone.jpg
                </a>
              </h6>
              <div className="fs-10">
                <span className="fw-semi-bold">Antony</span>
                <span className="fw-medium text-600 ms-2">
                  Yesterday at 1:30 PM
                </span>
              </div>
              <div className="hover-actions end-0 top-50 translate-middle-y">
                <a
                  className="btn btn-tertiary border-300 btn-sm me-1 text-600"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Download"
                  href="./assets/img/icons/cloud-download.svg"
                  download="download"
                >
                  <img
                    src="./assets/img/icons/cloud-download.svg"
                    alt=""
                    width="15"
                  />
                </a>
                <button
                  className="btn btn-tertiary border-300 btn-sm me-1 text-600 shadow-none"
                  type="button"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Edit"
                >
                  <img
                    src="./assets/img/icons/edit-alt.svg"
                    alt=""
                    width="15"
                  />
                </button>
              </div>
            </div>
          </div>
          <hr className="text-200" />
          <div className="d-flex mb-3 hover-actions-trigger align-items-center">
            <div className="file-thumbnail">
              <img
                className="img-fluid"
                src="./assets/img/icons/zip.png"
                alt=""
              />
            </div>
            <div className="ms-3 flex-shrink-1 flex-grow-1">
              <h6 className="mb-1">
                <a className="stretched-link text-900 fw-semi-bold" href="#!">
                  Falcon v1.8.2
                </a>
              </h6>
              <div className="fs-10">
                <span className="fw-semi-bold">Jane</span>
                <span className="fw-medium text-600 ms-2">
                  27 Sep at 10:30 AM
                </span>
              </div>
              <div className="hover-actions end-0 top-50 translate-middle-y">
                <a
                  className="btn btn-tertiary border-300 btn-sm me-1 text-600"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Download"
                  href="./assets/img/icons/cloud-download.svg"
                  download="download"
                >
                  <img
                    src="./assets/img/icons/cloud-download.svg"
                    alt=""
                    width="15"
                  />
                </a>
                <button
                  className="btn btn-tertiary border-300 btn-sm me-1 text-600 shadow-none"
                  type="button"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Edit"
                >
                  <img
                    src="./assets/img/icons/edit-alt.svg"
                    alt=""
                    width="15"
                  />
                </button>
              </div>
            </div>
          </div>
          <hr className="text-200" />
          <div className="d-flex mb-3 hover-actions-trigger align-items-center">
            <div className="file-thumbnail">
              <img
                className="border h-100 w-100 object-fit-cover rounded-2"
                src="./assets/img/products/2-thumb.png"
                alt=""
              />
            </div>
            <div className="ms-3 flex-shrink-1 flex-grow-1">
              <h6 className="mb-1">
                <a className="stretched-link text-900 fw-semi-bold" href="#!">
                  iMac.jpg
                </a>
              </h6>
              <div className="fs-10">
                <span className="fw-semi-bold">Rowen</span>
                <span className="fw-medium text-600 ms-2">
                  23 Sep at 6:10 PM
                </span>
              </div>
              <div className="hover-actions end-0 top-50 translate-middle-y">
                <a
                  className="btn btn-tertiary border-300 btn-sm me-1 text-600"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Download"
                  href="./assets/img/icons/cloud-download.svg"
                  download="download"
                >
                  <img
                    src="./assets/img/icons/cloud-download.svg"
                    alt=""
                    width="15"
                  />
                </a>
                <button
                  className="btn btn-tertiary border-300 btn-sm me-1 text-600 shadow-none"
                  type="button"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Edit"
                >
                  <img
                    src="./assets/img/icons/edit-alt.svg"
                    alt=""
                    width="15"
                  />
                </button>
              </div>
            </div>
          </div>
          <hr className="text-200" />
          <div className="d-flex mb-3 hover-actions-trigger align-items-center">
            <div className="file-thumbnail">
              <img
                className="img-fluid"
                src="./assets/img/icons/docs.png"
                alt=""
              />
            </div>
            <div className="ms-3 flex-shrink-1 flex-grow-1">
              <h6 className="mb-1">
                <a className="stretched-link text-900 fw-semi-bold" href="#!">
                  functions.php
                </a>
              </h6>
              <div className="fs-10">
                <span className="fw-semi-bold">John</span>
                <span className="fw-medium text-600 ms-2">
                  1 Oct at 4:30 PM
                </span>
              </div>
              <div className="hover-actions end-0 top-50 translate-middle-y">
                <a
                  className="btn btn-tertiary border-300 btn-sm me-1 text-600"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Download"
                  href="./assets/img/icons/cloud-download.svg"
                  download="download"
                >
                  <img
                    src="./assets/img/icons/cloud-download.svg"
                    alt=""
                    width="15"
                  />
                </a>
                <button
                  className="btn btn-tertiary border-300 btn-sm me-1 text-600 shadow-none"
                  type="button"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Edit"
                >
                  <img
                    src="./assets/img/icons/edit-alt.svg"
                    alt=""
                    width="15"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SharedFiles;
