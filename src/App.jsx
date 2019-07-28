import React from "react";
import { Router, Redirect } from "@reach/router";
import Layout from "./components/Layout/Layout";
import Articles from "./components/Articles/Articles";
import ArticleSection from "./components/Articles/ArticleSection/ArticleSection";
import AboutMe from "./components/AbouteMe/AboutMe";

const App = () => {
	const routes = (
		<Router>
			<ArticleSection path="/" />
			<Articles path="articles" />
			<AboutMe path="about-me" />
		</Router>
	);
	return (
		<div className="App">
			<Layout>{routes}</Layout>
		</div>
	);
};

export default App;
