import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Card, Alert, Container, Row, Col, Spinner, Badge } from 'react-bootstrap';
import axios from 'axios';

const schema = Yup.object({
    postcode: Yup.string().required('Required'),
    panels: Yup.number().min(1, 'Must have at least 1 panel').required('Required'),
    last_clean: Yup.date().required('Required'),
    consent: Yup.boolean().oneOf([true], 'Consent required for POPIA compliance'),
});

function AITools() {
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = async (values) => {
        if (!values.consent) {
            setError('POPIA consent is required to proceed');
            return;
        }

        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const res = await axios.post('http://localhost:5000/forecast', values);
            setResult(res.data);
            setError(null);
        } catch (err) {
            console.error('Prediction error:', err);
            setError('AI prediction failed. Please check your backend server is running or try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container className="page-container" style={{ paddingTop: '100px' }}>
            {/* Hero Section */}
            <div className={`text-center mb-5 ${isVisible ? 'fade-in-up' : ''}`}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🤖</div>
                <h1 style={{
                    fontSize: '3rem',
                    fontWeight: '900',
                    background: 'linear-gradient(135deg, #4CAF50, #2196F3)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '1rem'
                }}>
                    AI Cleaning Forecaster
                </h1>
                <p style={{ fontSize: '1.3rem', color: '#6C757D', maxWidth: '800px', margin: '0 auto' }}>
                    Optimize your solar panel cleaning schedule with machine learning predictions based on weather patterns and efficiency data
                </p>
            </div>

            <Row>
                <Col lg={6} className="mb-4">
                    {/* Input Form */}
                    <Card className={`h-100 ${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.2s' }}>
                        <Card.Header style={{
                            background: 'linear-gradient(135deg, #E3F2FD, #C8E6C9)',
                            fontWeight: '700',
                            fontSize: '1.2rem'
                        }}>
                            <div className="d-flex align-items-center">
                                <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>📊</span>
                                System Information
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Formik
                                initialValues={{
                                    postcode: '',
                                    panels: '',
                                    last_clean: '',
                                    consent: false
                                }}
                                validationSchema={schema}
                                onSubmit={handleSubmit}
                            >
                                {({ values, errors, touched }) => (
                                    <Form>
                                        <div className="mb-4">
                                            <label className="form-label fw-bold">
                                                <span style={{ color: '#2196F3' }}>📍</span> Postcode/ZIP Code
                                            </label>
                                            <Field
                                                name="postcode"
                                                type="text"
                                                className={`form-control ${errors.postcode && touched.postcode ? 'is-invalid' : ''}`}
                                                placeholder="e.g., 1618 (Benoni)"
                                            />
                                            <ErrorMessage name="postcode" component="div" className="invalid-feedback" />
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label fw-bold">
                                                <span style={{ color: '#4CAF50' }}>⚡</span> Number of Solar Panels
                                            </label>
                                            <Field
                                                name="panels"
                                                type="number"
                                                className={`form-control ${errors.panels && touched.panels ? 'is-invalid' : ''}`}
                                                placeholder="e.g., 12"
                                                min="1"
                                            />
                                            <ErrorMessage name="panels" component="div" className="invalid-feedback" />
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label fw-bold">
                                                <span style={{ color: '#FF9800' }}>🧹</span> Last Cleaning Date
                                            </label>
                                            <Field
                                                name="last_clean"
                                                type="date"
                                                className={`form-control ${errors.last_clean && touched.last_clean ? 'is-invalid' : ''}`}
                                            />
                                            <ErrorMessage name="last_clean" component="div" className="invalid-feedback" />
                                        </div>

                                        <div className="mb-4">
                                            <div className="form-check p-3" style={{
                                                background: '#FFF3E0',
                                                borderRadius: '8px',
                                                border: '2px solid #FFE0B2'
                                            }}>
                                                <Field
                                                    type="checkbox"
                                                    name="consent"
                                                    className="form-check-input"
                                                />
                                                <label className="form-check-label ms-2">
                                                    <strong>POPIA Consent:</strong> I consent to the collection and processing of my data
                                                    for AI forecasting purposes in compliance with South Africa's Protection of Personal
                                                    Information Act (POPIA).
                                                </label>
                                                <ErrorMessage name="consent" component="div" className="text-danger mt-2" />
                                            </div>
                                        </div>

                                        <Button
                                            type="submit"
                                            variant="primary"
                                            size="lg"
                                            className="w-100"
                                            disabled={loading}
                                            style={{ fontWeight: '600' }}
                                        >
                                            {loading ? (
                                                <>
                                                    <Spinner
                                                        as="span"
                                                        animation="border"
                                                        size="sm"
                                                        role="status"
                                                        aria-hidden="true"
                                                        className="me-2"
                                                    />
                                                    Processing AI Prediction...
                                                </>
                                            ) : (
                                                <>
                                                    🔮 Generate AI Forecast
                                                </>
                                            )}
                                        </Button>
                                    </Form>
                                )}
                            </Formik>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={6} className="mb-4">
                    {/* How It Works */}
                    <Card className={`h-100 ${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.4s' }}>
                        <Card.Header style={{
                            background: 'linear-gradient(135deg, #C8E6C9, #E3F2FD)',
                            fontWeight: '700',
                            fontSize: '1.2rem'
                        }}>
                            <div className="d-flex align-items-center">
                                <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>🧠</span>
                                How Our AI Works
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-start mb-3">
                                <Badge bg="primary" className="me-3" style={{ fontSize: '1rem', padding: '8px' }}>1</Badge>
                                <div>
                                    <h6 style={{ color: '#2196F3', fontWeight: '600' }}>Weather Data Analysis</h6>
                                    <p style={{ color: '#6C757D', fontSize: '0.95rem' }}>
                                        We fetch real-time weather data for your location to understand dust, rain, and wind patterns.
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex align-items-start mb-3">
                                <Badge bg="success" className="me-3" style={{ fontSize: '1rem', padding: '8px' }}>2</Badge>
                                <div>
                                    <h6 style={{ color: '#4CAF50', fontWeight: '600' }}>Prophet ML Model</h6>
                                    <p style={{ color: '#6C757D', fontSize: '0.95rem' }}>
                                        Facebook's Prophet algorithm predicts efficiency degradation based on historical cleaning cycles.
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex align-items-start mb-3">
                                <Badge bg="warning" className="me-3" style={{ fontSize: '1rem', padding: '8px' }}>3</Badge>
                                <div>
                                    <h6 style={{ color: '#FF9800', fontWeight: '600' }}>Risk Assessment</h6>
                                    <p style={{ color: '#6C757D', fontSize: '0.95rem' }}>
                                        Calculate optimal cleaning schedule to maintain 85%+ panel efficiency.
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex align-items-start">
                                <Badge bg="info" className="me-3" style={{ fontSize: '1rem', padding: '8px' }}>4</Badge>
                                <div>
                                    <h6 style={{ color: '#17A2B8', fontWeight: '600' }}>Smart Recommendations</h6>
                                    <p style={{ color: '#6C757D', fontSize: '0.95rem' }}>
                                        Get personalized cleaning schedule with efficiency forecasts and cost-benefit analysis.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4 p-3" style={{
                                background: 'linear-gradient(135deg, #F3E5F5, #E8F5E8)',
                                borderRadius: '8px',
                                textAlign: 'center'
                            }}>
                                <strong style={{ color: '#4CAF50' }}>🎯 Typical Results:</strong>
                                <br />
                                <span style={{ color: '#6C757D' }}>15-25% efficiency improvement after cleaning</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Error Display */}
            {error && (
                <Alert variant="danger" className={`mt-4 ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.6s' }}>
                    <Alert.Heading>
                        <span style={{ fontSize: '1.2rem', marginRight: '10px' }}>⚠️</span>
                        Prediction Error
                    </Alert.Heading>
                    {error}
                </Alert>
            )}

            {/* Results Display */}
            {result && (
                <Card className={`mt-4 ${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.8s' }}>
                    <Card.Header style={{
                        background: 'linear-gradient(135deg, #4CAF50, #2196F3)',
                        color: 'white',
                        fontWeight: '700',
                        fontSize: '1.3rem'
                    }}>
                        <div className="d-flex align-items-center justify-content-between">
                            <span>
                                <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>📊</span>
                                AI Forecast Results
                            </span>
                            <Badge bg="light" text="dark" style={{ fontSize: '0.9rem' }}>
                                Generated Now
                            </Badge>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md={4} className="text-center mb-4">
                                <div style={{
                                    background: 'linear-gradient(135deg, #E8F5E8, #F1F8E9)',
                                    borderRadius: '12px',
                                    padding: '2rem',
                                    height: '100%'
                                }}>
                                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📅</div>
                                    <h5 style={{ color: '#4CAF50', fontWeight: '700' }}>Next Cleaning Date</h5>
                                    <p style={{ fontSize: '1.2rem', color: '#2E7D32', fontWeight: '600' }}>
                                        {new Date(result.next_clean).toLocaleDateString('en-ZA', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </p>
                                </div>
                            </Col>

                            <Col md={4} className="text-center mb-4">
                                <div style={{
                                    background: 'linear-gradient(135deg, #E3F2FD, #E1F5FE)',
                                    borderRadius: '12px',
                                    padding: '2rem',
                                    height: '100%'
                                }}>
                                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚠️</div>
                                    <h5 style={{ color: '#2196F3', fontWeight: '700' }}>Efficiency Risk</h5>
                                    <p style={{ fontSize: '1.5rem', color: '#1976D2', fontWeight: '700' }}>
                                        {result.risk}
                                    </p>
                                    <small style={{ color: '#6C757D' }}>Current degradation risk</small>
                                </div>
                            </Col>

                            <Col md={4} className="text-center mb-4">
                                <div style={{
                                    background: 'linear-gradient(135deg, #FFF3E0, #FFF8E1)',
                                    borderRadius: '12px',
                                    padding: '2rem',
                                    height: '100%'
                                }}>
                                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💰</div>
                                    <h5 style={{ color: '#FF9800', fontWeight: '700' }}>Potential Savings</h5>
                                    <p style={{ fontSize: '1.2rem', color: '#F57C00', fontWeight: '600' }}>
                                        R500 - R2,000
                                    </p>
                                    <small style={{ color: '#6C757D' }}>Monthly energy savings estimate</small>
                                </div>
                            </Col>
                        </Row>

                        {result.chart && (
                            <div className="mt-4">
                                <h5 style={{ color: '#2196F3', fontWeight: '600', marginBottom: '20px' }}>
                                    📈 Efficiency Forecast Chart
                                </h5>
                                <div className="text-center">
                                    <img
                                        src={`data:image/png;base64,${result.chart}`}
                                        alt="Solar Panel Efficiency Forecast Chart"
                                        className="img-fluid"
                                        style={{
                                            maxWidth: '100%',
                                            borderRadius: '8px',
                                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                                        }}
                                    />
                                </div>
                            </div>
                        )}
                    </Card.Body>
                </Card>
            )}

            {/* Action Buttons */}
            <div className={`mt-5 text-center ${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: '1s' }}>
                <h4 style={{ color: '#2196F3', fontWeight: '700', marginBottom: '2rem' }}>
                    Ready to Schedule Your Cleaning?
                </h4>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                    <Button
                        variant="success"
                        size="lg"
                        href="https://wa.me/27731250723?text=Hi%2C%20I%20just%20used%20your%20AI%20forecaster%20and%20I%E2%80%99m%20interested%20in%20scheduling%20solar%20panel%20cleaning!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-btn px-4 py-3"
                    >
                        💬 Book via WhatsApp
                    </Button>
                    <Button
                        variant="outline-primary"
                        size="lg"
                        href="/services"
                        className="px-4 py-3"
                    >
                        📋 View All Services
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

            {/* Technical Note */}
            <Card className={`mt-5 ${isVisible ? 'fade-in' : ''}`} style={{
                animationDelay: '1.2s',
                background: 'linear-gradient(135deg, #F8F9FA, #E9ECEF)',
                border: '2px solid #DEE2E6'
            }}>
                <Card.Body>
                    <div className="d-flex align-items-start">
                        <span style={{ fontSize: '2rem', marginRight: '15px' }}>🔬</span>
                        <div>
                            <h6 style={{ color: '#495057', fontWeight: '600' }}>Technical Note</h6>
                            <p style={{ color: '#6C757D', fontSize: '0.95rem', margin: '0', lineHeight: '1.6' }}>
                                This AI forecaster uses Facebook's Prophet time series model combined with OpenWeather API data.
                                Results are estimates based on weather patterns and typical degradation rates. For production deployments,
                                we recommend integrating with specialized solar irradiance APIs for enhanced accuracy.
                            </p>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default AITools;