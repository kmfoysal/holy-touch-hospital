import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeartIcon from "../../images/heart-icon.png";
import PharmecyIcon from "../../images/Pharmacy-icon.png";
import SerguryIcon from "../../images/sergury-icon.png";
import ServiceImg from "../../images/service-img-1.jpg";
import ServiceIcon from "../../images/medicalPlus.svg";
import "./HomeService.css";

const HomeService = () => {
  const services = [
    {
      title: "নরমাল ডেলিভারী",
    },
    {
      title: "সিজার",
    },
    {
      title: "হিস্টেরেক্টমি",
    },
    {
      title: "একটোপিক প্রেগনেন্সি",
    },
    {
      title: "সিস্টেক্টসি",
    },
    {
      title: "ডি এন্ড সি",
    },
    {
      title: "ল্যাপারোস্কপি মেশিনের সাহায্যে পিত্তথলী পাথর অপারেশন।",
    },
    {
      title: "লেজার রশ্মির মাধ্যমে পাইলস্, এনাল ফিসার ও ফিষ্টুলা।",
    },
    {
      title: "হার্নিয়া, অ্যাপেন্ডিসাইটিস।",
    },
    {
      title: "এছাড়াও অন্যান্য অপারেশন করার সু-ব্যবস্থা রয়েছে",
    },
  ];

  return (
    <div className="home-service">
      <Container>
        <Row>
          <Col className="img-side">
            <img src={ServiceImg} alt="img" />
          </Col>
          <Col>
            <h6>আমরা কি করি</h6>
            <h2>
              মাতৃত্ব এবং শস্ত্রক্ষেত্রে পরিপূর্ণ সেবা <br /> সুরক্ষিত প্রসব ও
              পরবর্তী যত্ন
            </h2>
            <Row className="service-box">
              {services.map((item, index) => (
                <Col md={6} className="service-item" key={index}>
                  <div className="img-box">
                    <img src={ServiceIcon} alt="icon" />
                  </div>
                  <div className="service-desc">
                    <h5>{item?.title}</h5>
                  </div>
                </Col>
              ))}
            </Row>
            {/* <a href="#contact">View All Services</a> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeService;
