import React, { useState, useEffect } from 'react';

function App(): React.JSX.Element {
  const [ count, setCount ] = useState<number>(0);
  
  function Increment(): void {
    setCount((prev: number) => prev++);
  }
  function Decrement(): void {
    setCount((prev: number) => prev--);
  }
  
  return (
    <>
      <button onClick={(): void => Increment()}>Increment Count</button>
      <h1>{count}</h1>
      <button onClick={(): void => Decrement() }>Decrement Count</button>
    </>
  );  
}

export default App;
