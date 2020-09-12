import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import "./Result.css";

function Result(props) {
  return (
    <CSSTransition
      className="wrapperz result"
      component="div"
      timeout={200}
    >
      <div>
        Hasil assessment kamu : <h2>{props.quizResult}!</h2>
      </div>
    </CSSTransition>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;