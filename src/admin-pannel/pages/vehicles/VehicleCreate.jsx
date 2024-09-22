import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersByrole } from "../../../store/UserSlice";
import { getVehicleCategories } from "../../../store/VehicleCategorySlice";
import { getVehicleTypes } from "../../../store/VehicleTypeSlice";
import Loader from "../../components/Loader";
import Alert from "../../components/Alert";

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
    vehicleCategoryId: "",
    vehicleTypeId: "",
    status: "IN_STOCK",
    sellerId: "",
  });

  const [images, setImages] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [features, setFeatures] = useState([]);
  const [fError, setFerror] = useState("");
  const [firstError, setFirstError] = useState("");

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
    for (const image of images) {
      data.append("images", image);
    }

    const response = await fetch(
      `http://localhost:8080/api/vehicles/${vehicleId}/uploadCloud`,
      {
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.ok) {
      const imageUrls = await response.json();
      return imageUrls;
    } else {
      console.error("Image upload failed");
    }
  };

  const validateForm = () => {
    const {
      make,
      model,
      year,
      mileage,
      description,
      price,
      location,
      vehicleCategoryId,
      vehicleTypeId,
      sellerId,
    } = formData;
    let errors = [];

    if (!make.trim()) errors.push("Make is required.");
    if (!model.trim()) errors.push("Model is required.");
    if (!year || isNaN(year) || year.length !== 4)
      errors.push("Enter a valid year.");
    if (!mileage || isNaN(mileage)) errors.push("Enter valid mileage.");
    if (!description.trim())
      errors.push("Description is required.");
    if (!price || isNaN(price)) errors.push("Enter a valid price.");
    if (!location.trim()) errors.push("Location is required.");
    if (!vehicleCategoryId || isNaN(vehicleCategoryId))
      errors.push("Vehicle category is required.");
    if (!vehicleTypeId || isNaN(vehicleCategoryId))
      errors.push("Vehicle type is required.");
    if (!sellerId || isNaN(sellerId)) errors.push("Seller ID is required.");

    if (errors.length > 0) {
      setFirstError(errors[0]);
      return false;
    }
    setFirstError("");
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
      body: JSON.stringify({ ...formData, features }),
    });

    if (response.ok) {
      const result = await response.json();
      handleImagesUpload(result.id);
      setShowAlert(true);
      setFormData({
        make: "",
        model: "",
        year: "",
        mileage: "",
        description: "",
        price: "",
        location: "",
        vehicleCategoryId: "",
        vehicleTypeId: "",
        status: "IN_STOCK",
        sellerId: "",
      });
    } else {
      console.error("Failed to add vehicle");
    }
  };

  const handleAddFeature = () => {
    const featureName = document.getElementById("specification-label").value;
    const description = document.getElementById("specification-property").value;

    if (
      !featureName ||
      !description.trim() ||
      !featureName.trim()
    ) {
      setFerror("fields are required");
      return;
    }
    const newFeature = { featureName, description };
    setFeatures([...features, newFeature]);
    document.getElementById("specification-label").value = "";
    document.getElementById("specification-property").value = "";
  };

  const handleRemoveFeature = (index) => {
    const updatedFeatures = features.filter((_, idx) => idx !== index);
    setFeatures(updatedFeatures);
  };

  return (
    <form onSubmit={handleSubmit}>
      {firstError && (
        <Alert
          msg={firstError}
          status={"danger"}
          onClose={() => setFirstError(null)}
        />
      )}
      {showAlert && (
        <Alert
          msg={"vehicle added"}
          status={"success"}
          onClose={() => setShowAlert(false)}
        />
      )}
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
              {features.map((feature, index) => (
                <div className="row gx-2 flex-between-center mb-3" key={index}>
                  <div className="col-sm-3">
                    <h6 className="mb-0 text-600">{feature.featureName}</h6>
                  </div>
                  <div className="col-sm-9">
                    <div className="d-flex flex-between-center">
                      <h6 className="mb-0 text-700">{feature.description}</h6>
                      <button
                        className="btn btn-sm btn-link text-danger"
                        onClick={() => handleRemoveFeature(index)}
                      >
                        <span className="fs-10 fas fa-trash-alt"></span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="row gy-3 gx-2">
                <div className="col-sm-3">
                  <input
                    className="form-control form-control-sm"
                    id="specification-label"
                    type="text"
                    placeholder="Feature name"
                  />
                </div>
                <div className="col-sm-9">
                  <div className="d-flex gap-2 flex-between-center">
                    <input
                      className="form-control form-control-sm"
                      id="specification-property"
                      type="text"
                      placeholder="Description"
                    />
                    <button
                      className="btn btn-sm btn-falcon-default"
                      onClick={handleAddFeature}
                      type="button"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
              {fError && <span className="text-danger"> {fError}</span>}
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
                    value="IN_STOCK"
                    checked={formData.status === "IN_STOCK"}
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
                    value="UNAVAILABLE"
                    checked={formData.status === "UNAVAILABLE"}
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
                    value="TO_BE_ANNOUNCED"
                    checked={formData.status === "TO_BE_ANNOUNCED"}
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
      <div className=" mt-3">
        {firstError && (
          <Alert
            msg={firstError}
            status={"danger"}
            onClose={() => setFirstError(null)}
          />
        )}
        {showAlert && (
          <Alert
            msg={"vehicle added"}
            status={"success"}
            onClose={() => setShowAlert(false)}
          />
        )}
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
