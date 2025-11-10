import express from "express";
import {
	createTpa,
	deleteTpa,
	updateTpa,
	getTpas,
} from "../controllers/tpa.controller.js";

const router = express.Router();

router.get("/", getTpas);
router.post("/", createTpa);
router.put("/:id", updateTpa);
router.delete("/:id", deleteTpa);

export default router;
