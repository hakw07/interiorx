import React from 'react';
import Logo from '../assets/images/logo.png';

// bootstrap components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-white">
            <Container className="position-relative" style={{fontFamily: 'BerlinSansFBDemiBold'}}>
                <Navbar.Brand href="#home">
                    <img src={Logo} style={{width: '160px', height: '64px'}} alt="interiorx" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto navLinks">
                        <Nav.Link href="#home" className="me-3 text-uppercase" style={{fontSize: '1.2rem'}}>Home</Nav.Link>
                        <Nav.Link href="#link" className="me-3 text-uppercase" style={{fontSize: '1.2rem'}}>About Us</Nav.Link>

                        <NavDropdown title="Our Services" id="basic-nav-dropdown" className="me-3 text-uppercase" style={{fontSize: '1.2rem'}}>
                            <NavDropdown.Item href="#action/3.2" className="me-3 text-uppercase" style={{fontSize: '1.2rem', fontFamily: 'Berlin Sans FB'}}>
                                Interior
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" className="me-3 text-uppercase" style={{fontSize: '1.2rem', fontFamily: 'Berlin Sans FB'}}>
                                Construction
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#about" className="me-3 text-uppercase" style={{fontSize: '1.2rem'}}>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <div className="quoteBtn">
                    <a href="#" className="text-decoration-none fs-6 text-uppercase text-primary" style={{padding: '0.7rem 0.9rem', border: '2px solid #3184a5'}}>Get a quote</a>
                </div>
            </Container>
        </Navbar>
    );
}

export default Header;