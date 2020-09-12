import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import CuciTangan from "./CuciTangan";
import Survei from "./Survei";
import Kontak from "./Kontak";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";

function Routez() {
    return (
        <div>
		<Router>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route path="/cucitangan" component={CuciTangan}></Route>
				<Route path="/survei" component={Survei}></Route>
				<Route path="/kontak" component={Kontak}></Route>
				<Route path="/step1" component={Step1}></Route>
				<Route path="/step2" component={Step2}></Route>
				<Route path="/step3" component={Step3}></Route>
				<Route path="/step4" component={Step4}></Route>
				<Route path="/step5" component={Step5}></Route>
				<Route path="/step6" component={Step6}></Route>
			</Switch>
		</Router>            
        </div>
    )
}

export default Routez
