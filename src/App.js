import './App.css';
import Button from './components/Button';
import Screen from './components/Screen';
import BtnClear from './components/BtnClear';

function App() {
  return (
    <div className="App">
      <div className="calc-container">
        <Screen />
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
