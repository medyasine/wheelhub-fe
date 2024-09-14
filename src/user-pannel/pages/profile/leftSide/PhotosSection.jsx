function PhotosSection() {
  return (
    <div className="card mb-3 mb-lg-0">
      <div className="card-header bg-body-tertiary">
        <h5 className="mb-0">Photos</h5>
      </div>
      <div className="card-body overflow-hidden">
        <div className="row g-0">
          <div className="col-6 p-1">
            <a
              className="glightbox"
              href="/assets/img/generic/4.jpg"
              data-gallery="gallery1"
              data-glightbox="data-glightbox"
            >
              <img
                className="img-fluid rounded"
                src="/assets/img/generic/4.jpg"
                alt="..."
              />
            </a>
          </div>
          <div className="col-6 p-1">
            <a
              className="glightbox"
              href="/assets/img/generic/5.jpg"
              data-gallery="gallery1"
              data-glightbox="data-glightbox"
            >
              <img
                className="img-fluid rounded"
                src="/assets/img/generic/5.jpg"
                alt="..."
              />
            </a>
          </div>
          <div className="col-4 p-1">
            <a
              className="glightbox"
              href="/assets/img/gallery/4.jpg"
              data-gallery="gallery1"
              data-glightbox="data-glightbox"
            >
              <img
                className="img-fluid rounded"
                src="/assets/img/gallery/4.jpg"
                alt="..."
              />
            </a>
          </div>
          <div className="col-4 p-1">
            <a
              className="glightbox"
              href="/assets/img/gallery/5.jpg"
              data-gallery="gallery1"
              data-glightbox="data-glightbox"
            >
              <img
                className="img-fluid rounded"
                src="/assets/img/gallery/5.jpg"
                alt="..."
              />
            </a>
          </div>
          <div className="col-4 p-1">
            <a
              className="glightbox"
              href="/assets/img/gallery/3.jpg"
              data-gallery="gallery1"
              data-glightbox="data-glightbox"
            >
              <img
                className="img-fluid rounded"
                src="/assets/img/gallery/3.jpg"
                alt="..."
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotosSection;
