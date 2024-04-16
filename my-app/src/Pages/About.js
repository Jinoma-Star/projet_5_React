import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import AboutBanner from "../Assets/Banner/AboutBanner.png";
import Collapse from "../Components/Collapse";
import CollapseData from "../Data/collapses.json";

const About = () => {
  return (
    <div className="about">
      <Header />
      <main>
        <Banner image={AboutBanner} titre="" />

        <div className="collapse">
          <div className="collapse__dropdown">
            {CollapseData.map((item) => {
              return (
                <div key={item.id}>
                  <Collapse content={item.content} title={item.title} />
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;

/*YES*/