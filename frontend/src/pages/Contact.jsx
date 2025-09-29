import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Card, Alert } from 'react-bootstrap';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [showAlert, setShowAlert] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real implementation, you'd send this data to your backend
        console.log('Form submitted:', formData);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 5000);

        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: ''
        });
    };

    return (
        <Container className="page-container" style={{ paddingTop: '100px' }}>
            {/* Hero Section */}
            <div className={`text-center mb-5 ${isVisible ? 'fade-in-up' : ''}`}>
                <h1 style={{
                    fontSize: '3rem',
                    fontWeight: '900',
                    background: 'linear-gradient(135deg, #4CAF50, #2196F3)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '1rem'
                }}>
                    Get In Touch
                </h1>
                <p style={{ fontSize: '1.3rem', color: '#6C757D', maxWidth: '800px', margin: '0 auto' }}>
                    Ready to optimize your solar investment? Contact us for professional installations, cleaning services, or AI-powered consultations
                </p>
            </div>

            <Row>
                {/* Contact Form */}
                <Col lg={7} className="mb-5">
                    <Card className={`h-100 ${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.2s' }}>
                        <Card.Header style={{
                            background: 'linear-gradient(135deg, #E3F2FD, #C8E6C9)',
                            fontWeight: '700',
                            fontSize: '1.2rem'
                        }}>
                            <div className="d-flex align-items-center">
                                <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>📝</span>
                                Send Us a Message
                            </div>
                        </Card.Header>
                        <Card.Body className="p-4">
                            {showAlert && (
                                <Alert variant="success" className="mb-4">
                                    <Alert.Heading>
                                        <span style={{ fontSize: '1.2rem', marginRight: '10px' }}>✅</span>
                                        Message Sent Successfully!
                                    </Alert.Heading>
                                    Thank you for contacting LSPVIC. We'll get back to you within 24 hours.
                                </Alert>
                            )}

                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-4">
                                            <Form.Label className="fw-bold">
                                                <span style={{ color: '#2196F3' }}>👤</span> Full Name *
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Enter your full name"
                                                style={{ borderRadius: '8px', padding: '12px' }}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-4">
                                            <Form.Label className="fw-bold">
                                                <span style={{ color: '#4CAF50' }}>📧</span> Email Address *
                                            </Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="your.email@example.com"
                                                style={{ borderRadius: '8px', padding: '12px' }}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-4">
                                            <Form.Label className="fw-bold">
                                                <span style={{ color: '#FF9800' }}>📱</span> Phone Number
                                            </Form.Label>
                                            <Form.Control
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+27 XX XXX XXXX"
                                                style={{ borderRadius: '8px', padding: '12px' }}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-4">
                                            <Form.Label className="fw-bold">
                                                <span style={{ color: '#17A2B8' }}>⚡</span> Service Interest
                                            </Form.Label>
                                            <Form.Select
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                style={{ borderRadius: '8px', padding: '12px' }}
                                            >
                                                <option value="">Select a service...</option>
                                                <option value="installation">Solar PV Installation</option>
                                                <option value="cleaning">Panel Cleaning</option>
                                                <option value="ai-consultation">AI Forecasting Consultation</option>
                                                <option value="maintenance">System Maintenance</option>
                                                <option value="quote">General Quote Request</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-4">
                                    <Form.Label className="fw-bold">
                                        <span style={{ color: '#6F42C1' }}>💬</span> Message *
                                    </Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={5}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Tell us about your project, location, system size, timeline, or any specific requirements..."
                                        style={{ borderRadius: '8px', padding: '12px' }}
                                    />
                                </Form.Group>

                                <div className="d-flex flex-column flex-sm-row gap-3">
                                    <Button
                                        type="submit"
                                        variant="primary"
                                        size="lg"
                                        className="flex-grow-1"
                                        style={{ fontWeight: '600' }}
                                    >
                                        📧 Send Message
                                    </Button>
                                    <Button
                                        variant="success"
                                        size="lg"
                                        href="https://wa.me/27731250723?text=Hi%20LSPVIC%2C%20I%E2%80%99m%20interested%20in%20your%20services.%20Can%20we%20discuss%3F"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="whatsapp-btn flex-grow-1"
                                        style={{ fontWeight: '600' }}
                                    >
                                        💬 WhatsApp Now
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Contact Information */}
                <Col lg={5} className="mb-5">
                    <div className="h-100 d-flex flex-column">
                        {/* Contact Details */}
                        <Card className={`mb-4 ${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.4s' }}>
                            <Card.Header style={{
                                background: 'linear-gradient(135deg, #C8E6C9, #E3F2FD)',
                                fontWeight: '700',
                                fontSize: '1.2rem'
                            }}>
                                <div className="d-flex align-items-center">
                                    <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>📱</span>
                                    Contact Information
                                </div>
                            </Card.Header>
                            <Card.Body className="p-4">
                                <div className="d-flex align-items-center mb-4">
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        background: 'linear-gradient(135deg, #4CAF50, #2196F3)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '15px',
                                        fontSize: '1.5rem'
                                    }}>
                                        📞
                                    </div>
                                    <div>
                                        <h6 style={{ color: '#2196F3', fontWeight: '600', margin: 0 }}>Phone</h6>
                                        <a
                                            href="tel:+27716285999"
                                            style={{
                                                color: '#4CAF50',
                                                textDecoration: 'none',
                                                fontWeight: '500',
                                                fontSize: '1.1rem'
                                            }}
                                        >
                                            +27 71 628 5999
                                        </a>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center mb-4">
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        background: 'linear-gradient(135deg, #4CAF50, #2196F3)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '15px',
                                        fontSize: '1.5rem'
                                    }}>
                                        ✉️
                                    </div>
                                    <div>
                                        <h6 style={{ color: '#2196F3', fontWeight: '600', margin: 0 }}>Email</h6>
                                        <a
                                            href="mailto:sello.phakoe@gmail.com"
                                            style={{
                                                color: '#4CAF50',
                                                textDecoration: 'none',
                                                fontWeight: '500',
                                                fontSize: '1.1rem'
                                            }}
                                        >
                                            sello.phakoe@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center mb-4">
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        background: 'linear-gradient(135deg, #25D366, #128C7E)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '15px',
                                        fontSize: '1.5rem'
                                    }}>
                                        💬
                                    </div>
                                    <div>
                                        <h6 style={{ color: '#2196F3', fontWeight: '600', margin: 0 }}>WhatsApp</h6>
                                        <a
                                            href="https://wa.me/27731250723"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                color: '#25D366',
                                                textDecoration: 'none',
                                                fontWeight: '500',
                                                fontSize: '1.1rem'
                                            }}
                                        >
                                            +27 73 125 0723
                                        </a>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center">
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        background: 'linear-gradient(135deg, #FF9800, #F57C00)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '15px',
                                        fontSize: '1.5rem'
                                    }}>
                                        📍
                                    </div>
                                    <div>
                                        <h6 style={{ color: '#2196F3', fontWeight: '600', margin: 0 }}>Service Area</h6>
                                        <span style={{
                                            color: '#6C757D',
                                            fontWeight: '500',
                                            fontSize: '1.1rem'
                                        }}>
                                            Gauteng Province, South Africa
                                        </span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>

                        {/* Business Hours */}
                        <Card className={`mb-4 ${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.6s' }}>
                            <Card.Header style={{
                                background: 'linear-gradient(135deg, #E3F2FD, #C8E6C9)',
                                fontWeight: '700',
                                fontSize: '1.1rem'
                            }}>
                                <div className="d-flex align-items-center">
                                    <span style={{ fontSize: '1.3rem', marginRight: '10px' }}>🕒</span>
                                    Business Hours
                                </div>
                            </Card.Header>
                            <Card.Body className="p-3">
                                <div style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span style={{ color: '#6C757D' }}>Monday - Friday:</span>
                                        <span style={{ color: '#4CAF50', fontWeight: '600' }}>8:00 AM - 5:00 PM</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span style={{ color: '#6C757D' }}>Saturday:</span>
                                        <span style={{ color: '#4CAF50', fontWeight: '600' }}>9:00 AM - 2:00 PM</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span style={{ color: '#6C757D' }}>Sunday:</span>
                                        <span style={{ color: '#FF5722', fontWeight: '600' }}>Emergency Only</span>
                                    </div>
                                    <hr style={{ margin: '15px 0' }} />
                                    <div className="text-center">
                                        <small style={{ color: '#6C757D', fontStyle: 'italic' }}>
                                            🚨 24/7 WhatsApp support available for urgent inquiries
                                        </small>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>

            {/* Map Section */}
            <Card className={`mb-5 ${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.8s' }}>
                <Card.Header style={{
                    background: 'linear-gradient(135deg, #4CAF50, #2196F3)',
                    color: 'white',
                    fontWeight: '700',
                    fontSize: '1.2rem',
                    textAlign: 'center'
                }}>
                    <div className="d-flex align-items-center justify-content-center">
                        <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>🗺️</span>
                        Our Service Area
                    </div>
                </Card.Header>
                <Card.Body className="p-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115313.21517374845!2d28.1788598!3d-26.1877989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sGauteng%2C%20South%20Africa!5e0!3m2!1sen!2s!4v1635834563658!5m2!1sen!2s"
                        width="100%"
                        height="350"
                        style={{ border: 0, borderRadius: '0 0 12px 12px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="LSPVIC Service Area - Gauteng, South Africa"
                    ></iframe>
                    <div className="p-3 text-center" style={{ background: '#F8F9FA', borderRadius: '0 0 12px 12px' }}>
                        <p style={{ color: '#6C757D', margin: 0, fontSize: '0.95rem' }}>
                            📍 We provide services throughout Gauteng Province, including Johannesburg, Pretoria, East Rand, and West Rand areas
                        </p>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Contact;