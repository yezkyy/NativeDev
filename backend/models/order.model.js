import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		items: [
			{
				name: String,
				quantity: Number,
				price: Number,
				trashId: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Trash",
				},
			},
		],
		status: {
			type: String,
			enum: ["pending", "diproses", "dikirim", "selesai", "dibatalkan"],
			default: "pending",
		},
		destination: {
			address: String,
			lat: Number,
			lng: Number,
		},
		currentLocation: {
			lat: Number,
			lng: Number,
			updatedAt: Date,
		},
		trackingHistory: [
			{
				lat: Number,
				lng: Number,
				timestamp: {
					type: Date,
					default: Date.now,
				},
			},
		],
	},
	{
		timestamps: true,
	},
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
