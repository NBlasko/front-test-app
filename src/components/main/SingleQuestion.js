import React from 'react';
import MaterialIcon /*, { colorPalette } */ from 'material-icons-react';
import PropTypes from 'prop-types';

const SingleQuestion = (props) => {
    const { image, answers, continent } = props.question;
    const { handleAnswer, usersAnswer } = props;
    const isRight = (usersAnswer === continent);
    const buttons =
        [0, 1, 2].map(
            num =>
                <div key={num}>
                    <button
                        value={answers[num]}
                        className={(answers[num] === usersAnswer) ? 'active-answer' : ''}
                        onClick={handleAnswer}
                    >
                        {/*strange behavior in React. Had to double the code*/
                            (answers[num] !== usersAnswer)
                                /* if button is not clicked*/
                                ? <MaterialIcon icon="category" size={30} color="#FDB53C" />
                                : null
                        }
                        { /*strange behavior in react*/
                            (answers[num] === usersAnswer)
                                /* if button is clicked*/
                                ? <MaterialIcon icon="category" size={30} color="white" />
                                : null
                        }

                        <span onClick={handleAnswer} className="answer-text">  {answers[num]}  </span>
                        <span className="check-close">
                            {/* user answers and it's correct */}
                            {(usersAnswer && answers[num] === continent)
                                ? <MaterialIcon icon="check" size={30} color="#078B4F" />
                                : null
                            }

                            {/* user's answer that is not correct */}
                            {(!isRight && answers[num] === usersAnswer)
                                ? <MaterialIcon icon="close" size={30} color="#D1493A" />
                                : null
                            } </span>
                    </button>
                </div>
        )
    return (
        <div id="single-question">
            <img src={image} alt="continent" />
            {buttons}
        </div>
    )
}

SingleQuestion.propTypes = {
    handleAnswer: PropTypes.func.isRequired,
    usersAnswer: PropTypes.string,
    questions: PropTypes.array
}

export default SingleQuestion;