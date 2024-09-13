import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function RegisterModal() {
  const { token } = useSelector((state) => state.auth);
  if (token) {
    return;
  }

  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    confirm: "",
    email: "",
  });

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
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body p-4">
            <div className="row text-start justify-content-between align-items-center mb-2">
              <div className="col-auto">
                <h5 id="modalLabel">Register</h5>
              </div>
              <div className="col-auto">
                <p className="fs-10 text-600 mb-0">
                  Have an account?
                  <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  autoComplete="on"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  autoComplete="on"
                  placeholder="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="email"
                  autoComplete="on"
                  placeholder="Email address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="row gx-2">
                <div className="mb-3 col-sm-6">
                  <input
                    className="form-control"
                    type="password"
                    autoComplete="on"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 col-sm-6">
                  <input
                    className="form-control"
                    type="password"
                    autoComplete="on"
                    placeholder="Confirm Password"
                    name="confirm"
                    value={formData.confirm}
                    onChange={handleChange}
                  />
                </div>
                {error && <span className="text-danger mb-3">{error}</span>}
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
              <div className="divider-content-center">or register with</div>
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
  );
}

export default RegisterModal;
