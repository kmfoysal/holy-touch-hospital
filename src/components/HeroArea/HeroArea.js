import { Col, Container, Row } from 'react-bootstrap';
import './HeroArea.css';

const HeroArea = () => {
    return (
        <div className='hero-area'>
            <Container>
                <Row>
                    <Col className='d-flex flex-column justify-content-center vh-100'>
                        <h6>Welcome To Holy Touch</h6>
                        <h1>Caring for You and <br/> Your Family</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eismod incididunt ut labore et dolore.</p>
                        <a href="#contact">Contact Now</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeroArea;