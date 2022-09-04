import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Particle from "./components/Particle";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div>
      
      <Particle />

      <NavBar />
      <Home />
      <About />
      <Technologies />
      <Projects />

      <SocialLinks />
      
    </div>
  );
}

export default App;
