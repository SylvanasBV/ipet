import React from "react";
import Style from "../App.css"


export const Container = ({contain}) =>{
    return(
        <div style={Style.container}>
          {contain}
        </div>
    );
};