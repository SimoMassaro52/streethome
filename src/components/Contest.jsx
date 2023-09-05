import "../App.css";
import { NavLink } from "react-router-dom";
import contest from "../assets/contest.png";

export default function Contest() {
	return (
		<>
			<div className="cbtn-wrap">
				<NavLink to="/dayC" className="contest-btn">
					<img src={contest} />
				</NavLink>
			</div>
		</>
	);
}
