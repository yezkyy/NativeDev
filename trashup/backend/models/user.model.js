import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		nama: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
			trim: true,
			minLength: 6,
		},
		password: {
			type: String,
			required: true,
			minLength: 4,
		},
		noTelpon: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			trim: true,
			lowercase: true,
		},
		alamat: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			enum: ["admin", "driver", "user"],
			default: "user",
		},
	},
	{
		timestamps: true,
	},
);

const User = mongoose.model("User", userSchema);

export default User;
