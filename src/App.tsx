import NavBar from './components/nav-bar'

import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/home-page'
import Contact from './pages/contact'
import Services from './pages/services'
import Products from './pages/products'
import Footer from './components/footer'

function App() {
  return (
    <main className='min-h-screen relative px-5 md:px-10 flex flex-col gap-3 items-center pb-24'>
      <NavBar />
      <Routes>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/products" element={<Products/>} />
        <Route path='/home' element={<Navigate to={'/'} replace />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer/>
    </main>
  )
}

export default App
