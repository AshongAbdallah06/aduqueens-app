const User = require("../models/userModel");

// Error handling
const handleErrors = (err) => {
	const errors = { email: "", password: "" };

	console.log("ErrorMessage: ", err.message);
	console.log("ErrorCode: ", err.code);

	if (err.message.includes("user validation failed")) {
		Object.values(err.errors).forEach(({ properties }) => {
			errors[properties.path] = properties.message;
		});
	}

	if (err.message.includes("email not found")) {
		errors.email = "Email not recognized";
	}

	if (err.message.includes("password not found")) {
		errors.password = "Incorrect password";
	}

	return errors;
};

const signup = async (req, res) => {
	try {
		const user = await User.create(req.body);
		res.status(200).json({ msg: "Successfully Created" });
	} catch (error) {
		const errors = handleErrors(error);
		console.log(errors);
		res.status(400).json(error);
	}
};

const login = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.login(email, password);
		console.log(user);
		res.status(200).json(user);
	} catch (error) {
		const errors = handleErrors(error);
		console.log(errors);
		res.status(400).json(errors);
	}
};

module.exports = { signup, login };
