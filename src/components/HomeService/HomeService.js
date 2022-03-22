import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HeartIcon from '../../images/heart-icon.png';
import PharmecyIcon from '../../images/Pharmacy-icon.png';
import SerguryIcon from '../../images/sergury-icon.png';
import ServiceImg from '../../images/service-img-1.jpg';
import './HomeService.css';


const HomeService = () => {
    return (
        <div className='home-service'>
            <Container>
                <Row>
                    <Col className='img-side'>
                        <img src={ServiceImg} alt="img" />
                    </Col>
                    <Col>
                        <h6>What We do</h6>
                        <h2>OPD, Medical and Surgical <br/> Services We Offer</h2>
                        <div className="service-box">
                            <div className="service-item">
                                <div className="img-box">
                                    <img src={SerguryIcon} alt="icon" />
                                </div>
                                <div className="service-desc">
                                    <h5>General Surgery</h5>
                                    <p>One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.</p>
                                </div>
                            </div>
                            <div className="service-item">
                                <div className="img-box">
                                    <img src={HeartIcon} alt="icon" />
                                </div>
                                <div className="service-desc">
                                    <h5>Heart Diseases</h5>
                                    <p>One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.</p>
                                </div>
                            </div>
                            <div className="service-item">
                                <div className="img-box">
                                    <img src={PharmecyIcon} alt="icon" />
                                </div>
                                <div className="service-desc">
                                    <h5>Pharmacy</h5>
                                    <p>One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.</p>
                                </div>
                            </div>
                        </div>
                        <a href="#contact">View All Services</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeService;