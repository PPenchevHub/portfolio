import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Portfolio from "./Components/Portfolio/Portfolio";
import Experience from "./Components/Experience/Experience";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import "./app.scss"
import { useState } from "react";
import Menu from "./Components/Menu/Menu";
import About from "./Components/About Me/About";
 
function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <div className="App">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <div className="sections">
            <Intro></Intro>
            <About/>
            <Portfolio></Portfolio>
            <Testimonials></Testimonials>
            <Contact></Contact>
          </div>
      
    </div>
  );
}

export default App;
