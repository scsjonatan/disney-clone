import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <a href="/">
          <img src="images/slider-badging.jpg" alt="badgig" />
        </a>
      </Wrap>
      <Wrap>
        <a href="/">
          <img src="images/slider-scale.jpg" alt="badgig" />
        </a>
      </Wrap>
      <Wrap>
        <a href="/">
          <img src="images/slider-badag.jpg" alt="badgig" />
        </a>
      </Wrap>
      <Wrap>
        <a href="/">
          <img src="images/slider-scales.jpg" alt="badgig" />
        </a>
      </Wrap>
    </Carousel>
  );
}

const Wrap = styled.div`
  border-radius: 4px;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition: 3s;
    }
  }
`;

const Carousel = styled(Slider)`
  margin-top: 30px;
  width: 90%;
  margin: auto;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease-in-out;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

export default ImageSlider;
