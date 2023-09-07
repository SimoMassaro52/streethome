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
						<p className="day-title">24 SETTEMBRE 2023</p>
						<p className="day-txt-reg">APERTURA ORE 12.00</p>
						<p className="day-txt-reg">
							Apertura{" "}
							<span className="day-txt-bolder">Contest Mechanical Surf</span>{" "}
							ore 12:00
						</p>
						<p className="day-txt-reg">
							Apertura <span className="day-txt-bolder">Dunk Contest</span> ore
							12:00
						</p>
						<p className="day-txt-reg">
							Apertura{" "}
							<span className="day-txt-bolder">Contest Best Trick</span> ore
							12:00
						</p>
						<p className="day-txt-reg">
							Apertura <span className="day-txt-bolder">Basket 2 vs 2</span> ore
							15:00
						</p>
						<p className="day-txt-reg">
							Apertura <span className="day-txt-bolder">Basket tiri da 3</span>{" "}
							ore 15:00
						</p>
						<br />
						<p className="day-txt-bold">HOLI Party - DENBOW Edition</p>
						<p className="day-txt-reg">by PUPPETS FAMILY</p>
						<br />
						<p className="day-txt-reg">A MEZZANOTTE</p>
						<p className="day-txt-reg">
							AFTER SHOW DI
							<span className="day-txt-bolder">DJ CHRISTIAN EFFE</span>
						</p>
						<p className="day-txt-reg">ALL’HOME ROCK BAR</p>
					</div>
				</div>
				<Contest />
			</main>
		</>
	);
}
