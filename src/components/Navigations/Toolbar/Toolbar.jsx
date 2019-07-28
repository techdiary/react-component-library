import React from "react";

import styles from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";

function Toolbar() {
	return (
		<header>
			<div className={styles.Logo}>
				<img src="#" alt="#" />
			</div>
			<nav>
				<NavigationItems />
			</nav>
		</header>
	);
}

export default Toolbar;
