import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutImg from "../../images/Zakia.jpg";
import "./HomeAbout.css";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <div className="home-about">
      <Container className="">
        <Row className="resopnsive-row">
          <Col className="d-flex flex-column justify-content-center vh-100">
            <h6>আমাদের সম্পর্কে</h6>
            <h2>
              আপনার স্বাস্থ্য পরিচর্যার প্রয়োজন যাই হোক না কেন আমরা
              সাহায্য করতে এখানে আছি
            </h2>
            <p>
              ডাঃ জাকিয়া সুলতানা এমবিবিএস; বিসিএস (স্বাস্থ্য), এমআরসিওজি (লন্ডন)
              পার্ট-২ এফসিপিএস (গাইনী এন্ড অবস্) গাইনী এবং প্রসূতি রোগ বিশেষজ্ঞ
              ও সার্জন কল্পোসকপি ও ল্যাপারোস্কপিক সার্জন সহকারী অধ্যাপক, (গাইনী
              বিভাগ) পটুয়াখালী মেডিকেল কলেজ, পটুয়াখালী।
            </p>
            <Link to="/contact">আরো জানুন</Link>
          </Col>
          <Col className="about-bg">
            <div className="about-bg-wrapper">
              <img className="img-fluid" src={AboutImg} alt="img" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeAbout;
