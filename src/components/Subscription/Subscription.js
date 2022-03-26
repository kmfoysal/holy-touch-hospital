import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Subscription.css';

const Subscription = () => {
    return (
        <div className='subscription'>
            <Container>
                <Row>
                    <Col>
                        <h3>Subscribe Now to Our Newsletter!</h3>
                        <p>A team of expert doctors that are leading our clinic! Meet our staff <br /> and visit us for your next problem!</p>
                        <div className="input-box">
                            <input 
                            className='input-control'
                            placeholder="Enter Your Email"
                            />
                            <button className='subs-btn'>
                            SUBSCRIBE
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Subscription;