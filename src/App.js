
import React from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App ">
    
     <Hero />
     <Navbar />
     <About />
     <Portfolio />
     <Skills />
    </div>
  );
}

export default App;
