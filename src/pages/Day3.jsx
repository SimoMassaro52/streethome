import React from "react";
import day3 from "../assets/day3.jpg";
import Contest from "../components/Contest";

export default function Day3() {
	return (
		<>
			<main className="day-wrap">
				<div className="img-wrap">
					<img src={day3} />
					<div className="text-wrap">
						<p>24 SETTEMBRE</p>
						<p>APERTURA ORE 12.00</p>
						<p>HOLI Party - DENBOW Edition by PUPPETS FAMILY</p>
						<p>A MEZZANOTTE AFTER SHOW DI CHRISTIAN EFFE</p>
						<p>ALL’HOME ROCK BAR</p>
					</div>
				</div>
				<Contest />
			</main>
		</>
	);
}
