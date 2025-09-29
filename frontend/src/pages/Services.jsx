import React, { useState, useEffect } from 'react';
import { Accordion, Button, Container, Card, Row, Col, Badge } from 'react-bootstrap';

function Services() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Container className="page-container" style={{ paddingTop: '100px' }}>
            <div className={`text-center mb-5 ${isVisible ? 'fade-in-up' : ''}`}>
                <h1 style={{ 
                    fontSize: '3rem', 
                    fontWeight: '900',
                    background: 'linear-gradient(135deg, #4CAF50, #2196F3)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '1rem'
                }}>
                    Our Premium Services
                </h1>
                <p style={{ fontSize: '1.3rem', color: '#6C757D', maxWidth: '800px', margin: '0 auto' }}>
                    Professional solar solutions backed by certification, expertise, and cutting-edge AI technology
                </p>
            </div>

            {/* Service Cards */}
            <Row className="mb-5">
                <Col lg={6} className="mb-4">
                    <Card className={`h-100 service-card ${isVisible ? 'fade-in-up' : ''}`} 
                          style={{ animationDelay: '0.2s' }}>
                        <div style={{
                            height: '250px',
                            backgroundImage: 'url(https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '12px 12px 0 0',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '15px',
                                right: '15px',
                                background: 'rgba(76, 175, 80, 0.9)',
                                color: 'white',
                                padding: '8px 16px',
                                borderRadius: '20px',
                                fontWeight: '600',
                                fontSize: '0.9rem'
                            }}>
                                🏆 Certified Installation
                            </div>
                        </div>
                        <Card.Body className="p-4">
                            <div className="d-flex align-items-center mb-3">
                                <span style={{ fontSize: '2rem', marginRight: '15px' }}>⚡</span>
                                <h3 style={{ color: '#2196F3', fontWeight: '700', margin: 0 }}>
                                    Solar PV Installations
                                </h3>
                            </div>
                            <p style={{ color: '#6C757D', fontSize: '1.1rem', lineHeight: '1.7' }}>
                                Complete solar panel installation service with professional certification. 
                                From initial site assessment to final commissioning and compliance documentation.
                            </p>
                            <div className="mb-3">
                                <Badge bg="primary" className="me-2 mb-2">PV GreenCard Certified</Badge>
                                <Badge bg="success" className="me-2 mb-2">CoC Included</Badge>
                                <Badge bg="info" className="me-2 mb-2">Premium Components</Badge>
                            </div>
                            <Button variant="primary" size="lg" className="w-100 mb-3">
                                🔧 Get Installation Quote
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={6} className="mb-4">
                    <Card className={`h-100 service-card ${isVisible ? 'fade-in-up' : ''}`} 
                          style={{ animationDelay: '0.4s' }}>
                        <div style={{
                            height: '250px',
                            backgroundImage: 'url(https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '12px 12px 0 0',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '15px',
                                right: '15px',
                                background: 'rgba(33, 150, 243, 0.9)',
                                color: 'white',
                                padding: '8px 16px',
                                borderRadius: '20px',
                                fontWeight: '600',
                                fontSize: '0.9rem'
                            }}>
                                🤖 AI-Optimized
                            </div>
                        </div>
                        <Card.Body className="p-4">
                            <div className="d-flex align-items-center mb-3">
                                <span style={{ fontSize: '2rem', marginRight: '15px' }}>🧹</span>
                                <h3 style={{ color: '#4CAF50', fontWeight: '700', margin: 0 }}>
                                    Professional Panel Cleaning
                                </h3>
                            </div>
                            <p style={{ color: '#6C757D', fontSize: '1.1rem', lineHeight: '1.7' }}>
                                Specialized cleaning service using eco-friendly methods to restore peak solar efficiency. 
                                Smart scheduling with AI-powered forecasting available.
                            </p>
                            <div className="mb-3">
                                <Badge bg="success" className="me-2 mb-2">15-25% Efficiency Boost</Badge>
                                <Badge bg="primary" className="me-2 mb-2">Eco-Friendly</Badge>
                                <Badge bg="warning" className="me-2 mb-2">AI Scheduling</Badge>
                            </div>
                            <Button variant="success" size="lg" className="w-100 mb-3" href="/ai-tools">
                                🔮 Schedule with AI Forecaster
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Detailed Service Breakdown */}
            <div className={`${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.6s' }}>
                <h2 className="text-center mb-4" style={{ color: '#2196F3', fontWeight: '700' }}>
                    Service Details & Pricing
                </h2>
                
                <Accordion defaultActiveKey="0" className="mb-5">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <div className="d-flex align-items-center">
                                <span style={{ fontSize: '1.5rem', marginRight: '15px' }}>⚡</span>
                                <div>
                                    <strong>Solar PV Installations</strong>
                                    <div style={{ fontSize: '0.9rem', color: '#6C757D' }}>
                                        Complete turnkey solar solutions
                                    </div>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                <Col md={6}>
                                    <h5 style={{ color: '#4CAF50', fontWeight: '600' }}>What's Included:</h5>
                                    <ul style={{ lineHeight: '1.8', color: '#6C757D' }}>
                                        <li><strong>Site Survey & Design:</strong> Comprehensive analysis and custom system design</li>
                                        <li><strong>Premium Components:</strong> High-efficiency panels and reliable inverters</li>
                                        <li><strong>Professional Installation:</strong> PV GreenCard certified installation team</li>
                                        <li><strong>CoC Compliance:</strong> Certificate of Compliance included</li>
                                        <li><strong>System Commissioning:</strong> Full testing and performance verification</li>
                                        <li><strong>Documentation:</strong> Complete system documentation and warranty</li>
                                    </ul>
                                </Col>
                                <Col md={6}>
                                    <h5 style={{ color: '#2196F3', fontWeight: '600' }}>Pricing Structure:</h5>
                                    <div className="pricing-card p-3 mb-3" style={{ 
                                        background: 'linear-gradient(135deg, #E3F2FD, #F3E5F5)',
                                        borderRadius: '8px',
                                        border: '2px solid #E1F5FE'
                                    }}>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span><strong>Residential Systems:</strong></span>
                                            <span style={{ color: '#4CAF50', fontWeight: '700', fontSize: '1.2rem' }}>
                                                From R100,000
                                            </span>
                                        </div>
                                        <small style={{ color: '#6C757D' }}>
                                            Starting price for basic 3kW system
                                        </small>
                                    </div>
                                    <div className="pricing-card p-3" style={{ 
                                        background: 'linear-gradient(135deg, #C8E6C9, #DCEDC8)',
                                        borderRadius: '8px',
                                        border: '2px solid #E8F5E8'
                                    }}>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span><strong>Commercial Systems:</strong></span>
                                            <span style={{ color: '#2196F3', fontWeight: '700', fontSize: '1.2rem' }}>
                                                Quote on Request
                                            </span>
                                        </div>
                                        <small style={{ color: '#6C757D' }}>
                                            Custom pricing based on requirements
                                        </small>
                                    </div>
                                </Col>
                            </Row>
                            <div className="text-center mt-4">
                                <Button variant="primary" size="lg" className="me-3">
                                    📋 Request Detailed Quote
                                </Button>
                                <Button variant="outline-primary" size="lg" href="/contact">
                                    📞 Schedule Consultation
                                </Button>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <div className="d-flex align-items-center">
                                <span style={{ fontSize: '1.5rem', marginRight: '15px' }}>🧹</span>
                                <div>
                                    <strong>Professional Panel Cleaning</strong>
                                    <div style={{ fontSize: '0.9rem', color: '#6C757D' }}>
                                        Maximize efficiency with expert cleaning
                                    </div>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                <Col md={6}>
                                    <h5 style={{ color: '#4CAF50', fontWeight: '600' }}>Service Features:</h5>
                                    <ul style={{ lineHeight: '1.8', color: '#6C757D' }}>
                                        <li><strong>Eco-Friendly Methods:</strong> Environmentally safe cleaning solutions</li>
                                        <li><strong>Efficiency Boost:</strong> Restore 15-25% lost efficiency</li>
                                        <li><strong>Professional Equipment:</strong> Specialized tools and techniques</li>
                                        <li><strong>Safety Compliance:</strong> Full safety protocols and insurance</li>
                                        <li><strong>Performance Verification:</strong> Before/after efficiency measurements</li>
                                        <li><strong>AI Optimization:</strong> Smart scheduling recommendations</li>
                                    </ul>
                                </Col>
                                <Col md={6}>
                                    <h5 style={{ color: '#2196F3', fontWeight: '600' }}>Pricing Options:</h5>
                                    <div className="pricing-card p-3 mb-3" style={{ 
                                        background: 'linear-gradient(135deg, #E8F5E8, #F1F8E9)',
                                        borderRadius: '8px',
                                        border: '2px solid #E8F5E8'
                                    }}>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span><strong>One-Time Cleaning:</strong></span>
                                            <span style={{ color: '#4CAF50', fontWeight: '700', fontSize: '1.2rem' }}>
                                                From R500
                                            </span>
                                        </div>
                                        <small style={{ color: '#6C757D' }}>
                                            Per cleaning session, residential
                                        </small>
                                    </div>
                                    <div className="pricing-card p-3" style={{ 
                                        background: 'linear-gradient(135deg, #E3F2FD, #E1F5FE)',
                                        borderRadius: '8px',
                                        border: '2px solid #E1F5FE'
                                    }}>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span><strong>Maintenance Plans:</strong></span>
                                            <span style={{ color: '#2196F3', fontWeight: '700', fontSize: '1.2rem' }}>
                                                15% Discount
                                            </span>
                                        </div>
                                        <small style={{ color: '#6C757D' }}>
                                            Quarterly and bi-annual packages available
                                        </small>
                                    </div>
                                </Col>
                            </Row>
                            <div className="text-center mt-4">
                                <Button variant="success" size="lg" className="me-3" href="/ai-tools">
                                    🤖 Schedule with AI
                                </Button>
                                <Button variant="outline-success" size="lg">
                                    📞 Book Manual Cleaning
                                </Button>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

            {/* CTA Section */}
            <Card className={`text-center ${isVisible ? 'fade-in-up' : ''}`} 
                  style={{ 
                      animationDelay: '0.8s',
                      background: 'linear-gradient(135deg, #2196F3, #4CAF50)',
                      color: 'white',
                      border: 'none'
                  }}>
                <Card.Body className="p-5">
                    <h3 style={{ fontWeight: '700', marginBottom: '1.5rem' }}>
                        Ready to Get Started?
                    </h3>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: '0.9' }}>
                        Get a free consultation and personalized quote for your solar project
                    </p>
                    <div className="d-flex flex-wrap justify-content-center gap-3">
                        <Button 
                            variant="light" 
                            size="lg"
                            href="https://wa.me/27731250723?text=Hi%2C%20I%E2%80%99m%20interested%20in%20solar%20services%20from%20LSPVIC!"
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
                            📧 Email Quote Request
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Services;