import React, { useState, useEffect } from 'react';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Route, Link } from "react-router-dom";
import Header from "./Header";
import Dua from "./2.gif";
import "./Step2.css";
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

function Step2() {
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
			<div className="dua__container">
				<img src={Dua} alt="Step 1" className="dua__icon"></img>
				<h2 className="dua__title">
					2. Tangkupkan kedua telapak tangan dan gosokkan produk sabun yang
					telah dituangkan.
				</h2>
				{isActive ? (<div><h1>{seconds}</h1></div>) : 
				(
					<div>
					<Button component={Link} to="/step3" className={classes.continue}>
						Selanjutnya
					</Button>
					<Button component={Link} to="/step1" className={classes.back}>
						Kembali
					</Button>
				</div>
				)}
			</div>
			</FadeIn>
		</div>
	);
}

export default Step2;
