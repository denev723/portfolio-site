import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import GlobalStyles from "./GlobalStyles";
import { Reset } from "styled-reset";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Reset />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
