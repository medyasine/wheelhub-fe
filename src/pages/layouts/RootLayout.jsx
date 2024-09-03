import React, { useState } from "react";
import { Outlet } from "react-router-dom";

function RootLayout() {
  const [isLoginModalVisible, setLoginModalVisible] = useState(false);

  const toggleLoginModal = () => {
    setLoginModalVisible(!isLoginModalVisible);
  };

  return (
    <div className="root-layout h-screen scroll-smooth">
      <Outlet setShowLogin={toggleLoginModal} />
    </div>
  );
}

export default RootLayout;
