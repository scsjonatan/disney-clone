import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import parsers from '../utils/parsers';

const { transformTitleToId } = parsers;

function ContentViewer({ contentTitle, content }) {
  return (
    <Container>
      <h4>{contentTitle}</h4>
      <Content>
        {content.map(({ cardImg, title, type }) => {
          const parsedTitle = transformTitleToId(title);
          return (
            <Wrap key={parsedTitle}>
              <Link to={`/detail/${type}/${parsedTitle}`}>
                <img src={cardImg} alt={title} />
              </Link>
            </Wrap>
          );
        })}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 30px 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out;
    width: 100%;
    z-index: 1;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default ContentViewer;

ContentViewer.propTypes = {
  contentTitle: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      backgroundImg: PropTypes.string,
      cardImg: PropTypes.string,
      description: PropTypes.string,
      subTitle: PropTypes.string,
      title: PropTypes.string,
      titleImg: PropTypes.string,
      type: PropTypes.oneOf(['recommended', 'news', 'trending', 'original']),
    })
  ).isRequired,
};
