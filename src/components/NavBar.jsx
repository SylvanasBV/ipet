import React from "react";
import icon from "../img/icon.png"
import {CarWidget} from "./CarWidget";
//import styled from "styled-components";
import "../App.css"


export const NavBar = () =>{
    return(
        <header>
          <nav className= "navbar container">
              <section className = "navbar__logo"> 
                <a className="navbar__link" href="#top">
                  <img src={icon} alt="Tienda Ipet logo"/>
                </a>
                <p className="navbar__name">Shop IPET</p>
              </section>
              <ul className="menu">
                <li className="menu__item">
                    <a className="menu__link" href="./index.html">HOME</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="./ihelp.html">#IHELP</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="./shop.html">SHOP</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="./contact_us.html">CONTACT US</a>
                </li>
              </ul>
              <CarWidget  contador={0}/>
          </nav>
        </header>
    );
};