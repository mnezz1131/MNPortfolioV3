import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "../src/screens/About/About.jsx";
import Contact from "./screens/Contact/Contact";
import Home from "../src/screens/Home/Home.jsx";
import Skills from "../src/screens/Skills/Skills.jsx";
import Portfolio from "../src/screens/Portfolio/Portfolio.jsx"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
