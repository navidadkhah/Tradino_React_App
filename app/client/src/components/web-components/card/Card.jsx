import React from 'react';
import './card.css';

export default function card({ image, alt, name }) {
  return (
    <div>
      <div className="card-border">
        <img src={image} alt={alt} className="card-image" />
        <span className="card-name">{name}</span>
      </div>
    </div>
  );
}
