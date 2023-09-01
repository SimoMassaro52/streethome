import React from "react";
import logodata from "../assets/logodata.png";
import { NavLink } from "react-router-dom";

export default function Header() {
	return (
		<>
			<header>
				<NavLink to="/">
					<img className="logodata" src={logodata} />
				</NavLink>
			</header>
		</>
	);
}
