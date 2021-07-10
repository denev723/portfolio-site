import React from "react";
import styled from "styled-components";

const Container = styled.section`
  padding: 50px 20px;
  background-color: #ffb300;
  h2 {
    font-size: 48px;
    font-weight: 900;
    text-align: center;
    margin-bottom: 50px;
  }
`;

const Inner = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  padding: 20px 10px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.7) 0px 5px 15px 0px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(10px);
  }
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 700;
  text-decoration: underline;
  padding: 5px 0;
`;

const Items = styled.ul``;

const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Skills = () => {
  return (
    <Container>
      <h2>- Skills -</h2>
      <Inner>
        <Wrapper>
          <Title>Intermediate</Title>
          <Items>
            <Item>
              <img
                style={{ width: "150px" }}
                src="/images/html.png"
                alt="Skills"
              />
            </Item>
            <Item>
              <img
                style={{ width: "100px" }}
                src="/images/sass.png"
                alt="Skills"
              />
            </Item>
            <Item>
              <img
                style={{ width: "150px" }}
                src="/images/react.png"
                alt="Skills"
              />
            </Item>
          </Items>
        </Wrapper>
        <Wrapper>
          <Title>Basic</Title>
          <Items>
            <Item>
              <img
                style={{ width: "150px" }}
                src="/images/typescript.png"
                alt="Skills"
              />
            </Item>
            <Item>
              <img
                style={{ width: "150px" }}
                src="/images/redux.png"
                alt="Skills"
              />
            </Item>
            <Item>
              <img
                style={{ width: "150px" }}
                src="/images/redux-saga.png"
                alt="Skills"
              />
            </Item>
            <Item>
              <img
                style={{ width: "150px" }}
                src="/images/mongodb.png"
                alt="Skills"
              />
            </Item>
            <Item>
              <img
                style={{ width: "150px" }}
                src="/images/graphql.png"
                alt="Skills"
              />
            </Item>
          </Items>
        </Wrapper>
        <Wrapper>
          <Title>Deploy</Title>
          <Items>
            <Item>
              <img
                style={{ width: "150px" }}
                src="/images/netlify.png"
                alt="Skills"
              />
            </Item>
            <Item>
              <img
                style={{ width: "150px" }}
                src="/images/heroku.png"
                alt="Skills"
              />
            </Item>
          </Items>
        </Wrapper>
        <Wrapper>
          <Title>Version Control</Title>
          <Items>
            <Item>
              <img
                style={{ width: "150px" }}
                src="/images/git.png"
                alt="Skills"
              />
            </Item>
            <Item>
              <img
                style={{ width: "150px" }}
                src="/images/github.png"
                alt="Skills"
              />
            </Item>
          </Items>
        </Wrapper>
      </Inner>
    </Container>
  );
};

export default Skills;
