import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../../actions'



class MainScreen extends Component {


  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    return (
      <div>
       Main
      </div>
    );
  }
}


const mapStateToProps = ({ questions }) => {
  return { questions }
}

export default connect(
  mapStateToProps,
  { fetchQuestions })(MainScreen);