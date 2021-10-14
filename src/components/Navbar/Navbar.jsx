import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Container ,Nav , NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'
import Badge from '../Badge/Badge'
import logo from '../../img/logo.png'
import '../Navbar/Navbar.css';


const NavBar = () => {
    return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand  href=""><img src={logo} className="imgNav" alt="cuadros"></img>Reznik E-commerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link bg="dark" variant="dark"> <Link to={'/'} className="link"> Home </Link> </Nav.Link>
                <Nav.Link href="#pricing">About Us</Nav.Link>
                <NavDropdown title="Products" id="collasible-nav-dropdown">
                    <NavDropdown.Item ><Link to="/products">Products </Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">Carrito<CartWidget /><Badge /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
            
    )
}

export default NavBar

