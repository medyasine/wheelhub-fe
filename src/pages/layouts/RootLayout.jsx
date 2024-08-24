import React from "react";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="root-layout h-screen scroll-smooth">
      <Outlet setShowLogin={toggleLoginModal} />
    </div>
  );
}

export default RootLayout;
