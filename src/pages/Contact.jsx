import { useState, useRef, useEffect } from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact () {
    useEffect(() => {
        document.title = 'Contact - Tristan Cravello';
    }, []);

    const [status, setStatus] = useState('idle');
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/mpqjqkbd', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                },
            });

            if (response.ok) {
                setStatus('success');
                form.reset(); // reset form fields
            } else {
                const errorData = await response.json();
                console.error('Formspree error:', errorData);
                setStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus('error');
        }
    };

    return (
        <main className='contact text-center'>
            <h1 className='text-center'>Contact Me</h1>
            <p className='text-center'>If you wish to contact me, please use the form below. Thank you very much.</p>

            {status === 'success' && <p style={{color:'lightgreen'}} aria-live='polite'>Message sent successfully!</p>}
            {status === 'error' && <p style={{color: 'tomato'}} aria-live='polite'>Oops! Something went wrong. Please try again.</p>}
            
            <Form className="contact-form mx-auto" ref={formRef} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name" aria-label="Enter your full name">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Full Name" name="name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email" aria-label="Enter your email address">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" name="email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="message" aria-label="Enter your message below">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={5} name="message" placeholder="Please enter your message here" required />
                </Form.Group>
                <Button 
                    className="submit-button" 
                    type="submit" 
                    aria-label="Submit contact form"
                    disabled={status === 'sending'}
                >
                    {status === 'sending' ? 'Sending...' : 'Submit Form'}
                </Button>
            </Form>
        </main>
    );
}

export default Contact;