import React, { useState, useEffect } from "react";
import Image from "./wash_hand.svg";
import "./CuciTangan.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Route, Link } from "react-router-dom";
import { Redirect } from 'react-router';
import FadeIn from "react-fade-in";

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

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "id-ID";

function CuciTangan() {
	const classes = useStyles();
	const [message, setMessage] = useState(false);

	const voiceCommands = () => {
	  // On start
	  recognition.onstart = () => {
		console.log('Voice is actived');
	  }
  
	  // Do something when we get a result
	  recognition.onresult = (e) => {
		let current = e.resultIndex;
  
		let transcript = e.results[current][0].transcript;
		let mobileRepeatBug = (current === 1 && transcript === e.results[0][0].transcript);
  
		if(!mobileRepeatBug) {
		  if(transcript === 'mulai' || transcript === ' mulai') {
			setMessage(true);
		  }
		}

		setTimeout(() => {
            recognition.start();
          }, 50);		
  
	  }
  
	  recognition.onspeechend = () => {
		recognition.stop();
		console.log('voice stopped');
	  }
	}
  
	useEffect(() => {
	  voiceCommands();
	});
	return (
		<FadeIn>
		<div className="container">
				<div className="wrapper">
					<h3>Covid-19</h3>
					<p>Pencegahan</p>
					<div className="card">
						<img src={Image} className="card__img" alt="Cuci Tangan"></img>
						<div className="card__content">
							<span>
								Cuci tangan adalah salah satu cara terbaik untuk melindungi diri
								Anda dan keluarga dari sakit. Pelajari kapan dan bagaimana Anda
								harus mencuci tangan agar tetap sehat.
							</span>
						</div>
						<Button component={Link} to="/step1" className={classes.continue}>
							Mulai
						</Button>
						<Button component={Link} to="/" className={classes.back}>
							Kembali
						</Button>
					</div>
				</div>
			</div>
			{message ? <Redirect to="/step1" /> : ''}						
		</FadeIn>
	);
}

export default CuciTangan;
