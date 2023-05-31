import React, { Component, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {

  name = 'Aniket'
  render() {  
    return (
      <>
        {/* Hello I'm {this.name} <br /> And i'm learning class based Component in React JS. */}
        <Navbar />
        <News />
      </>
      )
  }
}