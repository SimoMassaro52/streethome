import React from "react";
import logodata from "../assets/logodata.png";

// import Navbar from "./Navbar";
// import Footer from "./Footer";

export default function Header() {
	return (
		<>
			<header>
				<img className="logodata" src={logodata} />
			</header>
		</>
	);
}
