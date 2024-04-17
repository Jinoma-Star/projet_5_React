import React from "react";


function Banner({ image, texte, applyFilter }) {
  return (
    <div className="banner">
      <img 
        className={`banner__img ${applyFilter ? 'apply-brightness' : ''}`} src={image} alt="Bannière" />
      <span className="banner__txt">{texte}</span>
    </div>
  );
}

export default Banner;

/*YES*/