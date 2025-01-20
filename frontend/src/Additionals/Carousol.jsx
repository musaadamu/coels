import React from 'react';
import './Home.css'; // Custom CSS file for styling

export default function Carousol() {
  return (
    <div className="container">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          {/* First Carousel Item */}
          <div className="carousel-item active">
            <img
              src="images/image1.jpg"
              className="d-block w-100 custom-carousel-image"
              alt="The College Picture"
            />
            <div className="carousel-caption">
              <h5>The Provost</h5>
              <p>Leadership at its finest.</p>
            </div>
          </div>

          {/* Second Carousel Item */}
          <div className="carousel-item">
            <img
              src="images/image2.jpg"
              className="d-block w-100 custom-carousel-image"
              alt="Admin Block"
            />
            <div className="carousel-caption">
              <h5>The Admin Block</h5>
              <p>The hub of academic and administrative excellence.</p>
            </div>
          </div>

          {/* Third Carousel Item */}
          <div className="carousel-item">
            <img
              src="images/image3.jpg"
              className="d-block w-100 custom-carousel-image"
              alt="College Gate"
            />
            <div className="carousel-caption">
              <h5>The College Gate</h5>
              <p>Welcoming students to a world of possibilities.</p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Cards */}
      <div className="card-container">
        <div className="card" style={{ width: "18rem" }}>
          <div className="image-container">
            <img src="images/image1.jpg" className="card-img-top" alt="Provost" />
            <div className="image-text">
              <h5>The Provost</h5>
              <p>Excellence in leadership.</p>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div className="image-container">
            <img src="images/image2.jpg" className="card-img-top" alt="Admin Block" />
            <div className="image-text">
              <h5>Admin Block</h5>
              <p>The heart of administration.</p>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div className="image-container">
            <img src="images/image3.jpg" className="card-img-top" alt="College Gate" />
            <div className="image-text">
              <h5>College Gate</h5>
              <p>Opening doors to success.</p>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
