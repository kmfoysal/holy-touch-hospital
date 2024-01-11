import { Col, Container, Row } from 'react-bootstrap';
import './HeroArea.css';
import { Link } from 'react-router-dom';

const HeroArea = () => {
    return (
        <div className='hero-area'>
            <Container>
                <Row>
                    <Col className='d-flex flex-column justify-content-center vh-100'>
                        <h6>হলিটাচ হসপিটালে স্বাগতম</h6>
                        <h1>আপনার সুরক্ষার জন্য <br/> আমাদের সেবা</h1>
                        <p>আমাদের প্রথম অভিজ্ঞতা হোক আপনার সুস্থ জীবনের সূচনা৷ আমরা আপনার যত্ন নেয়ার জন্য এখানে আছি, আমরা আপনার সুরক্ষার জন্য প্রতিশ্রুতিবদ্ধ, সবসময়।</p>
                        <Link to="/contact">যোগাযোগ করুন</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeroArea;