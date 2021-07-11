import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { BiCheck } from "react-icons/bi";

const Container = styled.section`
  padding: 50px 20px;
  background-color: #78909c;
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
  color: #fff;
`;

const Title = styled.h3`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
`;

const GenYear = styled.p`
  font-size: 24px;
  text-align: center;
`;

const Item = styled.div`
  padding: 40px 20px;
  border-radius: 15px;
  background-color: #424242;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 15px 0px;
  &:not(:first-child) {
    margin-top: 30px;
  }
`;

const Info = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-around;
`;

const ImageContainer = styled.div`
  width: 50%;
  padding: 0 20px;
`;

const Image = styled.div`
  width: 250px;
  height: 400px;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
`;

const SubItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 30px;
`;

const SubInfo = styled.div`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Description = styled.p`
  flex: 1;
  line-height: 1.4;
  font-size: 18px;
`;

const SubWrapper = styled.div`
  flex: 1;
`;

const SubInfoTitle = styled.div`
  font-size: 20px;
  display: flex;
`;

const SubInfoDesc = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
`;

const Project = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToshow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <h2>- Project -</h2>
      <Inner>
        <Item>
          <Title>코코아 클론</Title>
          <GenYear>2020.7</GenYear>
          <Info>
            <ImageContainer>
              <Slider {...settings}>
                <Image bgImage="/images/cocoaClone/cocoa1.png" />
                <Image bgImage="/images/cocoaClone/cocoa2.png" />
                <Image bgImage="/images/cocoaClone/cocoa3.png" />
                <Image bgImage="/images/cocoaClone/cocoa4.png" />
                <Image bgImage="/images/cocoaClone/cocoa5.png" />
                <Image bgImage="/images/cocoaClone/cocoa6.png" />
              </Slider>
            </ImageContainer>
            <SubItem>
              <Description>
                Nomadcoders에서 진행한 카카오톡 클론 코드 챌린지 프로젝트 완성
                사이트로 실제적으로 친구 추가, 채팅 기능 등이 없는 순수한 HTML,
                CSS 사이트입니다.
              </Description>
              <SubWrapper>
                <SubInfo>
                  <SubInfoTitle>
                    <BiCheck style={{ fontSize: "24px" }} />
                    GitHub
                  </SubInfoTitle>
                  <SubInfoDesc>
                    <a href="https://github.com/denev723/black_kakao">
                      github.com/debev723/black_kakao
                    </a>
                  </SubInfoDesc>
                </SubInfo>
                <SubInfo>
                  <SubInfoTitle>
                    <BiCheck style={{ fontSize: "24px" }} />
                    도메인
                  </SubInfoTitle>
                  <SubInfoDesc>
                    <a href="https://denev723.github.io/black_kakao">
                      denev723.github.io/black_kakao
                    </a>
                  </SubInfoDesc>
                </SubInfo>
                <SubInfo>
                  <SubInfoTitle>
                    <BiCheck style={{ fontSize: "24px" }} />
                    기술 Stack
                  </SubInfoTitle>
                  <SubInfoDesc>HTML, CSS</SubInfoDesc>
                </SubInfo>
                <SubInfo>
                  <SubInfoTitle>
                    <BiCheck style={{ fontSize: "24px" }} />
                    Deploy
                  </SubInfoTitle>
                  <SubInfoDesc>GitHub</SubInfoDesc>
                </SubInfo>
              </SubWrapper>
            </SubItem>
          </Info>
        </Item>
        <Item>
          <Title>Momentum 클론</Title>
          <GenYear>2020.8</GenYear>
          <Info>
            <ImageContainer>
              <Slider {...settings}>
                <Image bgImage="/images/momontom/momontom1.png" />
                <Image bgImage="/images/momontom/momontom2.png" />
                <Image bgImage="/images/momontom/momontom3.png" />
                <Image bgImage="/images/momontom/momontom4.png" />
              </Slider>
            </ImageContainer>
            <SubItem>
              <Description>
                Nomadcoders에서 진행한 Vanilla Javascript 코드 챌린지 프로젝트
                완성 사이트로 순수 자바스크립트를 이용하여 사용자 이름, 할일
                목록을 local storage에 저장 기능 구현하였고 openweather API를
                사용하여 현재 위치의 날씨를 구현하였습니다.
              </Description>
              <SubWrapper>
                <SubInfo>
                  <SubInfoTitle>
                    <BiCheck style={{ fontSize: "24px" }} />
                    GitHub
                  </SubInfoTitle>
                  <SubInfoDesc>
                    <a href="https://github.com/denev723/momontom">
                      github.com/debev723/momontom
                    </a>
                  </SubInfoDesc>
                </SubInfo>
                <SubInfo>
                  <SubInfoTitle>
                    <BiCheck style={{ fontSize: "24px" }} />
                    도메인
                  </SubInfoTitle>
                  <SubInfoDesc>
                    <a href="https://denev723.github.io/momontom">
                      denev723.github.io/momontom
                    </a>
                  </SubInfoDesc>
                </SubInfo>
                <SubInfo>
                  <SubInfoTitle>
                    <BiCheck style={{ fontSize: "24px" }} />
                    기술 Stack
                  </SubInfoTitle>
                  <SubInfoDesc>HTML, CSS, Javascript</SubInfoDesc>
                </SubInfo>
                <SubInfo>
                  <SubInfoTitle>
                    <BiCheck style={{ fontSize: "24px" }} />
                    Deploy
                  </SubInfoTitle>
                  <SubInfoDesc>GitHub</SubInfoDesc>
                </SubInfo>
              </SubWrapper>
            </SubItem>
          </Info>
        </Item>
        <Item>
          <Title>Youtube 클론</Title>
          <GenYear>2020.9</GenYear>
          <Info>
            <ImageContainer>
              <Slider {...settings}>
                <Image bgImage="/images/youtubeClone/youtubeClone1.png" />
                <Image bgImage="/images/youtubeClone/youtubeClone2.png" />
                <Image bgImage="/images/youtubeClone/youtubeClone3.png" />
                <Image bgImage="/images/youtubeClone/youtubeClone4.png" />
                <Image bgImage="/images/youtubeClone/youtubeClone5.png" />
                <Image bgImage="/images/youtubeClone/youtubeClone6.png" />
              </Slider>
            </ImageContainer>
            <SubItem>
              <Description>
                Nomadcoders에서 진행한 Youtube 클론 코드 챌린지 프로젝트 완성
                사이트로 MongoDB를 이용하여 회원 가입, 로그인, 비디오 업로드,
                비디오 정보 수정 등 CRUD 기능을 구현하였고, custom API를 통해
                조회수, 댓글 업데이트 기능을 구현하였습니다.
              </Description>
              <SubWrapper>
                <SubInfo>
                  <SubInfoTitle>
                    <BiCheck style={{ fontSize: "24px" }} />
                    GitHub
                  </SubInfoTitle>
                  <SubInfoDesc>
                    <a href="https://github.com/denev723/wetube_final">
                      github.com/debev723/momontom
                    </a>
                  </SubInfoDesc>
                </SubInfo>
                <SubInfo>
                  <SubInfoTitle>
                    <BiCheck style={{ fontSize: "24px" }} />
                    도메인
                  </SubInfoTitle>
                  <SubInfoDesc>
                    <a href="https://wetube-final.herokuapp.com/">
                      wetube-final.herokuapp.com
                    </a>
                  </SubInfoDesc>
                </SubInfo>
                <SubInfo>
                  <SubInfoTitle>
                    <BiCheck style={{ fontSize: "24px" }} />
                    기술 Stack
                  </SubInfoTitle>
                  <SubInfoDesc>
                    Pug, SCSS, Javascript, NodeJS, MongoDB
                  </SubInfoDesc>
                </SubInfo>
                <SubInfo>
                  <SubInfoTitle>
                    <BiCheck style={{ fontSize: "24px" }} />
                    Deploy
                  </SubInfoTitle>
                  <SubInfoDesc>GitHub, Heroku</SubInfoDesc>
                </SubInfo>
              </SubWrapper>
            </SubItem>
          </Info>
        </Item>
        <Item>
          <Title>Movie App 클론</Title>
          <GenYear>2021.4</GenYear>
          <Info>
            <ImageContainer>
              <Slider {...settings}>
                <Image bgImage="/images/jjapflix/jjapflix1.png" />
                <Image bgImage="/images/jjapflix/jjapflix2.png" />
                <Image bgImage="/images/jjapflix/jjapflix3.png" />
                <Image bgImage="/images/jjapflix/jjapflix4.png" />
                <Image bgImage="/images/jjapflix/jjapflix5.png" />
              </Slider>
            </ImageContainer>
            <SubItem>
              <Description>
                Nomadcoders에서 진행한 ReactJS 코드 챌린지 프로젝트 완성
                사이트로 API를 사용하여 영화 정보를 받아오고 Class형 컴포넌트로
                페이지를 구현하였습니다.
              </Description>
              <SubWrapper>
                <SubInfo>
                  <SubInfoTitle>
                    <BiCheck style={{ fontSize: "24px" }} />
                    GitHub
                  </SubInfoTitle>
                  <SubInfoDesc>
                    <a href="https://github.com/denev723/jjapflix">
                      github.com/debev723/jjapflix
                    </a>
                  </SubInfoDesc>
                </SubInfo>
                <SubInfo>
                  <SubInfoTitle>
                    <BiCheck style={{ fontSize: "24px" }} />
                    도메인
                  </SubInfoTitle>
                  <SubInfoDesc>
                    <a href="https://silly-raman-1438a6.netlify.app/">
                      silly-raman-1438a6.netlify.app/
                    </a>
                  </SubInfoDesc>
                </SubInfo>
                <SubInfo>
                  <SubInfoTitle>
                    <BiCheck style={{ fontSize: "24px" }} />
                    기술 Stack
                  </SubInfoTitle>
                  <SubInfoDesc>ReactJS, Hoooks</SubInfoDesc>
                </SubInfo>
                <SubInfo>
                  <SubInfoTitle>
                    <BiCheck style={{ fontSize: "24px" }} />
                    Deploy
                  </SubInfoTitle>
                  <SubInfoDesc>GitHub, Netlify</SubInfoDesc>
                </SubInfo>
              </SubWrapper>
            </SubItem>
          </Info>
        </Item>
        <Item>
          <Title>GitHub 메인 페이지 클론</Title>
          <GenYear>2021.4</GenYear>
          <Info>
            <ImageContainer>
              <Slider {...settings}>
                <Image bgImage="/images/githubClone/githubClone1.png" />
                <Image bgImage="/images/githubClone/githubClone2.png" />
                <Image bgImage="/images/githubClone/githubClone3.png" />
              </Slider>
            </ImageContainer>
            <SubItem>
              <Description>
                패스트 캠퍼스 프론트엔드 올인원 패키지 과정으로 HTML, CSS,
                Javascript를 이용하여 만든 GitHub 메인 페이지를 클론
                코딩하였습니다.
              </Description>
              <SubWrapper>
                <SubInfo>
                  <SubInfoTitle>
                    <BiCheck style={{ fontSize: "24px" }} />
                    GitHub
                  </SubInfoTitle>
                  <SubInfoDesc>
                    <a href="https://github.com/denev723/github_clone">
                      github.com/debev723/jjapflix
                    </a>
                  </SubInfoDesc>
                </SubInfo>
                <SubInfo>
                  <SubInfoTitle>
                    <BiCheck style={{ fontSize: "24px" }} />
                    도메인
                  </SubInfoTitle>
                  <SubInfoDesc>
                    <a href="https://denev723.github.io/github_clone/">
                      denev723.github.io/github_clone/
                    </a>
                  </SubInfoDesc>
                </SubInfo>
                <SubInfo>
                  <SubInfoTitle>
                    <BiCheck style={{ fontSize: "24px" }} />
                    기술 Stack
                  </SubInfoTitle>
                  <SubInfoDesc>HTML, CSS, Javascript</SubInfoDesc>
                </SubInfo>
                <SubInfo>
                  <SubInfoTitle>
                    <BiCheck style={{ fontSize: "24px" }} />
                    Deploy
                  </SubInfoTitle>
                  <SubInfoDesc>GitHub</SubInfoDesc>
                </SubInfo>
              </SubWrapper>
            </SubItem>
          </Info>
        </Item>
        <Item>
          <Title>Starbucks 메인 페이지 클론</Title>
          <GenYear>2021.5</GenYear>
          <Info>
            <ImageContainer>
              <Slider {...settings}>
                <Image bgImage="/images/starbucks/starbucks1.png" />
                <Image bgImage="/images/starbucks/starbucks2.png" />
                <Image bgImage="/images/starbucks/starbucks3.png" />
                <Image bgImage="/images/starbucks/starbucks4.png" />
                <Image bgImage="/images/starbucks/starbucks5.png" />
              </Slider>
            </ImageContainer>
            <SubItem>
              <Description>
                패스트 캠퍼스 프론트엔드 초격차 패키지 과정으로 HTML, CSS,
                Javascript를 이용하여 만든 Starbucks 메인 페이지를 클론
                코딩하였습니다.
              </Description>
              <SubWrapper>
                <SubInfo>
                  <SubInfoTitle>
                    <BiCheck style={{ fontSize: "24px" }} />
                    GitHub
                  </SubInfoTitle>
                  <SubInfoDesc>
                    <a href="https://github.com/denev723/fc-starbuks">
                      github.com/debev723/jjapflix
                    </a>
                  </SubInfoDesc>
                </SubInfo>
                <SubInfo>
                  <SubInfoTitle>
                    <BiCheck style={{ fontSize: "24px" }} />
                    도메인
                  </SubInfoTitle>
                  <SubInfoDesc>
                    <a href="https://denev723.github.io/fc-starbuks/">
                      denev723.github.io/fc-starbuks/
                    </a>
                  </SubInfoDesc>
                </SubInfo>
                <SubInfo>
                  <SubInfoTitle>
                    <BiCheck style={{ fontSize: "24px" }} />
                    기술 Stack
                  </SubInfoTitle>
                  <SubInfoDesc>HTML, CSS, Javascript</SubInfoDesc>
                </SubInfo>
                <SubInfo>
                  <SubInfoTitle>
                    <BiCheck style={{ fontSize: "24px" }} />
                    Deploy
                  </SubInfoTitle>
                  <SubInfoDesc>GitHub</SubInfoDesc>
                </SubInfo>
              </SubWrapper>
            </SubItem>
          </Info>
        </Item>
      </Inner>
    </Container>
  );
};

export default Project;
