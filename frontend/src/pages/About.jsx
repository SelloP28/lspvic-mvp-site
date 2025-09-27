import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function About() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <h2>About Us</h2>
            <p>Sello Phakoe: Certified installer with ML expertise in solar optimization. See CV for details.</p>
            <Button variant="primary" onClick={() => setShowModal(true)}>View Certification</Button>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>PV GreenCard</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src="/assets/pv-cert.png" alt="Certification" className="img-fluid" />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default About;