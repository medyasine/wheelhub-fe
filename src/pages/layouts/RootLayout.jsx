import { Outlet } from "react-router-dom";
import SettingsPannel from "../admin-pannel/components/SettingsPannel";
import LandingFooter from "../home/LandingFooter";
import Header from "../home/Header";
import RegisterModal from "../home/RegisterModal";

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
