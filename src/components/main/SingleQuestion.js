import React from 'react';
import MaterialIcon, { colorPalette } from 'material-icons-react';
import PropTypes from 'prop-types';

const SingleQuestion = (props) => {
    const { image, answers, continent } = props.question;
    const { handleAnswer, usersAnswer } = props;
    const isRight = (usersAnswer === continent);
    const buttons =
        [0, 1, 2].map(
            num =>
                <div key={num}>
                    <button value={answers[num]} onClick={handleAnswer} >
                        {answers[num]}

                        <span>
                            {/* user answers and it's correct */}
                            {(usersAnswer && answers[num] === continent)
                                ? <MaterialIcon icon="check" />
                                : null
                            }

                            {/* user's answer that is not correct */}
                            {(!isRight && answers[num] === usersAnswer)
                                ? <MaterialIcon icon="close" />
                                : null
                            } </span>
                    </button>
                </div>
        )
    return (
        <div id="single-question">
            <img src={image} style={{ width: 200 }} alt="continent" />
            {buttons}
        </div>
    )
}

SingleQuestion.propTypes = {
    handleAnswer: PropTypes.func.isRequired,
    usersAnswer: PropTypes.string.isRequired,
    questions: PropTypes.array
}

export default SingleQuestion;