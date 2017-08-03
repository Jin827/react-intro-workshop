import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageCaption from './ImageCaption.js';
import RedBox from './Layout.js';
import GuessTheNumber from './GuessTheNumber.js'
import YouClicked from './YouClicked.js'
import CharacterCounter from './CharacterCounter.js'
import NumberGuessing from './NumberGuessing.js'
import GithubProfile from './GithubProfile.js'
import GithubSearch from './GithubSearch.js'


var imageList = [
  {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
  {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
  {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];

class App extends Component {
//make a function here that passes object values into ImageCaption
  renderImage(data) {
    return (
      <ImageCaption key= {data.id} src= {data.source} text= {data.text}/>
    )
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>React workshop</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </div>

          <ImageCaption src="http://i.imgur.com/D8JWn.jpg" text="It's something cute!" random="blue"/>
        <hr/>
        <RedBox>
          <p>This will be in the red box</p>
          <img alt="This too!" src="http://placekitten.com/g/200/200"/>
        </RedBox>
        <hr/>
        {imageList.map(this.renderImage)};
        <hr/>
        <GuessTheNumber numberToGuess= {99}/>
        <hr/>
        <YouClicked />
        <hr/>
        <CharacterCounter limit= {10}/>
        <hr/>
        <NumberGuessing limit= {5}/>
        <hr/>

      
        <hr/>
        <GithubSearch/>

        <hr/>
        <p className="App-intro">
          <code>Hyojin.js</code>
        </p>
      </div>
    );
  }
}

export default App;
