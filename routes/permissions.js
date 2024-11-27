const express = require("express");
const router = express.Router();
const Permission = require("../models/Permissions");

// Get all permissions
router.get("/", async (req, res) => {
  try {
    const permissions = await Permission.find();
    res.json(permissions);
  } catch (err) {
    res.status(500).json({ error: "Error fetching permissions" });
  }
});

// Create a new permission
router.post("/", async (req, res) => {
  try {
    const { name, description } = req.body;
    console.log(name+"  : "+description)
    const newPermission = new Permission({ name, description });
    await newPermission.save();
    res.status(201).json(newPermission);
  } catch (err) {
    res.status(400).json({ error: "Error creating permission" });
  }
});

// Update permission
router.put('/:id', async (req, res) => {
  try {
    const { name, description } = req.body;
    const updatedPermission = await Permission.findByIdAndUpdate(
      req.params.id,
      { name, description },
      { new: true }
    );
    res.json(updatedPermission);
  } catch (err) {
    res.status(400).json({ error: 'Error updating permission' });
  }
});

// Delete permission
router.delete('/:id', async (req, res) => {
  try {
    await Permission.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Permission deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting permission' });
  }
});

// Fetch a single permission by ID
router.get('/:id', async (req, res) => {
  try {
    const permission = await Permission.findById(req.params.id); // Fetch the permission by ID
    if (!permission) {
      return res.status(404).json({ error: 'Permission not found' });
    }
    res.json(permission); // Send the permission details as the response
  } catch (err) {
    res.status(500).json({ error: 'Error fetching permission' });
  }
});


module.exports = router;
