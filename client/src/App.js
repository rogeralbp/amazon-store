import React, { useEffect, useState } from 'react'

function App() {

  // const [backendData, setBackendData] = useState([{}])

  // useEffect(() => {

  //   fetch("/api").then(

  //     response => response.json()

  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )

  // }, [])

  // return (

  //   <div>

  //     {(typeof backendData.pets === 'undefined') ? (
  //       <p>Loading ...</p>
  //     ) : (
  //       backendData.pets.map((pet, i) => (
  //         <p key={i}>{pet}</p>
  //       ))
  //     )}

  //   </div>
  // )

  // useEffect(() => {



  // }, [])

  const [flag, setFlag] = useState(true);

  return (
    <div className='App'>
      {flag ? <p>TRUE</p> : <p>FALSE</p>}
      <button onClick={ () => flag ? setFlag(false) : setFlag(true) } >Click ME!!</button>

    </div>
  );

}

export default App