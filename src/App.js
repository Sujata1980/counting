import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';

function App() {

  const [count,setCount] = useState(0);
  return (
    <div className="App">
      <h1>CounterApp</h1>
      <h2>Count : {count} </h2>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  );
}

export default App;
