import React from "react";

function LandingFooter() {
  return (
    <section className="py-0 bg-dark" data-bs-theme="light">
      <div>
        <hr className="my-0 text-600 opacity-25" />
        <div className="container py-3">
          <div className="row justify-content-between fs-10">
            <div className="col-12 col-sm-auto text-center">
              <p className="mb-0 text-600 opacity-85">
                Thank you for creating with Falcon
                <span className="d-none d-sm-inline-block">| </span>
                <br className="d-sm-none" /> 2024 &copy;
                <a
                  className="text-white opacity-85"
                  href="https://themewagon.com/"
                >
                  Themewagon
                </a>
              </p>
            </div>
            <div className="col-12 col-sm-auto text-center">
              <p className="mb-0 text-600 opacity-85">v3.21.0</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingFooter;
