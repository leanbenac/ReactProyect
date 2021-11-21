import React from "react";
import { Carousel } from "react-bootstrap";

import "./CarouselZ.css";

function CarouselZ() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel__img "
          src="https://fondosmil.com/fondo/17736.jpg"
          alt="sport motorcycle"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel__img"
          src="https://www.eluniversal.com.mx/sites/default/files/2021/03/19/2.jpg"
          alt="motorcycle ducatti"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel__img"
          src="https://www.motofichas.com/images/articulos/reportajes/tres-deportivas-a2-baratas-cara/CFMOTO-300SR-deportiva-a2-barata.jpg"
          alt="motorcycle bmw"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselZ
