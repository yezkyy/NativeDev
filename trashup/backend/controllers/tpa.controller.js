import Tpa from "../models/tpa.model.js";
import mongoose from "mongoose";

export const getTpas = async (req, res) => {
	try {
		const tpas = await Tpa.find({});
		res.status(200).json({
			success: true,
			message: "Data TPA berhasil diload...",
			data: tpas,
		});
	} catch (error) {
		console.log(`Error fetch data TPA: ${error}`);
		res.status(500).json({ success: false, message: "Server Error..." });
	}
};

export const createTpa = async (req, res) => {
	const tpa = req.body;

	if (!tpa.nama || !tpa.alamat || !tpa.kelurahan || tpa.kecamatan) {
		return res
			.status(400)
			.json({ success: false, message: "Pastikan mengisi semua field..." });
	}

	const newTpa = new Tpa(tpa);

	try {
		await newTpa.save();
		res.status(201).json({
			success: true,
			message: "Berhasil menambahkan TPA baru",
			data: newTpa,
		});
	} catch (error) {
		console.log(`Error menambahkan data TPA: ${error}`);
		res.status(500).json({ success: false, message: "Server Error..." });
	}
};

export const updateTpa = async (req, res) => {
	const { id } = req.params;
	const tpa = req.body;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({
			success: false,
			message: "Data TPA tidak valid...",
		});
	}

	try {
		const updatedTpa = await Tpa.findByIdAndUpdate(id, tpa, {
			new: true,
		});
		res.status(200).json({
			success: true,
			message: "Data TPA diperbaharui...",
			data: updatedTpa,
		});
	} catch (error) {
		console.log(`Error memperbaharui data TPA: ${error}`);
		res.status(500).json({ success: false, message: "Server Error..." });
	}
};

export const deleteTpa = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({
			success: false,
			message: "Data TPA tidak valid...",
		});
	}

	try {
		await Tpa.findByIdAndDelete(id);
		res.status(200).json({ success: true, message: "Data TPA dihapus..." });
	} catch (error) {
		console.log(`Error memperbaharui data TPA: ${error}`);
		res.status(500).json({ success: false, message: "Server Error..." });
	}
};
