import React from "react"
import "../style/Button.css"


function Button(props) {
  const isOperator = value => {
    /* lo que retornará si el string:
    No es un número Y no es un punto Y no es el signo
    */
    return isNaN(value) && (value !== ".") && (value !== "=");
  };

  return (
    <div

/*     Con template literals creo clase mas elaborada para  
    decidir cual va a ser la clase del botón, operador o num:
    button-container es una clase fija (para CSS),
    operator sólo se agrega si el valor del children representa
    un operador /+-*
    La función isOperator debe dar true/false para decidir 
    Al final usamos el método trim para quitar espacios en blanco 
    antes o después de un string. TrimEnd es para el final*/
    className={`button-container ${isOperator(props.children) ? "operator":""}`.trimEnd()}>
      
        
        {props.children}
    </div>
  )
}

export default Button