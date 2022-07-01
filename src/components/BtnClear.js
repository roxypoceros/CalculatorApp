import React from 'react'
import "../style/BtnClear.css"

const BtnClear = (props) => {
  return (
    <div className="btnClear">
        {props.children}
    </div>
  )
}

export default BtnClear
