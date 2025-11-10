import express from "express";
import {
	createTrash,
	deleteTrash,
	updateTrash,
	getTrashes,
} from "../controllers/trash.controller.js";

const router = express.Router();

router.get("/", getTrashes);
router.post("/", createTrash);
router.put("/:id", updateTrash);
router.delete("/:id", deleteTrash);

export default router;
