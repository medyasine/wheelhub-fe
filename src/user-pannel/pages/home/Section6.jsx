function Section6() {
  return (
    <section className="bg-dark" data-bs-theme="light">
      <div
        className="bg-holder overlay"
        style={{
          backgroundImage: "url(./assets/img/generic/bg-2.jpg)",
          backgroundPosition: "center bottom",
        }}
      ></div>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <p className="fs-6 fs-sm-5 text-white">
              Become part of our thriving community of automotive enthusiasts
              and industry experts, collaborating to transform the way vehicles
              are bought, sold, and traded.
            </p>
            <button
              className="btn btn-outline-light border-2 rounded-pill btn-lg mt-4 fs-9 py-2"
              type="button"
            >
              Start your journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section6;
