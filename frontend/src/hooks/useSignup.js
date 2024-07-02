import React, { useState } from "react";
import Axios from "axios";

const useSignup = () => {
	const [error, setError] = useState(null);

	const signup = async (email, password) => {
		const body = { email, password };
		console.log(body);

		try {
			const res = await Axios.post("http://localhost:3001/api/user/signup", body);
			const data = await res.data;

			console.log("Sucefully Posted", data);
			window.location.href = "/";
		} catch (err) {
			console.log("Error: ", err.response.data.errors);
			setError({
				emailError: err.response.data.errors.email.message,
				passwordError: err.response.data.errors.password.message,
			});
		}
	};

	return { signup, error };
};

export default useSignup;
