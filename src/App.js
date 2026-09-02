import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import GraphicDesign from "./components/GraphicDesign";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <GraphicDesign />
        <Resume />
      </main>
      <Footer />
    </>
  );
}

export default App;
