import React, { useState, useEffect } from 'react';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';

function Navbar({ toggleDarkMode, darkMode }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <BSNavbar
            bg="light"
            expand="lg"
            fixed="top"
            className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
            style={{
                boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
                transition: 'all 0.3s ease',
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(10px)'
            }}
        >
            <Container>
                <BSNavbar.Brand href="/" className="navbar-brand fade-in">
                    <span style={{
                        background: 'linear-gradient(135deg, #4CAF50, #2196F3)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: '900',
                        fontSize: '1.8rem'
                    }}>
                        LSPVIC
                    </span>
                    <span style={{
                        fontSize: '0.9rem',
                        color: '#6C757D',
                        marginLeft: '10px',
                        fontWeight: '400'
                    }}>
                        Solar Solutions
                    </span>
                </BSNavbar.Brand>

                <BSNavbar.Toggle aria-controls="basic-navbar-nav" />

                <BSNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            href="/"
                            className="nav-link px-3"
                            style={{ fontWeight: '500' }}
                        >
                            🏠 Home
                        </Nav.Link>
                        <Nav.Link
                            href="/services"
                            className="nav-link px-3"
                            style={{ fontWeight: '500' }}
                        >
                            ⚡ Services
                        </Nav.Link>
                        <Nav.Link
                            href="/ai-tools"
                            className="nav-link px-3"
                            style={{ fontWeight: '500' }}
                        >
                            🤖 AI Tools
                        </Nav.Link>
                        <Nav.Link
                            href="/about"
                            className="nav-link px-3"
                            style={{ fontWeight: '500' }}
                        >
                            👨‍💼 About
                        </Nav.Link>
                        <Nav.Link
                            href="/contact"
                            className="nav-link px-3"
                            style={{ fontWeight: '500' }}
                        >
                            📞 Contact
                        </Nav.Link>
                        <Nav.Link
                            onClick={toggleDarkMode}
                            className="nav-link px-3"
                            style={{
                                fontWeight: '500',
                                cursor: 'pointer',
                                fontSize: '1.3rem'
                            }}
                            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                        >
                            {darkMode ? '☀️' : '🌙'}
                        </Nav.Link>
                    </Nav>
                </BSNavbar.Collapse>
            </Container>
        </BSNavbar>
    );
}

export default Navbar;