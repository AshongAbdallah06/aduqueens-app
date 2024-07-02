const { Schema, model } = require("mongoose");
const { isEmail, isStrongPassword } = require("validator");
const { hash, compare, genSalt } = require("bcrypt");

const userSchema = new Schema({
	email: {
		type: String,
		required: [true, "Your email address is required"],
		validate: [isEmail, "Please enter a valid email address"],
		lowercase: true,
		unique: true,
	},
	password: {
		type: String,
		required: [true, "Your password is required"],
		// validate: [isStrongPassword, "Please enter a strong password"],
	},
});

userSchema.pre("save", async function (next) {
	const salt = await genSalt(10);
	this.password = await hash(this.password, salt);

	next();
});

userSchema.statics.login = async function (email, password) {
	const user = await this.findOne({ email });

	if (user) {
		const passwordCheck = await compare(password, user.password);

		if (!passwordCheck) {
			throw Error("password not found");
		}

		return user;
	}
	throw Error("email not found");
};

const User = model("user", userSchema);
module.exports = User;
