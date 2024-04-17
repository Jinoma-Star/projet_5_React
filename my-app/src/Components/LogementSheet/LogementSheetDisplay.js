//import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import DataLogementSheet from "../../Data/logements.json";
import Tag from "./Tag";
import Collapse from "../Collapse";
import Carrousel from "./Carrousel";
import Rate from "./Rate";
import Host from "./Host";

const LogementSheetDisplay = () => {
  /* Récupère la bonne fiche */
  const { id } = useParams();

  const LogementSheet = DataLogementSheet.find((logement) => logement.id === id);

  /* Tags */
  const tagsLogement = LogementSheet?.tags.map((tags, i) => {
    return <Tag key={i} nom={tags} />;
  });

  /* Équipements */
  const equipements = LogementSheet?.equipments.map((equipment, i) => {
    return (
      <ul key={i}>
        <li>{equipment}</li>
      </ul>
    );
  });

  return (
    <>
      {LogementSheet ? (
        <div className="Sheet-container">
          <Carrousel slides={LogementSheet?.pictures} />
          <section className="logement-sheet">
            <div className="description-info">
              <div className="description-info__titletags">
                <div className="description-info__titletags__title">
                  <span className="logement-title">{LogementSheet?.title}</span>
                  <span className="logement-place">
                    {LogementSheet?.location}
                  </span>
                </div>
                {/* Tags */}
                <div className="description-info__titletags__tags">
                  {tagsLogement}
                </div>
              </div>

              <div className="description-info__owner">
                {/* Hosting */}
                <div className="description-info__owner__name-prop">
                  <Host
                    name={LogementSheet?.host.name}
                    picture={LogementSheet?.host.picture}
                  />
                </div>
                {/* Rating */}
                <div className="description-info__owner__rate">
                  <Rate score={LogementSheet.rating} />
                </div>
              </div>
            </div>
          </section>
          {/* Collapse */}
          <div className="description-content">
            <div className="description-content__description">
              <Collapse
                title="Description"
                content={LogementSheet?.description}
              />
            </div>
            <div className="description-content__equipement">
              <Collapse title="Équipements" content={equipements} />
            </div>
          </div>
        </div>
      ) : (
        <Navigate replace to="/404" />
      )}
    </>
  );
};

export default LogementSheetDisplay;

/*YES*/