import react from "react"
import "./Navbar.css"


export default function Navbar(){
    return (
        <div>
            <nav className="nav-bar">
                <h2 className="nav-header">Noklashn</h2>
                <ul className="nav-ul">
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">PORTFOLIO</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </nav>

        </div>
    )
}