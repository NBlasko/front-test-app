import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import HomeScreen from '../home/HomeScreen'
import MainScreen from '../main/MainScreen'
import ResultsScreen from '../result/ResultsScreen'
import Navbar from '../navbar/Navbar'
import '../../scss/App.scss'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <h5> CONTINENT QUIZ </h5>
          <Switch>
            <Route exact path='/' component={HomeScreen}/>
            <Route path='/main' component={MainScreen} />
            <Route path='/results' component={ResultsScreen} />
          </Switch>
          <Navbar />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
