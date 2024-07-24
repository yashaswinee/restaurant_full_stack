const express = require("express");
const router = express.Router();
const userInfo = require('../models/User')
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken") // for sessions
const bcrypt = require("bcryptjs")

const jwtSecret = "ThisIsRandomStringOfTwentyOneBit"

router.post(
  "/login",

  body("email", "invalid email").isEmail(),
  async (req, res) => {

    const email = req.body.email;
    try {
      let userData = await userInfo.findOne({email});
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Invalid email or email doesn't exist" });
      }

      let encryptedPass = await bcrypt.compare(req.body.password, userData.password);
      if (!encryptedPass) {
        return res
        .status(400)
        .json({ errors: "password and email doesn't match" });
      }

      const data = {
        user: {
          id: userData.id
        }
      }
      const authToken = jwt.sign(data, jwtSecret)

      return res.status(200).json({ success: true, authToken:authToken });
    } catch (err) {
      console.log("error message:: ",err);
      res.json({ success: false });
    }
    return res;
  }
);

module.exports = router;
