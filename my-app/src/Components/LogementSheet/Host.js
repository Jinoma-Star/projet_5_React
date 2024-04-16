import React from 'react';

function Host(props) {
    return (
      <>
        <span className="owner-name">{props.name}</span>
        <img
          className="owner-photo"
          src={props.picture}
          alt="Propriétaire"
        />
      </>
    );
}

export default Host;

/*YES*/