import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Logo from '../../images/logo-with-text.png';
import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar expand="lg" className='nav-bg'>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Logo} alt="Logo" className='logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto text-uppercase text-white">
                    <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
                    <Nav.Link href="#link" className='text-white'>Link</Nav.Link>
                    <Nav.Link href="#service" className='text-white'>Services</Nav.Link>
                    <NavDropdown title="Departments" id="basic-nav-dropdown" className='text-white dropdown'>
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#contact" className='text-white'>Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;