import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { VscFolderLibrary } from "react-icons/vsc";
import ME1 from "../../assets/me.jpg";
import ME2 from "../../assets/me2.jpg";

const About = () => {
	return (
		<section id="about">
			<h5>Introduce Myself</h5>
			<h2>About Me</h2>
			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME1} alt="about_image" />
						<img src={ME2} alt="about_image" />
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>
								JLPT N1
								<br />
								TOEIC 730
							</h5>
							<small>Certificates</small>
						</article>
						<article className="about__card">
							<MdLanguage className="about__icon" />
							<h5>English </h5>
							<small>Intermediate</small>
							<h5>Japanese</h5>
							<small>Business Level</small>
						</article>
						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>ENTP</h5>
							<small>mbti</small>
							<h6>
								Music, Art, Drawing, Cooking, illustrating, Study Languages,
								Media Art, Youtube
							</h6>
							<small>What i love</small>
						</article>
					</div>
					<br />
					<h3>송지원</h3>
					<h4>SONG JIWON</h4>
					<p>
						백석예술대학교 실용음악학과
						<br />
						Tokyo School of Music Shibuya / Record-Engineering Course
						<br />
						EZEN Academy [스마트웹&콘텐츠개발]웹콘텐츠UI/UX
						디자인&프론트엔드(React.js) 과정 수료
					</p>
					<br />
					<a href="#contact" className="btn btn-primary">
						Contact
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
