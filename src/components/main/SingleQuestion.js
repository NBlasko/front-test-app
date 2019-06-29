import React from 'react';

const SingleQuestion = (props) => {
 //   console.log("props", props);
    const { image, answers, continent } = props.question;
    const { handleAnswer, usersAnswer } = props;
    const isRight = (usersAnswer === continent);
    const buttons =
        [0, 1, 2].map(
            num =>
                <div key={num}>
                    <button value={answers[num]} onClick={handleAnswer}  >
                        {answers[num]}
                        <span> {(usersAnswer && answers[num] === continent)
                            ? "bravo"
                            : null
                        }

                            {(!isRight && answers[num] === usersAnswer)
                                ? "cvrc"
                                : null
                            } </span>
                    </button>
                </div>
        )
    return (
        <div>
            <img src={image} style={{ width: 200 }} alt="continent" />
            {buttons}
        </div>
    )
}
export default SingleQuestion;