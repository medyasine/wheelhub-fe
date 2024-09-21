import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVehicle } from "../../../../store/VehicleSlice";
import Reviews from "./Reviews";
import Features from "./Features";
import {
  getRatingAvgForVehicle,
  getVehicleReviews,
} from "../../../../store/ReviewSlice";
import { getVehicleFeaturesForVehicle } from "../../../../store/VehicleFeatureSlice";
import { getLatestPriceDropForVehicle } from "../../../../store/PriceDropSlice";
import StarRating from "../../../components/StarRating";
import Loader from "../../../components/Loader";
import Alert from "../../../components/Alert";

function VehicleDetail() {
  const { id } = useParams();
  const { token } = useSelector((state) => state.auth);
  const [vehicleImages, setVehicleImages] = useState([]);

  const { vehicle, isVehicleLoading } = useSelector((state) => state.vehicle);

  const {
    vehicleReviews,
    ratingAvgForVehicle,
    isLoadingVehicleReviews,
    isLoadingRatingAvg,
  } = useSelector((state) => state.review);

  const { latestPriceDropForVehicle, isLatestPriceDropForVehicleLoading } =
    useSelector((state) => state.priceDrop);
  const { vehicleFeaturesForVehicle, isVehicleFeaturesForVehicleLoading } =
    useSelector((state) => state.vehicleFeature);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVehicle(id));
    dispatch(getVehicleReviews({ vehicleId: id, reviewType: "USER_REVIEW" }));
    dispatch(getVehicleFeaturesForVehicle(id));
    dispatch(getLatestPriceDropForVehicle(id));
    dispatch(getRatingAvgForVehicle(id));
  }, [id, dispatch]);

  useEffect(() => {
    const getImagesForVehicle = async () => {
      const res = await fetch(
        `http://localhost:8080/api/vehicle-images/vehicle/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!res.ok) throw new Error("Could not fetch vehicle image");
      const data = await res.json();
      setVehicleImages(data);
    };
    getImagesForVehicle();
  }, [id, token]);

  if (isLoadingRatingAvg || !vehicle || isLatestPriceDropForVehicleLoading) {
    return <Loader />;
  }

  const formatStatus = (status) => {
    return status.replace(/_/g, " ").toLowerCase();
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0">
            {vehicleImages.length > 0 ? (
              <div className="product-slider" id="galleryTop">
                <div
                  className="swiper theme-slider position-lg-absolute all-0"
                  data-swiper='{"autoHeight":true,"spaceBetween":5,"loop":true,"loopedSlides":5,"thumb":{"spaceBetween":5,"slidesPerView":5,"loop":true,"freeMode":true,"grabCursor":true,"loopedSlides":5,"centeredSlides":true,"slideToClickedSlide":true,"watchSlidesVisibility":true,"watchSlidesProgress":true,"parent":"#galleryTop"},"slideToClickedSlide":true}'
                >
                  <div className="swiper-wrapper h-100">
                    {vehicleImages.map((ele) => (
                      //from local

                      // <div key={ele.id} className="swiper-slide h-100">
                      //   <img
                      //     className="rounded-1 object-fit-cover h-100 w-100"
                      //     src={`http://localhost:8080` + ele.imageUrl}
                      //     alt=""
                      //   />
                      // </div>

                      // from cloud
                      <div key={ele.id} className="swiper-slide h-100">
                        <img
                          className="rounded-1 object-fit-cover h-100 w-100"
                          src={ele.imageUrl}
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
                  <div className="swiper-nav">
                    <div className="swiper-button-next swiper-button-white"></div>
                    <div className="swiper-button-prev swiper-button-white"></div>
                  </div>
                </div>
              </div>
            ) : (
              <Alert msg={"Vehicle does not have images"} status={"info"} />
            )}
          </div>
          <div className="col-lg-6">
            <h5>
              {vehicle?.make} - {vehicle?.model} - {vehicle?.year}
            </h5>
            <a className="fs-10 mb-2 d-block" href="#!">
              {vehicle?.mileage} km
            </a>
            <div className="fs-11 mb-3 d-inline-block text-decoration-none">
              <div className="fs-11 mb-3 d-inline-block text-decoration-none">
                {ratingAvgForVehicle && (
                  <StarRating rating={ratingAvgForVehicle} />
                )}
              </div>
            </div>
            <p className="fs-10">
              <span className="d-block">Location: {vehicle?.location}</span>
              <span className="d-block">
                Vehicle type: {vehicle?.type?.typeName}
              </span>
              <span className="d-block">
                Vehicle Category: {vehicle?.category?.categoryName}
              </span>
            </p>
            <h4 className="d-flex align-items-center">
              <span className="text-warning me-2">
                $
                {latestPriceDropForVehicle.id
                  ? latestPriceDropForVehicle.oldPrice
                  : vehicle.price}
              </span>
              {latestPriceDropForVehicle.id && (
                <span className="me-1 fs-10 text-500">
                  <del className="me-1">
                    ${latestPriceDropForVehicle?.newPrice}
                  </del>
                  <strong>
                    -
                    {latestPriceDropForVehicle?.oldPrice &&
                    latestPriceDropForVehicle?.newPrice
                      ? (
                          ((latestPriceDropForVehicle.oldPrice -
                            latestPriceDropForVehicle.newPrice) /
                            latestPriceDropForVehicle.oldPrice) *
                          100
                        ).toFixed(2)
                      : 0}
                    %
                  </strong>
                </span>
              )}
            </h4>

            <p className="fs-10">
              Status:{" "}
              <strong className="text-success">
                {vehicle && formatStatus(vehicle.status)}
              </strong>
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
                <Features data={vehicleFeaturesForVehicle} />
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
