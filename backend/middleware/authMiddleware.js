const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
	const token = req.cookies.jwt;

	try {
		if (token) {
			jwt.verify(token, process.env.JWT_SECRET_KEY, (err, dToken) => {
				if (err) {
					res.status(400).json(err);
				}

				next();
			});
		}

		next();
	} catch (error) {
		res.status(400).json(error);
	}
};

module.exports = { requireAuth };
