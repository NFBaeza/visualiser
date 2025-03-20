import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';  // Navegación sin recarga
import "bootstrap/dist/css/bootstrap.min.css";
//import { useNavigate } from "react-router-dom";

function CardComponent({ title, text, href}) {
	return (
		<Card className='custom-card'>
		<Card.Body>
			<Card.Title>{title}</Card.Title>
			<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
			<Link to={href} className="btn btn-primary">Ir a {title}</Link> {/* Navegación sin recarga */}
			<Card.Text>{text}</Card.Text>
		</Card.Body>
		</Card>
  );
}

export default CardComponent;