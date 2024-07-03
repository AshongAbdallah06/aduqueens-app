import React, { useState } from "react";
import Axios from "axios";

const useSignup = () => {
	const [error, setError] = useState(null);

	const signup = async (email, password) => {
		const body = { email, password };

		try {
			const res = await Axios.post("http://localhost:3001/api/user/signup", body, {
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

	return { signup, error };
};

export default useSignup;
