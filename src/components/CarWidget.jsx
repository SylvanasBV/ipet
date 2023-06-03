import React from "react";

const styles = {
  span: {
    color: "White",
    font_weight: "bold"
  }
}

const CarWidget = ({contador}) =>{
    return(
        <div>
          🛒<span style={styles.span}>{contador}</span>
        </div>
    )
} 

export default CarWidget;