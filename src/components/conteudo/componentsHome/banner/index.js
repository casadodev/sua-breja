import React from "react";
import "./style.css";

function BannerHome() {
  return (
    <div class="row">
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide mx-auto"
        data-ride="carousel"
      >
        <div class="carousel-inner mb-5">
          <div class="carousel-item active">
            <img
              src={process.env.PUBLIC_URL + "/images/tipos-de-cerveja.jpg"}
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src={process.env.PUBLIC_URL + "/images/slide-breja-1.PNG"}
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src={process.env.PUBLIC_URL + "/images/slide-breja-2.PNG"}
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerHome;
