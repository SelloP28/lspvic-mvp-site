import React, { useState, useEffect } from 'react';
import { Modal, Button, Container, Row, Col, Card, Badge } from 'react-bootstrap';

function About() {
    const [showModal, setShowModal] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Container className="page-container" style={{ paddingTop: '100px' }}>
            {/* Hero Section */}
            <div className={`text-center mb-5 ${isVisible ? 'fade-in-up' : ''}`}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>👨‍💼</div>
                <h1 style={{
                    fontSize: '3rem',
                    fontWeight: '900',
                    background: 'linear-gradient(135deg, #4CAF50, #2196F3)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '1rem'
                }}>
                    About LSPVIC
                </h1>
                <p style={{ fontSize: '1.3rem', color: '#6C757D', maxWidth: '800px', margin: '0 auto' }}>
                    Where certified solar expertise meets cutting-edge artificial intelligence for optimal energy solutions
                </p>
            </div>

            <Row className="mb-5">
                {/* Personal Profile */}
                <Col lg={4} className="mb-4">
                    <Card className={`h-100 text-center ${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.2s' }}>
                        <div style={{
                            height: '200px',
                            backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '12px 12px 0 0',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute',
                                bottom: '10px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                background: 'rgba(76, 175, 80, 0.9)',
                                color: 'white',
                                padding: '8px 16px',
                                borderRadius: '20px',
                                fontWeight: '600',
                                fontSize: '0.9rem'
                            }}>
                                🏆 Certified Professional
                            </div>
                        </div>
                        <Card.Body className="p-4">
                            <h4 style={{ color: '#2196F3', fontWeight: '700', marginBottom: '1rem' }}>
                                Sello Phakoe
                            </h4>
                            <p style={{ color: '#4CAF50', fontWeight: '600', marginBottom: '1rem' }}>
                                Founder & Lead Installer
                            </p>
                            <div className="mb-3">
                                <Badge bg="primary" className="me-2 mb-2">PV GreenCard Certified</Badge>
                                <Badge bg="success" className="me-2 mb-2">ML Specialist</Badge>
                                <Badge bg="info" className="me-2 mb-2">Solar Expert</Badge>
                            </div>
                            <p style={{ color: '#6C757D', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                Combining professional solar installation certification with advanced machine learning
                                expertise to deliver optimized energy solutions.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Company Overview */}
                <Col lg={8} className="mb-4">
                    <Card className={`h-100 ${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.4s' }}>
                        <Card.Header style={{
                            background: 'linear-gradient(135deg, #E3F2FD, #C8E6C9)',
                            fontWeight: '700',
                            fontSize: '1.2rem'
                        }}>
                            <div className="d-flex align-items-center">
                                <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>🏢</span>
                                Company Profile
                            </div>
                        </Card.Header>
                        <Card.Body className="p-4">
                            <Row>
                                <Col md={6}>
                                    <h5 style={{ color: '#4CAF50', fontWeight: '600', marginBottom: '1rem' }}>
                                        Our Mission
                                    </h5>
                                    <p style={{ color: '#6C757D', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                        To revolutionize solar energy maintenance and installation through the combination
                                        of certified expertise and artificial intelligence, ensuring maximum efficiency
                                        and sustainability for every client.
                                    </p>

                                    <h5 style={{ color: '#2196F3', fontWeight: '600', marginBottom: '1rem' }}>
                                        What Sets Us Apart
                                    </h5>
                                    <ul style={{ color: '#6C757D', lineHeight: '1.7' }}>
                                        <li><strong>Dual Expertise:</strong> Certified installation + AI optimization</li>
                                        <li><strong>Data-Driven:</strong> Machine learning powered recommendations</li>
                                        <li><strong>Compliance:</strong> Full CoC and POPIA compliance</li>
                                        <li><strong>Innovation:</strong> Cutting-edge forecasting technology</li>
                                    </ul>
                                </Col>

                                <Col md={6}>
                                    <h5 style={{ color: '#FF9800', fontWeight: '600', marginBottom: '1rem' }}>
                                        Service Areas
                                    </h5>
                                    <div className="mb-3">
                                        <Badge bg="warning" text="dark" className="me-2 mb-2">Gauteng Province</Badge>
                                        <Badge bg="secondary" className="me-2 mb-2">Johannesburg</Badge>
                                        <Badge bg="secondary" className="me-2 mb-2">Pretoria</Badge>
                                        <Badge bg="secondary" className="me-2 mb-2">East Rand</Badge>
                                        <Badge bg="secondary" className="me-2 mb-2">West Rand</Badge>
                                    </div>

                                    <h5 style={{ color: '#17A2B8', fontWeight: '600', marginBottom: '1rem' }}>
                                        Technology Stack
                                    </h5>
                                    <div className="d-flex flex-wrap gap-2 mb-3">
                                        <Badge bg="info" className="p-2">Python</Badge>
                                        <Badge bg="info" className="p-2">Prophet ML</Badge>
                                        <Badge bg="info" className="p-2">React</Badge>
                                        <Badge bg="info" className="p-2">Flask</Badge>
                                        <Badge bg="info" className="p-2">OpenWeather API</Badge>
                                    </div>

                                    <p style={{ color: '#6C757D', fontSize: '0.9rem', fontStyle: 'italic' }}>
                                        Part of the LangaAI ecosystem - bringing artificial intelligence to
                                        renewable energy solutions.
                                    </p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Certification Section */}
            <Row className="mb-5">
                <Col lg={6} className="mb-4">
                    <Card className={`h-100 ${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.6s' }}>
                        <Card.Header style={{
                            background: 'linear-gradient(135deg, #4CAF50, #2196F3)',
                            color: 'white',
                            fontWeight: '700',
                            fontSize: '1.2rem'
                        }}>
                            <div className="d-flex align-items-center justify-content-between">
                                <span>
                                    <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>🏆</span>
                                    Professional Certification
                                </span>
                                <Button
                                    variant="light"
                                    size="sm"
                                    onClick={() => setShowModal(true)}
                                    style={{ color: '#2196F3', fontWeight: '600' }}
                                >
                                    View Certificate
                                </Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="text-center">
                            <img
                                src="/assets/pv-cert.png"
                                alt="PV GreenCard Certification Preview"
                                className="cert-image mb-3"
                                style={{
                                    maxWidth: '80%',
                                    height: 'auto',
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s ease'
                                }}
                                onClick={() => setShowModal(true)}
                                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                            />
                            <h6 style={{ color: '#4CAF50', fontWeight: '600' }}>
                                PV GreenCard Certified Installer
                            </h6>
                            <p style={{ color: '#6C757D', fontSize: '0.95rem' }}>
                                Official certification for photovoltaic system installation and maintenance
                            </p>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={6} className="mb-4">
                    <Card className={`h-100 ${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.8s' }}>
                        <Card.Header style={{
                            background: 'linear-gradient(135deg, #C8E6C9, #E3F2FD)',
                            fontWeight: '700',
                            fontSize: '1.2rem'
                        }}>
                            <div className="d-flex align-items-center">
                                <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>📈</span>
                                Professional Experience
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="timeline">
                                <div className="d-flex align-items-start mb-4">
                                    <div style={{
                                        width: '12px',
                                        height: '12px',
                                        background: '#4CAF50',
                                        borderRadius: '50%',
                                        marginTop: '6px',
                                        marginRight: '15px',
                                        flexShrink: 0
                                    }}></div>
                                    <div>
                                        <h6 style={{ color: '#2196F3', fontWeight: '600', margin: 0 }}>
                                            2024 - Present
                                        </h6>
                                        <p style={{ color: '#4CAF50', fontWeight: '500', margin: '5px 0' }}>
                                            Founder, LSPVIC
                                        </p>
                                        <p style={{ color: '#6C757D', fontSize: '0.9rem', margin: 0, lineHeight: '1.6' }}>
                                            Launched AI-powered solar services combining professional installation
                                            with machine learning optimization.
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex align-items-start mb-4">
                                    <div style={{
                                        width: '12px',
                                        height: '12px',
                                        background: '#2196F3',
                                        borderRadius: '50%',
                                        marginTop: '6px',
                                        marginRight: '15px',
                                        flexShrink: 0
                                    }}></div>
                                    <div>
                                        <h6 style={{ color: '#2196F3', fontWeight: '600', margin: 0 }}>
                                            2023 - 2024
                                        </h6>
                                        <p style={{ color: '#4CAF50', fontWeight: '500', margin: '5px 0' }}>
                                            PV GreenCard Certification
                                        </p>
                                        <p style={{ color: '#6C757D', fontSize: '0.9rem', margin: 0, lineHeight: '1.6' }}>
                                            Completed comprehensive solar PV installation and maintenance certification
                                            program with practical assessments.
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex align-items-start">
                                    <div style={{
                                        width: '12px',
                                        height: '12px',
                                        background: '#FF9800',
                                        borderRadius: '50%',
                                        marginTop: '6px',
                                        marginRight: '15px',
                                        flexShrink: 0
                                    }}></div>
                                    <div>
                                        <h6 style={{ color: '#2196F3', fontWeight: '600', margin: 0 }}>
                                            2020 - 2023
                                        </h6>
                                        <p style={{ color: '#4CAF50', fontWeight: '500', margin: '5px 0' }}>
                                            Machine Learning Specialist
                                        </p>
                                        <p style={{ color: '#6C757D', fontSize: '0.9rem', margin: 0, lineHeight: '1.6' }}>
                                            Developed expertise in time series forecasting, data analysis, and
                                            predictive modeling applications.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Values & Approach */}
            <Card className={`mb-5 ${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: '1s' }}>
                <Card.Header style={{
                    background: 'linear-gradient(135deg, #2196F3, #4CAF50)',
                    color: 'white',
                    fontWeight: '700',
                    fontSize: '1.3rem',
                    textAlign: 'center'
                }}>
                    🌱 Our Values & Approach
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={4} className="text-center mb-4">
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔬</div>
                            <h5 style={{ color: '#2196F3', fontWeight: '600' }}>Innovation First</h5>
                            <p style={{ color: '#6C757D', lineHeight: '1.6' }}>
                                Leveraging the latest AI and machine learning technologies to optimize
                                solar performance and maintenance scheduling.
                            </p>
                        </Col>
                        <Col md={4} className="text-center mb-4">
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌍</div>
                            <h5 style={{ color: '#4CAF50', fontWeight: '600' }}>Sustainability</h5>
                            <p style={{ color: '#6C757D', lineHeight: '1.6' }}>
                                Committed to environmental responsibility through eco-friendly cleaning methods
                                and promoting renewable energy adoption.
                            </p>
                        </Col>
                        <Col md={4} className="text-center mb-4">
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
                            <h5 style={{ color: '#FF9800', fontWeight: '600' }}>Customer Focus</h5>
                            <p style={{ color: '#6C757D', lineHeight: '1.6' }}>
                                Personalized service with transparent pricing, clear communication,
                                and ongoing support for all solar energy needs.
                            </p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            {/* Contact CTA */}
            <Card className={`text-center ${isVisible ? 'fade-in-up' : ''}`}
                style={{
                    animationDelay: '1.2s',
                    background: 'linear-gradient(135deg, #4CAF50, #2196F3)',
                    color: 'white',
                    border: 'none'
                }}>
                <Card.Body className="p-5">
                    <h3 style={{ fontWeight: '700', marginBottom: '1.5rem' }}>
                        Ready to Work Together?
                    </h3>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: '0.9' }}>
                        Get in touch for a consultation about your solar installation or cleaning needs
                    </p>
                    <div className="d-flex flex-wrap justify-content-center gap-3">
                        <Button
                            variant="light"
                            size="lg"
                            href="https://wa.me/27731250723?text=Hi%20Sello%2C%20I%E2%80%99d%20like%20to%20learn%20more%20about%20LSPVIC%20services!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-3"
                            style={{ color: '#2196F3', fontWeight: '600' }}
                        >
                            💬 WhatsApp Consultation
                        </Button>
                        <Button
                            variant="outline-light"
                            size="lg"
                            href="/contact"
                            className="px-4 py-3"
                        >
                            📧 Send Message
                        </Button>
                        <Button
                            variant="outline-light"
                            size="lg"
                            href="/services"
                            className="px-4 py-3"
                        >
                            ⚡ View Services
                        </Button>
                    </div>
                </Card.Body>
            </Card>

            {/* Certification Modal */}
            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                size="lg"
                centered
            >
                <Modal.Header
                    closeButton
                    style={{
                        background: 'linear-gradient(135deg, #E3F2FD, #C8E6C9)',
                        border: 'none'
                    }}
                >
                    <Modal.Title style={{
                        color: '#2196F3',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>🏆</span>
                        PV GreenCard Certification
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center p-4">
                    <img
                        src="/assets/pv-cert.png"
                        alt="PV GreenCard Professional Certification"
                        className="img-fluid"
                        style={{
                            borderRadius: '8px',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                            maxHeight: '500px',
                            width: 'auto'
                        }}
                    />
                    <div className="mt-4">
                        <h5 style={{ color: '#4CAF50', fontWeight: '600' }}>
                            Certified Solar PV Installation Professional
                        </h5>
                        <p style={{ color: '#6C757D', lineHeight: '1.6' }}>
                            This certification validates expertise in solar photovoltaic system design,
                            installation, maintenance, and compliance with South African electrical standards.
                        </p>
                        <div className="d-flex justify-content-center gap-2 mt-3">
                            <Badge bg="success" className="p-2">Installation Qualified</Badge>
                            <Badge bg="primary" className="p-2">Maintenance Certified</Badge>
                            <Badge bg="info" className="p-2">CoC Authorized</Badge>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer style={{ border: 'none', justifyContent: 'center' }}>
                    <Button
                        variant="primary"
                        onClick={() => setShowModal(false)}
                        size="lg"
                        className="px-4"
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default About;