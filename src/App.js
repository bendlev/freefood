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

      <body>
        <div id="banner">
          <div id="banner-content">
          FREEFOOD@NOW
          </div>
        </div>
        
        <div id="main-content">
          <div class="block1">
            <div id="header">
              Have Free Food Around You?
            </div>
            <div id="main">
              Maybe you do, maybe you don't.
            </div>
            <div id="third">
              explanations explanations explanations explanations explanations explanations explanations explanations explanations explanations explanations explanations. 
            </div>
            <div id="fourth" class="myButton">
              Share Free Food Info Here
            </div>
          </div>
        <div class="tiles">
          <Card name="TukTuk" location="ECSC 116" servingsize="20" tags="#vegetarian"/>
          <Card name="TukTuk" location="ECSC 116" servingsize="20" tags="#vegetarian"/>
          <Card name="TukTuk" location="ECSC 116" servingsize="20" tags="#vegetarian"/>
          {/* <div class="tile">Tile One</div>
          <div class="tile">Tile Two</div>
          <div class="tile">Tile Three</div> */}
        </div>
        <div class="click-container">
          <div class="click-div">
            1
          </div>
          <div class="click-div">
            2
          </div>
          <div class="click-div">
            3
          </div>
        </div>
      </div>
      </body>

      {/* each card must include name, location, servings, and tags */}


      
    </div>

  );
};

export default App;
