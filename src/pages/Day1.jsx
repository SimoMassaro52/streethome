import React from "react";
import day1 from "../assets/day1.jpg";
import Contest from "../components/Contest";

export default function Day1() {
	return (
		<>
			<main className="day-wrap">
				<div className="img-wrap">
					<img src={day1} />
					<div className="text-wrap">
						<p>22 SETTEMBRE</p>
						<p>APERTURA ORE 18:00</p>
						<p>DALLE 18:00 ALLE 22:00 DJSET</p>
						<p>ALLE 22 LIVE DI NERONE + ENSI presentano BRAVA GENTE </p>
						<p>DA MEZZANOTTE AFTER SHOW DI ALEX PAONE </p>
						<p>ALL’HOME ROCK BAR</p>
					</div>
				</div>
				<Contest />
			</main>
		</>
	);
}
