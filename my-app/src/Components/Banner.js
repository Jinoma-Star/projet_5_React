import React from "react";


function Banner({ image, texte }) {
  return (
    <div className="banner">
      <img className="banner__img" src={image} alt="Bannière" />
      <span className="banner__txt">{texte}</span>
    </div>
  );
}

export default Banner;

/*YES*/