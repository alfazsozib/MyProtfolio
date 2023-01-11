
import React from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App ">
    
     <Hero />
     <Navbar />
     <About />
     <Portfolio />
    </div>
  );
}

export default App;
