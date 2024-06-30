import React from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
	return (
		<section className="section services-section">
			<div className="label">
				<h1>Our Services</h1>
				<div className="line-under"></div>
			</div>

			<ul>
				<li>
					<div className="number">1</div>

					<div>
						<div className="name">Service Name</div>
						<span>Loremipsumdolorsitamet,consectetur adipisicing elitdddddd.</span>
					</div>
				</li>

				<li>
					<div className="number">2</div>

					<div>
						<div className="name">Service Name</div>
						<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
					</div>
				</li>

				<li>
					<div className="number">3</div>

					<div>
						<div className="name">Service Name</div>
						<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
					</div>
				</li>
			</ul>

			<Link
				to="/services"
				className="view-more"
			>
				View More
			</Link>
		</section>
	);
};

export default ServicesSection;
