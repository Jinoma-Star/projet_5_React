import React from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Gallery from "../Components/Gallery";
import Header from "../Components/Header";
import HomeBanner from "../Assets/Banner/HomeBanner.png";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <Banner texte="Chez vous, partout et ailleurs" image={HomeBanner} />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

/*YES*/