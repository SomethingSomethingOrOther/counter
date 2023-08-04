import './App.css';
import {useState} from "react"

function App() {
  const [counter,setCounter]=useState(0)
  const [inputValue,setInputValue]=useState('')

    const increment=()=>{
      if (!inputValue){
        setCounter(count=>count + 1)

      }else{
        setCounter(count=>count+ Number(inputValue))
      }
    }
    const decrement=()=>{
      if (!inputValue){
        setCounter(count=>count -  1)

      }else {
        setCounter(count=>count - Number(inputValue))
      }
    }

  return (
    <div className="App">
      <h1>hello world!</h1>
      <p>{counter}</p>
      <label>
      Increment/decrement by:
      <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
      </label>
      <button onClick={decrement}>Decrement</button> {" "} <button onClick={increment}>Increment</button>
       {" "} <button onClick={()=>setCounter(0)}>Reset</button>
    </div>
  );
}

export default App;
