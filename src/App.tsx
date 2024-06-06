import NavBar from './components/nav-bar'

import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/home-page'
import Contact from './pages/contact'

function App() {
  return (
    <main className='px-5 md:px-10 flex flex-col gap-10 items-center pb-5'>
      <NavBar />
      <Routes>
        <Route path="/contact" element={<Contact/>} />
        <Route path='/home' element={<Navigate to={'/'} replace />} />
        <Route path="/" element={<HomePage />} />
      </Routes>

    </main>
  )
}

export default App
