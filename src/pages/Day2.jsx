import React from "react";
import day2 from "../assets/day2.jpg";
import Contest from "../components/Contest";

export default function Day2() {
	return (
		<>
			<main className="day-wrap">
				<div className="img-wrap">
					<img src={day2} />
					<div className="text-wrap">
						<p>23 SETTEMBRE</p>
						<p>APERTURA ORE 15:00</p>
						<p>SKATE CONTEST “Skate trick” </p>
						<p>Ramp Trick </p>
						<p>PREMIAZIONI BY LOBSTER</p>
						<p>powered by SHIFTY</p>
						<p>BEER MILE DALLE 20:00</p>
						<p>SPONSOR UNSESTOACCA Treviso</p>
						<p>22:00 LIVE RUMATERA</p>
						<p>A MEZZANOTTE AFTER SHOW DI DJMENE</p>
						<p>ALL’HOME ROCK BAR</p>
					</div>
				</div>
				<Contest />
			</main>
		</>
	);
}
