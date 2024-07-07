import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Navbar = () => {
	const [isClicked, setIsClicked] = useState(false);

	useEffect(() => {
		if (isClicked) {
			document.body.classList.add("no-scroll");
		} else {
			document.body.classList.remove("no-scroll");
		}

		return () => {
			document.body.classList.remove("no-scroll");
		};
	}, [isClicked]);

	const handleLogout = async () => {
		try {
			const res = await Axios.get("http://localhost:3001/api/user/logout", {
				withCredentials: true,
			});
			const data = await res.data;

			localStorage.removeItem("user");
			window.location.href = "/login";
		} catch (error) {
			console.log(error);
		}
	};

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
					<span></span>
					<span></span>
					<span></span>
				</div>

				{isClicked && (
					<>
						<aside className="sidebar"></aside>
						<ul className="nav-links">
							<div
								className="bars"
								onClick={() => setIsClicked(!isClicked)}
							>
								<span className={isClicked ? "rotate45deg" : ""}></span>
								<span className={isClicked ? "disappear" : ""}></span>
								<span className={isClicked ? "rotate-45deg" : ""}></span>
							</div>

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

							<button
								onClick={handleLogout}
								className="logout"
							>
								Logout
							</button>
						</ul>
					</>
				)}
			</nav>
		</header>
	);
};

export default Navbar;
