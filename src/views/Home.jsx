import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import ImageSlider from '../components/ImageSlider';
import ContentViewer from '../components/ContentViewer';
import Viewer from '../components/Viewer';
import contentElements from '../utils/content-elements';

function Home() {
  const { recommended, original, news, trending } = contentElements;
  return (
    <Container>
      <Header />
      <ImageSlider />
      <Viewer />
      <ContentViewer contentTitle="Recommended" content={recommended} />
      <ContentViewer contentTitle="Originals" content={original} />
      <ContentViewer contentTitle="News" content={news} />
      <ContentViewer contentTitle="Trending" content={trending} />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  display: block;
  background: url('/images/home-background.png');
  background-size: cover;
  background-repeat: no-repeat;
  top: 70px;
  padding-top: 40px;
`;

export default Home;
