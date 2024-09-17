import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function VehicleCreate() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    mileage: "",
    description: "",
    price: "",
    location: "",
    categoryId: 0,
    vehicleTypeId: 0,
    status: "in-stock",
    sellerId: 0,
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      images: [...e.target.files],
    });
  };

  const handleImagesUpload = async (vehicleId) => {
    const data = new FormData();
    // Loop through all selected files and append them to FormData
    for (let i = 0; i < formData.images.length; i++) {
      data.append("images", formData.images[i]);
    }

    const response = await fetch(
      `http://localhost:8080/api/vehicles/${vehicleId}/upload-images`,
      {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.ok) {
      const imageUrls = await response.json();
      console.log("Images uploaded at: ", imageUrls);
      return imageUrls;
    } else {
      console.error("Image upload failed");
    }
  };

  const validateForm = () => {
    const { make, model, year, mileage, description, price, location } =
      formData;
    if (
      !make ||
      !model ||
      !year ||
      !mileage ||
      !description ||
      !price ||
      !location
    ) {
      alert("All fields must be filled!");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const response = await fetch("http://localhost:8080/api/vehicles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Vehicle added successfully:", result);
      const imageUrls = handleImagesUpload(result.id);
    } else {
      console.error("Failed to add vehicle");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="card mb-3">
        <div className="card-body">
          <div className="row flex-between-center">
            <div className="col-md">
              <h5 className="mb-2 mb-md-0">Add a vehicle</h5>
            </div>
            <div className="col-auto">
              <button
                className="btn btn-link text-secondary p-0 me-3 fw-medium"
                type="reset"
              >
                Discard
              </button>
              <button className="btn btn-primary" type="submit">
                Add vehicle
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-0">
        <div className="col-lg-8 pe-lg-2">
          <div className="card mb-3">
            <div className="card-header bg-body-tertiary">
              <h6 className="mb-0">Basic information</h6>
            </div>
            <div className="card-body">
              <div className="row gx-2">
                <div className="col-12 mb-3">
                  <label className="form-label" htmlFor="make">
                    Make:
                  </label>
                  <input
                    className="form-control"
                    id="make"
                    name="make"
                    type="text"
                    value={formData.make}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 mb-3">
                  <label className="form-label" htmlFor="model">
                    Model:
                  </label>
                  <input
                    className="form-control"
                    id="model"
                    name="model"
                    type="text"
                    value={formData.model}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 mb-3">
                  <label className="form-label" htmlFor="year">
                    Year:
                  </label>
                  <input
                    className="form-control"
                    id="year"
                    name="year"
                    type="text"
                    value={formData.year}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 mb-3">
                  <label className="form-label" htmlFor="mileage">
                    Mileage:
                  </label>
                  <input
                    className="form-control"
                    id="mileage"
                    name="mileage"
                    type="text"
                    value={formData.mileage}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-header bg-body-tertiary">
              <h6 className="mb-0">Add images</h6>
            </div>
            <div className="card-body">
              <form
                className="dropzone dropzone-multiple p-0"
                id="dropzoneMultipleFileUpload"
                data-dropzone="data-dropzone"
                action="#!"
                data-options='{"acceptedFiles":"image/*"}'
              >
                <div className="fallback">
                  <input
                    name="file"
                    type="file"
                    multiple="multiple"
                    onChange={handleFileChange}
                  />
                </div>
                <div className="dz-message" data-dz-message="data-dz-message">
                  <img
                    className="me-2"
                    src="/assets/img/icons/cloud-upload.svg"
                    width="25"
                    alt=""
                  />
                  <span className="d-none d-lg-inline">
                    Drag your image here
                    <br />
                    or,
                  </span>
                  <span className="btn btn-link p-0 fs-10">Browse</span>
                </div>
                <div className="dz-preview dz-preview-multiple m-0 d-flex flex-column">
                  <div className="d-flex media align-items-center mb-3 pb-3 border-bottom btn-reveal-trigger">
                    <img
                      className="dz-image"
                      src="/assets/img/icons/cloud-upload.svg"
                      alt="..."
                      data-dz-thumbnail="data-dz-thumbnail"
                    />
                    <div className="flex-1 d-flex flex-between-center">
                      <div>
                        <h6 data-dz-name="data-dz-name"></h6>
                        <div className="d-flex align-items-center">
                          <p
                            className="mb-0 fs-10 text-400 lh-1"
                            data-dz-size="data-dz-size"
                          ></p>
                          <div className="dz-progress">
                            <span
                              className="dz-upload"
                              data-dz-uploadprogress=""
                            ></span>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown font-sans-serif">
                        <button
                          className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal dropdown-caret-none"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="fas fa-ellipsis-h"></span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end border py-2">
                          <a
                            className="dropdown-item"
                            href="#!"
                            data-dz-remove="data-dz-remove"
                          >
                            Remove File
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-header bg-body-tertiary">
              <h6 className="mb-0">Details</h6>
            </div>
            <div className="card-body">
              <div className="row gx-2">
                <div className="col-12 mb-3">
                  <label className="form-label" htmlFor="description">
                    Vehicle description:
                  </label>
                  <div className="create-product-description-textarea">
                    <textarea
                      className="tinymce form-control"
                      data-tinymce="data-tinymce"
                      name="description"
                      id="description"
                      required="required"
                      value={formData.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <div className="col-12 mb-3">
                  <label className="form-label" htmlFor="price">
                    Price:
                  </label>
                  <input
                    className="form-control"
                    id="price"
                    name="price"
                    type="text"
                    value={formData.price}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 mb-3">
                  <label className="form-label" htmlFor="location">
                    Location:
                  </label>
                  <input
                    className="form-control"
                    id="location"
                    name="location"
                    type="text"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3 mb-lg-0">
            <div className="card-header bg-body-tertiary">
              <h6 className="mb-0">Features</h6>
            </div>
            <div className="card-body">
              <div className="row gx-2 flex-between-center mb-3">
                <div className="col-sm-3">
                  <h6 className="mb-0 text-600">Processor</h6>
                </div>
                <div className="col-sm-9">
                  <div className="d-flex flex-between-center">
                    <h6 className="mb-0 text-700">
                      2.3GHz quad-core Intel Core i5
                    </h6>
                    <a
                      className="btn btn-sm btn-link text-danger"
                      href="#!"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Remove"
                    >
                      <span className="fs-10 fas fa-trash-alt"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row gy-3 gx-2">
                <div className="col-sm-3">
                  <input
                    className="form-control form-control-sm"
                    id="specification-label"
                    type="text"
                    placeholder="Label"
                  />
                </div>
                <div className="col-sm-9">
                  <div className="d-flex gap-2 flex-between-center">
                    <input
                      className="form-control form-control-sm"
                      id="specification-property"
                      type="text"
                      placeholder="Property"
                    />
                    <button className="btn btn-sm btn-falcon-default">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 ps-lg-2">
          <div className="sticky-sidebar">
            <div className="card mb-3">
              <div className="card-header bg-body-tertiary">
                <h6 className="mb-0">Select</h6>
              </div>
              <div className="card-body">
                <div className="row gx-2">
                  <div className="col-12 mb-3">
                    <label className="form-label" htmlFor="category">
                      Vehicle category:
                    </label>
                    <select
                      className="form-select"
                      id="category"
                      name="categoryId"
                      value={formData.categoryId}
                      onChange={handleChange}
                    >
                      <option value="computerAccessories">
                        Computer & Accessories
                      </option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label" htmlFor="vehicleType">
                      Vehicle Type:
                    </label>
                    <select
                      className="form-select"
                      id="vehicleType"
                      name="vehicleTypeId"
                      value={formData.vehicleTypeId}
                      onChange={handleChange}
                    >
                      <option value="laptop">Laptop</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label" htmlFor="sellerId">
                      Seller:
                    </label>
                    <select
                      className="form-select"
                      id="sellerId"
                      name="sellerId"
                      value={formData.sellerId}
                      onChange={handleChange}
                    >
                      <option value="laptop">Laptop</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-header bg-body-tertiary">
                <h6 className="mb-0">Stock status</h6>
              </div>
              <div className="card-body">
                <div className="form-check">
                  <input
                    className="form-check-input p-2"
                    id="in-stock"
                    type="radio"
                    name="status"
                    value="in-stock"
                    checked={formData.status === "in-stock"}
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label fs-9 fw-normal text-700"
                    htmlFor="in-stock"
                  >
                    In stock
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input p-2"
                    id="unavailable"
                    type="radio"
                    name="status"
                    value="unavailable"
                    checked={formData.status === "unavailable"}
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label fs-9 fw-normal text-700"
                    htmlFor="unavailable"
                  >
                    Unavailable
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input p-2"
                    id="to-be-announced"
                    type="radio"
                    name="status"
                    value="to-be-announced"
                    checked={formData.status === "to-be-announced"}
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label fs-9 fw-normal text-700"
                    htmlFor="to-be-announced"
                  >
                    To be announced
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <div className="row justify-content-between align-items-center">
            <div className="col-md">
              <h5 className="mb-2 mb-md-0">You're almost done!</h5>
            </div>
            <div className="col-auto">
              <button
                className="btn btn-link text-secondary p-0 me-3 fw-medium"
                type="reset"
              >
                Discard
              </button>
              <button className="btn btn-primary" type="submit">
                Add product
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
