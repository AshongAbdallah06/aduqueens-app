import React, { useEffect, useState } from "react";
import useSignup from "../hooks/useSignup";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const { signup, error } = useSignup();

	const handleSubmit = async () => {
		await signup(email, password);
	};

	return (
		<div className="form-container">
			<h1>Signup</h1>
			<form onSubmit={(e) => e.preventDefault()}>
				<div>
					<label>Email</label>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<span className="error">{error && error.emailError}</span>
				</div>

				<div>
					<label>Password</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<span className="error">{error && error.passwordError}</span>
				</div>

				{/* <div>
					<label>Re-enter Password</label>
					<input
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</div> */}

				<button onClick={handleSubmit}>Signup</button>
			</form>
		</div>
	);
};
export default Login;
