import React from 'react';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Gallery = () => {
  return (
    <div>
      <h2 style={{ margin: '0', paddingTop: '2vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px' }}>Gallery</h2>
      <br />

      <div id="carouselExampleIndicators" className="carousel slide carousel-fade" style={{ maxWidth: '100%', maxHeight: '100vh', margin: '0 auto' }}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
        </div>
        <div className="carousel-inner" style={{ maxWidth: '100%', maxHeight: '80vh', margin: '0 auto' }}>
          <div className="carousel-item active">
            <img src="/galleryimages1/1.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/galleryimages1/2.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/galleryimages1/3.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/galleryimages1/4.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/galleryimages1/5.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/galleryimages1/6.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Gallery;
