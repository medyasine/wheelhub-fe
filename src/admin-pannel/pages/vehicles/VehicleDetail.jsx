import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVehicle } from "../../../store/VehicleSlice";

function VehicleDetail() {
  const { id } = useParams();
  const { vehicle } = useSelector((state) => state.vehicle);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVehicle(id));
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
                  <div className="swiper-slide h-100">
                    <img
                      className="rounded-1 object-fit-cover h-100 w-100"
                      src="/assets/img/products/1-2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="swiper-slide h-100">
                    <img
                      className="rounded-1 object-fit-cover h-100 w-100"
                      src="/assets/img/products/1-3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="swiper-slide h-100">
                    <img
                      className="rounded-1 object-fit-cover h-100 w-100"
                      src="/assets/img/products/1-4.jpg"
                      alt=""
                    />
                  </div>
                  <div className="swiper-slide h-100">
                    <img
                      className="rounded-1 object-fit-cover h-100 w-100"
                      src="/assets/img/products/1-5.jpg"
                      alt=""
                    />
                  </div>
                  <div className="swiper-slide h-100">
                    <img
                      className="rounded-1 object-fit-cover h-100 w-100"
                      src="/assets/img/products/1-6.jpg"
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
              Apple MacBook Pro (15&quot; Retina, Touch Bar, 2.2GHz 6-Core Intel
              Core i7, 16GB RAM, 256GB SSD) - Space Gray (Latest Model)
            </h5>
            <a className="fs-10 mb-2 d-block" href="#!">
              Computer &amp; Accessories
            </a>
            <div className="fs-11 mb-3 d-inline-block text-decoration-none">
              <span className="fa fa-star text-warning"></span>
              <span className="fa fa-star text-warning"></span>
              <span className="fa fa-star text-warning"></span>
              <span className="fa fa-star text-warning"></span>
              <span className="fa fa-star-half-alt text-warning star-icon"></span>
              <span className="ms-1 text-600">(8)</span>
            </div>
            <p className="fs-10">
              Testing conducted by Apple in October 2018 using pre-production
              2.9GHz 6‑core Intel Core i9‑based 15-inch MacBook Pro systems with
              Radeon Pro Vega 20 graphics, and shipping 2.9GHz 6‑core Intel Core
              i9‑based 15‑inch MacBook Pro systems with Radeon Pro 560X
              graphics, both configured with 32GB of RAM and 4TB SSD.
            </p>
            <h4 className="d-flex align-items-center">
              <span className="text-warning me-2">$1200</span>
              <span className="me-1 fs-10 text-500">
                <del className="me-1">$2400</del>
                <strong>-50%</strong>
              </span>
            </h4>
            <p className="fs-10 mb-1">
              <span>Shipping Cost: </span>
              <strong>$50</strong>
            </p>
            <p className="fs-10">
              Stock: <strong className="text-success">Available</strong>
            </p>
            <p className="fs-10 mb-3">
              Tags:
              <a className="ms-2" href="#!">
                Computer,
              </a>
              <a className="ms-1" href="#!">
                Mac Book,
              </a>
              <a className="ms-1" href="#!">
                Mac Book Pro,
              </a>
              <a className="ms-1" href="#!">
                Laptop
              </a>
            </p>
            <div className="row">
              <div className="col-auto pe-0">
                <div
                  className="input-group input-group-sm"
                  data-quantity="data-quantity"
                >
                  <button
                    className="btn btn-sm btn-outline-secondary border border-300"
                    data-field="input-quantity"
                    data-type="minus"
                  >
                    -
                  </button>
                  <input
                    className="form-control text-center input-quantity input-spin-none"
                    type="number"
                    min="0"
                    value="0"
                    aria-label="Amount (to the nearest dollar)"
                    style={{ maxWidth: "50px" }}
                  />
                  <button
                    className="btn btn-sm btn-outline-secondary border border-300"
                    data-field="input-quantity"
                    data-type="plus"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="col-auto px-2 px-md-3">
                <a className="btn btn-sm btn-primary" href="#!">
                  <span className="fas fa-cart-plus me-sm-2"></span>
                  <span className="d-none d-sm-inline-block">Add To Cart</span>
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
                    Specifications
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
                    <p>
                      Over the years, Apple has built a reputation for releasing
                      its products with a lot of fanfare – but that didn’t
                      exactly happen for the MacBook Pro 2018. Rather, Apple’s
                      latest pro laptop experienced a subdued launch, in spite
                      of it offering a notable spec upgrade over the 2017 model
                      – along with an improved keyboard. And, as with previous
                      generations the 15-inch MacBook Pro arrives alongside a
                      13-inch model.
                    </p>
                    <p>
                      Apple still loves the MacBook Pro though, despite the
                      quiet release. This is because, while the iPhone XS and
                      iPad, along with the 12-inch MacBook, are aimed at
                      everyday consumers, the MacBook Pro has always aimed at
                      the creative and professional audience. This new MacBook
                      Pro brings a level of performance (and price) unlike its
                      more consumer-oriented devices.
                    </p>
                    <p>
                      Still, Apple wants mainstream users to buy the MacBook
                      Pro, too. So, if you’re just looking for the most powerful
                      MacBook on the market, you’ll love this new MacBook Pro.
                      Just keep in mind that, while the keyboard has been
                      updated, there are still some issues with it.
                    </p>
                    <p>
                      There’s enough of a difference between the two sizes when
                      it comes to performance to warrant two separate reviews,
                      and here we’ll be looking at how the flagship 15-inch
                      MacBook Pro performs in 2019.
                    </p>
                    <p>
                      Its build quality and design is batter than elit. Numquam
                      excepturi a debitis, sint voluptates, nam odit vel
                      delectus id repellendus vero reprehenderit quidem totam
                      praesentium vitae nesciunt deserunt. Sint, veniam?
                    </p>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab-specifications"
                  role="tabpanel"
                  aria-labelledby="specifications-tab"
                >
                  <table className="table fs-10 mt-3">
                    <tbody>
                      <tr>
                        <td className="bg-100" style={{ width: "30%" }}>
                          Processor
                        </td>
                        <td>2.3GHz quad-core Intel Core i5,</td>
                      </tr>
                      <tr>
                        <td className="bg-100" style={{ width: "30%" }}>
                          Memory
                        </td>
                        <td>8GB of 2133MHz LPDDR3 onboard memory</td>
                      </tr>
                      <tr>
                        <td className="bg-100" style={{ width: "30%" }}>
                          Brand Name
                        </td>
                        <td>Apple</td>
                      </tr>
                      <tr>
                        <td className="bg-100" style={{ width: "30%" }}>
                          Model
                        </td>
                        <td>Mac Book Pro</td>
                      </tr>
                      <tr>
                        <td className="bg-100" style={{ width: "30%" }}>
                          Display
                        </td>
                        <td>
                          13.3-inch (diagonal) LED-backlit display with IPS
                          technology
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-100" style={{ width: "30%" }}>
                          Storage
                        </td>
                        <td>512GB SSD</td>
                      </tr>
                      <tr>
                        <td className="bg-100" style={{ width: "30%" }}>
                          Graphics
                        </td>
                        <td>Intel Iris Plus Graphics 655</td>
                      </tr>
                      <tr>
                        <td className="bg-100" style={{ width: "30%" }}>
                          Weight
                        </td>
                        <td>7.15 pounds</td>
                      </tr>
                      <tr>
                        <td className="bg-100" style={{ width: "30%" }}>
                          Finish
                        </td>
                        <td>Silver, Space Gray</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab-reviews"
                  role="tabpanel"
                  aria-labelledby="reviews-tab"
                >
                  <div className="row mt-3">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                      <div className="mb-1">
                        <span className="fa fa-star text-warning fs-10"></span>
                        <span className="fa fa-star text-warning fs-10"></span>
                        <span className="fa fa-star text-warning fs-10"></span>
                        <span className="fa fa-star text-warning fs-10"></span>
                        <span className="fa fa-star text-warning fs-10"></span>
                        <span className="ms-3 text-1100 fw-semi-bold">
                          Awesome support, great code 😍
                        </span>
                      </div>
                      <p className="fs-10 mb-2 text-600">
                        By Drik Smith • October 14, 2019
                      </p>
                      <p className="mb-0">
                        You shouldnt need to read a review to see how nice and
                        polished this theme is. So Ill tell you something you
                        wont find in the demo. After the download I had a
                        technical question, emailed the team and got a response
                        right from the team CEO with helpful advice.
                      </p>
                      <hr className="my-4" />
                      <div className="mb-1">
                        <span className="fa fa-star text-warning fs-10"></span>
                        <span className="fa fa-star text-warning fs-10"></span>
                        <span className="fa fa-star text-warning fs-10"></span>
                        <span className="fa fa-star text-warning fs-10"></span>
                        <span className="fa fa-star-half-alt text-warning star-icon fs-10"></span>
                        <span className="ms-3 text-1100 fw-semi-bold">
                          Outstanding Design, Awesome Support
                        </span>
                      </div>
                      <p className="fs-10 mb-2 text-600">
                        By Liane • December 14, 2019
                      </p>
                      <p className="mb-0">
                        This really is an amazing template - from the style to
                        the font - clean layout. SO worth the money! The demo
                        pages show off what Bootstrap 4 can impressively do.
                        Great template!! Support response is FAST and the team
                        is amazing - communication is important.
                      </p>
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
                          <label
                            className="form-label"
                            htmlFor="formGroupNameInput"
                          >
                            Name:
                          </label>
                          <input
                            className="form-control"
                            id="formGroupNameInput"
                            type="text"
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            className="form-label"
                            htmlFor="formGroupEmailInput"
                          >
                            Email:
                          </label>
                          <input
                            className="form-control"
                            id="formGroupEmailInput"
                            type="email"
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            className="form-label"
                            htmlFor="formGrouptextareaInput"
                          >
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleDetail;
