import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import Certificates from "./components/certificates/Certificates";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Experience />
        <Certificates />
        <Contact/>
      </div>
    </div>
  );
}

export default App;
