import React, { useState, useEffect } from "react";
import Navbar from "./component/Navbar/Navbar";
import "./App.css";
import Hero from "./component/Sections/Hero/Hero";
import Spinner from "./component/Spinner/Spinner";
import AboutMe from "./component/Sections/AboutMe/AboutMe";
import Projects from "./component/Sections/Projects/Projects";
import Skills from "./component/Sections/Skills/Skills";
import Footer from "./component/Sections/Footer/Footer";
import ContactMe from "./component/Sections/ContactMe/CantactMe";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);

  return (
    <div>
      {!loading ? (
        <Spinner />
      ) : (
        <>
          <Navbar />
          <Hero id="home" />
          <AboutMe id="about-me" />
          <Skills id="skills" />
          <Projects id="projects" />
          <ContactMe id="contact-me" />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
