const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// App setup
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
const userRoutes = require("./routes/users");
const roleRoutes = require("./routes/roles");
const permissionRoutes = require("./routes/permissions");

// console.log("User Routes:", userRoutes);
// console.log("Role Routes:", roleRoutes);
// console.log("Permission Routes:", permissionRoutes);


app.use("/api/users", userRoutes);
app.use("/api/roles", roleRoutes);  
app.use("/api/permissions", permissionRoutes);


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
