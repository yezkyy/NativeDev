import mongoose from "mongoose";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

// Register User
export const register = async (req, res) => {
	const user = req.body;

	if (
		!user.nama ||
		!user.username ||
		!user.password ||
		!user.noTelpon ||
		!user.email ||
		!user.alamat ||
		!user.role
	) {
		return res.status(400).json({
			success: false,
			message: "Pastikan untuk mengisi semua field...",
		});
	}

	try {
		// Hash password sebelum membuat user

		const hashedPassword = bcrypt.hashSync(user.password, 10);
		user.password = hashedPassword;

		const newUser = new User(user);

		await newUser.save();
		res.status(201).json({
			success: true,
			message: "Berhasil melakukan registrasi...",
			data: newUser,
		});
	} catch (error) {
		if (error.code === 11000) {
			const duplicatedField = Object.keys(error.keyPattern)[0];
			return res.status(400).json({
				success: false,
				message: `Field "${duplicatedField}" sudah digunakan. Gunakan yang lain.`,
			});
		}

		console.log(`Error menambahkan data pengguna: ${error}`);
		res.status(500).json({ success: false, message: "Server Error..." });
	}
};

// Login User
export const login = async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await User.findOne({ username });

		if (!user) {
			return res.status(401).json({ message: "Credential tidak valid..." });
		}

		const isPasswordValid = bcrypt.compareSync(password, user.password);

		if (!isPasswordValid) {
			return res.status(401).json({ message: "Credential tidak valid..." });
		}

		// Return user data (tanpa password)
		const { password: _, ...userData } = user.toObject();
		res.status(200).json(userData);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// CRUD Operations
export const getAllUsers = async (req, res) => {
	try {
		const users = await User.find().select("-password");
		res.status(200).json({
			success: true,
			message: "Data pengguna berhasil diload...",
			data: users,
		});
	} catch (error) {
		console.log(`Error fetch data pengguna: ${error}`);
		res.status(500).json({ success: false, message: "Server Erorr..." });
	}
};

export const updateUser = async (req, res) => {
	try {
		const { id } = req.params;
		const updateData = req.body;

		if (updateData.password) {
			updateData.password = bcrypt.hashSync(updateData.password, 10);
		}

		const updatedUser = await User.findByIdAndUpdate(id, updateData, {
			new: true,
		}).select("-password");
		res.status(200).json(updatedUser);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

export const deleteUser = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({
			success: false,
			message: "Data pengguna tidak valid...",
		});
	}

	try {
		await User.findByIdAndDelete(id);
		res
			.status(200)
			.json({ success: true, message: "Data pengguna dihapus..." });
	} catch (error) {
		console.log(`Error memperbaharui data pengguna: ${error}`);
		res.status(500).json({ success: false, message: "Server Error..." });
	}
};
