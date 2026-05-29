const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator");

const {
  validateSignupData
} = require("../utils/signupValidation");

const signup = async (req, res) => {

  try {

    validateSignupData(req);

    const {
      firstName,
      lastName,
      emailId,
      password
    } = req.body;

    const existingUser =
      await User.findOne({
        where: {
          emailId
        }
      });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists"
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user =
      await User.create({
        firstName,
        lastName,
        emailId,
        password: hashedPassword
      });

    return res.status(201).json({
      message: "User created successfully",
      userId: user.id
    });

  } catch (err) {

    return res.status(400).json({
      message: err.message
    });

  }

};

const login = async (req, res) => {

  try {

    const {
      emailId,
      password
    } = req.body;

    if (!validator.isEmail(emailId)) {
      throw new Error(
        "Invalid email format"
      );
    }

    const user =
      await User.findOne({
        where: {
          emailId
        }
      });

    if (!user) {
      throw new Error(
        "Invalid credentials"
      );
    }

    const isValidPassword =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isValidPassword) {
      throw new Error(
        "Invalid credentials"
      );
    }

    const token = jwt.sign(
      {
        id: user.id
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d"
      }
    );

    return res.status(200).json({
      message: "Login success",
      token
    });

  } catch (err) {

    return res.status(400).json({
      message: err.message
    });

  }

};

const getProfile = async (req, res) => {

   try {

      return res.status(200).json({

         message: "Profile fetched",

         user: req.user

      });

   } catch (err) {

      return res.status(500).json({

         message: err.message

      });

   }

};

module.exports = {
  signup,
  login,
  getProfile
};