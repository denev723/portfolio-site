/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import { MdCopyright } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineMail } from "react-icons/ai";

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background-color: #222222;
  color: #fff;
`;

const Wrapper = styled.div``;

const Right = styled.p``;

const Links = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Link = styled.li`
  font-size: 48px;
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export default () => {
  const curYear = new Date().getFullYear();
  return (
    <Container>
      <Wrapper>
        <Links>
          <Link>
            <a href="https://github.com/denev723">
              <VscGithub />
            </a>
          </Link>
          <Link>
            <a href="mailto:denev723@gmail.com">
              <AiOutlineMail />
            </a>
          </Link>
        </Links>
        <Right>
          <MdCopyright />
          {curYear}. Kim Byeong Joo. All rights reserved.
        </Right>
      </Wrapper>
    </Container>
  );
};
