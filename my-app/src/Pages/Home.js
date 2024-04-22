import React from "react";
import Banner from "../Components/Banner";
import Gallery from "../Components/Gallery";
import HomeBanner from "../Assets/Banner/HomeBanner.png";

const Home = () => {
  return (
    <div className="home">
      <main>
        <Banner texte="Chez vous, partout et ailleurs" image={HomeBanner} applyFilter={true} />
        <Gallery />
      </main>
    </div>
  );
};

export default Home;
