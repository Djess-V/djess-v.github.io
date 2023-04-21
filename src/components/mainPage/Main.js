import React from "react";
import Home from "./home/Home";
import AboutMe from "./about-me/AboutMe";
import Skills from "./skills/Skills";
import Portfolio from "./portfolio/Portfolio";

let Main = () => {
  return (
    <main className="mainMP">
      <Home />
      <AboutMe />
      <Skills />
      <Portfolio />
    </main>
  );
};

Main = React.memo(Main);

export default Main;
