import React from 'react'
import "../style/Screen.css"

/* con const no se puede reasignar el valor de Screen, 
al nombre del componente le asignamos la funcion => */
 const Screen = ({ input }) => {
  return (
    <div className="input">
        {/* dentro del div se va a reemplazar el valor del prop */}
        {input}
    </div>
  )
}

export default Screen