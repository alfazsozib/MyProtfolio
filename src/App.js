
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="App hover:cursor-crosshair overflow-hidden">
     <Hero />
     <Navbar />
     <About />
     <Portfolio />
     <Skills />
     <Testimonial />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
