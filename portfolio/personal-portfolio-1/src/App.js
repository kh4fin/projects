import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header.js";
import Nav from "./components/nav/Nav.js";
import About from "./components/about/About.js";
import Experience from "./components/experience/Experience.js";
import Services from "./components/services/Services.js";
import Projects from "./components/projects/Projects.js";
import Testimonials from "./components/testimonials/Testimonials.js";
import Contact from "./components/contact/Contact.js";
import Footer from "./components/footer/Footer.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
