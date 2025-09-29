import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer mt-auto" style={{
            background: 'linear-gradient(135deg, #212529 0%, #343a40 100%)',
            color: 'white',
            padding: '3rem 0 2rem 0',
            marginTop: 'auto'
        }}>
            <Container>
                <Row className="align-items-center mb-4">
                    <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
                        <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
                            <span style={{
                                background: 'linear-gradient(135deg, #4CAF50, #2196F3)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontWeight: '900',
                                fontSize: '1.8rem',
                                marginRight: '10px'
                            }}>
                                LSPVIC
                            </span>
                            <span style={{ fontSize: '1.5rem' }}>☀️</span>
                        </div>
                        <p style={{ fontSize: '1rem', opacity: '0.9', marginBottom: '0.5rem' }}>
                            LangaAI PV Installations & Cleaning
                        </p>
                        <p style={{ fontSize: '0.95rem', opacity: '0.8', marginBottom: '1rem' }}>
                            &copy; {currentYear} LSPVIC. All rights reserved.
                        </p>
                        <div style={{ fontSize: '0.9rem' }}>
                            <a
                                href="/privacy"
                                style={{
                                    color: '#4CAF50',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease',
                                    marginRight: '15px'
                                }}
                                onMouseOver={(e) => e.target.style.color = 'white'}
                                onMouseOut={(e) => e.target.style.color = '#4CAF50'}
                            >
                                🔒 Privacy Policy
                            </a>
                            <span style={{ opacity: '0.5' }}>|</span>
                            <a
                                href="https://langaai.co.za"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: '#4CAF50',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease',
                                    marginLeft: '15px'
                                }}
                                onMouseOver={(e) => e.target.style.color = 'white'}
                                onMouseOut={(e) => e.target.style.color = '#4CAF50'}
                            >
                                🚀 Powered by LangaAI
                            </a>
                        </div>
                    </Col>

                    <Col md={6} className="text-center text-md-end">
                        <div className="d-flex flex-column align-items-center align-items-md-end">
                            <div className="d-flex align-items-center mb-3">
                                <span style={{ fontSize: '1.2rem', marginRight: '10px' }}>📱</span>
                                <a
                                    href="tel:+27716285999"
                                    style={{
                                        color: 'white',
                                        textDecoration: 'none',
                                        fontWeight: '600',
                                        fontSize: '1.1rem',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseOver={(e) => e.target.style.color = '#4CAF50'}
                                    onMouseOut={(e) => e.target.style.color = 'white'}
                                >
                                    +27 71 628 5999
                                </a>
                            </div>

                            <div className="d-flex align-items-center mb-3">
                                <span style={{ fontSize: '1.2rem', marginRight: '10px' }}>✉️</span>
                                <a
                                    href="mailto:sello.phakoe@gmail.com"
                                    style={{
                                        color: 'white',
                                        textDecoration: 'none',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseOver={(e) => e.target.style.color = '#4CAF50'}
                                    onMouseOut={(e) => e.target.style.color = 'white'}
                                >
                                    sello.phakoe@gmail.com
                                </a>
                            </div>

                            <div className="d-flex align-items-center">
                                <span style={{ fontSize: '1.2rem', marginRight: '10px' }}>💬</span>
                                <a
                                    href="https://wa.me/27731250723?text=Hi%2C%20I%E2%80%99m%20interested%20in%20LSPVIC%20services!"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="whatsapp-btn btn btn-sm"
                                    style={{
                                        background: 'linear-gradient(135deg, #25D366, #128C7E)',
                                        color: 'white',
                                        border: 'none',
                                        padding: '8px 16px',
                                        borderRadius: '20px',
                                        fontSize: '0.9rem',
                                        fontWeight: '600',
                                        transition: 'all 0.3s ease',
                                        textDecoration: 'none'
                                    }}
                                    onMouseOver={(e) => {
                                        e.target.style.background = 'linear-gradient(135deg, #128C7E, #25D366)';
                                        e.target.style.transform = 'scale(1.05)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.background = 'linear-gradient(135deg, #25D366, #128C7E)';
                                        e.target.style.transform = 'scale(1)';
                                    }}
                                >
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>

                <hr style={{
                    border: 'none',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    margin: '2rem 0 1.5rem 0'
                }} />

                <Row>
                    <Col className="text-center">
                        <p style={{
                            fontSize: '0.9rem',
                            opacity: '0.8',
                            margin: '0',
                            fontStyle: 'italic',
                            lineHeight: '1.6'
                        }}>
                            🌱 Certified Solar Installations • 🧹 Professional Panel Cleaning • 🤖 AI-Powered Forecasting
                        </p>
                        <p style={{
                            fontSize: '0.85rem',
                            opacity: '0.7',
                            margin: '0.5rem 0 0 0'
                        }}>
                            📍 Serving Gauteng Province: Johannesburg • Pretoria • East Rand • West Rand
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;