import React from "react";
import Navbar from "./Navbar";
import "./FirstPage.css"
import Hero from "./Hero"

export default function FirstPage(){
    return (
        <div className="body-div">
            
            <Navbar />
            <Hero />
        </div>
    )
}