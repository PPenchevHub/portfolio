import "./Navbar.scss"
import {Mail, GitHub, LinkedIn} from "@material-ui/icons"

export default function Navbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"navbar " +(menuOpen && "active") } >
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">Penchev</a>
                <div className="itemContainer">
                <a href="mailto:ppenchev73@gmail.com"> <Mail className="icon"/> </a>
                <a href="mailto:ppenchev73@gmail.com"> <GitHub className="icon"/> </a>
                <a href="mailto:ppenchev73@gmail.com"> <LinkedIn className="icon"/> </a>

                 
                </div>
            </div>
            <div className="right">
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                  <span className="line1"></span>
                  <span className="line2"></span>
                  <span className="line3"></span>
                </div>
            </div>
        </div>

    </div>
  )
}

