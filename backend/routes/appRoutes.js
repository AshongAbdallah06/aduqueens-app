const { Router } = require("express");
const { signup, login, logout } = require("../controllers/appControllers");
const { requireAuth } = require("../middleware/authMiddleware");

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);

// Protect all routes below this middleware
router.use(requireAuth);

router.get("/auth", async (req, res) => {
	res.json({ msg: "Authorized" });
});

module.exports = router;
