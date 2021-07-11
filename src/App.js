import React from "react";
import About from "./components/About";
import Bootcamp from "./components/Bootcamp";
import Layout from "./components/Layout";
import Project from "./components/Project";
import ReactHelmet from "./components/ReactHelmet";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <ReactHelmet
        keywords="개발자, 개발자 포트폴리오, 프론트엔드"
        description="신입 개발자 김병주의 포트폴리오 페이지입니다."
        title="Denev's Portfolio"
        favicon="/images/favicon.ico"
      />
      <Layout>
        <Skills />
        <Bootcamp />
        <Project />
        <About />
      </Layout>
    </>
  );
}

export default App;
