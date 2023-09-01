import React from "react";
import gif from "../assets/gif.mp4";
import { NavLink } from "react-router-dom";
import thumbnail1 from "../assets/thumbnail1.jpg";
import thumbnail2 from "../assets/thumbnail2.jpg";
import thumbnail3 from "../assets/thumbnail3.jpg";
import thumbnailC from "../assets/thumbnailC.jpg";

export default function Home() {
	return (
		<>
			<main>
				<div className="video-wrap">
					<video autoPlay="autoplay" loop={true} muted>
						<source type="video/mp4" src={gif} />
					</video>
				</div>

				<div className="links-wrap">
					<NavLink to="day1" className="day-link">
						<img src={thumbnail1} />
					</NavLink>
					<NavLink to="day2" className="day-link">
						<img src={thumbnail2} />
					</NavLink>
					<NavLink to="day3" className="day-link">
						<img src={thumbnail3} />
					</NavLink>
					<NavLink to="dayC" className="day-link">
						<img src={thumbnailC} />
					</NavLink>
				</div>
			</main>
		</>
	);
}