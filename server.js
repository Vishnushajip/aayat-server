import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { onRequest } from "firebase-functions/v2/https";
import paymentRoutes from "./routes/paymentRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/payments", paymentRoutes);
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
export const api = onRequest(app);
