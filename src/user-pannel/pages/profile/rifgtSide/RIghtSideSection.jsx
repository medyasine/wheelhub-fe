import EducationSection from "./EducationSection";
import EventsSection from "./EventsSection";
import ExperienceSection from "./ExperienceSection";

function RIghtSideSection() {
  return (
    <div className="col-lg-4 ps-lg-2">
      <div className="sticky-sidebar">
        <ExperienceSection />
        <EducationSection />
        <EventsSection />
      </div>
    </div>
  );
}

export default RIghtSideSection;
