import React from "react";
import "./carousel.css";
import SearchOutlined from '@mui/icons-material/SearchOutlined';

const Carousel = ({ img1, img2, img3 }) => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >

        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">

          <div className="carousel-caption" id="carousel">

            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                <SearchOutlined />
              </button>
            </form>

          </div>

          <div className="carousel-item active">
            <img
              src={img1}
              className="d-block w-100"
              style={{ filter: "brightness(40%)" }}
              alt="FoodImage1"
            />
          </div>
          <div className="carousel-item">
            <img
              src={img2}
              className="d-block w-100"
              style={{ filter: "brightness(40%)" }}
              alt="FoodImage2"
            />
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              className="d-block w-100"
              style={{ filter: "brightness(40%)" }}
              alt="FoodImage3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
