import React from "react";
import "./IntroCuciTangan.css";
import HandwashIcon from "./handwash.svg";
function CuciTangan() {
	return (
		<div className="cucitangan__container">
			<div className="cucitangan__card">
				<div className="cucitangan__content">
					<div className="cucitangan__left">
						<span>Kenapa harus cuci tangan?</span>
					</div>
					<div className="cucitangan__right">
						<img src={HandwashIcon} className="cucitangan__icon" alt="Cuci Tangan"></img>
					</div>
				</div>	
			</div>
		</div>	
	);
}

export default CuciTangan;
