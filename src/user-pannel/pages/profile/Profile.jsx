import HeroSection from "./HeroSection";
import LeftSideSection from "./leftSide/LeftSideSection";
import RIghtSideSection from "./rifgtSide/RIghtSideSection";

function Profile() {
  return (
    <>
      <HeroSection />
      <div className="row g-0">
        <LeftSideSection />
        <RIghtSideSection />
      </div>
    </>
  );
}

export default Profile;
