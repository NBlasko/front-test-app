import React, { Component } from 'react';


class HomeScreen extends Component {


  render() {
    // all points from local Storage put in array
    const quizScores = [
      localStorage.getItem('quiz1') || 0,
      localStorage.getItem('quiz2') || 0,
      localStorage.getItem('quiz3') || 0
    ]
    // then create beautiful output :)
    .map((score, key) =>
      <div key={key}>
        <span> #{key + 1} </span> {parseInt(score).toLocaleString()} pts
        </div>
    );

    return (
      <div>
        Your Scores
        {quizScores}
      </div>
    );
  }
}


export default HomeScreen;