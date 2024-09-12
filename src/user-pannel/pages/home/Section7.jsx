function Section7() {
  return (
    <section className="bg-dark pt-8 pb-4" data-bs-theme="light">
      <div className="container">
        <div className="position-absolute btn-back-to-top bg-dark">
          <a className="text-600" href="#banner" data-bs-offset-top="0">
            <span
              className="fas fa-chevron-up"
              data-fa-transform="rotate-45"
            ></span>
          </a>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <h5 className="text-uppercase text-white opacity-85 mb-3">
              Our Mission
            </h5>
            <p className="text-600">
              Wheelhub empowers automotive enthusiasts and businesses to
              effortlessly create, manage, and scale their vehicle marketplaces.
              Whether you&apos;re buying, selling, or trading, Wheelhub provides
              a seamless, customizable platform that&apos;s designed to
              integrate smoothly with any backend system, ensuring a hassle-free
              experience for all users.
            </p>

            <div className="icon-group mt-4">
              <a className="icon-item bg-white text-facebook" href="#!">
                <span className="fab fa-facebook-f"></span>
              </a>
              <a className="icon-item bg-white text-twitter" href="#!">
                <span className="fab fa-twitter"></span>
              </a>
              <a className="icon-item bg-white text-google-plus" href="#!">
                <span className="fab fa-google-plus-g"></span>
              </a>
              <a className="icon-item bg-white text-linkedin" href="#!">
                <span className="fab fa-linkedin-in"></span>
              </a>
              <a className="icon-item bg-white" href="#!">
                <span className="fab fa-medium-m"></span>
              </a>
            </div>
          </div>
          <div className="col ps-lg-6 ps-xl-8">
            <div className="row mt-5 mt-lg-0">
              <div className="col-6 col-md-3">
                <h5 className="text-uppercase text-white opacity-85 mb-3">
                  Company
                </h5>
                <ul className="list-unstyled">
                  <li className="mb-1">
                    <a className="link-600" href="#!">
                      About
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="link-600" href="#!">
                      Contact
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="link-600" href="#!">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <h5 className="text-uppercase text-white opacity-85 mb-3">
                  Product
                </h5>
                <ul className="list-unstyled">
                  <li className="mb-1">
                    <a className="link-600" href="#!">
                      Features
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="link-600" href="#!">
                      Roadmap
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="link-600" href="#!">
                      Changelog
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col mt-5 mt-md-0">
                <h5 className="text-uppercase text-white opacity-85 mb-3">
                  From the Blog
                </h5>
                <ul className="list-unstyled">
                  <li>
                    <h5 className="fs-9 mb-0">
                      <a className="link-600" href="#!">
                        Best deals ever made
                      </a>
                    </h5>
                    <p className="text-600 opacity-50">
                      Jan 15 &bull; 8min read
                    </p>
                  </li>
                  <li>
                    <h5 className="fs-9 mb-0">
                      <a className="link-600" href="#!">
                        Thes best cars used
                      </a>
                    </h5>
                    <p className="text-600 opacity-50">
                      Jan 5 &bull; 3min read
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section7;
