require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const port = process.env.PORT || 5000;

// Add the CORS configuration here, after app initialization and before routes
app.use(
  cors({
    origin: "https://allcart-frontend.onrender.com",
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);

// Rest of your middleware
app.use(express.json());

// API Routes
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

// Default Route
app.get("/", (req, res) => res.send("🚀 Server is running..."));

app.listen(port, () => console.log(`🔥 Server running on port ${port}`));