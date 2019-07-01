import React, { Component } from 'react';
import { STORAGE_ARRAY } from '../../constants'

class HomeScreen extends Component {

  render() {

    // all points from local Storage put in array
    const quizScores =
      STORAGE_ARRAY
        .map((element) => "" + localStorage.getItem(element))

        // then create beautiful output :)
        .map((score, key) => {
          let points = 0 || parseInt(score.split(" ")[0]);
          if (isNaN(points)) points = 0;
          let date = score.split(" ");
          if (date.length > 1) date.shift();

          return (
            <div key={key}>
              <span> #{key + 1} </span> {points.toLocaleString()} pts

              <span>
                {
                  (date[0] && date[0] !== "null")
                    ? ` on ${date}`
                    : null
                }
              </span>
            </div>
          );
        });

    return (
      <div id="home-screen">
        Your Scores
        {quizScores}
      </div>
    );
  }
}


export default HomeScreen;