import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import "./Result.css";

function Result(props) {
  return (
    <CSSTransition
      className="container result"
      component="div"
      timeout={200}
    >
      <div>
        You prefer  <strong>{props.quizResult}</strong>!
      </div>
    </CSSTransition>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;