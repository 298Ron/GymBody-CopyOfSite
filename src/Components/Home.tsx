import { FunctionComponent, useEffect, useState } from "react";
interface HomeProps {}

const Home: FunctionComponent<HomeProps> = ({}) => {
  return (
    <div id="home">
      <div
        id="carouselExampleDark"
        className="carousel carousel-light slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img
              src="guys/firstGuy.jpg"
              className="d-block carouselImage"
              alt="firstGuy.jpg"
            />
            <div className="carousel-caption  d-md-block">
              <h1>IT'S NEVER TO LATE TO DEFEND HEALTH YOURSELF</h1>
              <button className="btn btn-success">Read more</button>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img
              src="guys/thirdGuy.jpg"
              className="d-block w-100 carouselImage"
              alt="firstGuy.jpg"
            />
            <div className="carousel-caption  d-md-block">
              <h1>BUILD YOUR PERFECT BODY AND HEALTHY GROWTH</h1>
              <button className="btn btn-success">READ MORE</button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
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
          data-bs-target="#carouselExampleDark"
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
export default Home;
