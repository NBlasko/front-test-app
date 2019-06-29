import React, { Component } from 'react';


class HomeScreen extends Component {


  render() {
    const quiz1 = localStorage.getItem('quiz1') || 0;
    const quiz2 = localStorage.getItem('quiz2') || 0;
    const quiz3 = localStorage.getItem('quiz3') || 0;

    return (
      <div>
        Home
        <div>  1. {quiz1}  </div>
        <div>  2. {quiz2}  </div>
        <div>  3. {quiz3}  </div>
      </div>
    );
  }
}


export default HomeScreen;