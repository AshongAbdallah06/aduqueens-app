import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useCheckAuth = () => {
	const context = useContext(AuthContext);

	if (!context) {
		throw Error("useCheckAuth must be used inside a AuthContextProvider");
	}

	return context;
};

export default useCheckAuth;
