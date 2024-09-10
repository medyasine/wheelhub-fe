import React, { useEffect, useState } from "react";
import NavbarLg from "./NavbarLg";
import NabvarLgData from "./NabvarLgData";
import NavbarXl from "./NavbarXl";

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth < 992 && <NavbarLg />}

      {windowWidth >= 992 && windowWidth < 1200 && <NabvarLgData />}

      {windowWidth >= 1200 && <NavbarXl />}
    </>
  );
}

export default Navbar;
