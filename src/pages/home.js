import React from "react";
import CarouselComponent from '../components/carousel';
import Navbar from '../components/navbar';
import CardPage from './CardPage';
import './home.css';


function Home() {
    return (
        <>
        <Navbar /> {/* Barra de navegación */}
        <div className="container mt-4">
          <h1 className="text-center">🚀Hallo, Welt🚀</h1>
        </div>
        <CarouselComponent/>
        <CardPage/>
      </>
    );
}

export default Home;
