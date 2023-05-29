import react from "react"
import "./Navbar.css"


export default function Navbar(){

    
  
    return (
        <div>
          <nav className="nav-bar shadow">
            <h3 className="header">Noklash</h3>
            <ul className="nav-ul">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          <hr className="mt-2"/>

        </div>
    )
}