import { Navigate, Outlet } from "react-router-dom";
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
import Loader from "../admin-pannel/components/Loader";
import { useLayoutEffect } from "react";

function AdminPannelLayout() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);
  const [navbarPosition, setNavbarPosition] = useState(
    localStorage.getItem("navbarPosition")
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (token) dispatch(getUser());
  }, [dispatch, token]);

  useLayoutEffect(() => {
    const handleNavbarPosition = () => {
      var navbarPosition = localStorage.getItem("navbarPosition");
      var navbarVertical = document.querySelector(".navbar-vertical");
      var navbarTopVertical = document.querySelector(".content .navbar-top");
      var navbarTop = document.querySelector(
        "[data-layout] .navbar-top:not([data-double-top-nav"
      );
      var navbarDoubleTop = document.querySelector("[data-double-top-nav]");
      var navbarTopCombo = document.querySelector(
        '.content [data-navbar-top="combo"]'
      );

      if (localStorage.getItem("navbarPosition") === "double-top") {
        document.documentElement.classList.toggle("double-top-nav-layout");
      }

      if (navbarPosition === "top") {
        navbarTop.removeAttribute("style");
        navbarTopVertical.remove();
        navbarVertical.remove();
        navbarTopCombo.remove();
        navbarDoubleTop.remove();
      } else if (navbarPosition === "combo") {
        navbarVertical.removeAttribute("style");
        navbarTopCombo.removeAttribute("style");
        navbarTop.remove();
        navbarTopVertical.remove();
        navbarDoubleTop.remove();
      } else if (navbarPosition === "double-top") {
        navbarDoubleTop.removeAttribute("style");
        navbarTopVertical.remove();
        navbarVertical.remove();
        navbarTop.remove();
        navbarTopCombo.remove();
      } else {
        navbarVertical.removeAttribute("style");
        navbarTopVertical.removeAttribute("style");
        navbarTop.remove();
        navbarDoubleTop.remove();
        navbarTopCombo.remove();
      }
    };

    handleNavbarPosition();
  }, [navbarPosition]);

  if (!token) {
    return <Navigate to="/login" />;
  }

  // if (!user) return <Loader />;

  if (user?.role !== "ADMIN") {
    return <Navigate to="/" />;
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
            <Outlet /> <NabvarLgData />
            <NavbarXl />
            <NavbarLg />
            <Footer />
          </div>
        </div>
      </main>
      <SettingsPannel />
    </>
  );
}

export default AdminPannelLayout;
