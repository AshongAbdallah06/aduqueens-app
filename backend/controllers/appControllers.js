const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// Error handling
const handleErrors = (err) => {
	const errors = { email: "", password: "" };

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

	if (err.code === 11000) {
		errors.email = "Email already registered";
	}

	return errors;
};

const createToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET_KEY, { expiresIn: maxAge });
};

const maxAge = 3 * 60 * 60 * 24;
const signup = async (req, res) => {
	const { email } = req.body;
	try {
		const user = await User.create(req.body);

		const token = await createToken(user._id);
		res.cookie("jwt", token, { maxAge: maxAge * 1000 });

		res.status(200).json({ email, token });
	} catch (error) {
		const errors = handleErrors(error);
		res.status(400).json(errors);
	}
};

const login = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.login(email, password);

		const token = await createToken(user._id);
		res.cookie("jwt", token, { maxAge: maxAge * 1000 });

		res.status(200).json({ email, token });
	} catch (error) {
		const errors = handleErrors(error);
		res.status(400).json(errors);
	}
};

const logout = (req, res) => {
	try {
		res.cookie("jwt", "", { maxAge: 1 });
		res.status(200).json({ msg: "Logged out" });
	} catch (error) {
		console.log(error);
	}
};

module.exports = { signup, login, logout };
