import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './components/Demo'

function App() {
  const name="PRASH";
  let x=10;
  let y=20;
  function PP() {
    return "inside function";
  }
  function sum(a,b){
    return a + b;
  }

  function handleClick() {
    alert ("Button click ho gaya");

  }
  function handleClick1() {
    alert("This is seb");
  }
  function handleClick2()  {
    alert ("This is kela");
  }


 return(
  <div>
    <h1>user variable with jsx</h1>
    <h2>Value of variable is{name}</h2>
    <h3>{x+y}</h3>
    <h4>{PP()}</h4>
    <h5>example of paramiterized function {sum(x,y)}</h5>
    <button onClick={handleClick}  > Click me </button>
    <button onClick={handleClick1}   > Apple</button>
    <button onClick={handleClick2}   > Banana</button>
  </div>
 )
}

export default App
