const express = require("express");
const router = express.Router();
const Role = require("../models/Role");
const Permission = require("../models/Permissions");


// Get all roles
router.get("/", async (req, res) => {
  try {    
    const roles = await Role.find().populate("permissions")
    res.json(roles);
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: "Error fetching roles" });
  }
});

//get based on id
router.get("/:id", async (req, res) => {
  try {
    const roleId = req.params.id; // Get the roleId from the URL parameters
    const role = await Role.findById(roleId).populate("permissions");

    if (!role) {
      return res.status(404).json({ error: "Role not found" }); // Return error if role does not exist
    }

    res.json(role); // Return the role details
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error fetching role details" }); // Return error in case of any issues
  }
});


// Create a new role
router.post("/", async (req, res) => {
  try {
    const { name, permissions } = req.body;

    // Find all permission IDs based on provided names
    const permissionIDs = await Permission.find({ name: { $in: permissions } });

    if (permissionIDs.length !== permissions.length) {
      return res.status(400).json({ error: "One or more permissions not found" });
    }

    const newRole = new Role({ name, permissions: permissionIDs });
    await newRole.save();
    res.status(201).json(newRole);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Error creating role" });
  }
});

// Update a role
router.put("/:id", async (req, res) => {
  try {
    const { name, permissions } = req.body;
    console.log(permissions)      
    // Find all permission IDs based on the array of permission names
    const permissionIDs = await Permission.find({ name: { $in: permissions } });
    console.log(permissionIDs)
    if (permissionIDs.length !== permissions.length) {
      return res.status(400).json({ error: "One or more permissions not found" });
    }

    // Update the role with the new name and permissions
    const updatedRole = await Role.findByIdAndUpdate(
      req.params.id,
      { name, permissions: permissionIDs.map(permission => permission._id) },
      { new: true }
    );

    if (!updatedRole) {
      return res.status(404).json({ error: "Role not found" });
    }

    res.json(updatedRole);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Error updating role" });
  }
});

// Delete a role
router.delete("/:id", async (req, res) => {
  try {
    await Role.findByIdAndDelete(req.params.id);
    res.json({ message: "Role deleted" });
  } catch (err) {
    res.status(400).json({ error: "Error deleting role" });
  }
});

module.exports = router;
