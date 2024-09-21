import { Outlet, useNavigate } from "react-router-dom";
import NabvarLgData from "../admin-pannel/components/Navbar/NabvarLgData";
import NavbarXl from "../admin-pannel/components/Navbar/NavbarXl";
import NavbarLg from "../admin-pannel/components/Navbar/NavbarLg";
import { useEffect, useState } from "react";
import NavbarDataContent from "../admin-pannel/components/Navbar/NavbarDataContent";
import NavbarContent from "../admin-pannel/components/Navbar/NavbarContent";
import SettingsPannel from "../admin-pannel/components/SettingsPannel";
import Footer from "../admin-pannel/components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/UserSlice";
import { logout } from "../store/AuthSlice";

function AdminPannelLayout() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);
  const [navbarPosition, setNavbarPosition] = useState(
    localStorage.getItem("navbarPosition")
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isTokenVerified, setIsTokenVerified] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
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
            dispatch(getUser());
          } else {
            setError(data.error || "Token verification failed");
            logout();
            navigate("/login");
          }
        } catch (err) {
          setError("An error occurred");
          logout();
          navigate("/login");
        }
      } else if (!token) {
        navigate("/login");
      }
      setIsLoading(false);
    };

    verifyToken();
  }, [dispatch, token, navigate, isTokenVerified]);

  useEffect(() => {
    if (!isLoading && user && user.role !== "ADMIN") {
      navigate("/");
    }
  }, [user, navigate, isLoading]);

  useEffect(() => {
    if (user) {
      setIsLoading(false);
    }
  }, [user]);

  const handleNavbarPosition = () => {
    const navbarPosition = localStorage.getItem("navbarPosition");
    const navbarVertical = document.querySelector(".navbar-vertical");
    const navbarTopVertical = document.querySelector(".content .navbar-top");
    const navbarTop = document.querySelector(
      "[data-layout] .navbar-top:not([data-double-top-nav])"
    );
    const navbarDoubleTop = document.querySelector("[data-double-top-nav]");
    const navbarTopCombo = document.querySelector(
      '.content [data-navbar-top="combo"]'
    );

    if (navbarPosition === "double-top") {
      document.documentElement.classList.toggle("double-top-nav-layout");
    }

    const removeIfExists = (element) => {
      if (element && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };

    if (navbarPosition === "top") {
      if (navbarTop) navbarTop.removeAttribute("style");
      removeIfExists(navbarTopVertical);
      removeIfExists(navbarVertical);
      removeIfExists(navbarTopCombo);
      removeIfExists(navbarDoubleTop);
    } else if (navbarPosition === "combo") {
      if (navbarVertical) navbarVertical.removeAttribute("style");
      if (navbarTopCombo) navbarTopCombo.removeAttribute("style");
      removeIfExists(navbarTop);
      removeIfExists(navbarTopVertical);
      removeIfExists(navbarDoubleTop);
    } else if (navbarPosition === "double-top") {
      if (navbarDoubleTop) navbarDoubleTop.removeAttribute("style");
      removeIfExists(navbarTopVertical);
      removeIfExists(navbarVertical);
      removeIfExists(navbarTop);
      removeIfExists(navbarTopCombo);
    } else {
      if (navbarVertical) navbarVertical.removeAttribute("style");
      if (navbarTopVertical) navbarTopVertical.removeAttribute("style");
      removeIfExists(navbarTop);
      removeIfExists(navbarDoubleTop);
      removeIfExists(navbarTopCombo);
    }
  };
  useEffect(() => {
    handleNavbarPosition();
  }, [navbarPosition]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <main className="main" id="top">
        <div className="container" data-layout="container">
          <NabvarLgData />
          <NavbarXl />
          <NavbarLg />
          <div className="content">
            <NavbarContent />
            <NavbarDataContent />
            <Outlet />
            <Footer />
          </div>
        </div>
      </main>
      <SettingsPannel />
    </>
  );
}

export default AdminPannelLayout;
