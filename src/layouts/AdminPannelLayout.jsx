import { Outlet } from "react-router-dom";
import NabvarLgData from "../admin-pannel/components/Navbar/NabvarLgData";
import NavbarXl from "../admin-pannel/components/Navbar/NavbarXl";
import NavbarLg from "../admin-pannel/components/Navbar/NavbarLg";
import { useEffect, useState } from "react";
import NavbarDataContent from "../admin-pannel/components/Navbar/NavbarDataContent";
import NavbarContent from "../admin-pannel/components/Navbar/NavbarContent";
import SettingsPannel from "../admin-pannel/components/SettingsPannel";
import Footer from "../admin-pannel/components/Footer/Footer";

function AdminPannelLayout() {
  const [navbarPosition, setNavbarPosition] = useState(
    localStorage.getItem("navbarPosition")
  );

  useEffect(() => {
    const handleNavbarPosition = () => {
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

      if (navbarPosition === "top") {
        if (navbarTop) navbarTop.style.display = "";
        if (navbarTopVertical) navbarTopVertical.remove();
        if (navbarVertical) navbarVertical.remove();
        if (navbarTopCombo) navbarTopCombo.remove();
        if (navbarDoubleTop) navbarDoubleTop.remove();
      } else if (navbarPosition === "combo") {
        if (navbarVertical) navbarVertical.style.display = "";
        if (navbarTopCombo) navbarTopCombo.style.display = "";
        if (navbarTop) navbarTop.remove();
        if (navbarTopVertical) navbarTopVertical.remove();
        if (navbarDoubleTop) navbarDoubleTop.remove();
      } else if (navbarPosition === "double-top") {
        if (navbarDoubleTop) navbarDoubleTop.style.display = "";
        if (navbarTopVertical) navbarTopVertical.remove();
        if (navbarVertical) navbarVertical.remove();
        if (navbarTop) navbarTop.remove();
        if (navbarTopCombo) navbarTopCombo.remove();
      } else {
        if (navbarVertical) navbarVertical.style.display = "";
        if (navbarTopVertical) navbarTopVertical.style.display = "";
        if (navbarTop) navbarTop.remove();
        if (navbarDoubleTop) navbarDoubleTop.remove();
        if (navbarTopCombo) navbarTopCombo.remove();
      }
    };

    handleNavbarPosition();
  }, [navbarPosition]);

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
