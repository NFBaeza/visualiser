import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import CardComponent from '../components/Card';
import "./Card.css";

function CardPage() {
    const cardsData = [
        { title: "Data Sensor", text: "Eventually the sensor data will be displayed here.", href: "/DataPage"},
        { title: "Home", text: "Back Home", href: "/"},
        { title: "Recommendations", text: "There will always be recommendations of things that I find interesting in life.", href: "/RecommendationPage"},
      ];

      return(
        <Container className="mt-5">
        <Row className="justify-content-center">
        {cardsData.map((card, index) => (
            <Col md={4} sm={6} xs={12} key={index}>
            <CardComponent title={card.title} text={card.text} href={card.href}/>
            </Col>
        ))}
        </Row>
        </Container> 
      )
}
export default CardPage;