import React from "react";
import hero from "../../images/hero.jpg";

const HeroSection = () => {
	return (
		<div className="hero-bg">
			<img
				src={hero}
				alt="hero"
				className="hero"
			/>

			<span>
				Taking no customer for <br /> granted
			</span>
		</div>
	);
};

export default HeroSection;
