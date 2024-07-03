import React, { useState } from "react";
import Axios from "axios";

const useLogin = () => {
	const [error, setError] = useState(null);

	const login = async (email, password) => {
		const body = { email, password };

		try {
			const res = await Axios.post("http://localhost:3001/api/user/login", body, {
				withCredentials: true,
			});
			const data = await res.data;

			localStorage.setItem("user", JSON.stringify(data));

			window.location.href = "/";
		} catch (err) {
			setError({
				emailError: err.response.data.email,
				passwordError: err.response.data.password,
			});
		}
	};

	return { login, error };
};

export default useLogin;
