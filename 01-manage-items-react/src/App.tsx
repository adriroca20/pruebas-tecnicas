import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
        <h1>Mi prueba técnica</h1>
        <h2>Añadir y eliminar elementos de una lista</h2>
    </header>
      <main>
        <aside>
          <form action="">
            <label htmlFor="">
              Elemento a introducir
              <input type="text" name='item' required placeholder='Videojuegos'/>
            </label>
            <button type='submit'>Añadir elemento a la lista</button>
          </form>
        </aside>
        <section>
          <h2>Lista de elementos</h2>
          <ul>
            <li>Primer elemento</li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default App
