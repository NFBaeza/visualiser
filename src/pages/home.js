import React from "react";
import CarouselComponent from '../components/Carousel';
import Navbar from '../components/NavBar';
import CardPage from './CardPage';

function Home() {
  const CarouselData = [
    {src: "/logo192.png", title: "First slide label", caption: "Nulla vitae elit libero, a pharetra augue mollis interdum.", interval: 3000, alt: "..."},
    {src: "/logogato.png", title: "Second slide label", caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", interval: 3000, alt: "..."},
    {src: "/logocamas.png", title: "Third slide label", caption: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.", interval: 3000, alt: "..."},
    {src: "/logocamas.png", title: "Third slide label", caption: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.", interval: 3000, alt: "..."},
  ];
  
  return (
      <>
      <Navbar /> {/* Barra de navegación */}
      <div className="container mt-4">
        <h1 className="text-center">🚀Hallo, Welt🚀</h1>
      </div>
      <CarouselComponent CarouselData={CarouselData}/>
      <CardPage/>
    </>
  );
}

export default Home;