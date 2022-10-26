import React from "react";
import "./details.css";
import prev1 from "../../assets/mockuppc.png";
import prev2 from "../../assets/mockupphone.png";
// import prev3 from "../../assets/mockupnote.png";
// import prev4 from "../../assets/mockuptablet.png";
import inner1 from "../../assets/locknlock.png";
import inner2 from "../../assets/kakao.mp4";
import inner3 from "../../assets/samsung.png";
import inner4 from "../../assets/cjone-pc.png";
import inner5 from "../../assets/momentum.png";
import inner6 from "../../assets/tetris.mp4";
import inner66 from "../../assets/pt6.png";

// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import { MdPersonRemoveAlt1 } from "react-icons/md";

const data = [
	{
		preview: prev1,
		idname: "prev1",
		cname: "in1",
		inner: inner1,
		title: "LOCK n LOCK",
		text: "반응형으로 제작한 락앤락 웹사이트 클론코딩입니다. 미디어쿼리를 사용하여 PC, 태블릿, 모바일환경에 맞춰 해상도와 레이아웃이 변경됩니다.",
		language: "HTML5, CSS3, JAVASCRIPT",
		effect: "Animation, media query, FlexBox, git, github",
	},
	{
		preview: prev2,
		idname: "prev2",
		cname: "in2",
		inner: inner2,
		title: "KAKAO TALK",
		text: "React와 SCSS, Flexbox를 활용하여 구현한 KakaoTalk 입니다.",
		language: "HTML5, CSS3, REACT.JS",
		effect: "FlexBox, Ajax, Hook, Axios, Router, SPA, git, github",
	},
	{
		preview: prev1,
		idname: "prev3",
		cname: "in3",
		inner: inner3,
		title: "SAMSUNG ELECTRO MECHANICS",
		text: "웹컨텐츠 접근성 지침과 웹표준을 준수하여 제작한 웹페이지 입니다.",
		language: "HTML5, CSS3, JAVASCRIPT",
		effect: "Animation, git, github",
	},
	{
		preview: prev1,
		idname: "prev4",
		cname: "in4",
		inner: inner4,
		title: "CJ ONE",
		text: "반응형으로 제작한 CJ ONE 웹사이트 클론코딩입니다. 미디어쿼리를 사용하여 PC, 태블릿, 모바일환경에 맞춰 해상도와 레이아웃이 변경됩니다.",
		language: "HTML5, CSS3, JAVASCRIPT",
		effect: "Animation, git, github",
	},
	{
		preview: prev1,
		idname: "prev5",
		cname: "in5",
		inner: inner5,
		title: "M O M E N T U M",
		text: "JAVASCRIPT를 이용한 모멘텀앱 입니다. To Do List를 기록하고 날씨를 확인 할 수 있습니다.",
		language: "HTML5, CSS3, JAVASCRIPT",
		effect: "Web API, git, guthub",
	},
	{
		// preview: prev6,
		preview: prev1,
		idname: "prev6",
		cname: "in6",
		inner: inner6,
		title: "T E T R I S",
		text: "Vanilla Javascript를 사용해서 만든 간단한 테트리스 개임입니다.",
		language: "HTML5, CSS3, JAVASCRIPT",
		effect: "Animation, git, github",
		post: inner66,
	},
];

const Details = () => {
	return (
		<section id="details">
			<h5>Portfolio Details</h5>
			<h2>Details</h2>
			<Swiper
				className="container detail__container"
				// install Swiper modules
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				{data.map(
					(
						{ preview, idname, cname, inner, title, text, language, effect },
						index
					) => {
						return (
							<SwiperSlide key={index} className="detail" id={idname}>
								<div className="portfolio__detail">
									<img src={preview} alt="" />
									<span className={cname}>
										<img src={inner} alt="" />
										<video muted autoPlay loop src={inner} type="video/mp4" />
									</span>
								</div>
								<div className="portfolio__text">
									<h2 className="title">{title}</h2>
									<small className="explain">{text}</small>
									<h3 className="title">Language</h3>
									<small className="explain">{language}</small>
									<h3 className="title">Effect</h3>
									<small className="explain">{effect}</small>
								</div>
							</SwiperSlide>
						);
					}
				)}
			</Swiper>
		</section>
	);
};

export default Details;
