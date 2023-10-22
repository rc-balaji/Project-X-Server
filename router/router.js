const express = require("express");
const model = require("../model/model");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { uname, mail, password } = req.body;
  try {
    const existingUser = await model.findOne({ email: mail });

    if (existingUser) {
      res.json("Already registered");
    } else {
      const newUser = new model({
        username: uname,
        email: mail,
        password: password,
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
