import { useState } from 'react'
import NavBar from './components/nav-bar'
import Btn from './components/btn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className='px-5'>

     <NavBar/>
     <Btn variant='contained' label='kaki'/>
    </main>
    </>
  )
}

export default App
