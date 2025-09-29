import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="page-container">
            {/* Hero Section */}
            <section className="hero-section" style={{ paddingTop: '100px' }}>
                <Container>
                    <div className={`text-center mb-5 ${isVisible ? 'fade-in-up' : ''}`}>
                        <h1 className="hero-title floating">
                            Certified Solar Installations & Cleaning
                        </h1>
                        <p className="hero-subtitle">
                            Maximize your solar efficiency with AI-powered forecasting and expert professional services
                        </p>
                        <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
                            <Button
                                variant="primary"
                                size="lg"
                                href="/services"
                                className="px-4 py-3"
                            >
                                📋 Book Services Now
                            </Button>
                            <Button
                                variant="outline-light"
                                size="lg"
                                href="/ai-tools"
                                className="px-4 py-3"
                            >
                                🤖 Try AI Forecaster
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            <Container className="py-5">
                {/* Quick Stats Section */}
                <Row className="mb-5">
                    <Col md={4} className="text-center mb-4">
                        <div className={`fade-in ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
                            <div style={{
                                fontSize: '3rem',
                                color: '#4CAF50',
                                marginBottom: '1rem'
                            }}>
                                ⚡
                            </div>
                            <h4 style={{ color: '#2196F3', fontWeight: '700' }}>15-25%</h4>
                            <p style={{ color: '#6C757D' }}>Efficiency Boost with Professional Cleaning</p>
                        </div>
                    </Col>
                    <Col md={4} className="text-center mb-4">
                        <div className={`fade-in ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.4s' }}>
                            <div style={{
                                fontSize: '3rem',
                                color: '#2196F3',
                                marginBottom: '1rem'
                            }}>
                                🏆
                            </div>
                            <h4 style={{ color: '#4CAF50', fontWeight: '700' }}>Certified</h4>
                            <p style={{ color: '#6C757D' }}>PV GreenCard Professional Installer</p>
                        </div>
                    </Col>
                    <Col md={4} className="text-center mb-4">
                        <div className={`fade-in ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.6s' }}>
                            <div style={{
                                fontSize: '3rem',
                                color: '#4CAF50',
                                marginBottom: '1rem'
                            }}>
                                🤖
                            </div>
                            <h4 style={{ color: '#2196F3', fontWeight: '700' }}>AI-Powered</h4>
                            <p style={{ color: '#6C757D' }}>Smart Cleaning Schedule Optimization</p>
                        </div>
                    </Col>
                </Row>

                {/* Services Preview */}
                <Row className="mb-5">
                    <Col lg={6} className="mb-4">
                        <Card className={`h-100 ${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.8s' }}>
                            <div style={{
                                height: '200px',
                                backgroundImage: 'url(https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '12px 12px 0 0'
                            }}></div>
                            <Card.Header style={{
                                background: 'linear-gradient(135deg, #E3F2FD, #C8E6C9)',
                                fontWeight: '700',
                                fontSize: '1.2rem'
                            }}>
                                🔧 Solar PV Installations
                            </Card.Header>
                            <Card.Body>
                                <p>Professional solar panel installation with full CoC compliance and premium components. Transform your home into a clean energy powerhouse.</p>
                                <ul style={{ color: '#6C757D', marginBottom: '1.5rem' }}>
                                    <li>Site survey & custom design</li>
                                    <li>High-quality panels & inverters</li>
                                    <li>Certificate of Compliance included</li>
                                    <li>From R100K for residential systems</li>
                                </ul>
                                <Button variant="primary" href="/services" className="w-100">
                                    Learn More
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6} className="mb-4">
                        <Card className={`h-100 ${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: '1s' }}>
                            <div style={{
                                height: '200px',
                                backgroundImage: 'url(https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '12px 12px 0 0'
                            }}></div>
                            <Card.Header style={{
                                background: 'linear-gradient(135deg, #E3F2FD, #C8E6C9)',
                                fontWeight: '700',
                                fontSize: '1.2rem'
                            }}>
                                🧹 Professional Panel Cleaning
                            </Card.Header>
                            <Card.Body>
                                <p>Eco-friendly cleaning methods that boost your solar output by 15-25%. Keep your investment performing at peak efficiency.</p>
                                <ul style={{ color: '#6C757D', marginBottom: '1.5rem' }}>
                                    <li>Environmentally safe cleaning solutions</li>
                                    <li>Significant efficiency improvements</li>
                                    <li>AI-optimized scheduling available</li>
                                    <li>From R500 per cleaning session</li>
                                </ul>
                                <Button variant="success" href="/ai-tools" className="w-100">
                                    Schedule with AI
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Certification Display */}
                <Card className={`mb-5 ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '1.2s' }}>
                    <Card.Header style={{
                        background: 'linear-gradient(135deg, #2196F3, #4CAF50)',
                        color: 'white',
                        fontWeight: '700',
                        fontSize: '1.3rem',
                        textAlign: 'center'
                    }}>
                        🏆 Our Professional Certification
                    </Card.Header>
                    <Card.Body className="text-center">
                        <Row className="align-items-center">
                            <Col md={4}>
                                <img
                                    src="/assets/pv-cert.png"
                                    alt="PV GreenCard Certification"
                                    className="cert-image mb-3 mb-md-0"
                                    style={{ maxWidth: '100%', height: 'auto' }}
                                />
                            </Col>
                            <Col md={8}>
                                <h4 style={{ color: '#2196F3', fontWeight: '700', marginBottom: '1rem' }}>
                                    PV GreenCard Certified Installer
                                </h4>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#6C757D' }}>
                                    Sello Phakoe brings certified expertise in solar PV installations combined with
                                    cutting-edge machine learning knowledge for optimal system performance. Our certification
                                    ensures professional installation standards and ongoing system optimization.
                                </p>
                                <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
                                    <Button variant="outline-primary" href="/about">
                                        View Full Credentials
                                    </Button>
                                    <Button variant="success" href="/contact" className="whatsapp-btn">
                                        📞 Get Quote
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                {/* CTA Section */}
                <div className={`text-center p-5 ${isVisible ? 'fade-in-up' : ''}`}
                    style={{
                        animationDelay: '1.4s',
                        background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
                        borderRadius: '12px',
                        border: '2px solid #E9ECEF'
                    }}>
                    <h3 style={{ color: '#2196F3', fontWeight: '700', marginBottom: '1rem' }}>
                        Ready to Optimize Your Solar Investment?
                    </h3>
                    <p style={{ fontSize: '1.1rem', color: '#6C757D', marginBottom: '2rem' }}>
                        Get started with our AI-powered forecasting tool or book a professional consultation today.
                    </p>
                    <div className="d-flex flex-wrap justify-content-center gap-3">
                        <Button
                            variant="success"
                            size="lg"
                            href="https://wa.me/27731250723?text=Hi%2C%20I%E2%80%99m%20interested%20in%20solar%20services!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whatsapp-btn px-4 py-3"
                        >
                            💬 Chat on WhatsApp
                        </Button>
                        <Button
                            variant="outline-primary"
                            size="lg"
                            href="/ai-tools"
                            className="px-4 py-3"
                        >
                            🔮 Try AI Forecaster
                        </Button>
                        <Button
                            variant="secondary"
                            size="lg"
                            href="https://langaai.co.za"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-3"
                        >
                            🚀 Explore Advanced AI
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Home;