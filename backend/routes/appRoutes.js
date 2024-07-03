const { Router } = require("express");
const { signup, login } = require("../controllers/appControllers");
const { requireAuth } = require("../middleware/authMiddleware");

const router = Router();

router.use(requireAuth);
router.get("/", async (req, res) => {
	res.json({ msg: "Hello" });
});

router.post("/signup", signup);

router.post("/login", login);

module.exports = router;
