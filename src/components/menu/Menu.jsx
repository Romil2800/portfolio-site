import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
          <li onClick={()=>setMenuOpen(false)}>
          <a href="#timeline">Resume</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#skills">Skills</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#experience">Works</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#certificates">Testimonials</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}