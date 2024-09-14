import { Link } from "react-router-dom";

function ServerError() {
  return (
    <div className="container" data-layout="container">
      <div className="row flex-center min-vh-100 py-6 text-center">
        <div className="col-sm-10 col-md-8 col-lg-6 col-xxl-5">
          <Link className="d-flex flex-center mb-4" to="/">
            <img
              className="me-2"
              src="/assets/img/icons/spot-illustrations/falcon.png"
              alt=""
              width="58"
            />
            <span className="font-sans-serif text-primary fw-bolder fs-4 d-inline-block">
              falcon
            </span>
          </Link>
          <div className="card">
            <div className="card-body p-4 p-sm-5">
              <div className="fw-black lh-1 text-300 fs-error">500</div>
              <p className="lead mt-4 text-800 font-sans-serif fw-semi-bold">
                Whoops, something went wrong!
              </p>
              <hr />
              <p>
                Try refreshing the page, or going back and attempting the action
                again. If this problem persists,
                <a href="mailto:info@exmaple.com">contact us</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServerError;
