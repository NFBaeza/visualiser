import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import CardComponent from '../components/card';
import "./card.css";

function CardPage() {
    const cardsData = [
        { title: "Data", text: "Data Page", href: "/DataPage"},
        { title: "Home", text: "Home Page", href: "/"},
        { title: "Card 3", text: "Descripción 3", href: "#"},
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