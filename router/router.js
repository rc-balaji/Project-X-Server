const express = require("express");
const model = require("../model/model");

const router = express.Router();

router.put("/updateProfile", async (req, res) => {
  const { username, dob, age } = req.body;

  try {
    // Find the user by their username
    const user = await model.findOne({ username: username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update the user's profile data
    user.dob = dob;
    user.age = age;

    // Save the updated user data
    await user.save();

    return res.status(200).json({ message: "Profile updated successfully" });
  } catch (error) {
    console.error("Failed to update profile:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// Endpoint to register a user
router.post("/register", async (req, res) => {
  const { uname, mail, password, dob, age } = req.body;
  try {
    const existingUser = await model.findOne({ email: mail });

    if (existingUser) {
      res.json("Already registered");
    } else {
      const newUser = new model({
        username: uname,
        email: mail,
        password: password,
        dob: dob || null, // Set to null if not provided
        age: age || null, // Set to null if not provided
      });

      await newUser.save();
      res.json("Registered successfully");
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/login", async (req, res) => {
  // console.log([username, password]);
  try {
    const data = await model.find();
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
