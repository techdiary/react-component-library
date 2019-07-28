import React from "react";
import { Link } from "@reach/router";

function NavigationItem() {
	return (
		<li>
			<Link to="/">Home</Link> <Link to="articles">Articles</Link>{" "}
			<Link to="about-me">About Me</Link>
		</li>
	);
}

export default NavigationItem;
