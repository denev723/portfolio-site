import React from "react";
import About from "./components/About";
import Bootcamp from "./components/Bootcamp";
import Layout from "./components/Layout";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <Layout>
      <Skills />
      <Bootcamp />
      <Project />
      <About />
    </Layout>
  );
}

export default App;
