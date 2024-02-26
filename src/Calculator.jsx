import { useState } from "react";

function Calculator() {
  const [value,setValue] = useState('');
  function handleValue(e) {
    setValue(value + e.target.value)
  }
  return (
    <div className="container">
      <h1>Calcluator</h1>
      <div className="context">
        <input type="text" value={value}/>

        <div className="wrapper">
          <button value="AC" onClick={() => setValue('')}>AC</button>
          <button value="DE" onClick={ () => setValue(value.slice(0,-1))}>DE</button>
          <button value="%" onClick={handleValue}>%</button>
          <button value="/" onClick={handleValue}>/</button>
        </div>
        <div>
          <button value="7" onClick={handleValue}>7</button>
          <button value="8" onClick={handleValue}>8</button>
          <button value="9" onClick={handleValue}>9</button>
          <button value="*" onClick={handleValue}>*</button>
        </div>
        <div>
          <button value="4" onClick={handleValue}>4</button>
          <button value="5" onClick={handleValue}>5</button>
          <button value="6" onClick={handleValue}>6</button>
          <button value="-" onClick={handleValue}>-</button>
        </div>
         <div>
          <button value="1" onClick={handleValue}>1</button>
          <button value="2" onClick={handleValue}>2</button>
          <button value="3" onClick={handleValue}>3</button>
          <button value="+" onClick={handleValue}>+</button>
        </div>
        <div>
          <button value="0" onClick={handleValue}>0</button>
          <button value="." onClick={handleValue}>.</button>
          <button value="=" className="submit" onClick={() => setValue(eval(value))}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
