import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './assets/style/style.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(

    <BrowserRouter>
      <App />
    </BrowserRouter>
)
