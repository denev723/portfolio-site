import React from "react";
import styled from "styled-components";
import {
  MdPerson,
  MdPermContactCalendar,
  MdLocalPostOffice,
  MdLocationOn,
} from "react-icons/md";

const Container = styled.section`
  padding: 50px 20px;
  background-color: #fff;
  h2 {
    font-size: 48px;
    font-weight: 900;
    text-align: center;
    margin-bottom: 50px;
    color: #222;
  }
`;

const Inner = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 30px;
`;

const Item = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Icon = styled.div`
  font-size: 32px;
  margin-right: 15px;
`;

const Info = styled.div`
  p:nth-child(2) {
    margin-top: 10px;
  }
`;

const Content = styled.div`
  grid-column: span 4;
  line-height: 1.2;
`;

const About = () => {
  return (
    <Container>
      <h2>- About -</h2>
      <Inner>
        <Item>
          <Icon>
            <MdPerson />
          </Icon>
          <Info>
            <p>이름</p>
            <p>김병주</p>
          </Info>
        </Item>
        <Item>
          <Icon>
            <MdPermContactCalendar />
          </Icon>
          <Info>
            <p>생년월일</p>
            <p>88.07.23</p>
          </Info>
        </Item>
        <Item>
          <Icon>
            <MdLocationOn />
          </Icon>
          <Info>
            <p>주소지</p>
            <p>인천시 미추홀구</p>
          </Info>
        </Item>
        <Item>
          <Icon>
            <MdLocalPostOffice />
          </Icon>
          <Info>
            <p>이메일</p>
            <p>denev723@gmail.com</p>
          </Info>
        </Item>
        <Content>
          안녕하세요. 중고 신입 개발자 김병주입니다.
          <br />
          처음엔 웹사이트를 제작해보고 싶어 공부를 시작하였습니다. 공부를
          하다보니 개발에 관심을 가지게 되었고 개발이 좋아 꾸준히 개발 공부를
          하고 있습니다.
          <br />
          늦게 시작한만큼 더욱 공부하고 노력하는 개발자가 되겠습니다.
        </Content>
      </Inner>
    </Container>
  );
};

export default About;
