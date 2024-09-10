import React, { useEffect, useState } from "react";

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
      {windowWidth < 992 && (
        <nav className="navbar navbar-light navbar-glass navbar-top navbar-expand-lg">
          {/* Small screen navbar content */}
        </nav>
      )}

      {windowWidth >= 992 && windowWidth < 1200 && (
        <nav
          className="navbar navbar-light navbar-glass navbar-top navbar-expand-lg"
          data-double-top-nav="data-double-top-nav"
        >
          {/* Medium screen navbar content */}
        </nav>
      )}

      {windowWidth >= 1200 && (
        <nav className="navbar navbar-light navbar-vertical navbar-expand-xl">
          {/* Large screen vertical navbar content */}
        </nav>
      )}
    </>
  );
}

export default Navbar;
