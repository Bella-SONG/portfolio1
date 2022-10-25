import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
	return (
		<section id="experience">
			<h5>What Skills I have</h5>
			<h2>My Experience</h2>
			<div className="container experience__container">
				<div className="experience__frontend">
					<h3>Frontend Development</h3>
					<div className="experience__content">
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>HTML</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>CSS3</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>SCSS</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>JavaScript</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Bootstrap</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>ReactJS</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Photoshop</h4>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Adobe XD / Figma</h4>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Illustrator</h4>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Zeplin</h4>
							</div>
						</article>
					</div>
				</div>
				<div className="experience__graph">
					<h3>Skill Graph</h3>
					<div className="experience__p">
						{" "}
						<BsPatchCheckFill className="experience__details-icon" />
						<div>
							<h4>HTML - 90%</h4>
							<div className="full"></div>
							<div className="p90"></div>
						</div>
					</div>
					<div className="experience__p">
						{" "}
						<BsPatchCheckFill className="experience__details-icon" />
						<div>
							<h4>CSS3 - 90%</h4>
							<div className="full"></div>
							<div className="p90"></div>
						</div>
					</div>
					<div className="experience__p">
						{" "}
						<BsPatchCheckFill className="experience__details-icon" />
						<div>
							<h4>SCSS - 70%</h4>
							<div className="full"></div>
							<div className="p70"></div>
						</div>
					</div>
					<div className="experience__p">
						{" "}
						<BsPatchCheckFill className="experience__details-icon" />
						<div>
							<h4>JavaScript - 70%</h4>
							<div className="full"></div>
							<div className="p70"></div>
						</div>
					</div>

					<div className="experience__p">
						{" "}
						<BsPatchCheckFill className="experience__details-icon" />
						<div>
							<h4>ReactJS - 70%</h4>
							<div className="full"></div>
							<div className="p70"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
