import React from 'react'
import "../style/BtnClear.css"

/* El btn debe regresarnos a la pantalla vacía */
const BtnClear = (props) => {
  return (
    /* agrego event listener handleClear */
    <div className="btnClear"
      onClick={props.handleClear}>
      {props.children}

    </div>
  )
}

export default BtnClear
