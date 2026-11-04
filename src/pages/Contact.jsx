
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Contact.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mpqjqkbd";

function Contact() {
    const [status, setStatus] = useState("idle");

    useEffect(() => {
        document.title = "Contact - Tristan Cravello";
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (status === "sending") {
            return;
        }

        setStatus("sending");

        const form = event.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                body: data,
                headers: {
                    Accept: "application/json"
                }
            });

            if (!response.ok) {
                const errorData = await response
                    .json()
                    .catch(() => null);

                console.error(
                    "Formspree submission failed:",
                    response.status,
                    errorData
                );

                setStatus("error");
                return;
            }

            form.reset();
            setStatus("success");
        } catch (error) {
            console.error(
                "Contact form submission error:",
                error
            );

            setStatus("error");
        }
    };

    return (
        <main className="contact text-center">
            <h1>Get in Touch</h1>

            <p className="contact-intro">
                Interested in connecting about software engineering
                opportunities, technical projects, or collaboration?
                I'd be happy to hear from you. Send me a message
                using the form below.
            </p>

            <div
                className="contact-status"
                role="status"
                aria-live="polite"
                aria-atomic="true"
            >
                {status === "success" && (
                    <p className="contact-success">
                        Your message was sent successfully.
                        Thank you for reaching out!
                    </p>
                )}

                {status === "error" && (
                    <p className="contact-error">
                        Your message could not be sent.
                        Please try again.
                    </p>
                )}

                {status === "sending" && (
                    <p className="contact-sending">
                        Sending your message...
                    </p>
                )}
            </div>

            <Form
                className="contact-form mx-auto"
                onSubmit={handleSubmit}
            >
                <Form.Group
                    className="mb-3"
                    controlId="contact-name"
                >
                    <Form.Label>Full Name</Form.Label>

                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        autoComplete="name"
                        maxLength={100}
                        required
                        disabled={status === "sending"}
                    />
                </Form.Group>

                <Form.Group
                    className="mb-3"
                    controlId="contact-email"
                >
                    <Form.Label>Email Address</Form.Label>

                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        autoComplete="email"
                        maxLength={254}
                        required
                        disabled={status === "sending"}
                    />
                </Form.Group>

                <Form.Group
                    className="mb-4"
                    controlId="contact-message"
                >
                    <Form.Label>Message</Form.Label>

                    <Form.Control
                        as="textarea"
                        rows={6}
                        name="message"
                        placeholder="Tell me a little about what you'd like to discuss..."
                        maxLength={5000}
                        required
                        disabled={status === "sending"}
                    />
                </Form.Group>

                <Button
                    className="submit-button"
                    type="submit"
                    disabled={status === "sending"}
                >
                    {status === "sending"
                        ? "Sending..."
                        : "Send Message"}
                </Button>
            </Form>
        </main>
    );
}

export default Contact;
