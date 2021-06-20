import React from "react";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Main1 from "./components/Main1/Main1";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <div>
      <Main>
        <Navbar />
        <Main1 />
      </Main>
      <AboutMe />
      <Portfolio/>
    </div>
  );
}

export default App;
