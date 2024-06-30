import React from "react";

// Components
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import MenusSection from "../components/home/MenusSection";
import SocialMediaSection from "../components/home/SocialMediaSection";

const Home = () => {
	return (
		<main>
			<HeroSection />

			<div className="section-container">
				<ServicesSection />

				<MenusSection />

				<SocialMediaSection />
			</div>
		</main>
	);
};

export default Home;
