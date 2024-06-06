import NavBar from './components/nav-bar'
import Btn from './components/btn'
import MyCard from './components/my-card'

function App() {

  return (
    <main className='px-5 md:px-10 flex flex-col gap-10'>
      <NavBar />
      <Btn maxWidth={150}  variant='contained' label='kaki' />
      <div className="cards-container">
        <MyCard />
      </div>
    </main>
  )
}

export default App
