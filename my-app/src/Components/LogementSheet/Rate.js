import React from 'react';
import emptyStar from "../../Assets/Rate/EmptyStar.png";
import fullStar from "../../Assets/Rate/FullStar.png";


function Rate(props) {
      const score = props.score;
    const notes = [1, 2, 3, 4, 5];
    return (
      <div className="rate-contenair">
        {notes.map((note) =>
          score >= note ? (
            <img
              key={note.toString()}
              className="Star-rating"
              src={emptyStar}
              alt="Etoile Vide"
            />
          ) : (
            <img
              key={note.toString()}
              className="Star-rating"
              src={fullStar}
              alt="Etoile"
            />
          )
        )}
      </div>
    );
}

export default Rate;

/*MAYBE*/