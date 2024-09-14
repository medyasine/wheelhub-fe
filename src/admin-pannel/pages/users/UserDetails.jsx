export default function UserDetails() {
  return (
    <>
      <div className="card mb-3">
        <div className="card-header">
          <div className="row">
            <div className="col">
              <h5 className="mb-2">
                Tony Robbins (<a href="mailto:tony@gmail.com">tony@gmail.com</a>
                )
              </h5>
              <a className="btn btn-falcon-default btn-sm" href="#!">
                <span className="fas fa-plus fs-11 me-1"></span>Add note
              </a>
              <button
                className="btn btn-falcon-default btn-sm dropdown-toggle ms-2 dropdown-caret-none"
                type="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="fas fa-ellipsis-h"></span>
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Edit
                </a>
                <a className="dropdown-item" href="#">
                  Report
                </a>
                <a className="dropdown-item" href="#">
                  Archive
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item text-danger" href="#">
                  Delete user
                </a>
              </div>
            </div>
            <div className="col-auto d-none d-sm-block">
              <h6 className="text-uppercase text-600">
                Customer<span className="fas fa-user ms-2"></span>
              </h6>
            </div>
          </div>
        </div>
        <div className="card-body border-top">
          <div className="d-flex">
            <span
              className="fas fa-user text-success me-2"
              data-fa-transform="down-5"
            ></span>
            <div className="flex-1">
              <p className="mb-0">Customer was created</p>
              <p className="fs-10 mb-0 text-600">Jan 12, 11:13 PM</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-header">
          <div className="row align-items-center">
            <div className="col">
              <h5 className="mb-0">Details</h5>
            </div>
            <div className="col-auto">
              <a className="btn btn-falcon-default btn-sm" href="#!">
                <span className="fas fa-pencil-alt fs-11 me-1"></span>Update
                details
              </a>
            </div>
          </div>
        </div>
        <div className="card-body bg-body-tertiary border-top">
          <div className="row">
            <div className="col-lg col-xxl-5">
              <h6 className="fw-semi-bold ls mb-3 text-uppercase">
                Account Information
              </h6>
              <div className="row">
                <div className="col-5 col-sm-4">
                  <p className="fw-semi-bold mb-1">ID</p>
                </div>
                <div className="col">dcfasyo_Dfdjl</div>
              </div>
              <div className="row">
                <div className="col-5 col-sm-4">
                  <p className="fw-semi-bold mb-1">Created</p>
                </div>
                <div className="col">2019/01/12 23:13</div>
              </div>
              <div className="row">
                <div className="col-5 col-sm-4">
                  <p className="fw-semi-bold mb-1">Email</p>
                </div>
                <div className="col">
                  <a href="mailto:tony@gmail.com">tony@gmail.com</a>
                </div>
              </div>
              <div className="row">
                <div className="col-5 col-sm-4">
                  <p className="fw-semi-bold mb-1">Description</p>
                </div>
                <div className="col">
                  <p className="fst-italic text-400 mb-1">No Description</p>
                </div>
              </div>
              <div className="row">
                <div className="col-5 col-sm-4">
                  <p className="fw-semi-bold mb-0">VAT number</p>
                </div>
                <div className="col">
                  <p className="fst-italic text-400 mb-0">No VAT number</p>
                </div>
              </div>
            </div>
            <div className="col-lg col-xxl-5 mt-4 mt-lg-0 offset-xxl-1">
              <h6 className="fw-semi-bold ls mb-3 text-uppercase">
                Billing Information
              </h6>
              <div className="row">
                <div className="col-5 col-sm-4">
                  <p className="fw-semi-bold mb-1">Send email to</p>
                </div>
                <div className="col">
                  <a href="mailto:tony@gmail.com">tony@gmail.com</a>
                </div>
              </div>
              <div className="row">
                <div className="col-5 col-sm-4">
                  <p className="fw-semi-bold mb-1">Address</p>
                </div>
                <div className="col">
                  <p className="mb-1">
                    8962 Lafayette St. <br />
                    Oswego, NY 13126
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-5 col-sm-4">
                  <p className="fw-semi-bold mb-1">Phone number</p>
                </div>
                <div className="col">
                  <a href="tel:+12025550110">+1-202-555-0110</a>
                </div>
              </div>
              <div className="row">
                <div className="col-5 col-sm-4">
                  <p className="fw-semi-bold mb-0">Invoice prefix</p>
                </div>
                <div className="col">
                  <p className="fw-semi-bold mb-0">7C23435</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer border-top text-end">
          <a className="btn btn-falcon-default btn-sm" href="#!">
            <span className="fas fa-dollar-sign fs-11 me-1"></span>Refund
          </a>
          <a className="btn btn-falcon-default btn-sm ms-2" href="#!">
            <span className="fas fa-check fs-11 me-1"></span>Save changes
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0">Logs</h5>
        </div>
        <div className="card-body border-top p-0">
          <div className="row g-0 align-items-center border-bottom py-2 px-3">
            <div className="col-md-auto pe-3">
              <span className="badge badge-subtle-success rounded-pill">
                200
              </span>
            </div>
            <div className="col-md mt-1 mt-md-0">
              <code>POST /v1/invoiceitems</code>
            </div>
            <div className="col-md-auto">
              <p className="mb-0">2019/02/23 15:29:45</p>
            </div>
          </div>
          <div className="row g-0 align-items-center border-bottom py-2 px-3">
            <div className="col-md-auto pe-3">
              <span className="badge badge-subtle-warning rounded-pill">
                400
              </span>
            </div>
            <div className="col-md mt-1 mt-md-0">
              <code>POST /v1/invoiceitems</code>
            </div>
            <div className="col-md-auto">
              <p className="mb-0">2019/02/19 21:32:12</p>
            </div>
          </div>
          <div className="row g-0 align-items-center border-bottom py-2 px-3">
            <div className="col-md-auto pe-3">
              <span className="badge badge-subtle-success rounded-pill">
                200
              </span>
            </div>
            <div className="col-md mt-1 mt-md-0">
              <code>POST /v1/invoices/in_1Dnkhadfk</code>
            </div>
            <div className="col-md-auto">
              <p className="mb-0">2019/02/26 12:23:43</p>
            </div>
          </div>
          <div className="row g-0 align-items-center border-bottom py-2 px-3">
            <div className="col-md-auto pe-3">
              <span className="badge badge-subtle-success rounded-pill">
                200
              </span>
            </div>
            <div className="col-md mt-1 mt-md-0">
              <code>POST /v1/invoices/in_1Dnkhadfk</code>
            </div>
            <div className="col-md-auto">
              <p className="mb-0">2019/02/12 23:32:12</p>
            </div>
          </div>
          <div className="row g-0 align-items-center border-bottom py-2 px-3">
            <div className="col-md-auto pe-3">
              <span className="badge badge-subtle-danger rounded-pill">
                404
              </span>
            </div>
            <div className="col-md mt-1 mt-md-0">
              <code>POST /v1/invoices/in_1Dnkhadfk</code>
            </div>
            <div className="col-md-auto">
              <p className="mb-0">2019/02/08 02:20:23</p>
            </div>
          </div>
          <div className="row g-0 align-items-center border-bottom py-2 px-3">
            <div className="col-md-auto pe-3">
              <span className="badge badge-subtle-success rounded-pill">
                200
              </span>
            </div>
            <div className="col-md mt-1 mt-md-0">
              <code>POST /v1/invoices/in_1Dnkhadfk</code>
            </div>
            <div className="col-md-auto">
              <p className="mb-0">2019/02/01 12:29:34</p>
            </div>
          </div>
        </div>
        <div className="card-footer bg-body-tertiary p-0">
          <a className="btn btn-link d-block w-100" href="#!">
            View more logs
            <span className="fas fa-chevron-right fs-11 ms-1"></span>
          </a>
        </div>
      </div>
    </>
  );
}
