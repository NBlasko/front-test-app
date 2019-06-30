import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions, postPoints } from '../../actions'
import SingleQuestion from './SingleQuestion'
import PropTypes from 'prop-types';

class MainScreen extends Component {

  state = {
    questionNumber: 0,
    usersAnswer: "",
    points: 0
  }

  componentDidMount() {
    this.props.fetchQuestions();
  }

  handleAnswer = (e) => {

    // prevent answering more than once
    if (this.state.usersAnswer) return;

    const { questions } = this.props;
    const { questionNumber } = this.state;
    const usersAnswer = e.target.value;

    // user has answered
    this.setState({ usersAnswer });

    // for correct answer add 750 points
    if (e.target.value === questions[questionNumber].continent) {
      this.setState((state) => {
        return {
          points: state.points + 750
        }
      });
    }
  }

  handleNextQuestion = () => {
    // If last question
    if (this.state.questionNumber === 4) {
      const userPoints = this.state.points;

      // fetch from local Storage and sort all points
      const pointsArray = [
        localStorage.getItem('quiz1') || 0,
        localStorage.getItem('quiz2') || 0,
        localStorage.getItem('quiz3') || 0,
        userPoints
      ].sort((a, b) => { return b - a });

      // set new points list back in local Storage 
      localStorage.quiz1 = pointsArray[0];
      localStorage.quiz2 = pointsArray[1];
      localStorage.quiz3 = pointsArray[2];
      this.props.postPoints(userPoints);
      this.props.history.replace('/results');
      return;
    }

    // If it's not the last question
    this.setState((state) => {
      return {
        usersAnswer: "",
        questionNumber: state.questionNumber + 1
      }
    })
  }

  render() {
    const { questionNumber, usersAnswer } = this.state;
    const { questions } = this.props;
    return (
      <div>
        <div>
          Question {questionNumber + 1} out of 5
          </div>
        {(questions.length !== 5)
          ? null
          : <SingleQuestion
            question={questions[questionNumber]}
            handleAnswer={this.handleAnswer}
            usersAnswer={usersAnswer}
          />
        }

        {(usersAnswer)
          ? <button onClick={this.handleNextQuestion}> NEXT </button>
          : null
        }

      </div>
    );
  }
}

const mapStateToProps = ({ questions }) => {
  return { questions }
}

MainScreen.propTypes = {
  fetchQuestions: PropTypes.func.isRequired,
  postPoints: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  questions: PropTypes.array.isRequired,
}

export default connect(
  mapStateToProps,
  { fetchQuestions, postPoints })(MainScreen);