import React from "react";
import shoppingCard from "../img/shoppingCardL.png"
import "../App.css"

export const styles = {
  span: {
    color: "White",
    font_weight: "bold"
  }
}

export const CarWidget = ({contador}) =>{
    return(
        <section className="navbar__logo">
          <a className="navbar__link" href="#top">
            <img src={shoppingCard} alt="Carro de compras"/>
          </a>
          <p className="navbar__name">{contador}</p>
        </section>
    );
};