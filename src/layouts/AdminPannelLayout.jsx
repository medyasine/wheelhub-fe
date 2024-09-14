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

function AdminPannelLayout() {
  const [navbarPosition, setNavbarPosition] = useState(
    localStorage.getItem("navbarPosition")
  );

  useEffect(() => {
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
        navbarTopVertical.remove(navbarTopVertical);
        navbarVertical.remove(navbarVertical);
        navbarTopCombo.remove(navbarTopCombo);
        navbarDoubleTop.remove(navbarDoubleTop);
      } else if (navbarPosition === "combo") {
        navbarVertical.removeAttribute("style");
        navbarTopCombo.removeAttribute("style");
        navbarTop.remove(navbarTop);
        navbarTopVertical.remove(navbarTopVertical);
        navbarDoubleTop.remove(navbarDoubleTop);
      } else if (navbarPosition === "double-top") {
        navbarDoubleTop.removeAttribute("style");
        navbarTopVertical.remove(navbarTopVertical);
        navbarVertical.remove(navbarVertical);
        navbarTop.remove(navbarTop);
        navbarTopCombo.remove(navbarTopCombo);
      } else {
        navbarVertical.removeAttribute("style");
        navbarTopVertical.removeAttribute("style");
        navbarTop.remove(navbarTop);
        navbarDoubleTop.remove(navbarDoubleTop);
        navbarTopCombo.remove(navbarTopCombo);
      }
    };

    handleNavbarPosition();
  }, [navbarPosition]);

  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (user && user.role !== "ADMIN") {
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
