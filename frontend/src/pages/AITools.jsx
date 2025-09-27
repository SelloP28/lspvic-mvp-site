import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Card, Alert } from 'react-bootstrap';
import axios from 'axios';

const schema = Yup.object({
    postcode: Yup.string().required('Required'),
    panels: Yup.number().min(1).required('Required'),
    last_clean: Yup.date().required('Required'),
    consent: Yup.boolean().oneOf([true], 'Consent required'),  // POPIA checkbox
});

function AITools() {
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (values) => {
        if (!values.consent) return setError('Consent required');
        try {
            const res = await axios.post('http://localhost:5000/forecast', values);
            setResult(res.data);
            setError(null);
        } catch (err) {
            setError('Prediction failed – try again.');
        }
    };

    return (
        <div>
            <h2>AI Cleaning Forecaster</h2>
            <Formik initialValues={{ postcode: '', panels: '', last_clean: '', consent: false }} validationSchema={schema} onSubmit={handleSubmit}>
                <Form>
                    <div className="mb-3">
                        <label>Postcode</label>
                        <Field name="postcode" type="text" className="form-control" />
                        <ErrorMessage name="postcode" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3">
                        <label>Number of Panels</label>
                        <Field name="panels" type="number" className="form-control" />
                        <ErrorMessage name="panels" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3">
                        <label>Last Clean Date</label>
                        <Field name="last_clean" type="date" className="form-control" />
                        <ErrorMessage name="last_clean" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3 form-check">
                        <Field type="checkbox" name="consent" className="form-check-input" />
                        <label className="form-check-label">I consent to data use (POPIA compliant)</label>
                        <ErrorMessage name="consent" component="div" className="text-danger" />
                    </div>
                    <Button type="submit" variant="primary">Predict</Button>
                </Form>
            </Formik>
            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
            {result && (
                <Card className="mt-4">
                    <Card.Header>Forecast Result</Card.Header>
                    <Card.Body>
                        <p>Next clean recommended: {result.next_clean}</p>
                        <p>Efficiency drop risk: {result.risk}</p>
                        <img src={`data:image/png;base64,${result.chart}`} alt="Forecast Chart" className="img-fluid" />
                    </Card.Body>
                </Card>
            )}
            <Button variant="success" className="mt-3" onClick={() => window.open('https://wa.me/27731250723?text=Hi%2C%20I%E2%80%99m%20interested%20in%20solar%20cleaning%2Finstalls.%20Let%E2%80%99s%20discuss%20my%20forecast!')}>
                Chat on WhatsApp
            </Button>
            <Button variant="secondary" className="mt-3 ms-2" onClick={() => window.location.href = 'https://langaai.co.za'}>
                Explore Advanced AI
            </Button>
        </div>
    );
}

export default AITools;