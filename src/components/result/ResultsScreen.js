import React, { Component } from 'react';
import { connect } from 'react-redux';
import MaterialIcon, { colorPalette } from 'material-icons-react';

class ResultsScreen extends Component {
  render() {
    const { points } = this.props;
    const pointsWithComma = points.toLocaleString();
    return (
      <div>
        Results
        <div>  <MaterialIcon icon="category" /> </div>
        <h2> Your Score </h2>
        <div>  {pointsWithComma} pts </div>
      </div>
    );
  }
}

const mapStateToProps = ({ points }) => {
  return { points }
}


export default connect(mapStateToProps, null)(ResultsScreen);