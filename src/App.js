import React from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Achievements from "./components/Achievements";
import Certification from "./components/Certification";

import './components/about.css';
function App() {

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Certification />
      {/* <Achievements /> */}
      <Contact />
      <SocialLinks />
    </>
  );
}

export default App;
