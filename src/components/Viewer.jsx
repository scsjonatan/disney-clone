import React from 'react';
import styled from 'styled-components';

function Viewer() {
  return (
    <Container>
      <Element>
        <img src="/images/viewers-disney.png" alt="Disney" />
        <video autoPlay loop playsInline>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </Element>
      <Element>
        <img src="/images/viewers-pixar.png" alt="Pixar" />
        <video autoPlay loop playsInline>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </Element>
      <Element>
        <img src="/images/viewers-marvel.png" alt="Marvel" />
        <video autoPlay loop playsInline>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </Element>
      <Element>
        <img src="/images/viewers-starwars.png" alt="Starwars" />
        <video autoPlay loop playsInline>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
      </Element>
      <Element>
        <img src="/images/viewers-national.png" alt="National" />
        <video autoPlay loop playsInline>
          <source
            src="/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </Element>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 30px 26px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Element = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.25, 0.46);
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    position: absolute;
    transition: opacity 5s ease-in-out 0;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0;
    z-index: 0;
    border: 0;
    border-radius: 10px;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transform: scale(1.05);
    border: 0;

    video {
      opacity: 1;
    }
  }
`;

export default Viewer;
