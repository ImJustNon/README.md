import { useState, useEffect } from 'react';

function App(){
  const [ count, setCount ] = useState(0);
  
  function Increment(){
    setCount(count + 1);
  }
  function Decrement(){
    setCount(count - 1);
  }
  
  return (
    <>
      <button onClick={ Increment }> Increment Count </button>
      <h1> { count } </h1>
      <button onClick={ Decrement }> Decrement Count </button>
    </>
  );  
}

export default App;
