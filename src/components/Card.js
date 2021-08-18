import React from 'react';
import './Card.css';

const Card = ({ name, email, id }) => {
  return (
    <div className='cards tc grow br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
