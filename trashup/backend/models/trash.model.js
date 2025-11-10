import mongoose from "mongoose";

const trashSchema = new mongoose.Schema(
	{
		nama: {
			type: String,
			required: true,
			unique: true,
		},
		jenis: {
			type: String,
			required: true,
			unique: true,
		},
		harga: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

const Trash = mongoose.model("Trash", trashSchema);

export default Trash;
