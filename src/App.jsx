import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";

import Portfolio from "./components/portfolio/Portfolio";
import Details from "./components/details/Details";
import Contact from "./components/contact/Contact";
import { gsap } from "gsap";

const App = () => {
	document.body.addEventListener("mousemove", event => {
		const mouseX = event.clientX;
		const mouseY = event.clientY;

		gsap.set(".cursor", {
			x: mouseX,
			y: mouseY,
		});

		gsap.to(".shape", {
			x: mouseX,
			y: mouseY,
			stagger: -0.1,
		});
	});
	return (
		<>
			<div className="cursor"></div>
			<div className="shapes">
				<div className="shape shape-1"></div>
				<div className="shape shape-2"></div>
				<div className="shape shape-3"></div>
				<div className="shape shape-4"></div>
				<div className="shape shape-5"></div>
				<Header />
				<Nav />
				<About />
				<Experience />
				<Portfolio />
				<Details />
				<Contact />
			</div>
		</>
	);
};

export default App;
