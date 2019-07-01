import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions, postPoints } from '../../actions'
import SingleQuestion from './SingleQuestion'
import { STORAGE_ARRAY } from '../../constants'
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
        return { points: state.points + 750 }
      });
    }
  }

  handleNextQuestion = () => {
    // If last question
    if (this.state.questionNumber === 4) {
      const userPoints = this.state.points;
      const playingDate = new Date().toLocaleDateString();

      // fetch from local Storage and sort all points
      const storageArray =
        STORAGE_ARRAY
          .map((element) => localStorage.getItem(element) || "0 ")
      storageArray.push(`${userPoints} ${playingDate}`);
      storageArray.sort((a, b) => {
        return parseInt(b.split(" ")[0])
          - parseInt(a.split(" ")[0])
      });

      // set new points list back in local Storage 
      STORAGE_ARRAY.forEach((element, index) =>
        localStorage.setItem(element, storageArray[index]))
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
      <div id="main-screen">
        <h2>
          Question {questionNumber + 1} out of 5
        </h2>
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