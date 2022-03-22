import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../../images/logo-with-text.png';
import './Footer.css';

const Footer = () => {
    const facebook = <FontAwesomeIcon icon={faFacebookF} />
    const instagram = <FontAwesomeIcon icon={faInstagram} />
    const youtube = <FontAwesomeIcon icon={faYoutube} />

    return (
        <footer>
            <Container>
                <Row>
                    <Col lg={4} className='left-side'>
                        <img src={Logo} alt="logo" />
                        <p>Holy Touch Hospital provides specialty surgical services through honourable doctors with trained staff.Started on April 2018 in luxurious atmosphere.</p>
                        <h6>Follow Us On</h6>
                        <ul>
                            <li>
                                <a href="#">{facebook}</a>
                            </li>
                            <li>
                                <a href="#">{instagram}</a>
                            </li>
                            <li>
                                <a href="#">{youtube}</a>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <h5>Services</h5>
                        <ul>
                            <li>
                                <a href="#">General Sergury</a>
                            </li>
                            <li>
                                <a href="#">Scissor</a>
                            </li>
                            <li>
                                <a href="#">Heart Operation</a>
                            </li>
                            <li>
                                <a href="#">Piles Operation</a>
                            </li>
                            <li>
                                <a href="#">Laproscopy</a>
                            </li>
                            <li>
                                <a href="#">Pharmecy</a>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <h5>Quick Links</h5>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Doctors</a>
                            </li>
                            <li>
                                <a href="#">Department</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <h5>Contact Info</h5>
                        <ul>
                            <li>
                                <p>Power House Road, Patuakhali, Patuakhali Sadar - 8600</p>
                            </li>
                            <li>
                                <p>Mobile : 01742-121212</p>
                            </li>
                            <li>
                                <p>WhatsApp : +880 1713-116908</p>
                            </li>
                            <li>
                                <p>Email : hth.ptk.bd@gmail.com</p>
                            </li>
                        </ul>
                    </Col>
                    <hr />
                    <p className='author'>&copy; 2022 Holy Touch Hospital | All Right Reserved | Developed By <a href="https://www.kmfoysal.com/" target='_blank' rel='noreferrer'>K.M FOYSAL</a></p>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;