import "./topbar.scss"
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
      <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
         <div className="left">
          <div className="logo">
            genius.
          </div>
           <div className="itemContainer">
            <Person className="icon"/>
            <span> +1 289-894-0282</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>patelromil2800@gmail.com</span>
          </div>
          
        </div>      
        <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
