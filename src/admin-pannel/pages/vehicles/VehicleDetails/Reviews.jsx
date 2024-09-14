function Reviews({ data }) {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div
      className="tab-pane fade"
      id="tab-reviews"
      role="tabpanel"
      aria-labelledby="reviews-tab"
    >
      <div className="row mt-3">
        <div className="col-lg-6 mb-4 mb-lg-0">
          {data.map((ele) => {
            const stars = Array.from({ length: ele.rating }, (_, index) => (
              <span
                key={index}
                className="fa fa-star text-warning fs-10"
              ></span>
            ));

            const firstParagraph = ele.comment.split("\n")[0];

            return (
              <>
                <div className="mb-1">
                  {stars}
                  <span className="ms-3 text-1100 fw-semi-bold">
                    {firstParagraph}
                  </span>
                </div>
                <p className="fs-10 mb-2 text-600">
                  By {ele.username} • {formatDate(ele.createdAt)}
                </p>
                <p className="mb-0">{ele.comment}</p>
                <hr className="my-4" />
              </>
            );
          })}
        </div>
        <div className="col-lg-6 ps-lg-5">
          <form>
            <h5 className="mb-3">Write your Review</h5>
            <div className="mb-3">
              <label className="form-label">Ratting: </label>
              <div
                className="d-block"
                data-rater='{"starSize":32,"step":0.5}'
              ></div>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="formGroupNameInput">
                Name:
              </label>
              <input
                className="form-control"
                id="formGroupNameInput"
                type="text"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="formGroupEmailInput">
                Email:
              </label>
              <input
                className="form-control"
                id="formGroupEmailInput"
                type="email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="formGrouptextareaInput">
                Review:
              </label>
              <textarea
                className="form-control"
                id="formGrouptextareaInput"
                rows="3"
              ></textarea>
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
