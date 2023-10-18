/* eslint-disable no-unused-vars */
import React from 'react';
import HornedBeast from './HornedBeast';

class Gallery extends React.Component{
  render(){
    return (
      <div>
        {this.props.data.map((beast, index) => (
          <HornedBeast
            key={index}
            title={beast.title}
            imageUrl={beast.image_url}
            description={beast.description}
          />
        ))}
      </div>
    );
  }
}

export default Gallery;

