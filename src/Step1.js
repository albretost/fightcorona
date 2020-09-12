import React, { useState, useEffect } from 'react';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Route, Link } from "react-router-dom";
import Header from "./Header";
import Satu from "./1.gif";
import "./Step1.css";
import { Redirect } from 'react-router';
import FadeIn from 'react-fade-in';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

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

function Step1() {
	
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
		if (seconds === 9) {
		  clearInterval(interval);
		  setIsActive(false);
		}
		return () => clearInterval(interval);
	  }, [isActive, seconds]);	
	
	const commands = [
		{
		  command: 'selanjutnya',
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
			<div className="satu__container">
				<img src={Satu} alt="Step 1" className="satu__icon"></img>
				<h2 className="satu__title">
					1. Basahi tangan dan tuangkan atau oleskan sabun di telapak
					tangan.
				</h2>
				{isActive ? (<div><h1>{seconds}</h1></div>) : 
				(
					<div>
					<Button component={Link} to="/step2" className={classes.continue}>
						Selanjutnya
					</Button>
					<Button component={Link} to="/cucitangan" className={classes.back}>
						Kembali
					</Button>
				</div>					
				)
				}
			</div>
			{message ? <Redirect to="/step2" /> : ''}						
			</FadeIn>					
		</div>
	);
}

export default Step1;
