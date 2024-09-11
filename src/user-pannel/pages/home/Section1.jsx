function Section1() {
  return (
    <section className="py-0 overflow-hidden" id="banner" data-bs-theme="light">
      <div
        className="bg-holder overlay"
        style={{
          backgroundImage: "url(./assets/img/generic/bg-1.jpg)",
          backgroundPosition: "center bottom",
        }}
      ></div>
      <div className="container">
        <div className="row flex-center pt-8 pt-lg-10 pb-lg-9 pb-xl-0">
          <div className="col-md-11 col-lg-8 col-xl-4 pb-7 pb-xl-9 text-center text-xl-start">
            <a
              className="btn btn-outline-danger mb-4 fs-10 border-2 rounded-pill"
              href="#!"
            >
              <span className="me-2" role="img" aria-label="Gift">
                🎁
              </span>
              Become a seller/buyer
            </a>
            <h1 className="text-white fw-light">
              All{" "}
              <span
                className="typed-text fw-bold"
                data-typed-text='["cars","bikes","offers","deals", "friends"]'
              ></span>
              <br />
              to your hands
            </h1>
            <p className="lead text-white opacity-75">
              Just with few clicks away, with Wheelhub can make you life easier
            </p>
            <a
              className="btn btn-outline-light border-2 rounded-pill btn-lg mt-4 fs-9 py-2"
              href="#!"
            >
              Get staeted with Whellhub
              <span
                className="fas fa-play ms-2"
                data-fa-transform="shrink-6 down-1"
              ></span>
            </a>
          </div>
          <div className="col-xl-7 offset-xl-1 align-self-end mt-4 mt-xl-0">
            <a className="img-landing-banner rounded" href="../index.html">
              <img
                className="img-fluid d-dark-none"
                src="../assets/img/generic/dashboard-alt.jpg"
                alt=""
              />
              <img
                className="img-fluid d-light-none"
                src="../assets/img/generic/dashboard-alt-dark.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
