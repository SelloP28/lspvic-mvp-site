import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col, Accordion, Badge, Button } from 'react-bootstrap';

function Privacy() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Container className="page-container" style={{ paddingTop: '100px' }}>
            {/* Hero Section */}
            <div className={`text-center mb-5 ${isVisible ? 'fade-in-up' : ''}`}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔒</div>
                <h1 style={{
                    fontSize: '3rem',
                    fontWeight: '900',
                    background: 'linear-gradient(135deg, #4CAF50, #2196F3)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '1rem'
                }}>
                    Privacy Policy
                </h1>
                <p style={{ fontSize: '1.3rem', color: '#6C757D', maxWidth: '800px', margin: '0 auto' }}>
                    POPIA-compliant privacy practices for our AI-powered solar services. Your data protection is our priority.
                </p>
                <div className="mt-3">
                    <Badge bg="success" className="me-2 p-2">POPIA Compliant</Badge>
                    <Badge bg="primary" className="me-2 p-2">Data Minimization</Badge>
                    <Badge bg="info" className="me-2 p-2">Transparent Processing</Badge>
                </div>
            </div>

            {/* Quick Summary */}
            <Card className={`mb-5 ${isVisible ? 'fade-in-up' : ''}`}
                style={{
                    animationDelay: '0.2s',
                    background: 'linear-gradient(135deg, #E8F5E8, #E3F2FD)',
                    border: '2px solid #C8E6C9'
                }}>
                <Card.Body className="p-4">
                    <Row className="align-items-center">
                        <Col md={2} className="text-center mb-3 mb-md-0">
                            <div style={{ fontSize: '3rem' }}>🛡️</div>
                        </Col>
                        <Col md={10}>
                            <h4 style={{ color: '#2196F3', fontWeight: '700', marginBottom: '1rem' }}>
                                Privacy at a Glance
                            </h4>
                            <Row>
                                <Col sm={6}>
                                    <ul style={{ color: '#4CAF50', fontWeight: '500', lineHeight: '1.8' }}>
                                        <li>✅ Explicit consent required</li>
                                        <li>✅ Data anonymized for AI training</li>
                                        <li>✅ Minimal data collection only</li>
                                    </ul>
                                </Col>
                                <Col sm={6}>
                                    <ul style={{ color: '#4CAF50', fontWeight: '500', lineHeight: '1.8' }}>
                                        <li>✅ Right to deletion honored</li>
                                        <li>✅ Secure data processing</li>
                                        <li>✅ Transparent usage policies</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            {/* Detailed Privacy Policy */}
            <div className={`${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.4s' }}>
                <Accordion defaultActiveKey="0" className="mb-5">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <div className="d-flex align-items-center">
                                <span style={{ fontSize: '1.5rem', marginRight: '15px' }}>📊</span>
                                <div>
                                    <strong>Data Collection & Usage</strong>
                                    <div style={{ fontSize: '0.9rem', color: '#6C757D' }}>
                                        What information we collect and how we use it
                                    </div>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                <Col md={6}>
                                    <h5 style={{ color: '#4CAF50', fontWeight: '600' }}>Data We Collect:</h5>
                                    <div className="mb-3">
                                        <h6 style={{ color: '#2196F3' }}>🏠 Service Information</h6>
                                        <ul style={{ color: '#6C757D', lineHeight: '1.7' }}>
                                            <li>Postcode/location (for weather data)</li>
                                            <li>Number of solar panels</li>
                                            <li>Last cleaning date</li>
                                            <li>Contact information (name, email, phone)</li>
                                        </ul>

                                        <h6 style={{ color: '#FF9800' }}>🤖 AI Processing Data</h6>
                                        <ul style={{ color: '#6C757D', lineHeight: '1.7' }}>
                                            <li>Weather patterns and forecasts</li>
                                            <li>System efficiency predictions</li>
                                            <li>Maintenance scheduling recommendations</li>
                                        </ul>
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <h5 style={{ color: '#2196F3', fontWeight: '600' }}>How We Use Your Data:</h5>
                                    <div className="data-usage-card p-3 mb-3" style={{
                                        background: '#F8F9FA',
                                        borderRadius: '8px',
                                        border: '2px solid #E9ECEF'
                                    }}>
                                        <h6 style={{ color: '#4CAF50', margin: 0 }}>✅ Legitimate Uses</h6>
                                        <ul style={{ color: '#6C757D', fontSize: '0.95rem', margin: '10px 0 0 0' }}>
                                            <li>Generate AI forecasts and recommendations</li>
                                            <li>Provide requested services and quotes</li>
                                            <li>Improve our AI models (anonymized data only)</li>
                                            <li>Communicate about your service requests</li>
                                        </ul>
                                    </div>

                                    <div className="data-usage-card p-3" style={{
                                        background: '#FFF3E0',
                                        borderRadius: '8px',
                                        border: '2px solid #FFE0B2'
                                    }}>
                                        <h6 style={{ color: '#FF9800', margin: 0 }}>🚫 We Never</h6>
                                        <ul style={{ color: '#6C757D', fontSize: '0.95rem', margin: '10px 0 0 0' }}>
                                            <li>Sell your personal information</li>
                                            <li>Share data with third parties for marketing</li>
                                            <li>Use data without explicit consent</li>
                                            <li>Store unnecessary personal information</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <div className="d-flex align-items-center">
                                <span style={{ fontSize: '1.5rem', marginRight: '15px' }}>🇿🇦</span>
                                <div>
                                    <strong>POPIA Compliance</strong>
                                    <div style={{ fontSize: '0.9rem', color: '#6C757D' }}>
                                        Protection of Personal Information Act compliance
                                    </div>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                <Col md={6}>
                                    <h5 style={{ color: '#4CAF50', fontWeight: '600' }}>Your POPIA Rights:</h5>
                                    <div className="rights-list">
                                        <div className="d-flex align-items-start mb-3">
                                            <div style={{
                                                width: '30px',
                                                height: '30px',
                                                background: '#4CAF50',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginRight: '15px',
                                                flexShrink: 0,
                                                color: 'white',
                                                fontWeight: 'bold',
                                                fontSize: '0.8rem'
                                            }}>
                                                ℹ️
                                            </div>
                                            <div>
                                                <h6 style={{ color: '#2196F3', margin: 0 }}>Right to Access</h6>
                                                <p style={{ color: '#6C757D', fontSize: '0.9rem', margin: '5px 0 0 0' }}>
                                                    Request details about what data we hold about you
                                                </p>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-start mb-3">
                                            <div style={{
                                                width: '30px',
                                                height: '30px',
                                                background: '#2196F3',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginRight: '15px',
                                                flexShrink: 0,
                                                color: 'white',
                                                fontWeight: 'bold',
                                                fontSize: '0.8rem'
                                            }}>
                                                ✏️
                                            </div>
                                            <div>
                                                <h6 style={{ color: '#2196F3', margin: 0 }}>Right to Correction</h6>
                                                <p style={{ color: '#6C757D', fontSize: '0.9rem', margin: '5px 0 0 0' }}>
                                                    Update or correct inaccurate personal information
                                                </p>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-start mb-3">
                                            <div style={{
                                                width: '30px',
                                                height: '30px',
                                                background: '#FF9800',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginRight: '15px',
                                                flexShrink: 0,
                                                color: 'white',
                                                fontWeight: 'bold',
                                                fontSize: '0.8rem'
                                            }}>
                                                🗑️
                                            </div>
                                            <div>
                                                <h6 style={{ color: '#2196F3', margin: 0 }}>Right to Deletion</h6>
                                                <p style={{ color: '#6C757D', fontSize: '0.9rem', margin: '5px 0 0 0' }}>
                                                    Request removal of your personal data
                                                </p>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-start">
                                            <div style={{
                                                width: '30px',
                                                height: '30px',
                                                background: '#6F42C1',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginRight: '15px',
                                                flexShrink: 0,
                                                color: 'white',
                                                fontWeight: 'bold',
                                                fontSize: '0.8rem'
                                            }}>
                                                🚫
                                            </div>
                                            <div>
                                                <h6 style={{ color: '#2196F3', margin: 0 }}>Right to Object</h6>
                                                <p style={{ color: '#6C757D', fontSize: '0.9rem', margin: '5px 0 0 0' }}>
                                                    Withdraw consent for data processing
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <h5 style={{ color: '#2196F3', fontWeight: '600' }}>Our Commitments:</h5>
                                    <Card style={{ border: '2px solid #E3F2FD', background: '#F8F9FA' }}>
                                        <Card.Body className="p-3">
                                            <ul style={{ color: '#4CAF50', fontWeight: '500', lineHeight: '1.8', margin: 0 }}>
                                                <li><strong>Lawful Processing:</strong> Data collected only with valid legal basis</li>
                                                <li><strong>Data Minimization:</strong> Collect only necessary information</li>
                                                <li><strong>Purpose Limitation:</strong> Use data only for stated purposes</li>
                                                <li><strong>Storage Limitation:</strong> Retain data only as long as necessary</li>
                                                <li><strong>Integrity & Confidentiality:</strong> Secure processing and storage</li>
                                                <li><strong>Accountability:</strong> Demonstrate compliance with POPIA</li>
                                            </ul>
                                        </Card.Body>
                                    </Card>

                                    <div className="mt-3 p-3" style={{
                                        background: 'linear-gradient(135deg, #C8E6C9, #E3F2FD)',
                                        borderRadius: '8px',
                                        textAlign: 'center'
                                    }}>
                                        <strong style={{ color: '#2196F3' }}>🏛️ Information Regulator Registered</strong>
                                        <br />
                                        <small style={{ color: '#6C757D' }}>
                                            LSPVIC complies with all POPIA requirements
                                        </small>
                                    </div>
                                </Col>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            <div className="d-flex align-items-center">
                                <span style={{ fontSize: '1.5rem', marginRight: '15px' }}>🤖</span>
                                <div>
                                    <strong>AI & Machine Learning</strong>
                                    <div style={{ fontSize: '0.9rem', color: '#6C757D' }}>
                                        How we use AI and protect your data
                                    </div>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                <Col md={6}>
                                    <h5 style={{ color: '#4CAF50', fontWeight: '600' }}>AI Data Processing:</h5>
                                    <div className="ai-process mb-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <Badge bg="primary" className="me-3" style={{ fontSize: '1rem', padding: '8px' }}>1</Badge>
                                            <div>
                                                <h6 style={{ color: '#2196F3', margin: 0 }}>Data Anonymization</h6>
                                                <small style={{ color: '#6C757D' }}>
                                                    Personal identifiers removed before AI processing
                                                </small>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center mb-3">
                                            <Badge bg="success" className="me-3" style={{ fontSize: '1rem', padding: '8px' }}>2</Badge>
                                            <div>
                                                <h6 style={{ color: '#4CAF50', margin: 0 }}>Model Training</h6>
                                                <small style={{ color: '#6C757D' }}>
                                                    Aggregated data used to improve forecasting accuracy
                                                </small>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <Badge bg="warning" className="me-3" style={{ fontSize: '1rem', padding: '8px' }}>3</Badge>
                                            <div>
                                                <h6 style={{ color: '#FF9800', margin: 0 }}>Secure Processing</h6>
                                                <small style={{ color: '#6C757D' }}>
                                                    All AI computations performed on secured servers
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <h5 style={{ color: '#2196F3', fontWeight: '600' }}>Data Protection Measures:</h5>
                                    <Card style={{ border: '2px solid #C8E6C9', background: '#F8FFF8' }}>
                                        <Card.Body className="p-3">
                                            <div className="mb-3">
                                                <div className="d-flex align-items-center mb-2">
                                                    <span style={{ color: '#4CAF50', marginRight: '10px' }}>🔐</span>
                                                    <strong style={{ color: '#2196F3' }}>Encryption at Rest</strong>
                                                </div>
                                                <small style={{ color: '#6C757D' }}>
                                                    All data encrypted using AES-256 standards
                                                </small>
                                            </div>

                                            <div className="mb-3">
                                                <div className="d-flex align-items-center mb-2">
                                                    <span style={{ color: '#4CAF50', marginRight: '10px' }}>🚀</span>
                                                    <strong style={{ color: '#2196F3' }}>Secure Transmission</strong>
                                                </div>
                                                <small style={{ color: '#6C757D' }}>
                                                    HTTPS/TLS encryption for all data transfers
                                                </small>
                                            </div>

                                            <div className="mb-3">
                                                <div className="d-flex align-items-center mb-2">
                                                    <span style={{ color: '#4CAF50', marginRight: '10px' }}>👥</span>
                                                    <strong style={{ color: '#2196F3' }}>Access Control</strong>
                                                </div>
                                                <small style={{ color: '#6C757D' }}>
                                                    Role-based access with audit trails
                                                </small>
                                            </div>

                                            <div>
                                                <div className="d-flex align-items-center mb-2">
                                                    <span style={{ color: '#4CAF50', marginRight: '10px' }}>⏰</span>
                                                    <strong style={{ color: '#2196F3' }}>Data Retention</strong>
                                                </div>
                                                <small style={{ color: '#6C757D' }}>
                                                    Automatic deletion after 2 years or upon request
                                                </small>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            <div className="d-flex align-items-center">
                                <span style={{ fontSize: '1.5rem', marginRight: '15px' }}>📞</span>
                                <div>
                                    <strong>Contact & Data Requests</strong>
                                    <div style={{ fontSize: '0.9rem', color: '#6C757D' }}>
                                        How to exercise your privacy rights
                                    </div>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                <Col md={6}>
                                    <h5 style={{ color: '#4CAF50', fontWeight: '600' }}>Data Subject Requests:</h5>
                                    <p style={{ color: '#6C757D', lineHeight: '1.7' }}>
                                        To exercise any of your POPIA rights or make data-related requests,
                                        contact our Data Protection Officer using any of the methods below.
                                        We will respond within 30 days as required by law.
                                    </p>

                                    <h6 style={{ color: '#2196F3', fontWeight: '600' }}>Request Types We Handle:</h6>
                                    <ul style={{ color: '#6C757D', lineHeight: '1.7' }}>
                                        <li>Data access requests</li>
                                        <li>Data correction requests</li>
                                        <li>Data deletion requests</li>
                                        <li>Consent withdrawal</li>
                                        <li>Data portability requests</li>
                                        <li>Privacy complaints</li>
                                    </ul>
                                </Col>

                                <Col md={6}>
                                    <Card style={{ border: '2px solid #E3F2FD' }}>
                                        <Card.Header style={{
                                            background: 'linear-gradient(135deg, #E3F2FD, #C8E6C9)',
                                            fontWeight: '600'
                                        }}>
                                            📧 Contact Information
                                        </Card.Header>
                                        <Card.Body className="p-3">
                                            <div className="mb-3">
                                                <strong style={{ color: '#2196F3' }}>Data Protection Officer:</strong><br />
                                                <span style={{ color: '#6C757D' }}>Sello Phakoe</span>
                                            </div>

                                            <div className="mb-3">
                                                <strong style={{ color: '#4CAF50' }}>Email:</strong><br />
                                                <a href="mailto:privacy@lspvic.co.za" style={{ color: '#2196F3', textDecoration: 'none' }}>
                                                    privacy@lspvic.co.za
                                                </a>
                                            </div>

                                            <div className="mb-3">
                                                <strong style={{ color: '#FF9800' }}>Phone:</strong><br />
                                                <a href="tel:+27716285999" style={{ color: '#2196F3', textDecoration: 'none' }}>
                                                    +27 71 628 5999
                                                </a>
                                            </div>

                                            <div className="text-center mt-4">
                                                <Button
                                                    variant="primary"
                                                    size="sm"
                                                    href="mailto:privacy@lspvic.co.za?subject=POPIA Data Request"
                                                >
                                                    📧 Send Privacy Request
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

            {/* Last Updated & Footer */}
            <Card className={`text-center ${isVisible ? 'fade-in-up' : ''}`}
                style={{
                    animationDelay: '0.6s',
                    background: 'linear-gradient(135deg, #F8F9FA, #E9ECEF)',
                    border: '2px solid #DEE2E6'
                }}>
                <Card.Body className="p-4">
                    <h5 style={{ color: '#2196F3', fontWeight: '600', marginBottom: '1rem' }}>
                        Questions About Our Privacy Policy?
                    </h5>
                    <p style={{ color: '#6C757D', marginBottom: '2rem' }}>
                        We're committed to transparency and protecting your privacy.
                        Contact us if you need clarification on any aspect of our data handling practices.
                    </p>
                    <div className="d-flex flex-wrap justify-content-center gap-3 mb-3">
                        <Button variant="primary" href="/contact">
                            📞 Contact Us
                        </Button>
                        <Button variant="outline-primary" href="/">
                            🏠 Back to Home
                        </Button>
                        <Button variant="success" href="/ai-tools">
                            🤖 Try AI Tools
                        </Button>
                    </div>
                    <hr style={{ margin: '2rem 0 1rem 0' }} />
                    <div style={{ fontSize: '0.9rem', color: '#6C757D' }}>
                        <strong>Last Updated:</strong> September 2024<br />
                        <strong>Policy Version:</strong> 1.2<br />
                        <small style={{ fontStyle: 'italic' }}>
                            This policy may be updated to reflect changes in our practices or legal requirements.
                            We will notify users of significant changes.
                        </small>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Privacy;