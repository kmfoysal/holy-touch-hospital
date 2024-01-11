import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ArrowIcon from "../../images/arrowShape.svg";
import WhyUsImg1 from "../../images/whyUs1.jpg";
import WhyUsImg2 from "../../images/whyUs2.jpg";
import WhyUsImg3 from "../../images/whyUs4.jpg";
import WhyUsImg4 from "../../images/whyUs5.jpg";
import "./whyUs.css";

const WhyUs = () => {
  const features = [
    "বিশেষজ্ঞ চিকিৎসক দিয়ে রোগী ভর্তি রেখে সব ধরনের অপারেশন করা হয়।",
    "ল্যাপারোস্কপির সাহায্যে স্বল্প খরচে পিত্ত থলির পাথর অপারেশন সহ সব ধরনের অপারেশন করা হয়।",
    "শীতাতপ নিয়ন্ত্রিত ০৩ (তিন) টি অত্যাধুনিক অপারেশন থিয়েটার।",
    "সর্বাধুনিক ব্যবস্থাসহ ভি.ভি.আই.পি. ভি.আই.পি. ডিলাক্স, এসি ও নন-এসি কেবিন।",
    "মহিলা ও পুরুষ রোগীদের জন্য সু-প্রশস্ত আলাদা ওয়ার্ড-এর ব্যবস্থা।",
    "সকল প্রকার প্যাথলজিক্যাল পরীক্ষা করা হয়।",
    "ব্যাথা মুক্ত আধুনিক উপায়ে লঙ্ঘ মেশিনের সাহায্যে পাইলস্ অপারেশন করা হয়।",
    "রোগী আনা-নেয়ার জন্য সার্বক্ষণিক এম্বুলেন্স সেবা",
    "সার্বক্ষণিক বিদ্যুতের ব্যবস্থা আছে।",
  ];

  return (
    <section className="why-us home-service">
      <Container>
        <Row>
          <Col md={6}>
            <h6>কেন আমরা</h6>
            <h2 className="mb-5">আমাদের বৈশিষ্ট্য এবং পরিষেবা</h2>

            <div className="feature-box">
              {features.map((feature, index) => (
                <div className="feature-item" key={index}>
                  <img src={ArrowIcon} alt="icon" className="img-fluid" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </Col>
          <Col md={6}>
            <div class="gallery">
              <div class="gallery__item">
                <img src={WhyUsImg1} alt="" />
              </div>
              <div class="gallery__item gallery__item--vert">
                <img src={WhyUsImg2} alt="" />
              </div>
              <div class="gallery__item gallery__item--vert">
                <img src={WhyUsImg3} alt="" />
              </div>
              <div class="gallery__item">
                <img src={WhyUsImg4} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyUs;
