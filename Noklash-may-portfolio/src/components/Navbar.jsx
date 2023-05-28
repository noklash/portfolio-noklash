import react from "react"
import "./Navbar.css"


export default function Navbar(){
  
    return (
        <div>
          <nav class="navbar navbar-expand-lg bg-body- text-white">
              <div class="container-fluid">
                <a class="navbar-brand text-white" href="#">Ken.mild</a>
                <button class="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon "></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link text-white" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="#">About</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white">Portfolio</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav> 

        </div>
    )
}