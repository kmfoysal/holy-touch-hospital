import { faClock, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    const location = <FontAwesomeIcon icon={faLocationDot} />
    const phone = <FontAwesomeIcon icon={faPhone} />
    const email = <FontAwesomeIcon icon={faEnvelope} />
    const watch = <FontAwesomeIcon icon={faClock} />

    return (
        <div className='contact'>
            <section className="contact-banner">
                <Container>
                    <Row>
                        <Col>
                            <div className="banner-text-box">
                                <h3>Contact Us</h3>
                                <p>We are fully commited to serve you .....</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="contact-details">
                <Container>
                    <Row className='contact-form-box shadow-lg'>
                        <Col lg={4}>
                            <div>
                                <h3>
                                    Let's Get In Touch <br />
                                    With Us.
                                </h3>
                                <div className="contact-info">
                                    <div className="icon-box">
                                        {location}
                                    </div>
                                    <div className="contact-info-text">
                                        <h5>Address</h5>
                                        <p>Power House Road, Patuakhali <br />
                                         Patuakhali Sadar - 8600</p>
                                    </div>
                                </div>
                                <div className="contact-info">
                                    <div className="icon-box">
                                        {phone}
                                    </div>
                                    <div className="contact-info-text">
                                        <h5>Mobile</h5>
                                        <p>Mobile : 01742-121212 <br />
                                         WhatsApp : +880 1713-116908</p>
                                    </div>
                                </div>
                                <div className="contact-info">
                                    <div className="icon-box">
                                        {email}
                                    </div>
                                    <div className="contact-info-text">
                                        <h5>Email</h5>
                                        <p>hth.ptk.bd@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <Form>
                                <Row>
                                    <Col>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Full Name"
                                            className="mb-3"
                                        >
                                            <Form.Control type="text" placeholder="name" required />
                                        </FloatingLabel>
                                    </Col>
                                    <Col>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Email address"
                                            className="mb-3"
                                        >
                                            <Form.Control type="email" placeholder="name@example.com" required/>
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Phone"
                                            className="mb-3"
                                        >
                                            <Form.Control type="tel" placeholder="phone" />
                                        </FloatingLabel>
                                    </Col>
                                    <Col>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Subject"
                                            className="mb-3"
                                        >
                                            <Form.Control type="text" placeholder="subject" />
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FloatingLabel controlId="floatingTextarea2" label="Write your message here ....">
                                            <Form.Control
                                            as="textarea"
                                            placeholder="Write your message here ...."
                                            style={{ height: '200px' }}
                                            />
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <button>
                                    Submit
                                </button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Contact;