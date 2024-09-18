import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersByrole } from "../../../store/UserSlice";
import { getVehicleCategories } from "../../../store/VehicleCategorySlice";
import { getVehicleTypes } from "../../../store/VehicleTypeSlice";
import Loader from "../../components/Loader";

export default function VehicleCreate() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { usersByrole, isUsersByroleLoading } = useSelector(
    (state) => state.user
  );
  const { vehicleCatgories, isVehicleCategoriesLoading } = useSelector(
    (state) => state.vehicleCategory
  );
  const { vehicleTypes, isVechileTypesLoading } = useSelector(
    (state) => state.vehicleType
  );

  useEffect(() => {
    dispatch(getUsersByrole("SELLER"));
    dispatch(getVehicleCategories());
    dispatch(getVehicleTypes());
  }, [dispatch]);

  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    mileage: "",
    description: "",
    price: "",
    location: "",
    vehicleCategoryId: 0,
    vehicleTypeId: 0,
    status: "in-stock",
    sellerId: 0,
  });

  const [images, setImages] = useState([]);

  if (
    isUsersByroleLoading ||
    isVechileTypesLoading ||
    isVehicleCategoriesLoading
  )
    return <Loader />;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleImagesUpload = async (vehicleId) => {
    const data = new FormData();
    // Loop through all selected files and append them to FormData
    for (let i = 0; i < images.length; i++) {
      data.append("images", images[i]);
    }

    const response = await fetch(
      `http://localhost:8080/api/vehicles/${vehicleId}/upload`,
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
    formData.status = formData.status.toLocaleUpperCase();

    const response = await fetch("http://localhost:8080/api/vehicles/", {
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
      console.log(imageUrls);
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
              <div className="mb-3">
                <label htmlFor="formFileMultiple" className="form-label">
                  Upload Images
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFileMultiple"
                  multiple
                  onChange={handleFileChange}
                  name="images"
                />
              </div>
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
                      name="vehicleCategoryId"
                      value={formData.vehicleCategoryId}
                      onChange={handleChange}
                    >
                      {vehicleCatgories.map((ele) => (
                        <option key={ele.id} value={ele.id}>
                          {ele.categoryName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-12 mb-3">
                    <label className="form-label" htmlFor="vehicleType">
                      Vehicle Type:
                    </label>
                    <select
                      className="form-select"
                      data-options='{"removeItemButton":true,"placeholder":true}'
                      size="1"
                      id="vehicleType"
                      name="vehicleTypeId"
                      value={formData.vehicleTypeId}
                      onChange={handleChange}
                    >
                      {vehicleTypes.map((ele) => (
                        <option key={ele.id} value={ele.id}>
                          {ele.typeName}
                        </option>
                      ))}
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
                      {usersByrole.map((ele) => (
                        <option key={ele.id} value={ele.id}>
                          {ele.username}
                        </option>
                      ))}
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
              <h5 className="mb-2 mb-md-0">You&apos;re almost done!</h5>
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
