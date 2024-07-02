const { Router } = require("express");
const { signup, login } = require("../controllers/appControllers");

const router = Router();

router.get("/", async (req, res) => {
	// const
	res.json({ msg: "Hello" });
	console.log("Body");
});

router.post("/signup", signup);

router.post("/login", login);

module.exports = router;
