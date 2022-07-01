import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import Screen from './components/Screen';
import BtnClear from './components/BtnClear';

function App() {
/* Crear estado para el input se va a mantener como el estado del componente,
la función lo actualiza e inicia vacío.
Hay que asignar el imput como el valor de la pantalla en <Screen/> para que
cuando lo actualicemos se actualice su valor 
*/
const [input, setInput]=useState ("")

/* addInput será otra función que va a tener un valor y va a ejecutar lo que está entre 
llaves.  
la función setInput (de useState) va a actualizar input y entre () le vamos a pasar 
el nuevo value del input(de useState) concatenado con el nuevo value () y sigo trabajando
con strings */
const addInput = value =>{
  setInput(input + value);
}

  return (
    <div className="App">
      <div className="calc-container">
        {/* paso el valor del prop input (así se llama en el componente)
         con su valor del estado (inicia vacío) */}
        <Screen input={input} />
        {/* filas de calculadora */}
        <div className="row" >
          {/* se usa etiqueta de cierre porque incluyo el prop entre ellas */}
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className="row" >
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className="row" >
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>x</Button>
        </div>
        <div className="row" >
          <Button>=</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>/</Button>
        </div>
        <div className="row" >
          <BtnClear>Clear</BtnClear>
        </div>
      </div>


    </div>

  );
}

export default App;
