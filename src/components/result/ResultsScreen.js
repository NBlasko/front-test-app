import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResultsScreen extends Component {
  render() {
    return (
      <div>
        Results
        <h2> Youre Score </h2>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {  }
}


export default connect(mapStateToProps, null)(ResultsScreen);