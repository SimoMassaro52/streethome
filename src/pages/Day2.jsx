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
						<p className="day-title">23 SETTEMBRE 2023</p>
						<p className="day-txt-reg">APERTURA ORE 15:00</p>
						<br />
						<p className="day-txt-bold">SKATE CONTEST “Skate trick” </p>
						<p className="day-txt-reg">Ramp Trick </p>
						<p className="day-txt-bolder">PREMIAZIONI BY LOBSTER</p>
						<p className="day-txt-reg">powered by SHIFTY</p>
						<br />
						<p className="day-txt-bold">
							BEER MILE <span className="day-txt-reg">DALLE 20:00</span>
						</p>
						<p className="day-txt-bolder">SPONSOR UNSESTOACCA Treviso</p>
						<br />
						<p className="day-txt-reg"> ALLE 22:00</p>
						<p className="day-txt-reg">
							LIVE <span className="day-txt-bold">RUMATERA</span>
						</p>
						<br />
						<p className="day-txt-reg">A MEZZANOTTE</p>
						<p className="day-txt-reg">
							AFTER SHOW DI <span className="day-txt-bolder">DJMENE</span>
						</p>
						<p className="day-txt-reg">ALL’HOME ROCK BAR</p>
					</div>
				</div>
				<Contest />
			</main>
		</>
	);
}
