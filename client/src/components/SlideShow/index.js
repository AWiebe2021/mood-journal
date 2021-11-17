import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-bootstrap/Carousel";
import slide_2 from "../images/slide_2.jpg";
import slide_3 from "../images/slide_3.jpg";
import slide_4 from "../images/slide_4.jpg";
import slide_5 from "../images/slide_5.jpg";

const Slideshow = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={slide_2} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide_3} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide_4} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide_5} alt="Fourth slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slideshow;
