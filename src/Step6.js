import React, { useState, useEffect } from 'react';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Route, Link } from "react-router-dom";
import Header from "./Header";
import Enam from "./6.gif";
import "./Step6.css";                                                          
import { Redirect } from 'react-router';
import FadeIn from 'react-fade-in';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const useStyles = makeStyles((theme) => ({
	continue: {
		display: "flex",
		backgroundColor: "#03DAC5",
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

function Step6() {
	const classes = useStyles();    
	const [seconds, setSeconds] = useState(1);
	const [isActive, setIsActive] = useState(true);	
	const [message, setMessage] = useState(false);

	useEffect(() => {
		let interval = null;
		if (isActive) {
		  interval = setInterval(() => {
			setSeconds(seconds => seconds + 1);
		  }, 1000);
		}
		if (seconds === 1) {
		  clearInterval(interval);
		  setIsActive(false);
		}
		return () => clearInterval(interval);
	  }, [isActive, seconds]);	
	  const commands = [
		{
		  command: 'selesai',
		  callback: () => setMessage(true)
		},
	  ]	

	  const { transcript } = useSpeechRecognition({ commands })
	
	  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
		return null
	  }
	
	  SpeechRecognition.startListening({ language: 'id' })	  
	return (
		<div>
			<FadeIn>
			<Header />
			<div className="enam__container">
				<img src={Enam} alt="Step 1" className="enam__icon"></img>
				<h2 className="enam__title">
					6. Gosok ibu jari kiri dengan menggunakan tangan kanan dan sebaliknya.
				</h2>
				{isActive ? (<div><h1>{seconds}</h1></div>) : 
				(
					<div>
					<Button component={Link} to="/" className={classes.continue}>
						Selesai
					</Button>
				</div>						
				)
				}
			</div>
			{message ? <Redirect to="/" /> : ''}						
			</FadeIn>
		</div>
	);
}

export default Step6;
