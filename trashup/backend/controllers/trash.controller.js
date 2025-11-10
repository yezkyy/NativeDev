import Trash from "../models/trash.model.js";
import mongoose from "mongoose";

export const getTrashes = async (req, res) => {
	try {
		const trashes = await Trash.find({});
		res.status(200).json({
			success: true,
			message: "Data sampah berhasil diload...",
			data: trashes,
		});
	} catch (error) {
		console.log(`Error fetch data sampah: ${error}`);
		res.status(500).json({ success: false, message: "Server Error..." });
	}
};

export const createTrash = async (req, res) => {
	const trash = req.body;

	if (!trash.nama || !trash.jenis || !trash.harga) {
		return res
			.status(400)
			.json({ success: false, message: "Pastikan mengisi semua field..." });
	}

	const newTrash = new Trash(trash);

	try {
		await newTrash.save();
		res.status(201).json({
			success: true,
			message: "Berhasil menambahkan jenis sampah baru",
			data: newTrash,
		});
	} catch (error) {
		console.log(`Error menambahkan data sampah: ${error}`);
		res.status(500).json({ success: false, message: "Server Error..." });
	}
};

export const updateTrash = async (req, res) => {
	const { id } = req.params;
	const trash = req.body;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({
			success: false,
			message: "Data sampah tidak valid...",
		});
	}

	try {
		const updatedTrash = await Trash.findByIdAndUpdate(id, trash, {
			new: true,
		});
		res.status(200).json({
			success: true,
			message: "Data sampah diperbaharui...",
			data: updatedTrash,
		});
	} catch (error) {
		console.log(`Error memperbaharui data sampah: ${error}`);
		res.status(500).json({ success: false, message: "Server Error..." });
	}
};

export const deleteTrash = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({
			success: false,
			message: "Data sampah tidak valid...",
		});
	}

	try {
		await Trash.findByIdAndDelete(id);
		res.status(200).json({ success: true, message: "Data sampah dihapus..." });
	} catch (error) {
		console.log(`Error memperbaharui data sampah: ${error}`);
		res.status(500).json({ success: false, message: "Server Error..." });
	}
};
