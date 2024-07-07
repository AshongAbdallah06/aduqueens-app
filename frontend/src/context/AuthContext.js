import { createContext, useState } from "react";
import Axios from "axios";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
	const [isAccessDenied, setIsAccessDenied] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const user = JSON.parse(localStorage.getItem("user")) || null;

	const checkAuth = async () => {
		if (!user) {
			setIsAccessDenied(true);
			setIsLoading(false);
			return;
		}

		try {
			await Axios.get("http://localhost:3001/api/user/auth", {
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			});

			setIsAccessDenied(false);
		} catch (error) {
			setIsAccessDenied(true);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<AuthContext.Provider value={{ checkAuth, isAccessDenied, isLoading }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
