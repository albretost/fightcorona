import React, { useState, useEffect } from "react";
import Header from "./Header";
import Circular from "./Circular";
import SimpleBottomNavigation from "./SimpleBottomNavigation";
import "./Kontak.css";
import firebase from "./firebase";
import database from "firebase/database";
import PhoneIcon from "@material-ui/icons/Phone";

function Kontak() {
	const [isLoading, setIsLoading] = useState(true);
	const [kontak, setKontak] = useState([]);
	const ref = firebase.database().ref().child("rumah_sakit");
	useEffect(() => {
		ref
			.orderByChild("id")
			.once("value", (snapshot) => 
			setKontak(snapshot.val().map((item) => {
				setIsLoading(false);
				return item;
			}))
			);
	}, []);

	return (
		<div>
			<Header />
			<div className="kontak__container">
				{!isLoading ? 
					kontak.map((item) => (
						<div key={item.id} onClick={(e=> {
							window.location.href = `tel://` + item.contact
						})}>
							<div className="kontak__card">
								<span className="kontak__nama">{item.rs_name}</span>
								<div className="kontak__telpon">
								<PhoneIcon className="kontak__icon" />
								<span>{item.contact}</span>
								</div>
							</div>
						</div>
					))
					:
					<Circular />					
				}
			</div>
			<SimpleBottomNavigation />
		</div>
	);
}

export default Kontak;
