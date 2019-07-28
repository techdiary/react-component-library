import React from "react";
import Toolbar from "../Navigations/Toolbar/Toolbar";

import styles from "./Layout.module.css";

const Layout = (props) => {
	return (
		<>
			<Toolbar />
			<main className={styles.Content}>{props.children}</main>
		</>
	);
};

export default Layout;
