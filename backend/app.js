require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const appRoutes = require("./routes/appRoutes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongoose
	.connect(MONGO_URI)
	.then(() => {
		app.listen(PORT, () => {
			console.log("Listening ON PORT " + PORT);
		});
	})
	.catch((err) => {
		console.log(err);
	});

// Middleware
app.use(
	cors({
		origin: "http://localhost:3000",
		methods: ["GET", "POST", "PATCH", "DELETE"],
		credentials: true,
	})
);

app.use((req, res, next) => {
	next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/user", appRoutes);
