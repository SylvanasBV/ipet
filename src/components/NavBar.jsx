import React from "react";
import CarWidget from "./CarWidget";
const NavBar = () =>{
    return(
        <header>
            <img src="../img/ICON.png" alt="Fundación IPet logo" />
            <h2>IPET</h2>
            <CarWidget contador={1}/>
            <nav>
                <ul>
                    <li><a href="#">Dog Food</a></li>
                    <li><a href="#">Toys</a></li>
                    <li><a href="#">Weather</a></li>
                    <li><a href="#">Healt</a> </li>
                </ul>
            </nav>
        </header>
    )
} 

export default NavBar;