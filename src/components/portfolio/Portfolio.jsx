import React, { useState } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/pt2.png";
import IMG2 from "../../assets/pt1.png";
import IMG3 from "../../assets/pt3.png";
import IMG4 from "../../assets/pt4.png";
import IMG5 from "../../assets/pt5.png";
import IMG6 from "../../assets/pt6.png";
import Modal from "react-modal";

// const data = [
// 	{
// 		id: 1,
// 		image: IMG1,
// 		title: "portfolio title1",
// 		github: "https://github.com",
// 		demo: "https://",
// 	},
// ];
const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>My work</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio__container">
				<article className="portfolio__item">
					<div className="portfolio__item-image">
						<img src={IMG1} alt="portfolio1" />
					</div>
					<h3>LOCKnLOCK</h3>
					<div className="portfolio__item-cta">
						<a href="#prev1" className="btn">
							Detail
						</a>
						<a
							onClick={() =>
								window.open(
									"http://bella-song.github.io/locknlock",
									"window_name",
									"width=1280,height=720,location=no,status=no,scrollbars=yes"
								)
							}
							className="btn btn-primary"
						>
							View
						</a>
					</div>
				</article>
				<article className="portfolio__item">
					<div className="portfolio__item-image">
						<img src={IMG2} alt="portfolio2" />
					</div>
					<h3>Kakao Talk</h3>
					<div className="portfolio__item-cta">
						<a href="#prev2" className="btn">
							Detail
						</a>
						<a
							onClick={() =>
								window.open(
									"http://bella-song.github.io/react_kakao_2022",
									"window_name",
									"width=360,height=720,location=no,status=no,scrollbars=yes"
								)
							}
							className="btn btn-primary"
						>
							View
						</a>
					</div>
				</article>
				<article className="portfolio__item">
					<div className="portfolio__item-image">
						<img src={IMG3} alt="portfolio3" />
					</div>
					<h3>Samsung Electro-Mechanics</h3>
					<div className="portfolio__item-cta">
						<a href="#prev3" className="btn">
							Detail
						</a>
						<a
							onClick={() =>
								window.open(
									"http://bella-song.github.io/sse",
									"window_name",
									"width=1280,height=720,location=no,status=no,scrollbars=yes"
								)
							}
							className="btn btn-primary"
						>
							View
						</a>
					</div>
				</article>
				<article className="portfolio__item">
					<div className="portfolio__item-image">
						<img src={IMG4} alt="portfolio4" />
					</div>
					<h3>CJ ONE</h3>
					<div className="portfolio__item-cta">
						<a href="#prev4" className="btn">
							Detail
						</a>
						<a
							onClick={() =>
								window.open(
									"http://bella-song.github.io/cj1",
									"window_name",
									"width=1280,height=720,location=no,status=no,scrollbars=yes"
								)
							}
							className="btn btn-primary"
						>
							View
						</a>
					</div>
				</article>
				<article className="portfolio__item">
					<div className="portfolio__item-image">
						<img src={IMG5} alt="portfolio5" />
					</div>
					<h3>Momentum</h3>
					<div className="portfolio__item-cta">
						<a href="#prev5" className="btn">
							Detail
						</a>
						<a
							onClick={() =>
								window.open(
									"http://bella-song.github.io/momentum",
									"window_name",
									"width=1280,height=720,location=no,status=no,scrollbars=yes"
								)
							}
							className="btn btn-primary"
						>
							View
						</a>
					</div>
				</article>
				<article className="portfolio__item">
					<div className="portfolio__item-image">
						<img src={IMG6} alt="portfolio6" className="img6" />
					</div>
					<h3>Tetris</h3>
					<div className="portfolio__item-cta">
						<a href="#prev6" className="btn">
							Detail
						</a>
						<a
							onClick={() =>
								window.open(
									"http://bella-song.github.io/tetris",
									"window_name",
									"width=1280,height=720,location=no,status=no,scrollbars=yes"
								)
							}
							className="btn btn-primary"
						>
							View
						</a>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Portfolio;
