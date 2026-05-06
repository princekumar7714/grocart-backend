import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/productroute.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
import orderRoutes from "./routes/orderRoutes.js";
dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;
app.use(express.json());

console.log("JWT_SECRET:", process.env.JWT_SECRET); // ← yeh add karo
// databse connection 
connectDB();
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/", router);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
});