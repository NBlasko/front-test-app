import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../../actions'
import SingleQuestion from './SingleQuestion'


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
    const usersAnswer = e.target.value;
    this.setState({ usersAnswer })

    if (e.target.value === this.props.questions[this.state.questionNumber].continent) {
      console.log("bravo");
      this.setState((state) => {
        return {
          points: state.points + 750
        }
      })
    }
  }

  handleNextQuestion = () => {
    // uradi nesto sto je bitno sa pitanjem
    // posaji u local storage rezultate, a zatim promeni url
    if (this.state.questionNumber === 4) {
      return;
    }
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
    console.log("points", this.state.points);
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

export default connect(
  mapStateToProps,
  { fetchQuestions })(MainScreen);