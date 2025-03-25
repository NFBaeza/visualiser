import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';
import "bootstrap/dist/css/bootstrap.min.css";
  
function CarouselComponent({CarouselData}) {
    return(
        <div className="carousel">
            <Carousel>
                {CarouselData.map((img) => (
                   <Carousel.Item interval={img.interval}>
                   <img src={img.src} className="carousel-img" alt={img.alt} />
                   <Carousel.Caption className="carousel-text">
                       <h3>{img.title}</h3>
                       <p>{img.caption}</p>
                   </Carousel.Caption>
                </Carousel.Item>
             ))}
            </Carousel>
        </div>
    )
}

export default CarouselComponent; 



