import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import GlobalStyles from "./GlobalStyles";
import { Reset } from "styled-reset";
import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";

const Button = styled.span`
  position: fixed;
  bottom: 0;
  right: 0;
  margin-bottom: 20px;
  margin-right: 20px;
  padding: 5px;
  border: 2px solid #222;
  border-radius: 10px;
  font-size: 24px;
  color: #222;
  background-color: #909090;
  cursor: pointer;
  opacity: ${(props) => props.opacity};
  transition: opacity 0.3s ease-in-out;
`;

const Layout = ({ children }) => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <GlobalStyles />
      <Reset />
      <Header scroll={scroll} />
      {children}
      <Footer />
      <Button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        opacity={scroll > 200 ? "1" : "0"}>
        <AiOutlineArrowUp />
      </Button>
    </>
  );
};

export default Layout;
