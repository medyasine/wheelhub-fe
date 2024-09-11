function Section4() {
  return (
    <section className="bg-body-tertiary dark__bg-opacity-50 text-center">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="fs-7 fs-sm-5 fs-md-4">
              What you&apos;ll gain with Wheelhub
            </h1>
            <p className="lead">
              Features and benefits you&apos;ll enjoy with our cutting-edge
              automotive platform.
            </p>
          </div>
        </div>
        <div className="row mt-6">
          <div className="col-lg-4">
            <div className="card card-span h-100">
              <div className="card-span-img">
                <span className="fab fa-car fs-5 text-info"></span>
              </div>
              <div className="card-body pt-6 pb-4">
                <h5 className="mb-2">Comprehensive Vehicle Listings</h5>
                <p>
                  Effortlessly browse, buy, sell, or trade cars and motorcycles
                  with detailed categories and up-to-date listings.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-6 mt-lg-0">
            <div className="card card-span h-100">
              <div className="card-span-img">
                <span className="fab fa-users fs-4 text-success"></span>
              </div>
              <div className="card-body pt-6 pb-4">
                <h5 className="mb-2">Active Community Engagement</h5>
                <p>
                  Connect with fellow enthusiasts, share experiences, and
                  leverage our community-driven features for better interaction.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-6 mt-lg-0">
            <div className="card card-span h-100">
              <div className="card-span-img">
                <span className="fab fa-newspaper fs-3 text-danger"></span>
              </div>
              <div className="card-body pt-6 pb-4">
                <h5 className="mb-2">Latest News & Insights</h5>
                <p>
                  Stay informed with the latest automotive news, research, and
                  reviews to make well-informed decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
