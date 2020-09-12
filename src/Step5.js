import React, { useState, useEffect } from 'react';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Route, Link } from "react-router-dom";
import Header from "./Header";
import Lima from "./5.gif";
import "./Step5.css";
import FadeIn from 'react-fade-in';

const useStyles = makeStyles((theme) => ({
	continue: {
		backgroundColor: "#03DAC5",
		width: "80%",
		borderRadius: "15px",
		color: "white",
		fontSize: "14px",
		fontWeight: 600,
		textTransform: "capitalize",
		margin: theme.spacing(1),
	},
	back: {
		backgroundColor: "white",
		width: "80%",
		borderRadius: "15px",
		color: "black",
		fontSize: "14px",
		fontWeight: 600,
		textTransform: "capitalize",
		margin: theme.spacing(1),
	},
}));

function Step5() {
	const classes = useStyles();    
	const [seconds, setSeconds] = useState(1);
	const [isActive, setIsActive] = useState(true);	
	useEffect(() => {
		let interval = null;
		if (isActive) {
		  interval = setInterval(() => {
			setSeconds(seconds => seconds + 1);
		  }, 1000);
		}
		if (seconds === 9) {
		  clearInterval(interval);
		  setIsActive(false);
		}
		return () => clearInterval(interval);
	  }, [isActive, seconds]);	
	return (
		<div>
			<FadeIn>
			<Header />
			<div className="lima__container">
				<img src={Lima} alt="Step 1" className="lima__icon"></img>
				<h2 className="lima__title">
					5. Gosokkan jari-jari tangan kanan yang tergenggam di telapak tangan kiri dan sebaliknya.
				</h2>
				{isActive ? (<div><h1>{seconds}</h1></div>) : 
				(
					<div>
					<Button component={Link} to="/step6" className={classes.continue}>
						Selanjutnya
					</Button>
					<Button component={Link} to="/step4" className={classes.back}>
						Kembali
					</Button>
				</div>					
				)
				}
			</div>
			</FadeIn>
		</div>
	);
}

export default Step5;
