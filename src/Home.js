import React from "react";
import Header from "./Header";
import IntroCuciTangan from "./IntroCuciTangan";
import Statistik from "./Statistik";
import SimpleBottomNavigation from "./SimpleBottomNavigation";
import { BrowserRouter as Route, Link } from "react-router-dom";

function Home() {
	return (
		<div>
			<Header />
			<Link to="/cucitangan">
				<IntroCuciTangan />
			</Link>
			<Statistik />
			<SimpleBottomNavigation />
		</div>
	);
}

export default Home;
