import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Rating from "react-rating";
import { getUser } from "../../../../store/UserSlice";
import { addVehicleReview } from "../../../../store/ReviewSlice";

function Reviews({ data, vehicleId }) {
  const { user } = useSelector((state) => state.user);
  const { token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const [error, setError] = useState("");

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const [formData, setFormData] = useState({
    rating: 0,
    comment: "",
    userId: null,
    vehicleId: null,
    reviewType: "USER_REVIEW",
  });

  function hamdleChange(e) {
    const { value, name } = e.target;
    setFormData((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  }

  const handleRatingChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      rating: Math.floor(value),
    }));
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.comment.trim()) {
      setError("Please provide a review");
      return;
    }

    formData.userId = user?.id;
    formData.vehicleId = vehicleId;

    const res = await fetch("http://localhost:8080/api/reviews/", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    if (res.ok) {
      dispatch(addVehicleReview(data));
      setFormData({
        rating: 0,
        comment: "",
        userId: null,
        vehicleId: null,
        reviewType: "USER_REVIEW",
      });
    } else {
      setError("Something went wrong, try again");
    }
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
              <div key={ele.id}>
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
              </div>
            );
          })}
        </div>
        <div className="col-lg-6 ps-lg-5">
          <form onSubmit={handleSubmit}>
            <h5 className="mb-3">Write your Review</h5>
            <div className="mb-3">
              <label className="form-label">Rating: </label>
              <Rating
                className="ms-3"
                initialRating={formData.rating}
                onChange={handleRatingChange}
                fullSymbol={
                  <i
                    className="fa fa-star text-warning"
                    style={{ fontSize: "15px" }}
                  ></i>
                }
                emptySymbol={
                  <i
                    className="fa fa-star-o text-warning"
                    style={{ fontSize: "15px" }}
                  ></i>
                }
                stop={5}
                step={1}
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
                name="comment"
                value={formData.comment}
                onChange={hamdleChange}
              ></textarea>
            </div>
            {error && <span className="text-danger mb-3">{error}</span>}
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
