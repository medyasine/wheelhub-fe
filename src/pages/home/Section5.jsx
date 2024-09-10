import React from "react";

function Section5() {
  return (
    <section className="bg-200 text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-xl-8">
            <div
              className="swiper theme-slider"
              data-swiper='{"autoplay":true,"spaceBetween":5,"loop":true,"loopedSlides":5,"slideToClickedSlide":true}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="px-5 px-sm-6">
                    <p className="fs-sm-8 fs-md-7 fst-italic text-1100">
                      Falcon is the best option if you are looking for a theme
                      built with Bootstrap. On top of that, Falcon&apos;s
                      creators and support staff are very brilliant and
                      attentive to users&apos; needs.
                    </p>
                    <p className="fs-9 text-600">
                      - Scott Tolinski, Web Developer
                    </p>
                    <img
                      className="w-auto mx-auto"
                      src="./assets/img/logos/google.png"
                      alt=""
                      height="45"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="px-5 px-sm-6">
                    <p className="fs-sm-8 fs-md-7 fst-italic text-1100">
                      We&apos;ve become fanboys! Easy to change the modular
                      design, great dashboard UI, enterprise-className support,
                      fast loading time. What else do you want from a Bootstrap
                      Theme?
                    </p>
                    <p className="fs-9 text-600">- Jeff Escalante, Developer</p>
                    <img
                      className="w-auto mx-auto"
                      src="./assets/img/logos/netflix.png"
                      alt=""
                      height="30"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="px-5 px-sm-6">
                    <p className="fs-sm-8 fs-md-7 fst-italic text-1100">
                      When I first saw Falcon, I was totally blown away by the
                      care taken in the interface. It felt like something that
                      I&apos;d really want to use and something I could see
                      being a true modern replacement to the current className
                      of Bootstrap themes.
                    </p>
                    <p className="fs-9 text-600">- Liam Martens, Designer</p>
                    <img
                      className="w-auto mx-auto"
                      src="./assets/img/logos/paypal.png"
                      alt=""
                      height="45"
                    />
                  </div>
                </div>
              </div>
              <div className="swiper-nav">
                <div className="swiper-button-next swiper-button-white"></div>
                <div className="swiper-button-prev swiper-button-white"> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section5;
