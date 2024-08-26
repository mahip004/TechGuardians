import React from "react";
import Navbar from "./components/Navbar.jsx";
import BlueHeader from "./components/BlueHeader.jsx";
import Carousel_Business from "./components/carousel_business.jsx"
import Card from "./components/card.jsx";
import Footer from "./components/Footer.jsx";
import "./Home.css";

function Home() {
  const numCards = 60;
  return (
    <>
      <Navbar />
      <BlueHeader />
      <Carousel_Business />
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
