import React from "react";
import Banner from "../Components/Banner";
import AboutBanner from "../Assets/Banner/AboutBanner.png";
import Collapse from "../Components/Collapse";
import CollapseData from "../Data/collapses.json";

const About = () => {
  return (
    <div className="about">
      <main>
        <Banner image={AboutBanner} titre="" applyFilter={false} />

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

    </div>
  );
};

export default About;
