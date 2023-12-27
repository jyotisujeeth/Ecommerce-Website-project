import React from "react";
import Carousel from "react-bootstrap/Carousel";

//style
const carouselContainerStyle = {
  marginTop: "50px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "300px",
};

const ProductCarousel = () => {
  return (
    <div style={carouselContainerStyle}>
      <Carousel>
        <Carousel.Item>
          <img
            src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
            alt="i 1"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
            alt="i 2"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
            alt="i 3"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <p>
        <h3>Very Good Product Worth Price</h3>
      </p>
    </div>
  );
};

export default ProductCarousel;
