import mongoose from "mongoose";

const tpaSchema = new mongoose.Schema(
	{
		nama: {
			type: String,
			required: true,
			unique: true,
		},
		alamat: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			minLength: 6,
		},
		kelurahan: {
			type: String,
			required: true,
		},
		kecamatan: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

const Tpa = mongoose.model("Tpa", tpaSchema);

export default Tpa;
