import { Outlet } from "react-router-dom";
import SettingsPannel from "../admin-pannel/components/SettingsPannel";
import LandingFooter from "../user-pannel/components/LandingFooter";
import Header from "../user-pannel/components/Header";
import RegisterModal from "../user-pannel/components/RegisterModal";

function RootLayout() {
  return (
    <>
      <main className="main" id="top">
        <Header />
        <RegisterModal />
        <Outlet />
        <LandingFooter />
      </main>
      <SettingsPannel />
    </>
  );
}

export default RootLayout;
