import React, { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  function add() {
    setCount(count + 1);
  }
  function minus() {
    if (count > 0) setCount(count - 1);
  }
  return (<div className='container'>
    <div className='card'>
      <h1 className="hi">
        Counter App
        <br />
        {count}
      </h1>
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
    </div></div>
  );
}
export default App;
