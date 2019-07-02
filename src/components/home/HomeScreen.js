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
          points = points.toLocaleString();
          let date = score.split(" ");
          if (date.length > 1) date.shift();

          return (
            <div key={key}>
              
              <span className="rank-no"> #{key + 1} </span>
              <span className="rank-points">
              {points} pts
              
              {
                // hack to align items
                (points.length<5)
                ? <span style={{marginRight: "1.4rem"}}></span> 
                : null
              }
               
                </span>
              <span className="rank-date">
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
       <div className="home-title"> Your Scores </div>
        {quizScores}
      </div>
    );
  }
}


export default HomeScreen;