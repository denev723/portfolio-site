import React from "react";
import styled from "styled-components";

const Container = styled.section`
  padding: 50px 20px;
  background-color: #757575;
  h2 {
    font-size: 48px;
    font-weight: 900;
    text-align: center;
    margin-bottom: 50px;
    color: #fff;
  }
`;

const Inner = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
  background-color: #bdbdbd;
  box-shadow: rgba(0, 0, 0, 0.7) 0px 5px 15px 0px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(10px);
  }
`;

const Img = styled.div`
  background-image: url(${(props) => props.bgImage});
  width: 250px;
  height: 180px;
  background-size: cover;
  background-position: center center;
  margin-bottom: 20px;
`;

const Title = styled.p`
  font-weight: 500;
`;

const Bootcamp = () => {
  const cocoa = "/images/cocoa.png";
  const vaillajs = "/images/vanillajs.png";
  const cssmaster = "/images/cssmaster.png";
  const reactcc = "/images/reactcc.png";
  const youtube = "/images/youtube.png";
  return (
    <Container>
      <h2>- Bootcamp -</h2>
      <Inner>
        <Item>
          <Img bgImage={cocoa} />
          <Title>코코아 클론 2주 완성반</Title>
        </Item>
        <Item>
          <Img bgImage={vaillajs} />
          <Title>바닐라JS 2주 완성반</Title>
        </Item>
        <Item>
          <Img bgImage={youtube} />
          <Title>유튜브 클론 6주 완성반</Title>
        </Item>
        <Item>
          <Img bgImage={cssmaster} />
          <Title>CSS Layout 2주 완성반</Title>
        </Item>
        <Item>
          <Img bgImage={reactcc} />
          <Title>리액트JS 2주 완성반</Title>
        </Item>
      </Inner>
    </Container>
  );
};

export default Bootcamp;
