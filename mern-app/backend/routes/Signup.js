const express = require("express");
const router = express.Router();
const userInfo = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/createuser",

  body("email", "invalid email").isEmail(),
  body("password", "password too short").isLength({ min: 5 }),
  body("phoneno", "invalid length of phoneno").isLength({ min: 10, max: 10 }),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await userInfo.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        phoneno: req.body.phoneno,
        location: req.body.location,
      });
      res.json({ sucess: true });
    } catch (err) {
      console.log(err);
      res.json({ sucess: false });
    }
    return res;
  }
);

module.exports = router;
