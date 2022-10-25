import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";

const Contact = () => {
	return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2>Contact Me !</h2>
			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineEmail className="contact__option-icon" />
						<h4>Email</h4>
						<h5>mototronik93@gmail.com</h5>
						<a href="mailto:mototronik93@gmail.com">Send a Message</a>
					</article>
					<article className="contact__option">
						<RiMessengerLine className="contact__option-icon" />
						<h4>Messenger</h4>
						<h5>Messenger</h5>
						<a href="#">Send a Message</a>
					</article>
				</div>
				{/* end of contact options */}
				<form action="">
					<input type="text" name="name" placeholder="Your Name" required />
					<input type="email" name="email" placeholder="Your Email" required />
					<textarea
						name="message"
						placeholder="Your Message"
						rows="7"
						required
					></textarea>
					<button type="submit" className="btn btn-primary">
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
