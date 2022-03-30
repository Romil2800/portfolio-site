import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Certificates from "./components/certificates/Certificates";
import Contact from "./components/contact/Contact";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Resume from "./components/resume/Resume";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Resume/>
        <Portfolio />
        <Experience />
        <Certificates />
        <Contact/>
      </div>
    </div>
  );
}

export default App;
