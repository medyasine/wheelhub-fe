import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVehicle } from "../../../../store/VehicleSlice";
import Reviews from "./Reviews";
import Features from "./Features";
import { getVehicleReviews } from "../../../../store/ReviewSlice";

function VehicleDetail() {
  const { id } = useParams();
  const { vehicle } = useSelector((state) => state.vehicle);
  const { vehicleReviews } = useSelector((state) => state.review);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVehicle(id));
    dispatch(getVehicleReviews({ vehicleId: id, reviewType: "USER_REVIEW" }));
  }, [id, dispatch]);

  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="product-slider" id="galleryTop">
              <div
                className="swiper theme-slider position-lg-absolute all-0"
                data-swiper='{"autoHeight":true,"spaceBetween":5,"loop":true,"loopedSlides":5,"thumb":{"spaceBetween":5,"slidesPerView":5,"loop":true,"freeMode":true,"grabCursor":true,"loopedSlides":5,"centeredSlides":true,"slideToClickedSlide":true,"watchSlidesVisibility":true,"watchSlidesProgress":true,"parent":"#galleryTop"},"slideToClickedSlide":true}'
              >
                <div className="swiper-wrapper h-100">
                  <div className="swiper-slide h-100">
                    <img
                      className="rounded-1 object-fit-cover h-100 w-100"
                      src="/assets/img/products/1.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="swiper-nav">
                  <div className="swiper-button-next swiper-button-white"></div>
                  <div className="swiper-button-prev swiper-button-white"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h5>
              {vehicle?.make} - {vehicle?.model} - {vehicle?.year}
            </h5>
            <a className="fs-10 mb-2 d-block" href="#!">
              {vehicle?.mileage} km
            </a>
            <div className="fs-11 mb-3 d-inline-block text-decoration-none">
              <span className="fa fa-star text-warning"></span>
              <span className="fa fa-star text-warning"></span>
              <span className="fa fa-star text-warning"></span>
              <span className="fa fa-star text-warning"></span>
              <span className="fa fa-star-half-alt text-warning star-icon"></span>
            </div>
            <p className="fs-10">
              <span className="d-block">Location: {vehicle?.location}</span>
              <span className="d-block">Vehicle type: {vehicle?.type}</span>
              <span className="d-block">
                Vehicle Category: {vehicle?.category}
              </span>
            </p>
            <h4 className="d-flex align-items-center">
              <span className="text-warning me-2">${vehicle?.price}</span>
              <span className="me-1 fs-10 text-500">
                <del className="me-1">$2400</del>
                <strong>-50%</strong>
              </span>
            </h4>
            <p className="fs-10">
              Stock: <strong className="text-success">Available</strong>
            </p>
            <div className="row">
              <div className="col-auto px-2 px-md-3">
                <a className="btn btn-sm btn-primary" href="#!">
                  <span className="fas fa-cart-plus me-sm-2"></span>
                  <span className="d-none d-sm-inline-block">
                    Contact seller
                  </span>
                </a>
              </div>
              <div className="col-auto px-0">
                <a
                  className="btn btn-sm btn-outline-danger border border-300"
                  href="#!"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Add to Wish List"
                >
                  <span className="far fa-heart me-1"></span>282
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="mt-4">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active ps-0"
                    id="description-tab"
                    data-bs-toggle="tab"
                    href="#tab-description"
                    role="tab"
                    aria-controls="tab-description"
                    aria-selected="true"
                  >
                    Description
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link px-2 px-md-3"
                    id="specifications-tab"
                    data-bs-toggle="tab"
                    href="#tab-specifications"
                    role="tab"
                    aria-controls="tab-specifications"
                    aria-selected="false"
                  >
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link px-2 px-md-3"
                    id="reviews-tab"
                    data-bs-toggle="tab"
                    href="#tab-reviews"
                    role="tab"
                    aria-controls="tab-reviews"
                    aria-selected="false"
                  >
                    Reviews
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="tab-description"
                  role="tabpanel"
                  aria-labelledby="description-tab"
                >
                  <div className="mt-3">
                    <p>{vehicle?.description}</p>
                  </div>
                </div>
                <Features />
                <Reviews data={vehicleReviews} vehicleId={vehicle?.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleDetail;
