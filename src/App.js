import React, { useState } from 'react';


function initialValue(){
  console.log('run function')
  return 4
}

function App() {
  const [count, setcount] = useState(()=>initialValue())

  function decrementCount(){
      setcount(preCount => preCount-1)
  }

  function incrementCount(){
    setcount(preCount => preCount+1)
}

  return (
    <>
      <button onClick={decrementCount}> - </button>
      
          <span>{count}</span>
      <button onClick={incrementCount}> + </button>
    </>
  );
}

export default App;