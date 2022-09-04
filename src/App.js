import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Particle from "./components/Particle";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      
      <Particle />

      <NavBar />
      <Home />
      <About />

      <SocialLinks />
      
    </div>
  );
}

export default App;
