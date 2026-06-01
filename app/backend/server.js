const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const mailRoutes = require("./routes/mailRoutes");

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || "*",
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.get("/", (req, res) => {
  res.json({
    app: "inlook-webmail-Komotehinse-version",
    message: "Inlook Webmail Backend API is running",
    status: "healthy"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "UP",
    service: "inlook-webmail-Komotehinse-version-backend"
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/mail", mailRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`inlook-webmail-Komotehinse-version backend running on port ${PORT}`);
});