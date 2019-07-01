import React, { Component } from 'react';
import { connect } from 'react-redux';
import MaterialIcon /*, { colorPalette } */ from 'material-icons-react';
import PropTypes from 'prop-types';

class ResultsScreen extends Component {
  render() {
    const { points } = this.props;
    const pointsWithComma = points.toLocaleString();
    return (
      <div id="results">
        <h4> Results </h4>
        <div className="category-result" >
          <MaterialIcon icon="category" size={100} color='#0050A5' />
        </div>
        <h2> Your Score </h2>
        <h1> {pointsWithComma} pts </h1>
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