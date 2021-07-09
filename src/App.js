import React from "react";
import styled from "styled-components";
import About from "./components/About";
import Archiving from "./components/Archiving";
import Layout from "./components/Layout";
import Project from "./components/Project";
import Skills from "./components/Skills";

const Container = styled.div`
  height: 2000px;
`;

function App() {
  return (
    <Layout>
      <Container>
        <Skills />
        <Archiving />
        <Project />
        <About />
      </Container>
    </Layout>
  );
}

export default App;
