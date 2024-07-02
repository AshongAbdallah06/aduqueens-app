import React, { useState } from "react";
import useLogin from "../hooks/useLogin";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const { login, error } = useLogin();

	const handleSubmit = async () => {
		await login(email, password);
	};

	return (
		<div className="form-container">
			<h1>Login</h1>
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

				<button onClick={handleSubmit}>Login</button>
			</form>
		</div>
	);
};

export default Login;
