import { login } from "../../../../store/AuthSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../../../../store/UserSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const token = useSelector((state) => state.auth.token);

  const [error, setError] = useState("");
  const [isTokenVerified, setIsTokenVerified] = useState(false);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  function hamdleChange(e) {
    const { value, name } = e.target;
    setLoginData((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  }

  const verifyToken = async () => {
    if (token && !isTokenVerified) {
      try {
        const response = await fetch("http://localhost:8080/verify-token", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();

        if (response.ok && !data.error) {
          setIsTokenVerified(true);
          setError("You are already loged in!");
        } else {
          setError(data.error || "Token verification failed");
          logout();
        }
      } catch (err) {
        setError("An error occurred");
        logout();
      }
    }
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    verifyToken();

    if (!loginData.username.trim() || !loginData.password.trim()) {
      setError("ALl fields are required.");
      return;
    }

    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      setError("Invalid login credentials.");
    } else {
      const json = await response.json();
      dispatch(login(json));
      if (token) dispatch(getUser());
      if (user) {
        if (user.role == "ADMIN") navigate("/admin");
        else navigate("/");
      }
      setLoginData({
        username: "",
        password: "",
      });
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
                    <p className="text-white">
                      Don&apos;t have an account?
                      <br />
                      <Link
                        className="text-decoration-underline link-light"
                        to="/signup"
                      >
                        Get started!
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="col-md-7 d-flex flex-center">
                  <div className="p-4 p-md-5 flex-grow-1">
                    <div className="row flex-between-center">
                      <div className="col-auto">
                        <h3>Account Login</h3>
                      </div>
                    </div>
                    <form onSubmit={handelSubmit}>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="card-username">
                          Username
                        </label>
                        <input
                          className="form-control"
                          id="card-username"
                          type="text"
                          name="username"
                          value={loginData.username}
                          onChange={hamdleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <div className="d-flex justify-content-between">
                          <label className="form-label" htmlFor="card-password">
                            Password
                          </label>
                        </div>
                        <input
                          className="form-control"
                          id="card-password"
                          type="password"
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
                              id="card-checkbox"
                            />
                            <label
                              className="form-check-label mb-0"
                              htmlFor="card-checkbox"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>
                        <div className="col-auto">
                          <a className="fs-10" href="forgot-password.html">
                            Forgot Password?
                          </a>
                        </div>
                      </div>
                      {error && (
                        <span className="text-danger mb-3">{error}</span>
                      )}
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
                      <div className="divider-content-center">
                        or log in with
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

export default Login;
