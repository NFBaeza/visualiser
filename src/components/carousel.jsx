import React from 'react';
import { Carousel } from 'react-bootstrap';
import './carousel.css';
import "bootstrap/dist/css/bootstrap.min.css";

function CarouselComponent() {
    return(
        <div className="carousel">
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img src="/logo192.png" className="carousel-img" alt="..." />
                    <Carousel.Caption className="carousel-text">
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={3000}>
                    <img src="/logogato.png" className="carousel-img" alt="..." />
                    <Carousel.Caption className="carousel-text">
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={3000}>
                    <img src="/logocamas.png" className="carousel-img" alt="..." />
                    <Carousel.Caption className="carousel-text">
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselComponent;