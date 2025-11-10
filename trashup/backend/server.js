import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";

import trashRoutes from "./routes/trash.route.js";
import tpaRoutes from "./routes/tpa.route.js";
import userRoutes from "./routes/user.route.js";

dotenv.config();
const app = express();

// Hubungkan ke Database
connectDB();

// Middleware express
app.use(express.json());

// Route API
app.use("/api/trashes", trashRoutes);
app.use("/api/tpas", tpaRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log("Server started at http://localhost:" + PORT);
});
