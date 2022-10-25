import React from "react";
import { FaBloggerB } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { SiNotion } from "react-icons/si";
const HeaderSocials = () => {
	return (
		<div className="header__socials">
			<a href="https://www.tistory.com">
				<FaBloggerB />
			</a>
			<a href="https://github.com">
				<FaGithub />
			</a>
			{/* <a href="#">
				<SiNotion />
			</a> */}
		</div>
	);
};

export default HeaderSocials;
