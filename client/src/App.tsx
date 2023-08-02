import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/mainPage'
import AuthPage from './pages/authPage'
import AirportDetailPage from './pages/airportDetailPage'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={ <MainPage /> }/>
        <Route path="/auth" element={ <AuthPage /> }/>
        <Route path="/airport/:id" element={ <AirportDetailPage /> }/>
      </Routes>
    </div>
  )
}

export default App
