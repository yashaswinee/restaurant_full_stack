const express = require("express");
const router = express.Router();
const userInfo = require('../models/User')
const { body, validationResult } = require("express-validator");

router.post(
  "/login",

  body("email", "invalid email").isEmail(),
  async (req, res) => {

    const email = req.body.email;
    console.log(req.body);
    try {
      let userData = await userInfo.findOne({email});
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Invalid email or email doesn't exist" });
      }

      if (userData.password !== req.body.password) {
        return res
          .status(400)
          .json({ errors: "password and email doesn't match" });
      }

      return res.status(200).json({ success: true });
    } catch (err) {
      console.log("error message:: ",err);
      res.json({ sucess: false });
    }
    return res;
  }
);

module.exports = router;
