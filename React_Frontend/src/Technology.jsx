import React from "react";
import Navbar from "./Navbar.jsx";
import BlueHeader from "./BlueHeader.jsx";
import Carousel_Technology from "./components/carousel_technology.jsx"
import Card from "./components/card.jsx";
import Footer from "./Footer.jsx";
import "./Home.css";

function Home() {
  const numCards = 60;
  return (
    <>
      <Navbar />
      <BlueHeader />
      <div className="carousel-container">
          <Carousel_Technology/>
        </div>
      <div className="card-grid">
        {Array.from({ length: numCards }, (_, index) => (
          <Card key={index} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Home;
