function Section3() {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8 col-xl-7 col-xxl-6">
            <h1 className="fs-7 fs-sm-5 fs-md-4">WebApp theme of the future</h1>
            <p className="lead">
              Built on top of Bootstrap 5, super modular Falcon provides you
              gorgeous design &amp; streamlined UX for your WebApp.
            </p>
          </div>
        </div>
        <div className="row flex-center mt-8">
          <div className="col-md col-lg-5 col-xl-4 ps-lg-6">
            <img
              className="img-fluid px-6 px-md-0"
              src="./assets/img/icons/spot-illustrations/50.png"
              alt=""
            />
          </div>
          <div className="col-md col-lg-5 col-xl-4 mt-4 mt-md-0">
            <h5 className="text-danger">
              <span className="far fa-lightbulb me-2"></span>PLAN
            </h5>
            <h3>Blueprint &amp; design </h3>
            <p>
              With Falcon as your guide, now you have a fine-tuned state of the
              earth tool to make your wireframe a reality.
            </p>
          </div>
        </div>
        <div className="row flex-center mt-7">
          <div className="col-md col-lg-5 col-xl-4 pe-lg-6 order-md-2">
            <img
              className="img-fluid px-6 px-md-0"
              src="./assets/img/icons/spot-illustrations/49.png"
              alt=""
            />
          </div>
          <div className="col-md col-lg-5 col-xl-4 mt-4 mt-md-0">
            <h5 className="text-info">
              {" "}
              <span className="far fa-object-ungroup me-2"></span>BUILD
            </h5>
            <h3>38 Sets of components</h3>
            <p>
              Build any UI effortlessly with Falcon&apos;s robust set of layouts, 38
              sets of built-in elements, carefully chosen colors, typography,
              and css helpers.
            </p>
          </div>
        </div>
        <div className="row flex-center mt-7">
          <div className="col-md col-lg-5 col-xl-4 ps-lg-6">
            <img
              className="img-fluid px-6 px-md-0"
              src="./assets/img/icons/spot-illustrations/48.png"
              alt=""
            />
          </div>
          <div className="col-md col-lg-5 col-xl-4 mt-4 mt-md-0">
            <h5 className="text-success">
              <span className="far fa-paper-plane me-2"></span>DEPLOY
            </h5>
            <h3>Review and test</h3>
            <p>
              From IE to iOS, rigorously tested and optimized Falcon will give
              the near perfect finishing to your webapp; from the landing page
              to the logout screen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
