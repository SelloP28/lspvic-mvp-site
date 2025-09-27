import React from 'react';
import { Navbar as BSNavbar, Nav } from 'react-bootstrap';

function Navbar() {
    return (
        <BSNavbar bg="light" expand="lg">
            <BSNavbar.Brand href="/">LSPVIC</BSNavbar.Brand>  LangaAI PV Installations and Cleaning (LSPVIC)
            <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
            <BSNavbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/services">Services</Nav.Link>
                    <Nav.Link href="/ai-tools">AI Tools</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </BSNavbar.Collapse>
        </BSNavbar>
    );
}

export default Navbar;