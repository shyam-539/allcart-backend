require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const port = process.env.PORT || 5000;

// ✅ CORS Middleware (Secure, allows frontend requests)
app.use(
  cors({
    origin: process.env.FRONTEND_URL, // ✅ Set this in .env
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);

// ✅ Middleware
app.use(express.json());

// ✅ API Routes
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

// ✅ Default Route
app.get("/", (req, res) => res.send("🚀 Server is running..."));

app.listen(port, () => console.log(`🔥 Server running on port ${port}`));
