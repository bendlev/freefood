import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Card from './components/card.js';


// function getFood() {

// }

function App() {
  return (

    <div className="App">
      <p>this is a test</p>
      {/* each card must include name, location, servings, and tags */}
      <Card name="TukTuk" location="ECSC 116" servingsize="20" tags="#vegetarian"/>
    </div>

  );
};

export default App;
