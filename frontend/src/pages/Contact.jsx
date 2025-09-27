import React from 'react';
import { Form, Button } from 'react-bootstrap';

function Contact() {
    return (
        <div>
            <h2>Contact Us</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button type="submit" variant="primary">Send</Button>
            </Form>
            <Button variant="success" className="mt-3" onClick={() => window.open('https://wa.me/27731250723?text=Hi%2C%20I%E2%80%99m%20from%20LSPVIC!%20Interested%20in%20solar%20cleaning%2Finstalls?%20Let%E2%80%99s%20discuss%20%E2%80%93%20reply%20with%20your%20query%20or%20book%20a%20free%20check!')}>
                Chat Now on WhatsApp
            </Button>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.123456789!2d28.123456789!3d-26.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95123456789%3A0x123456789!2sVosloorus!5e0!3m2!1sen!2sza!4v1234567890"
                width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" className="mt-4"
            ></iframe>
        </div>
    );
}

export default Contact;