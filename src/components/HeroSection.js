import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";

function HeroSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={5} className="text-center text-lg-left">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={1}
              spaced={true}
            />
          </Col>
          <Col className="offset-lg-1 mt-5 mt-lg-0 ">
            <figure className="HeroSection__image-container mx-auto">
              <Image src={props.image} fluid={true} />
            </figure>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default HeroSection;
