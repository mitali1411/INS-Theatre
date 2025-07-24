import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Logo.png';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/events', label: 'Events' },
  { to: '/news', label: 'News' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const handleClose = () => setExpanded(false);
  return (
    <Navbar expanded={expanded} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Theatre Group Logo" style={{ height: '48px', width: 'auto' }} />
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : true)} aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map(link => (
              <Nav.Link
                as={Link}
                to={link.to}
                key={link.to}
                onClick={handleClose}
                style={{
                  color: location.pathname === link.to ? '#b64b48' : '#000',
                  fontWeight: 500,
                  fontSize: '1.1rem',
                  marginLeft: '1rem',
                  transition: 'color 0.2s',
                }}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
} 

export default Header