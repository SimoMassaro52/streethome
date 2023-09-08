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
						<p className="day-title">22 SETTEMBRE 2023</p>
						<p className="day-txt-bolder">FREE ENTRY</p>
						<p className="day-txt-reg">APERTURA ORE 18:00</p>
						<p className="day-txt-reg">
							Apertura{" "}
							<span className="day-txt-bolder">Contest Mechanical Surf</span>{" "}
							ore 18:00
						</p>
						<p className="day-txt-reg">
							Apertura <span className="day-txt-bolder"> Dunk Contest</span> ore
							18:00
						</p>
						<p className="day-txt-reg">
							Apertura{" "}
							<span className="day-txt-bolder"> Contest Best Trick</span> ore
							18:00
						</p>
						<br />
						<p className="day-txt-reg">Dalle 18:00 alle 22:00</p>
						<p className="day-txt-bold">DJSET</p>
						<br />
						<p className="day-txt-reg">ALLE 22:00</p>
						<p className="day-txt-reg">
							LIVE <span className="day-txt-bold">NERONE & ENSI</span>
						</p>
						<p className="day-txt-reg">presentano</p>
						<p className="day-txt-reg">BRAVA GENTE</p>
						<br />
						<p className="day-txt-reg">
							AFTER SHOW DI <span className="day-txt-bolder">ALEX PAONE</span>
						</p>
						<p className="day-txt-reg">AT HOME ROCK BAR</p>
					</div>
				</div>
				<Contest />
			</main>
		</>
	);
}
