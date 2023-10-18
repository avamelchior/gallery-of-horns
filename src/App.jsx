import React from "react";
import "./App.css";
import Header from './Header';
import Footer from './Footer';
import Gallery from './Gallery';
import data from './data.json';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Gallery data={data} /> 
        <Footer />
      </>
    );
  }
}

export default App;
