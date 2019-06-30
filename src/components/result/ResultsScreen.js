import React, { Component } from 'react';
import { connect } from 'react-redux';
import MaterialIcon, { colorPalette } from 'material-icons-react';
import PropTypes from 'prop-types';

class ResultsScreen extends Component {

  render() {
    console.log("propis", this.props)
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

ResultsScreen.propTypes = {
  points: PropTypes.number.isRequired,
}

export default connect(mapStateToProps, null)(ResultsScreen);