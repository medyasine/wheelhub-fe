function EventsSection() {
  return (
    <div className="card mb-3 mb-lg-0">
      <div className="card-header bg-body-tertiary">
        <h5 className="mb-0">Events</h5>
      </div>
      <div className="card-body fs-10">
        <div className="d-flex btn-reveal-trigger">
          <div className="calendar">
            <span className="calendar-month">Feb</span>
            <span className="calendar-day">21</span>
          </div>
          <div className="flex-1 position-relative ps-3">
            <h6 className="fs-9 mb-0">
              <a href="../../app/events/event-detail.html">Newmarket Nights</a>
            </h6>
            <p className="mb-1">
              Organized by
              <a href="#!" className="text-700">
                University of Oxford
              </a>
            </p>
            <p className="text-1000 mb-0">Time: 6:00AM</p>
            <p className="text-1000 mb-0">Duration: 6:00AM - 5:00PM</p>
            Place: Cambridge Boat Club, Cambridge
            <div className="border-bottom border-dashed my-3"></div>
          </div>
        </div>
        <div className="d-flex btn-reveal-trigger">
          <div className="calendar">
            <span className="calendar-month">Dec</span>
            <span className="calendar-day">31</span>
          </div>
          <div className="flex-1 position-relative ps-3">
            <h6 className="fs-9 mb-0">
              <a href="../../app/events/event-detail.html">
                31st Night Celebration
              </a>
            </h6>
            <p className="mb-1">
              Organized by
              <a href="#!" className="text-700">
                Chamber Music Society
              </a>
            </p>
            <p className="text-1000 mb-0">Time: 11:00PM</p>
            <p className="text-1000 mb-0">280 people interested</p>
            Place: Tavern on the Greend, New York
            <div className="border-bottom border-dashed my-3"></div>
          </div>
        </div>
        <div className="d-flex btn-reveal-trigger">
          <div className="calendar">
            <span className="calendar-month">Dec</span>
            <span className="calendar-day">16</span>
          </div>
          <div className="flex-1 position-relative ps-3">
            <h6 className="fs-9 mb-0">
              <a href="../../app/events/event-detail.html">Folk Festival</a>
            </h6>
            <p className="mb-1">
              Organized by
              <a href="#!" className="text-700">
                Harvard University
              </a>
            </p>
            <p className="text-1000 mb-0">Time: 9:00AM</p>
            <p className="text-1000 mb-0">
              Location: Cambridge Masonic Hall Association
            </p>
            Place: Porter Square, North Cambridge
          </div>
        </div>
      </div>
      <div className="card-footer bg-body-tertiary p-0 border-top">
        <a
          className="btn btn-link d-block w-100"
          href="../../app/events/event-list.html"
        >
          All Events
          <span className="fas fa-chevron-right ms-1 fs-11"></span>
        </a>
      </div>
    </div>
  );
}

export default EventsSection;
