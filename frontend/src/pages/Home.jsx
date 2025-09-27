import React from 'react';
import { Button, Card } from 'react-bootstrap';

function Home() {
    return (
        <div>
            <div className="jumbotron p-5 rounded">
                <h1>Certified Solar Installs & Cleaning – Powered by AI</h1>
                <p>Boost your PV efficiency with expert services.</p>
                <Button variant="primary" href="/services">Book Now</Button>
                <Button variant="outline-light" className="ms-2" href="/ai-tools">Try AI Forecaster</Button>
            </div>
            <Card className="mt-4">
                <Card.Header>Our Certification</Card.Header>
                <Card.Body>
                    <img src="/assets/pv-cert.png" alt="PV GreenCard Certification" className="img-fluid" />
                </Card.Body>
            </Card>
        </div>
    );
}

export default Home;