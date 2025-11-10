import express from "express";
import {
	register,
	login,
	getAllUsers,
	updateUser,
	deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router();

// Auth Routes
router.post("/register", register);
router.post("/login", login);

// CRUD Routes
router.get("/", getAllUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
