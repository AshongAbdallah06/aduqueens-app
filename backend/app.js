require("dotenv").config();
const sgMail = require("@sendgrid/mail");
const express = require("express");
const { default: mongoose } = require("mongoose");

// const msg = {
// 	to: "ashongabdalla15@gmail.com",
// 	from: "ashongabdalla15@gmail.com",
// 	subject: "Sending with Twilio SendGrid is Fun",
// 	text: "and easy to do anywhere, even with Node.js",
// 	html: "<strong>and easy to do anywhere, even with Node.js</strong>",
// };
// sgMail.send(msg);

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const app = express();

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
