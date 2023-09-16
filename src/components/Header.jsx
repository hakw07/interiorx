import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/images/utilities/logo.png';

// bootstrap components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-white header">
            <Container className="position-relative">
                <Link to="/" className="logo">
                    <img src={Logo} alt="interiorx" />
                </Link>
        
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto navLinks">
                        <NavLink to="/" className="me-3 text-uppercase nav-link">Home</NavLink>
                        <NavLink to="/about" className="me-3 text-uppercase nav-link">About Us</NavLink>

                        <NavDropdown title="Our Services" id="basic-nav-dropdown" className="me-3 text-uppercase">
                            <NavLink to="/interior" className="me-3 text-uppercase dropdown-item">Interior</NavLink>
                            <NavLink to="/construction" className="me-3 text-uppercase dropdown-item">Construction</NavLink>
                        </NavDropdown>

                        <NavLink to="/contact" className="me-3 text-uppercase nav-link">Contact Us</NavLink>
                    </Nav>
                </Navbar.Collapse>

                <Link to="/" className="text-decoration-none fs-6 text-uppercase text-primary quoteBtn">Get a quote</Link>
            </Container>
        </Navbar>
    );
}

export default Header;