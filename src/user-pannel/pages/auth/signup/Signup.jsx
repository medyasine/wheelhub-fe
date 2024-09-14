import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../../../../store/UserSlice";

function Signup() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    confirm: "",
    email: "",
    role: "guest",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
    if (token) {
      if (user.role === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  }, [dispatch, token, user, navigate]);

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormData((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.username.trim() ||
      !formData.email.trim()
    ) {
      setError("All fields are required");
      return;
    }

    if (formData.username.length < 3) {
      setError("Username must be at least 3 characters long.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Valid email is required.");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (formData.password !== formData.confirm) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.role == "guest") {
      formData.role = "user";
    }

    formData.role = formData.role.toLocaleUpperCase();
    try {
      const response = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await response.json();

      if (response.ok) {
        navigate("/login");
        setFormData({
          name: "",
          username: "",
          password: "",
          confirm: "",
          email: "",
          role: "guest",
        });
      } else {
        setError(json.error || "An error occurred during registration.");
      }
    } catch (error) {
      setError("Failed to connect to the server.");
      console.log(error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row min-vh-100 flex-center g-0">
        <div className="col-lg-8 col-xxl-5 py-3 position-relative">
          <img
            className="bg-auth-circle-shape"
            src="/assets/img/icons/spot-illustrations/bg-shape.png"
            alt=""
            width="250"
          />
          <img
            className="bg-auth-circle-shape-2"
            src="/assets/img/icons/spot-illustrations/shape-1.png"
            alt=""
            width="150"
          />
          <div className="card overflow-hidden z-1">
            <div className="card-body p-0">
              <div className="row g-0 h-100">
                <div className="col-md-5 text-center bg-card-gradient">
                  <div
                    className="position-relative p-4 pt-md-5 pb-md-7"
                    data-bs-theme="light"
                  >
                    <div
                      className="bg-holder bg-auth-card-shape"
                      style={{
                        backgroundImage:
                          "url(/assets/img/icons/spot-illustrations/half-circle.png)",
                      }}
                    ></div>
                    <div className="z-1 position-relative">
                      <Link
                        className="link-light mb-4 font-sans-serif fs-5 d-inline-block fw-bolder"
                        to="/"
                      >
                        Wheelhub
                      </Link>
                      <p className="opacity-75 text-white">
                        With Wheelhub, seamlessly connect with the automotive
                        community, buy, sell, and trade vehicles while we handle
                        the technical aspects, letting you focus on what matters
                        most.
                      </p>
                    </div>
                  </div>
                  <div
                    className="mt-3 mb-4 mt-md-4 mb-md-5"
                    data-bs-theme="light"
                  >
                    <p className="pt-3 text-white">
                      Have an account?
                      <br />
                      <Link
                        className="btn btn-outline-light mt-2 px-4"
                        to="/login"
                      >
                        Log In
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="col-md-7 d-flex flex-center">
                  <div className="p-4 p-md-5 flex-grow-1">
                    <h3>Register</h3>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="card-name">
                          Name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          autoComplete="on"
                          id="card-name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="card-username">
                          Username
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          autoComplete="on"
                          id="card-username"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="card-email">
                          Email address
                        </label>
                        <input
                          className="form-control"
                          type="email"
                          autoComplete="on"
                          id="card-email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="row gx-2">
                        <div className="mb-3 col-sm-6">
                          <label className="form-label" htmlFor="card-password">
                            Password
                          </label>
                          <input
                            className="form-control"
                            type="password"
                            autoComplete="on"
                            id="card-password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-3 col-sm-6">
                          <label
                            className="form-label"
                            htmlFor="card-confirm-password"
                          >
                            Confirm Password
                          </label>
                          <input
                            className="form-control"
                            type="password"
                            autoComplete="on"
                            id="card-confirm-password"
                            name="confirm"
                            value={formData.confirm}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-3 col-sm-6">
                          <label
                            className="form-label me-3"
                            htmlFor="card-confirm-password"
                          >
                            Choose your role
                          </label>
                          <div className="d-flex align-items-center">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="role-buyer"
                                name="role"
                                value="buyer"
                                checked={formData.role === "buyer"}
                                onChange={handleChange}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="role-buyer"
                              >
                                Buyer
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="role-seller"
                                name="role"
                                value="seller"
                                checked={formData.role === "seller"}
                                onChange={handleChange}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="role-seller"
                              >
                                Seller
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="role-guest"
                                name="role"
                                value="guest"
                                checked={formData.role === "guest"}
                                onChange={handleChange}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="role-guest"
                              >
                                Guest
                              </label>
                            </div>
                          </div>
                        </div>
                        {error && (
                          <span className="text-danger mb-3">{error}</span>
                        )}
                      </div>
                      <div className="mb-3">
                        <button
                          className="btn btn-primary d-block w-100 mt-3"
                          type="submit"
                          name="submit"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                    <div className="position-relative mt-4">
                      <hr />
                      <div className="divider-content-center">
                        or register with
                      </div>
                    </div>
                    <div className="row g-2 mt-2">
                      <div className="col-sm-6">
                        <a
                          className="btn btn-outline-google-plus btn-sm d-block w-100"
                          href="#"
                        >
                          <span
                            className="fab fa-google-plus-g me-2"
                            data-fa-transform="grow-8"
                          ></span>
                          google
                        </a>
                      </div>
                      <div className="col-sm-6">
                        <a
                          className="btn btn-outline-facebook btn-sm d-block w-100"
                          href="#"
                        >
                          <span
                            className="fab fa-facebook-square me-2"
                            data-fa-transform="grow-8"
                          ></span>
                          facebook
                        </a>
                      </div>
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

export default Signup;
