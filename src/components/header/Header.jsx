import React from "react";
import "./header.css";
import CTA from "./CTA";

import HeaderSocials from "./HeaderSocials";

const Header = () => {
	return (
		<header>
			<div className="container header__container">
				<h4>Hello I'm</h4>
				<h1>JIWON SONG</h1>
				<h5 className="text-light">Front-end Developer</h5>
				<CTA />
				<HeaderSocials />

				<a href="#contact" className="scroll__down">
					&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;
				</a>
			</div>
		</header>
	);
};

export default Header;
