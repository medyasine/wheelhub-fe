import { login } from "../../store/AuthSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function LoginDropDown() {
  const { token } = useSelector((state) => state.auth);
  const [error, setError] = useState("");

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();

  if (token) {
    return;
  }


  function hamdleChange(e) {
    const { value, name } = e.target;
    setLoginData((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  }

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (!loginData.username.trim() || !loginData.password.trim()) {
      setError("ALl fields are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      const json = await response.json();

      if (!response.ok) {
        setError(json.error || "Invalid login credentials.");
      } else {
        dispatch(login(json));
        setLoginData({
          username: "",
          password: "",
        });
      }
    } catch (error) {
      setError("Failed to connect to the server.");
      console.log(error);
    }
  };

  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        id="navbarDropdownLogin"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Login
      </a>
      <div
        className="dropdown-menu dropdown-caret dropdown-menu-end dropdown-menu-card"
        aria-labelledby="navbarDropdownLogin"
      >
        <div className="card shadow-none navbar-card-login">
          <div className="card-body fs-10 p-4 fw-normal">
            <div className="row text-start justify-content-between align-items-center mb-2">
              <div className="col-auto">
                <h5 className="mb-0">Log in</h5>
              </div>
              <div className="col-auto">
                <p className="fs-10 text-600 mb-0">
                  or
                  <Link to="/signup">Create an account</Link>
                </p>
              </div>
            </div>
            <form onSubmit={handelSubmit}>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={loginData.username}
                  onChange={hamdleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={loginData.password}
                  onChange={hamdleChange}
                />
              </div>
              <div className="row flex-between-center">
                <div className="col-auto">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="modal-checkbox"
                    />
                    <label
                      className="form-check-label mb-0"
                      htmlFor="modal-checkbox"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="col-auto">
                  <a
                    className="fs-10"
                    href="authentication/simple/forgot-password.html"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
              {error && <span className="text-danger mb-3">{error}</span>}
              <div className="mb-3">
                <button
                  className="btn btn-primary d-block w-100 mt-3"
                  type="submit"
                  name="submit"
                >
                  Log in
                </button>
              </div>
            </form>
            <div className="position-relative mt-4">
              <hr />
              <div className="divider-content-center">or log in with</div>
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
    </li>
  );
}

export default LoginDropDown;
