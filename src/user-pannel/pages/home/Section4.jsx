import React from "react";

function Section4() {
  return (
    <section className="bg-body-tertiary dark__bg-opacity-50 text-center">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="fs-7 fs-sm-5 fs-md-4">
              Here's what's in it for you
            </h1>
            <p className="lead">
              Things you will get right out of the box with Falcon.
            </p>
          </div>
        </div>
        <div className="row mt-6">
          <div className="col-lg-4">
            <div className="card card-span h-100">
              <div className="card-span-img">
                <span className="fab fa-sass fs-5 text-info"></span>
              </div>
              <div className="card-body pt-6 pb-4">
                <h5 className="mb-2">Bootstrap 5.x</h5>
                <p>
                  Build your webapp with the world's most popular front-end
                  component library along with Falcon's 32 sets of carefully
                  designed elements.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-6 mt-lg-0">
            <div className="card card-span h-100">
              <div className="card-span-img">
                <span className="fab fa-node-js fs-4 text-success"></span>
              </div>
              <div className="card-body pt-6 pb-4">
                <h5 className="mb-2">SCSS &amp; Javascript files</h5>
                <p>
                  With your purchased copy of Falcon, you will get all the
                  uncompressed & documented SCSS and Javascript source code
                  files.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-6 mt-lg-0">
            <div className="card card-span h-100">
              <div className="card-span-img">
                <span className="fab fa-gulp fs-3 text-danger"></span>
              </div>
              <div className="card-body pt-6 pb-4">
                <h5 className="mb-2">Gulp based workflow</h5>
                <p>
                  All the painful or time-consuming tasks in your development
                  workflow such as compiling the SCSS or transpiring the JS are
                  automated.
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
