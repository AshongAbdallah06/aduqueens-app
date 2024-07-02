import React, { useState } from "react";
import Axios from "axios";

const useLogin = () => {
	const [error, setError] = useState(null);

	const login = async (email, password) => {
		const body = { email, password };
		console.log("Body:", body);

		try {
			const res = await Axios.post("http://localhost:3001/api/user/login", body);
			const data = await res.data;

			console.log("Login Successful", data);
			window.location.href = "/";
		} catch (err) {
			console.log("Error: ", err.response.data.password);
			console.log("Error: ", err.response.data);
			setError({
				emailError: err.response.data.email,
				passwordError: err.response.data.password,
			});
		}
	};

	return { login, error };
};

export default useLogin;
