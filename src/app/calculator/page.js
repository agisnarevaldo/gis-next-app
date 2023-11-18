'use client'
import { useState } from 'react'
import './calculator.css'

export default function page() {
  let [result, setResult] = useState("0");

  const handleClick = (e) => {
    if (result.lengt >= 16) {
      setResult("Inputan terlalu besar");
      return;
    }
    if (result.charAt(0) === '0') {
      result = result.slice(1, result.length);
    }
    setResult(result.concat(e.target.name));
  }
  
  return (
    <div className='container'>
      <div className="calc-screen">
        {result}
      </div>
      <div className="row">
        <button name='clear' onClick={handleClick}>C</button>
        <button name='+' onClick={handleClick}>+/-</button>
        <button name='%' onClick={handleClick}>%</button>
        <button name='/' onClick={handleClick}>/</button>
      </div>
      <div className="row">
        <button name='7' onClick={handleClick}>7</button>
        <button name='8' onClick={handleClick}>8</button>
        <button name='9' onClick={handleClick}>9</button>
        <button name='*' onClick={handleClick}>x</button>
      </div>
      <div className="row">
        <button name='4' onClick={handleClick}>4</button>
        <button name='5' onClick={handleClick}>5</button>
        <button name='6' onClick={handleClick}>6</button>
        <button name='-' onClick={handleClick}>-</button>
      </div>
      <div className="row">
        <button name='1' onClick={handleClick}>1</button>
        <button name='2' onClick={handleClick}>2</button>
        <button name='3' onClick={handleClick}>3</button>
        <button name='+' onClick={handleClick}>+</button>
      </div>
      <div className="row">
        <button name='.' onClick={handleClick}>.</button>
        <button name='0' onClick={handleClick}>0</button>
        <button name='backspace' onClick={handleClick}>[x]</button>
        <button name='equal' onClick={handleClick}>=</button>
      </div>
    </div>
  )
}
