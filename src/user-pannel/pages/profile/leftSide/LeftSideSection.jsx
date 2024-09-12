import ActivitylogSection from "./ActivitylogSection";
import AssociationsSection from "./AssociationsSection";
import IntroSection from "./IntroSection";
import PhotosSection from "./PhotosSection";

function LeftSideSection() {
  return (
    <div className="col-lg-8 pe-lg-2">
      <IntroSection />
      <AssociationsSection />
      <ActivitylogSection />
      <PhotosSection />
    </div>
  );
}

export default LeftSideSection;
