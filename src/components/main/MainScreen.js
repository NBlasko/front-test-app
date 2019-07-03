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
    points: Array(5).fill(0)  // switch to array to stop double click
  }

  componentDidMount() {
    this.props.fetchQuestions();
  }

  handleAnswer = (e) => {

    // prevent answering more than once
    if (this.state.usersAnswer) return;

    const { questions } = this.props;
    const { questionNumber } = this.state;

    //it's tricky when button has children
    const usersAnswer = ('BUTTON' === e.target.tagName)
      ? e.target.value
      : e.target.parentNode.value

    // user has answered
    this.setState({ usersAnswer });

    // for correct answer add 750 points
    if (usersAnswer === questions[questionNumber].continent) {
      /* old way that creates double click and double adding points  
      this.setState((state) => {
          return { points: state.points + 750 }
        }); */
      const tempPointsArray = [...this.state.points];
      tempPointsArray[this.state.questionNumber] = 750;
      this.setState({ points: tempPointsArray });

    }
  }

  handleNextQuestion = () => {
    // If last question
    if (this.state.questionNumber === 4) {

      // suming the array we stop multiple click problem
      const userPoints =
        [...this.state.points].reduce((a, b) => a + b)
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
    console.log("this.state", this.state)
    const { questionNumber, usersAnswer } = this.state;
    const { questions } = this.props;
    return (
      <div id="main-screen">
        <h4> Question {questionNumber + 1} out of 5</h4>

        {
          (questions.length !== 5)
            ? null
            : <SingleQuestion
              question={questions[questionNumber]}
              handleAnswer={this.handleAnswer}
              usersAnswer={usersAnswer}
            />
        }

        {
          (usersAnswer)
            ? <button
              className="next-button"
              onClick={this.handleNextQuestion}
            > NEXT
            </button>
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