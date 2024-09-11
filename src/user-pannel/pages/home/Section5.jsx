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
                      Wheelhub is an excellent choice if you want a dynamic
                      platform for buying, selling, and trading vehicles. The
                      team&apos;s attention to detail and commitment to innovation
                      ensure a seamless experience, making it the top choice for
                      automotive enthusiasts and businesses alike.
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
                      Wheelhub stands out in the automotive market, delivering a
                      top-notch experience for buying, selling, and trading
                      vehicles. Its advanced features and user-focused design
                      make it a premier choice, while the exceptional support
                      team ensures a smooth and effective platform for all users
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
                      Discover Wheelhub, where cutting-edge technology meets a
                      seamless automotive marketplace. Our platform excels in
                      connecting buyers and sellers with ease, and our dedicated
                      support team is always ready to assist. Choose Wheelhub
                      for an unparalleled experience in vehicle trading
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
