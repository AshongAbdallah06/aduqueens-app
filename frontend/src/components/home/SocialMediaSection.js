import React from "react";
import { Link } from "react-router-dom";

// Icons
import tiktok from "../../images/logo-tiktok.svg";
import twitter from "../../images/logo-twitter.svg";
import instagram from "../../images/logo-instagram.svg";
import facebook from "../../images/logo-facebook.svg";

const SocialMediaSection = () => {
	return (
		<section className="section follow-us-section">
			<div className="label">
				<h1>Follow us on</h1>
				<div className="line-under"></div>
			</div>

			<Link
				to="https://tiktok.com"
				className="social-media"
			>
				<img
					src={tiktok}
					alt="tiktok"
					className="social-media-icons"
				/>
				<span>example@example.com</span>
			</Link>

			<Link
				to="https://twitter.com"
				className="social-media"
			>
				<img
					src={twitter}
					alt="twitter"
					className="social-media-icons"
				/>
				<span>example@example.com</span>
			</Link>

			<Link
				to="https://instagram.com"
				className="social-media"
			>
				<img
					src={instagram}
					alt="instagram"
					className="social-media-icons"
				/>
				<span>example@example.com</span>
			</Link>

			<Link
				to="https://facebook.com"
				className="social-media"
			>
				<img
					src={facebook}
					alt="facebook"
					className="social-media-icons"
				/>
				<span>example@example.com</span>
			</Link>
		</section>
	);
};

export default SocialMediaSection;
