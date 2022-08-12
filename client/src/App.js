import React, { useEffect, useState } from 'react'

function App() {

  const [counter, setCounter] = useState(0);

  useEffect(() => {

  });

  return (
    <div className='App'>
      <p>{counter}</p>
      <button onClick={() => { setCounter( counter + 1 )}}> Press me! </button>
    </div>
  )
}

export default App