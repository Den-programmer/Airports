import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

interface IProps {
  
}

const Navigation: React.FC<IProps> = (props) => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand><Link className='navigation_links' to="/">Airport</Link></Navbar.Brand>
        <Link className='navigation_links' to="/auth">Auth</Link>
      </Container>
    </Navbar>
  )
}

export default Navigation