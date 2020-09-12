import React, { Component } from "react";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import "./Survei.css";
import quizQuestions from "./api/quizQuestion";
import Header from "./Header";

class Survei extends Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 0,
			questionId: 1,
			question: "",
			answerOptions: [],
			answer: "",
			answersCount: {},
			result: "",
		};

		this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
	}

	componentDidMount() {
		const shuffledAnswerOptions = quizQuestions.map(
			(question) => question.answers
			// this.shuffleArray(question.answers)
		);
		console.log(this.state.answer);

		this.setState({
			question: quizQuestions[0].question,
			answerOptions: shuffledAnswerOptions[0],
		});
	}

	shuffleArray(array) {
		var currentIndex = array.length,
			temporaryValue,
			randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}

	handleAnswerSelected(event) {
		this.setUserAnswer(event.currentTarget.value);

		if (this.state.questionId < quizQuestions.length) {
			setTimeout(() => this.setNextQuestion(), 300);
		} else {
			setTimeout(() => this.setResults(this.getResults()), 300);
		}
	}

	setUserAnswer(answer) {
		this.setState((state, props) => ({
			answersCount: {
				...state.answersCount,
				[answer]: (state.answersCount[answer] || 0) + 1,
			},
			answer: answer,
		}));
	}

	setNextQuestion() {
		const counter = this.state.counter + 1;
		const questionId = this.state.questionId + 1;

		this.setState({
			counter: counter,
			questionId: questionId,
			question: quizQuestions[counter].question,
			answerOptions: quizQuestions[counter].answers,
			answer: "",
		});
	}

	getResults() {
		const answersCount = this.state.answersCount;
		const R1 =
    answersCount.A1 && answersCount.A3 && (answersCount.A2 || answersCount.A11)
				? true
				: false;
		const R2 =
			(answersCount.A1 && answersCount.A2 && answersCount.A3) ||
			answersCount.A12
				? true
				: false;
		const R3 =
			answersCount.A1 ||
			(answersCount.A10 && answersCount.A2 && answersCount.A3)
				? true
				: false;
		const R4 =
			answersCount.A10 && answersCount.A3 && answersCount.A11 ? true : false;
		const R5 =
			answersCount.A10 && answersCount.A2 && answersCount.A12 ? true : false;
		const R6 =
    (R1 || R2 || R3 || R4 || R5) &&
    (answersCount.A8 &&
      answersCount.A18 &&
      answersCount.A14 &&
      answersCount.A4 &&
      answersCount.A16 &&
      answersCount.A15)
				? true
				: false;
		const R7 =
    (R1 || R2 || R3 || R4 || R5) &&
    (answersCount.A17 &&
      answersCount.A9 &&
      answersCount.A14 &&
      answersCount.A4 &&
      answersCount.A16 &&
      answersCount.A15)
				? true
				: false;
		const R8 =
    (R4 || R5) &&
    (answersCount.A17 &&
      answersCount.A18 &&
      answersCount.A15 &&
      answersCount.A13 &&
      answersCount.A14 &&
      answersCount.A16)
				? true
				: false;
		const R9 =
    (R1 || R2 || R3 || R4 || R5) &&
    (answersCount.A8 &&
      answersCount.A18 &&
      answersCount.A5 &&
      answersCount.A4 ||
      answersCount.A13 &&
      answersCount.A16 &&
      answersCount.A15)
				? true
				: false;
		const R10 =
    (R1 || R2 || R3 || R4 || R5) &&
    (answersCount.A17 &&
      answersCount.A9 &&
      answersCount.A5 &&
      answersCount.A4 ||
      answersCount.A13 &&
      answersCount.A16 &&
      answersCount.A15)
				? true
				: false;
		const R11 =
    (R1 || R2 || R3 || R4 || R5) &&
    (answersCount.A17 &&
      answersCount.A18 &&
      answersCount.A6 &&
      answersCount.A5 ||
      answersCount.A14 &&
      answersCount.A4 ||
      answersCount.A13 &&
      answersCount.A16)
				? true
				: false;
		const R12 =
    (R1 || R2 || R3 || R4 || R5) &&
    (answersCount.A8 &&
      answersCount.A9 &&
      answersCount.A15 &&
      answersCount.A5 ||
      answersCount.A14 &&
      answersCount.A4 ||
      answersCount.A13 &&
      answersCount.A16)   
				? true
				: false;
		const R13 =
    (R1 || R2 || R3 || R4 || R5) &&
    (answersCount.A8 &&
      answersCount.A9 &&
      answersCount.A15 &&
      answersCount.A5 ||
      answersCount.A14 &&
      answersCount.A4 ||
      answersCount.A13 &&
      answersCount.A16)   
				? true
				: false;
		const R14 =
    (R1 || R2 || R3 || R4 || R5) &&
    (answersCount.A8 &&
      answersCount.A9 &&
      answersCount.A6 &&
      answersCount.A5 ||
      answersCount.A14 ||
      answersCount.A4 ||
      answersCount.A13 &&
      answersCount.A16)   
				? true
				: false;
		const R15 =
      (R1 || R2 || R3 || R4 || R5) &&
      (answersCount.A17 &&
        answersCount.A9 &&
        answersCount.A5 ||
        answersCount.A14 &&
        answersCount.A4 ||
        answersCount.A13 &&
        answersCount.A7 &&
        answersCount.A15 &&
        answersCount.A6)   
				? true
				: false;
		const R16 =
			(R1 || R2 || R3 || R4 || R5) &&
			(answersCount.A8 &&
        answersCount.A18 &&
        answersCount.A5 ||
        answersCount.A14 &&
        answersCount.A4 ||
        answersCount.A13 &&
        answersCount.A7 &&
        answersCount.A6 &&
        answersCount.A15)
				? true
				: false;
		const R17 =
			(R1 || R2 || R3 || R4 || R5) &&
			(answersCount.A17 &&
			answersCount.A18 &&
			answersCount.A17 &&
			answersCount.A18 &&
			answersCount.A6 ||
			answersCount.A15 &&
			answersCount.A5 ||
			answersCount.A14 &&
			answersCount.A4 ||
			answersCount.A13 &&
			answersCount.A7)
				? true
				: false;

		const kondisi = R17
			? "Asimptomatik"
			: R15 || R16
			? "Simptomatik"
			: R14
			? "Probable"
			: R9 || R10 || R11 || R12 || R13
			? "Suspek"
			: R8
			? "Negatif Aman"
			: R6 || R7
			? "Negatif Rentan"
			: "Error";

		console.log(kondisi);

		const answersCountKeys = Object.keys(answersCount);
		const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
		const maxAnswerCount = Math.max.apply(null, answersCountValues);

		return answersCountKeys.filter(
			(key) => answersCount[key] === maxAnswerCount
		);
	}

	setResults(result) {
		if (result.length === 1) {
			this.setState({ result: result[0] });
		} else {
			this.setState({ result: "Undetermined" });
		}
	}

	renderQuiz() {
		return (
			<Quiz
				answer={this.state.answer}
				answerOptions={this.state.answerOptions}
				questionId={this.state.questionId}
				question={this.state.question}
				questionTotal={quizQuestions.length}
				onAnswerSelected={this.handleAnswerSelected}
			/>
		);
	}

	renderResult() {
		return <Result quizResult={this.state.result} />;
	}

	render() {
		return (
			<div>
				<Header />
				<div className="survei__container">
					{this.state.result ? this.renderResult() : this.renderQuiz()}
				</div>
			</div>
		);
	}
}

export default Survei;
