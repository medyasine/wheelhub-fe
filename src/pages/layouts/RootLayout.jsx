import { Outlet } from "react-router-dom";
import SettingsPannel from "../components/SettingsPannel";
import LandingFooter from "../home/LandingFooter";
import OurMission from "../home/Section7";
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
