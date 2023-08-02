import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/react-bootstrap/dist/react-bootstrap'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(<BrowserRouter>
  <App />
</BrowserRouter>)
