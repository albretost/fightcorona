import React, { useState, useEffect } from "react";
import Circular from "./Circular";
import database from "./firebase";
import firestore from 'firebase/firestore'
import DirawatIcon from "./hospital.svg";
import "./Statistik.css";


function Statistik() {
	const [isLoading, setIsLoading] = useState(true);
	const [total, setTotal] = useState([]);
	useEffect(() => {
		database.firestore()
			.collection("total")
			.onSnapshot((snapshot) =>
				setTotal(snapshot.docs.map((doc) => {
					setIsLoading(false);
					return doc.data();
				}))
			);
	}, []);
	return (
		<div className="statistik__container">
			<h3 className="statistik">Statistik di Indonesia</h3>
			{!isLoading ? (
				total.map((result) => (
					<div key={result.jumlah_positif}>
						<div className="statistik__wrapper__left">
							<div className="statistik__card">
								<img
									src={DirawatIcon}
									alt="Dirawat Icon"
									className="statistik__icon"
								></img>
								<div className="statistik__content">
									<span>Positif</span>
									<span className="statistik__number">
										{result.jumlah_positif}
									</span>
								</div>
							</div>
							<div className="statistik__card">
								<img
									src={DirawatIcon}
									alt="Dirawat Icon"
									className="statistik__icon"
								></img>
								<div className="statistik__content">
									<span>Sembuh</span>
									<span className="statistik__number">
										{result.jumlah_sembuh}
									</span>
								</div>
							</div>
						</div>
						<div className="statistik__wrapper__right">
							<div className="statistik__card">
								<img
									src={DirawatIcon}
									alt="Dirawat Icon"
									className="statistik__icon"
								></img>
								<div className="statistik__content">
									<span>Dirawat</span>
									<span className="statistik__number">{result.jumlah_dirawat}</span>
								</div>
							</div>
							<div className="statistik__card">
								<img
									src={DirawatIcon}
									alt="Dirawat Icon"
									className="statistik__icon"
								></img>
								<div className="statistik__content">
									<span>Meninggal</span>
									<span className="statistik__number">{result.jumlah_meninggal}</span>
								</div>
							</div>
						</div>
					</div>
				))
			) : (
				<Circular />
			)}
		</div>
	);
}

export default Statistik;
