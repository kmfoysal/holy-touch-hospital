import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AboutImg from '../../images/about-img.png';
import './HomeAbout.css';

const HomeAbout = () => {
    return (
        <div className='home-about'>
            <Container className=''>
                <Row>
                    <Col className='d-flex flex-column justify-content-center vh-100'>
                        <h6>About Us</h6>
                        <h2>Whatever Your Healthcare Needs <br/> We Are Here to Help</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, illo, facilis minus ratione nihil nobis consectetur accusamus nemo tempora nostrum modi a saepe consequuntur omnis iure numquam voluptates ut totam quidem tenetur sed magni. Placeat maiores minima ducimus facere cumque quam molestias officia officiis, porro quae fugit delectus quod quos.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nisi veniam harum maiores! Veritatis eum, error doloribus ab distinctio accusantium pariatur unde excepturi enim, deleniti perferendis mollitia iure. Itaque, vel.</p>
                        <a href="#contact">Learn More</a>
                    </Col>
                    <Col className='about-bg'>
                        <img className='img-fluid' src={AboutImg} alt="img" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeAbout;