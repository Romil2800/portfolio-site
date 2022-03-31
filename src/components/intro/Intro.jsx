import "./intro.scss"
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { Facebook, Instagram, LinkedIn, GitHub } from '@material-ui/icons'

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Android Developer", "Kotlin", "Flutter"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/2.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Romil Patel</h1>
          <h3>
            Freelancer <span ref={textRef}></span>
          </h3>
          
        </div>
          <div className="icons">
                                <GitHub className='icon'onClick={() => window.location.replace("https://github.com/Romil2800?tab=repositories")}/>
                                <Instagram className='icon'/>
                                <Facebook className='icon'/>
                                <LinkedIn className='icon' onClick={() => window.location.replace("https://www.linkedin.com/in/romilp/")}/>
                            </div>
        <a href="#timeline">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}