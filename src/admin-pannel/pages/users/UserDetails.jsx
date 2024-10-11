import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../../store/UserSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { format, parseISO } from 'date-fns'; // Import date-fns functions

export default function UserDetails() {
  const { userDetail, isUserDetailLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getUserById(id));
    }
  }, [dispatch, id]);

  if (isUserDetailLoading) {
    return <Loader />;
  }

  if (!userDetail) {
    return <div>User not found</div>;
  }

  // Format the createdAt date
  const formattedDate = userDetail.createdAt 
    ? format(parseISO(userDetail.createdAt), 'MMM dd, hh:mm a')
    : 'Date not available';

  return (
    <>
      <div className="card mb-3">
        <div className="card-header">
          <div className="row">
            <div className="col">
              <h5 className="mb-2">
                {userDetail?.name} (<a href={`mailto:${userDetail?.email}`}>{userDetail?.email}</a>)
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
                {userDetail.role}<span className="fas fa-user ms-2"></span>
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
              <p className="mb-0">{userDetail.role}</p>
              <p className="fs-10 mb-0 text-600">{formattedDate}</p>
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
                Personal Information
              </h6>
              <div className="row">
                <div className="col-5 col-sm-4">
                  <p className="fw-semi-bold mb-1">ID</p>
                </div>
                <div className="col">{userDetail.id}</div>
              </div>
              <div className="row">
                <div className="col-5 col-sm-4">
                  <p className="fw-semi-bold mb-1">Adress</p>
                </div>
                <div className="col">{userDetail.adress}</div>
              </div>
              <div className="row">
                <div className="col-5 col-sm-4">
                  <p className="fw-semi-bold mb-1">Email</p>
                </div>
                <div className="col">
                  <a href="mailto:tony@gmail.com">{userDetail.email}</a>
                </div>
              </div>
              <div className="row">
                <div className="col-5 col-sm-4">
                  <p className="fw-semi-bold mb-1">Full name</p>
                </div>
                <div className="col">
                  <p className="fst-italic mb-1">{userDetail.name}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-5 col-sm-4">
                  <p className="fw-semi-bold mb-0">Phone Number</p>
                </div>
                <div className="col">
                  <p className="fst-italic  mb-0">{userDetail.phoneNumber}</p>
                </div>
              </div>
            </div>
            <div className="col-lg col-xxl-5 mt-4 mt-lg-0 offset-xxl-1">
              <h6 className="fw-semi-bold ls mb-3 text-uppercase">
                Account Information
              </h6>
              <div className="row">
                <div className="col-5 col-sm-4">
                  <p className="fw-semi-bold mb-1">Created</p>
                </div>
                <div className="col">
                  <a >{formattedDate}</a>
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
