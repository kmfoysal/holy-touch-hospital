import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo-with-text.png';
import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar expand="lg" className='nav-bg' sticky="top">
            <Container>
                <Navbar.Brand href="#home">
                    <Link to='/'>
                        <img src={Logo} alt="Logo" className='logo' />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto text-uppercase text-white">
                    <Link to='/home' className='navigation-link'>
                        Home
                    </Link>
                    <Link to='/about' className='navigation-link'>
                        About Us
                    </Link>
                    <Link to='/services' className='navigation-link'>
                        Services
                    </Link>
                    <Link to='/doctors' className='navigation-link'>
                        Doctors
                    </Link>
                    <Link to='/gallery' className='navigation-link'>
                        Gallery
                    </Link>
                    <Link to='/news' className='navigation-link'>
                        News & Events
                    </Link>
                    <Link to='/contact' className='navigation-link'>
                        Contact Us
                    </Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;