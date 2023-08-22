import { Routes, Route, useNavigate } from 'react-router-dom'
import MainPage from './pages/mainPage'
import AuthPage from './pages/authPage'
import AirportDetailPage from './pages/airportDetailPage'
import Navigation from './components/Navigation'
import { useAppSelector } from './hooks/redux'
import { useEffect } from 'react'

function App() {
  const { isAuth } = useAppSelector(state => state.auth);
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) {
      navigate('/auth')
    }
  }, [isAuth, navigate])
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
