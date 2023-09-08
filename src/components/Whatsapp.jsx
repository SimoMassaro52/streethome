import React from "react";
import whatsapp from "../assets/whatsapp.png";

export default function Whatsapp() {
	return (
		<>
			<a href="https://wa.me/3333207795" className="whatsapp-icon">
				<img src={whatsapp} />
			</a>
		</>
	);
}
