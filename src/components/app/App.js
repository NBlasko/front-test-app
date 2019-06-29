import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import HomeScreen from '../home/HomeScreen'
import MainScreen from '../main/MainScreen'
import ResultsScreen from '../result/ResultsScreen'
import Navbar from '../navbar/Navbar'
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        Continent quiz
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

const mapStateToProps = (state) => {
  return {  }
}

export default connect(mapStateToProps, null )(App);
