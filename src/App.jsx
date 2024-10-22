import "bootstrap/dist/css/bootstrap.css";

import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Profiles from "./Components/Profiles";
import Portfolio from "./Components/Portfolio";
import Clients from "./Components/Clients";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Profiles />
      <Portfolio />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
