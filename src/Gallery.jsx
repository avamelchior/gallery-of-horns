/* eslint-disable no-unused-vars */
import React from 'react';
import HornedBeast from './HornedBeast';

function Gallery({ data }) {
  return (
    <div>
      {data.map((beast, index) => (
        <HornedBeast
          key={index}
          title={beast.title}
          imageUrl={beast.image}
          description={beast.description}
        />
      ))}
    </div>
  );
}

export default Gallery;

