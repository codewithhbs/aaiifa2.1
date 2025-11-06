import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const OurBrands = () => {
  const brandLogos = [
    "http://hoverbusinessservices.com/cloud/aiifa/media/brand/brand1.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/brand/brand2.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/brand/brand3.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/brand/brand4.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/brand/brand5.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/brand/brand6.jpg",
  ];

  return (
    <section className="logo-partner-section text-center">
      <Container>
        <h2 className="logo-partner-title">Our Partners</h2>
        
        {/* Desktop: 6 logos in one row */}
        <Row className="logo-partner-grid d-none d-md-flex">
          {brandLogos.map((logo, index) => (
            <Col key={index} className="logo-partner-col">
              <div className="logo-partner-card">
                <img
                  src={logo}
                  alt={`Brand ${index + 1}`}
                  className="logo-partner-image"
                />
              </div>
            </Col>
          ))}
        </Row>

        {/* Mobile: Carousel for smaller screens */}
        <div className="logo-partner-mobile-carousel d-md-none">
          <Row className="justify-content-center">
            <Col xs={12}>
              <div className="logo-partner-carousel-inner">
                {brandLogos.map((logo, index) => (
                  <div key={index} className="logo-partner-card">
                    <img
                      src={logo}
                      alt={`Brand ${index + 1}`}
                      className="logo-partner-image"
                    />
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </div>

        <button className="logo-partner-readmore-btn">View All </button>
      </Container>
    </section>
  );
};

export default OurBrands;