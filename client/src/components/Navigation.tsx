import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { authSlice } from '../store/slices/authSlice'
import { useAppDispatch } from '../hooks/redux'

interface IProps {
  
}

const Navigation: React.FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  const { logout } = authSlice.actions
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand><Link className='navigation_links' to="/">Airport</Link></Navbar.Brand>
        <Link onClick={() => dispatch(logout())} className='navigation_links' to="/auth">Logout</Link>
      </Container>
    </Navbar>
  )
}

export default Navigation