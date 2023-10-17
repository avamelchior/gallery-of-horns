import React from "react";
import './App.css';

class HornedBeast extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
       <h2>{this.props.title}</h2>
       <img src={this.props.imageUrl} alt={this.props.title}/>
       <p>{this.props.description}</p>
      </>
    );
  }
}

export default HornedBeast;
