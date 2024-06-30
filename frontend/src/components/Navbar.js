import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [isClicked, setIsClicked] = useState(false);

	return (
		<header>
			<Link
				to="/"
				className="logo"
			>
				Aduqueens
				<span>Catering Services</span>
			</Link>

			<nav>
				<div
					className="bars"
					onClick={() => setIsClicked(!isClicked)}
				>
					<span className={isClicked ? "rotate45deg" : ""}></span>
					<span className={isClicked ? "disappear" : ""}></span>
					<span className={isClicked ? "rotate-45deg" : ""}></span>
				</div>

				{isClicked && (
					<ul className="nav-links">
						<Link
							to="/"
							onClick={() => setIsClicked(!isClicked)}
						>
							Home
						</Link>
						<Link
							to="/contact"
							onClick={() => setIsClicked(!isClicked)}
						>
							Contact
						</Link>
						<Link
							to="/about"
							onClick={() => setIsClicked(!isClicked)}
						>
							About
						</Link>
					</ul>
				)}
			</nav>
		</header>
	);
};

export default Navbar;
