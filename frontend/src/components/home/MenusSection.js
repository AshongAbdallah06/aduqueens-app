import React from "react";
import { Link } from "react-router-dom";

// Images
import img1 from "../../images/menu1.jpg";
import img2 from "../../images/menu2.jpg";
import img3 from "../../images/menu3.jpg";

const MenusSection = () => {
	return (
		<section className="section menus-section">
			<div className="label">
				<h1>Menus</h1>
				<div className="line-under"></div>
			</div>

			<p>
				Discover our delicious selection of dishes, crafted to delight every palate. From
				appetizers to desserts, there's something for everyone to enjoy!
			</p>

			<Link
				to="/menus"
				className="carousel"
			>
				<img
					src={img1}
					alt="menu1"
				/>
				<img
					src={img2}
					alt="menu2"
				/>
				<img
					src={img3}
					alt="menu3"
				/>
			</Link>

			<Link
				to="/menus"
				className="view-more"
			>
				View More
			</Link>
		</section>
	);
};

export default MenusSection;
