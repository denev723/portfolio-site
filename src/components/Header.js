/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  height: 700px;
  position: relative;
  background-image: url("/images/headerBg.jpeg");
  background-position: center center;
  background-size: cover;
  background-color: inherit;
`;

const Cover = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #222;
  opacity: 0.3;
  z-index: 0;
`;

const Wrapper = styled.div`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  padding: 0 20px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 2;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    max-width: 960px;
    margin: 0 auto;
  }
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 700px;
  cursor: pointer;
`;
const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
  cursor: pointer;
`;

const Content = styled.div`
  margin-top: 70px;
  height: 630px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 960px;
  margin: 0 auto;
  color: white;
`;

const ContentTitle = styled.p`
  font-size: 45px;
  line-height: 1.4;
  margin-bottom: 25px;
  font-weight: 700;
  z-index: 1;
`;

const ContentDescription = styled.p`
  font-size: 30px;
  line-height: 1.4;
  z-index: 1;
`;

export default () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <Header>
      <Cover />
      <Wrapper
        bgColor={scroll > 150 ? "white" : "inherit"}
        color={scroll > 150 ? "black" : "white"}>
        <nav>
          <Title onClick={scrollTop}>Denev's Portfolio</Title>
          <List>
            <Item>About</Item>
            <Item>Skills</Item>
            <Item>Archiving</Item>
            <Item>Project</Item>
          </List>
        </nav>
      </Wrapper>
      <Content>
        <ContentTitle>
          김병주(Denev) <br /> 프론트엔드 개발자 포트폴리오
        </ContentTitle>
        <ContentDescription>
          항상 새로운 것을 공부하는 것을 좋아하는 프론트엔드 개발자입니다.{" "}
          <br />{" "}
        </ContentDescription>
      </Content>
    </Header>
  );
};
