import React from "react";
import webdev from "../assets/webdev.png"

export default function Hero(){
    return(
        <div className="hero">
            <div>
                <h5 className="text-white">Hi I am Ken.mild</h5>
                <h1>FRONT-END DEVELOPER</h1>
            </div>
            <div>
              <img src={webdev} width="200px" ></img>
            </div>
        </div>
    )
}