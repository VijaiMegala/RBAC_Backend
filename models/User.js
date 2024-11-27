const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Add bcrypt for hashing passwords
  roles: { type: mongoose.Schema.Types.ObjectId, ref: "Roles" },
  isActive: { type: Boolean, default: true },
});

module.exports = mongoose.model("Users", userSchema);
