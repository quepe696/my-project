import { useState } from 'react'
import './App.css'
import Resolucion from './Resolucion'


function App() {

  const[x1, setX1] = useState(0)
  const[y1, setY1] = useState(0)
  const[x2, setX2] = useState(0)
  const[y2, setY2] = useState(0)
  const[resultado, setResultado] = useState(false)
  const[error, setError] = useState(true)


  const cambiador = () => {
    if (x1.length > 0 && y1.length > 0 && x2.length > 0 && y2.length > 0) {
      setResultado(true)
      setError(true)
    } else {
      setResultado(false)
      setError(false)
    }
  }


  return (
    <>
      <div className='padre-de-todo'>

        <div>
          <h1 className='text-principal'>
            X<span className='numero'>1</span> =
            <input className='input'
              type='number'
              onChange={e => setX1(e.target.value)}
            />
            Y<span className='numero'>1</span> =
            <input className='input'
              type="number"
              onChange={e => setY1(e.target.value)}
            />
          
          </h1>
        </div>

        <div>
          <h1 className='text-principal'>
            X<span className='numero'>2</span> =
            <input className='input'
              type="number"
              onChange={e => setX2(e.target.value)}
            />
            Y<span className='numero'>2</span> =
            <input className='input'
              type="number"
              onChange={e => setY2(e.target.value)}
            />
          </h1>

          {error ? null : <h2 className='alerta'>ALGO SALIO MAL</h2>}

          <img src={error ? null : `./terrible.png`} alt="" />

        </div>
        <button className='button-resolver' onClick={cambiador}>RESOLVER</button>

      </div>

      {resultado ? <Resolucion
        x1={x1}
        x2={x2}
        y1={y1}
        y2={y2}
      /> : null}

    </>

    
  )
}

export default App
