import React from 'react';
import { Accordion, Button } from 'react-bootstrap';

function Services() {
    return (
        <div>
            <h2>Our Services</h2>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Solar PV Installations</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Site survey and design</li>
                            <li>High-quality panels/inverters</li>
                            <li>CoC compliance</li>
                        </ul>
                        <p>From R100K for residential.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Panel Cleaning</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Eco-friendly methods</li>
                            <li>Boost output 15-25%</li>
                            <li>From R500/job</li>
                        </ul>
                        <Button variant="primary" href="/ai-tools">Schedule with AI</Button>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default Services;