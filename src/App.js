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
  const [input, setInput] = useState("")

  /* addInput será otra función que va a tener un valor y va a ejecutar lo que está entre 
  llaves.  
  la función setInput (de useState) va a actualizar input y entre () le vamos a pasar 
  el nuevo value del input(de useState) concatenado con el nuevo value () y sigo trabajando
  con strings */
  const addInput = value => {
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
          {/* se usa etiqueta de cierre porque incluyo el prop entre ellas. 
          A cada botón le agrego el prop handleClick para que cada vez que de click
          en los números, . = se llame a la función addInput dentro del componente
          (no se usan paréntesis, porque no la quiero ejecutar) 
          handleClick se define en el botón*/}
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className="row" >
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className="row" >
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>x</Button>
        </div>
        <div className="row" >
          <Button handleClick={addInput}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className="row" >
          <BtnClear>Clear</BtnClear>
        </div>
      </div>


    </div>

  );
}

export default App;
