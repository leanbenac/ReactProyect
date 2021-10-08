import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Container ,Nav , NavDropdown} from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'
import Badge from '../Badge/Badge'
// import logo from '../../img/logo.png'

const NavBar = () => {
    return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand  href="#home"> Reznik E-commerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link  href="#features">Home </Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">Carrito<CartWidget /><Badge /></Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Dank memes 
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
            
    )
}

export default NavBar

